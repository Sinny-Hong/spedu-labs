const PORTAL_CONFIG = {
  publishedBase: "https://docs.google.com/spreadsheets/d/e/2PACX-1vRPfdr-4FdSCypU3KXOrp4ujj7zfY74wfY_Ya4-ZkauszV8TbnTqyOZgilPaMT1EDN3e4NkR8rL8-gg/pub?single=true&output=csv&gid=",
  sheets: { task: "1619194793", contact: "878488999", missing: "99671375", other: "1872726724" },
  semesterStartDate: "",
  refreshMs: 30000
};

const sidebar = document.getElementById("sidebar");
const menuToggle = document.getElementById("menuToggle");
const tabs = document.querySelectorAll(".tab");
const pages = document.querySelectorAll(".tab-page");
const moreBtn = document.getElementById("moreBtn");
const moreTools = document.getElementById("moreTools");
const fullscreenBtn = document.getElementById("fullscreenBtn");

menuToggle.addEventListener("click", () => {
  if (window.innerWidth <= 760) sidebar.classList.toggle("mobile-open");
  else sidebar.classList.toggle("collapsed");
});

tabs.forEach(tab => tab.addEventListener("click", () => {
  tabs.forEach(item => item.classList.remove("active"));
  pages.forEach(page => page.classList.remove("active"));
  tab.classList.add("active");
  document.getElementById(tab.dataset.tab).classList.add("active");
}));

moreBtn.addEventListener("click", () => {
  moreTools.classList.toggle("open");
  moreBtn.textContent = moreTools.classList.contains("open") ? "收起更多功能⌃" : "顯示更多功能⌄";
});

fullscreenBtn.addEventListener("click", async () => {
  try {
    if (!document.fullscreenElement) await document.documentElement.requestFullscreen();
    else await document.exitFullscreen();
  } catch (error) { console.warn("無法切換全螢幕：", error); }
});

const pad = n => String(n).padStart(2, "0");
const normalize = value => String(value ?? "").trim().replace(/\s+/g, "");
const truthy = value => ["true","1","yes","y","是","啟用","顯示","v","✓","☑","checked"].includes(normalize(value).toLowerCase());
const falsey = value => ["false","0","no","n","否","未交","×","☐","unchecked"].includes(normalize(value).toLowerCase());

function escapeHtml(value) {
  return String(value ?? "").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;");
}

function updateDateAndWeek(now) {
  const weekdays = ["星期日","星期一","星期二","星期三","星期四","星期五","星期六"];
  document.getElementById("headerDate").textContent = `${now.getMonth()+1} 月 ${now.getDate()} 日　${weekdays[now.getDay()]}`;
  const weekEl = document.getElementById("schoolWeek");
  if (!PORTAL_CONFIG.semesterStartDate) return weekEl.hidden = true;
  const start = new Date(`${PORTAL_CONFIG.semesterStartDate}T00:00:00`);
  const diffDays = Math.floor((new Date(now.getFullYear(),now.getMonth(),now.getDate()) - start) / 86400000);
  const week = Math.floor(diffDays / 7) + 1;
  if (week >= 1) { weekEl.textContent = `第 ${week} 週`; weekEl.hidden = false; }
  else weekEl.hidden = true;
}

function updateClock() {
  const now = new Date(), h = now.getHours(), m = now.getMinutes(), s = now.getSeconds();
  document.getElementById("hourHand").style.transform = `translateX(-50%) rotate(${(h%12)*30+m*.5}deg)`;
  document.getElementById("minuteHand").style.transform = `translateX(-50%) rotate(${m*6+s*.1}deg)`;
  document.getElementById("secondHand").style.transform = `translateX(-50%) rotate(${s*6}deg)`;
  document.getElementById("digitalTime").textContent = `${h<12?"上午":"下午"} ${pad(h%12||12)}:${pad(m)}:${pad(s)}`;
  const weekdays = ["星期日","星期一","星期二","星期三","星期四","星期五","星期六"];
  document.getElementById("dateLine").textContent = `${now.getFullYear()} / ${pad(now.getMonth()+1)} / ${pad(now.getDate())}　${weekdays[now.getDay()]}`;
  updateDateAndWeek(now);
}

function parseCsv(text) {
  const rows=[]; let row=[], cell="", quoted=false;
  for (let i=0;i<text.length;i++) {
    const char=text[i], next=text[i+1];
    if (char==='"' && quoted && next==='"') { cell+='"'; i++; }
    else if (char==='"') quoted=!quoted;
    else if (char==="," && !quoted) { row.push(cell); cell=""; }
    else if ((char==="\n"||char==="\r") && !quoted) {
      if(char==="\r"&&next==="\n")i++;
      row.push(cell); if(row.some(v=>String(v).trim()))rows.push(row); row=[]; cell="";
    } else cell+=char;
  }
  row.push(cell); if(row.some(v=>String(v).trim()))rows.push(row); return rows;
}

async function fetchSheet(gid) {
  const response = await fetch(`${PORTAL_CONFIG.publishedBase}${gid}&_=${Date.now()}`, {cache:"no-store"});
  if (!response.ok) throw new Error(`gid ${gid}: HTTP ${response.status}`);
  return parseCsv(await response.text());
}

function setConnection(state, text) {
  const dot=document.getElementById("onlineDot"), label=document.getElementById("connectionText");
  dot.classList.remove("offline","loading");
  if(state)dot.classList.add(state);
  label.textContent=text;
}

const syncState = { task: "loading", contact: "loading", missing: "loading", other: "loading" };

function setTabSync(key, state) {
  syncState[key] = state;
  const dot = document.querySelector(`[data-sync="${key}"]`);
  if (dot) {
    dot.classList.remove("loading", "error");
    if (state !== "success") dot.classList.add(state);
    dot.title = state === "success" ? "資料已同步" : state === "loading" ? "資料更新中" : "同步失敗，保留上次資料";
  }
  const values = Object.values(syncState);
  if (values.every(value => value === "success")) setConnection("", "資料已同步");
  else if (values.some(value => value === "loading")) setConnection("loading", "部分資料更新中");
  else setConnection("offline", "部分資料未同步");
}

function renderTasks(rows) {
  const headers=(rows[0]||[]).map(normalize);
  const col=name=>headers.indexOf(normalize(name));
  const enabled=col("啟用"), pinned=col("置頂"), title=col("主標題"), subtitle=col("補充說明"), reminder=col("提醒文字"), url=col("連結網址");
  if (title < 0 || enabled < 0) throw new Error("今天任務欄位不完整");
  const tasks=rows.slice(1).map((row,order)=>({row,order,pinned:truthy(row[pinned])})).filter(item=>truthy(item.row[enabled])&&normalize(item.row[title]));
  tasks.sort((a,b)=>Number(b.pinned)-Number(a.pinned)||a.order-b.order);
  const list=document.getElementById("taskList");
  if (!tasks.length) {
    list.innerHTML='<div class="simple-page"><h2>今日尚未設定任務</h2><p>請在公告後台勾選要顯示的內容。</p></div>';
    return;
  }
  list.innerHTML=tasks.map((item,index)=>{
    const row=item.row, sub=normalize(row[subtitle]), note=normalize(row[reminder]), link=String(row[url]||"").trim();
    return `<article class="task-item${item.pinned?' pinned':''}"><div class="task-number"><span>${item.pinned?'📌':''}</span>${index+1}.</div><div><h2>${escapeHtml(row[title])}</h2>${sub?`<p>${escapeHtml(row[subtitle])}</p>`:''}${note?`<p class="task-reminder">提醒：${escapeHtml(row[reminder])}</p>`:''}${link?`<a class="task-link" href="${escapeHtml(link)}" target="_blank" rel="noopener">開啟連結</a>`:''}</div></article>`;
  }).join("");
}

function renderContact(rows) {
  const content=[], homework=[], messages=[], words=[];
  rows.slice(1).forEach(row=>{
    if(truthy(row[0])&&normalize(row[1]))content.push(row[1]);
    if(truthy(row[2])&&normalize(row[3]))homework.push(row[3]);
    if(truthy(row[4])&&normalize(row[5]))messages.push(row[5]);
    if(normalize(row[6]))words.push({word:String(row[6]).trim(),translation:String(row[7]||"").trim()});
  });
  const renderLines=items=>items.length?items.map(item=>`<p>✓ ${escapeHtml(item)}</p>`).join(""):"<p>今天沒有勾選內容。</p>";
  document.getElementById("classContent").innerHTML=renderLines(content);
  document.getElementById("homeworkContent").innerHTML=renderLines(homework);
  document.getElementById("teacherMessage").innerHTML=renderLines(messages);
  document.getElementById("wordList").innerHTML=words.map(item=>`<li><span class="word">${escapeHtml(item.word)}</span><span>${escapeHtml(item.translation)}</span></li>`).join("");
}

function renderMissing(rows) {
  const groups=rows[0]||[], names=rows[1]||[], students=[];
  for(let col=1;col<Math.max(groups.length,names.length);col++){
    const group=String(groups[col]||"").trim(), name=String(names[col]||"").trim();
    if(!group||!name)continue;
    const missing=[];
    for(let row=2;row<rows.length;row++){
      const assignment=String(rows[row][0]||"").trim(), value=rows[row][col];
      if(assignment&&falsey(value))missing.push(assignment);
    }
    if(missing.length)students.push({grade:group.charAt(0),group,name,missing});
  }
  const gradeNames={"一":"七年級","二":"八年級","三":"九年級"};
  document.getElementById("missingCount").textContent=`${students.length} 人待補交`;
  document.querySelectorAll(".grade-column").forEach(column=>{
    const grade=column.dataset.grade, gradeStudents=students.filter(item=>item.grade===grade), list=column.querySelector(".grade-list");
    column.querySelector("h3").textContent=gradeNames[grade];
    if(!gradeStudents.length){list.innerHTML="目前沒有缺交資料";return;}
    const groupOrder=[...new Set(gradeStudents.map(item=>item.group))];
    list.innerHTML=groupOrder.map(group=>`<div class="group-block"><div class="group-label">${escapeHtml(group)}</div>${gradeStudents.filter(item=>item.group===group).map(item=>`<article class="student-missing"><h4>${escapeHtml(item.name)}</h4><ul>${item.missing.map(work=>`<li>${escapeHtml(work)}</li>`).join("")}</ul></article>`).join("")}</div>`).join("");
  });
}

function renderOther(rows) {
  const items=rows.slice(1).filter(row=>truthy(row[0])&&normalize(row[1]));
  const box=document.getElementById("otherContent");
  box.innerHTML=`<h2>其他資訊</h2><div class="other-list">${items.length?items.map((row,index)=>`<article class="other-item"><div class="other-number">${index+1}.</div><div><h3>${escapeHtml(row[1])}</h3><p>${escapeHtml(row[2]||"")}</p>${row[5]?`<a class="task-link" href="${escapeHtml(row[5])}" target="_blank" rel="noopener">開啟連結</a>`:""}</div></article>`).join(""):"<p>目前沒有啟用的其他資訊。</p>"}</div>`;
}

async function syncOneSheet(key, renderer) {
  setTabSync(key, "loading");
  try {
    const rows = await fetchSheet(PORTAL_CONFIG.sheets[key]);
    renderer(rows);
    setTabSync(key, "success");
  } catch(error) {
    console.warn(`${key} 分頁同步失敗：`, error);
    setTabSync(key, "error");
  }
}

function loadAllSheets() {
  syncOneSheet("task", renderTasks);
  syncOneSheet("contact", renderContact);
  syncOneSheet("missing", renderMissing);
  syncOneSheet("other", renderOther);
}

updateClock();
setInterval(updateClock,1000);
loadAllSheets();
setInterval(loadAllSheets,PORTAL_CONFIG.refreshMs);
