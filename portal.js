const PORTAL_CONFIG = {
  publishedBase: "https://docs.google.com/spreadsheets/d/e/2PACX-1vRPfdr-4FdSCypU3KXOrp4ujj7zfY74wfY_Ya4-ZkauszV8TbnTqyOZgilPaMT1EDN3e4NkR8rL8-gg/pub?single=true&output=csv&gid=",
  sheets: { task: "1619194793", contact: "878488999", missing: "99671375", vocab: "737293884" },
  refreshMs: 30000
};

const sidebar = document.getElementById("sidebar");
const menuToggle = document.getElementById("menuToggle");
const tabs = document.querySelectorAll(".tab");
const pages = document.querySelectorAll(".tab-page");
const sidebarOverlay = document.getElementById("sidebarOverlay");
const qrModal = document.getElementById("qrModal");
const qrImage = document.getElementById("qrImage");
const qrDirectLink = document.getElementById("qrDirectLink");
const qrClose = document.getElementById("qrClose");
const playAllWords = document.getElementById("playAllWords");
const prevWordWeek = document.getElementById("prevWordWeek");
const nextWordWeek = document.getElementById("nextWordWeek");
const imageModal = document.getElementById("imageModal");
const imageClose = document.getElementById("imageClose");
const taskImage = document.getElementById("taskImage");
const imageError = document.getElementById("imageError");
const imageDirectLink = document.getElementById("imageDirectLink");
const classroomLink = document.getElementById("classroomLink");
const passwordModal = document.getElementById("passwordModal");
const passwordForm = document.getElementById("passwordForm");
const classroomPassword = document.getElementById("classroomPassword");
const passwordError = document.getElementById("passwordError");
const passwordClose = document.getElementById("passwordClose");
const passwordToggle = document.getElementById("passwordToggle");
const fortuneOpen = document.getElementById("fortuneOpen");
const fortuneModal = document.getElementById("fortuneModal");
const fortuneClose = document.getElementById("fortuneClose");
const fortuneFrame = document.getElementById("fortuneFrame");
if (window.lucide) lucide.createIcons();

let playingAllWords = false;
let cancelWordSequence = false;
let weeklyWordGroups = [];
let viewedWordWeekIndex = -1;
const CLASSROOM_ACCESS_KEY = "speduClassroomAccess";
const CLASSROOM_PASSWORD_HASH = "4a081bff0bf93d06ee54ff45353e8b65bce23522ae6a45769f5968ff5956356e";

function openFortuneModal() {
  if (!fortuneFrame.src) fortuneFrame.src = fortuneFrame.dataset.src;
  fortuneModal.hidden = false;
  document.body.classList.add("modal-open");
  fortuneClose.focus();
}

function closeFortuneModal() {
  fortuneModal.hidden = true;
  document.body.classList.remove("modal-open");
  fortuneOpen.focus();
}

fortuneOpen.addEventListener("click", openFortuneModal);
fortuneClose.addEventListener("click", closeFortuneModal);
fortuneModal.addEventListener("click", event => { if (event.target === fortuneModal) closeFortuneModal(); });
document.addEventListener("keydown", event => { if (event.key === "Escape" && !fortuneModal.hidden) closeFortuneModal(); });

async function hashPassword(value) {
  const data = new TextEncoder().encode(value);
  const digest = await crypto.subtle.digest("SHA-256", data);
  return [...new Uint8Array(digest)].map(byte => byte.toString(16).padStart(2, "0")).join("");
}

function openPasswordModal() {
  passwordForm.reset();
  passwordError.hidden = true;
  passwordModal.hidden = false;
  document.body.classList.add("modal-open");
  requestAnimationFrame(() => classroomPassword.focus());
}

function closePasswordModal() {
  passwordModal.hidden = true;
  passwordForm.reset();
  passwordError.hidden = true;
  document.body.classList.remove("modal-open");
  classroomLink.focus();
}

classroomLink.addEventListener("click", event => {
  if (sessionStorage.getItem(CLASSROOM_ACCESS_KEY) === "granted") return;
  event.preventDefault();
  openPasswordModal();
});

passwordForm.addEventListener("submit", async event => {
  event.preventDefault();
  const submittedHash = await hashPassword(classroomPassword.value);
  if (submittedHash !== CLASSROOM_PASSWORD_HASH) {
    passwordError.hidden = false;
    classroomPassword.select();
    return;
  }
  sessionStorage.setItem(CLASSROOM_ACCESS_KEY, "granted");
  window.location.assign(classroomLink.href);
});

passwordToggle.addEventListener("click", () => {
  const showing = classroomPassword.type === "text";
  classroomPassword.type = showing ? "password" : "text";
  passwordToggle.setAttribute("aria-label", showing ? "顯示密碼" : "隱藏密碼");
  passwordToggle.setAttribute("aria-pressed", String(!showing));
  passwordToggle.innerHTML = `<i data-lucide="${showing ? "eye" : "eye-off"}"></i>`;
  if (window.lucide) lucide.createIcons();
  classroomPassword.focus();
});

passwordClose.addEventListener("click", closePasswordModal);
passwordModal.addEventListener("click", event => {
  if (event.target === passwordModal) closePasswordModal();
});
document.addEventListener("keydown", event => {
  if (event.key === "Escape" && !passwordModal.hidden) closePasswordModal();
});

function speakSingleWord(word, button) {
  if (!("speechSynthesis" in window) || !word) return Promise.resolve();
  speechSynthesis.cancel();
  document.querySelectorAll(".word-button.speaking").forEach(item => item.classList.remove("speaking"));
  button?.classList.add("speaking");
  return new Promise(resolve => {
    const utterance = new SpeechSynthesisUtterance(word);
    utterance.lang = "en-US";
    utterance.rate = 0.78;
    utterance.onend = utterance.onerror = () => { button?.classList.remove("speaking"); resolve(); };
    speechSynthesis.speak(utterance);
  });
}

async function playWordSequence() {
  if (playingAllWords) {
    stopWordPlayback();
    return;
  }
  const buttons = [...document.querySelectorAll(".word-button")];
  if (!buttons.length) return;
  playingAllWords = true;
  cancelWordSequence = false;
  playAllWords.classList.add("playing");
  playAllWords.setAttribute("aria-label", "停止播放");
  playAllWords.title = "停止播放";
  for (const button of buttons) {
    if (cancelWordSequence) break;
    await speakSingleWord(button.dataset.word, button);
    if (!cancelWordSequence) await new Promise(resolve => setTimeout(resolve, 650));
  }
  playingAllWords = false;
  playAllWords.classList.remove("playing");
  playAllWords.setAttribute("aria-label", "播放目前單字");
  playAllWords.title = "播放目前單字";
}

function stopWordPlayback() {
  cancelWordSequence = true;
  playingAllWords = false;
  if ("speechSynthesis" in window) speechSynthesis.cancel();
  document.querySelectorAll(".word-button.speaking").forEach(item => item.classList.remove("speaking"));
  playAllWords.classList.remove("playing");
  playAllWords.setAttribute("aria-label", "播放目前單字");
  playAllWords.title = "播放目前單字";
}

playAllWords.addEventListener("click", playWordSequence);

function setMobileSidebar(open) {
  sidebar.classList.toggle("mobile-open", open);
  sidebarOverlay.hidden = !open;
  menuToggle.setAttribute("aria-expanded", String(open));
  menuToggle.setAttribute("aria-label", open ? "關閉選單" : "開啟選單");
}

menuToggle.addEventListener("click", () => {
  if (window.innerWidth <= 760) setMobileSidebar(!sidebar.classList.contains("mobile-open"));
  else sidebar.classList.toggle("collapsed");
});
sidebarOverlay.addEventListener("click", () => setMobileSidebar(false));
sidebar.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  if (window.innerWidth <= 760) setMobileSidebar(false);
}));

tabs.forEach(tab => tab.addEventListener("click", () => {
  tabs.forEach(item => item.classList.remove("active"));
  pages.forEach(page => page.classList.remove("active"));
  tab.classList.add("active");
  document.getElementById(tab.dataset.tab).classList.add("active");
}));

document.addEventListener("click", event => {
  const wordButton = event.target.closest(".word-button");
  if (wordButton) {
    stopWordPlayback();
    speakSingleWord(wordButton.dataset.word, wordButton);
    return;
  }
  const imageButton = event.target.closest(".image-show-btn");
  if (imageButton) {
    openImageModal(imageButton.dataset.imageUrl, imageButton.dataset.imageTitle);
    return;
  }
  const qrButton = event.target.closest(".qr-show-btn");
  if (!qrButton) return;
  const url = qrButton.dataset.qrUrl?.trim();
  if (!url || typeof QRCode === "undefined") return;
  qrImage.innerHTML = "";
  const qrSize = Math.min(420, Math.max(180, Math.floor(window.innerWidth * 0.82) - 32));
  new QRCode(qrImage, { text: url, width: qrSize, height: qrSize, colorDark: "#0b2f5f", colorLight: "#ffffff", correctLevel: QRCode.CorrectLevel.Q });
  qrDirectLink.href = url;
  qrModal.hidden = false;
  document.body.classList.add("modal-open");
  qrClose.focus();
});

function closeQrModal() {
  qrModal.hidden = true;
  qrImage.innerHTML = "";
  document.body.classList.remove("modal-open");
}

qrClose.addEventListener("click", closeQrModal);
qrModal.addEventListener("click", event => { if (event.target === qrModal) closeQrModal(); });
document.addEventListener("keydown", event => { if (event.key === "Escape" && !qrModal.hidden) closeQrModal(); });

function getDisplayImageUrl(value) {
  try {
    const url = new URL(String(value || "").trim());
    if (!/^https?:$/.test(url.protocol)) return "";
    if (url.hostname === "drive.google.com") {
      const fileMatch = url.pathname.match(/\/file\/d\/([^/]+)/);
      const fileId = fileMatch?.[1] || url.searchParams.get("id");
      if (fileId) return `https://drive.google.com/thumbnail?id=${encodeURIComponent(fileId)}&sz=w1600`;
    }
    return url.href;
  } catch(error) {
    return "";
  }
}

function openImageModal(url, title) {
  const originalUrl = String(url || "").trim();
  const displayUrl = getDisplayImageUrl(originalUrl);
  if (!displayUrl) return;
  document.getElementById("imageModalTitle").textContent = title || "任務圖片";
  imageError.hidden = true;
  taskImage.hidden = false;
  taskImage.alt = title ? `${title}的圖片` : "任務圖片";
  taskImage.src = displayUrl;
  imageDirectLink.href = originalUrl;
  imageModal.hidden = false;
  document.body.classList.add("modal-open");
  imageClose.focus();
}

function closeImageModal() {
  imageModal.hidden = true;
  taskImage.removeAttribute("src");
  imageError.hidden = true;
  document.body.classList.remove("modal-open");
}

taskImage.addEventListener("error", () => { taskImage.hidden = true; imageError.hidden = false; });
imageClose.addEventListener("click", closeImageModal);
imageModal.addEventListener("click", event => { if (event.target === imageModal) closeImageModal(); });
document.addEventListener("keydown", event => { if (event.key === "Escape" && !imageModal.hidden) closeImageModal(); });

const pad = n => String(n).padStart(2, "0");
const normalize = value => String(value ?? "").trim().replace(/\s+/g, "");
const truthy = value => ["true","1","yes","y","是","啟用","顯示","v","✓","☑","checked"].includes(normalize(value).toLowerCase());
const falsey = value => ["false","0","no","n","否","未交","×","☐","unchecked"].includes(normalize(value).toLowerCase());

function escapeHtml(value) {
  return String(value ?? "").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;");
}

function updateContactDate(now) {
  const shortWeekdays = ["日","一","二","三","四","五","六"];
  document.getElementById("contactDate").textContent = `${now.getMonth()+1}/${now.getDate()}（${shortWeekdays[now.getDay()]}）`;
}

function updateClock() {
  const now = new Date(), h = now.getHours(), m = now.getMinutes(), s = now.getSeconds();
  document.getElementById("hourHand").style.transform = `translateX(-50%) rotate(${(h%12)*30+m*.5}deg)`;
  document.getElementById("minuteHand").style.transform = `translateX(-50%) rotate(${m*6+s*.1}deg)`;
  document.getElementById("secondHand").style.transform = `translateX(-50%) rotate(${s*6}deg)`;
  document.getElementById("digitalTime").textContent = `${h<12?"上午":"下午"} ${pad(h%12||12)}:${pad(m)}:${pad(s)}`;
  const weekdays = ["星期日","星期一","星期二","星期三","星期四","星期五","星期六"];
  document.getElementById("dateLine").textContent = `${now.getFullYear()} / ${pad(now.getMonth()+1)} / ${pad(now.getDate())}　${weekdays[now.getDay()]}`;
  updateContactDate(now);
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

const syncState = { task: "loading", contact: "loading", missing: "loading" };

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
  const enabled=col("啟用"), pinned=col("置頂"), title=col("主標題"), subtitle=col("補充說明"), reminder=col("提醒文字"), url=col("連結網址"), image=col("圖片網址");
  if (title < 0 || enabled < 0) throw new Error("今天任務欄位不完整");
  const tasks=rows.slice(1).map((row,order)=>({row,order,pinned:truthy(row[pinned])})).filter(item=>truthy(item.row[enabled])&&normalize(item.row[title]));
  tasks.sort((a,b)=>Number(b.pinned)-Number(a.pinned)||a.order-b.order);
  const list=document.getElementById("taskList");
  if (!tasks.length) {
    list.innerHTML='<div class="simple-page"><h2>今日尚未設定任務</h2><p>請在公告後台勾選要顯示的內容。</p></div>';
    return;
  }
  list.innerHTML=tasks.map((item,index)=>{
    const row=item.row, sub=normalize(row[subtitle]), note=normalize(row[reminder]), link=String(row[url]||"").trim(), imageUrl=String(row[image]||"").trim();
    const actionItems = [];
    if(link)actionItems.push(`<a class="task-link" href="${escapeHtml(link)}" target="_blank" rel="noopener">直接開啟</a><button class="qr-show-btn" type="button" data-qr-url="${escapeHtml(link)}">顯示 QR Code</button>`);
    if(imageUrl&&getDisplayImageUrl(imageUrl))actionItems.push(`<button class="image-show-btn" type="button" data-image-url="${escapeHtml(imageUrl)}" data-image-title="${escapeHtml(row[title])}"><i data-lucide="image"></i><span>查看圖片</span></button>`);
    const actions = actionItems.length ? `<div class="task-actions">${actionItems.join("")}</div>` : "";
    return `<article class="task-item${item.pinned?' pinned':''}"><div class="task-number"><span>${item.pinned?'📌':''}</span>${index+1}.</div><div><h2>${escapeHtml(row[title])}</h2>${sub?`<p>${escapeHtml(row[subtitle])}</p>`:''}${note?`<p class="task-reminder">提醒：${escapeHtml(row[reminder])}</p>`:''}${actions}</div></article>`;
  }).join("");
  if(window.lucide)lucide.createIcons();
}

function normalizeWeekLabel(value) {
  const text=String(value||"").trim();
  const match=text.match(/^(?:W|第)?\s*0*(\d+)\s*週?$/i);
  return match?`第${Number(match[1])}週`:text;
}

function weekSortValue(label) {
  const match=String(label).match(/(\d+)/);
  return match?Number(match[1]):Number.MAX_SAFE_INTEGER;
}

function renderViewedWordWeek() {
  const contactWeek=document.getElementById("contactWeek");
  const wordList=document.getElementById("wordList");
  const group=weeklyWordGroups[viewedWordWeekIndex];
  if(!group){contactWeek.textContent="";wordList.innerHTML="";prevWordWeek.disabled=true;nextWordWeek.disabled=true;return;}
  stopWordPlayback();
  contactWeek.textContent=group.label;
  wordList.innerHTML=group.words.map(item=>`<li><button class="word word-button" type="button" data-word="${escapeHtml(item.word)}">${escapeHtml(item.word)}</button><span>${escapeHtml(item.translation)}</span></li>`).join("");
  prevWordWeek.disabled=viewedWordWeekIndex<=0;
  nextWordWeek.disabled=viewedWordWeekIndex>=weeklyWordGroups.length-1;
}

function moveWordWeek(offset) {
  const nextIndex=viewedWordWeekIndex+offset;
  if(nextIndex<0||nextIndex>=weeklyWordGroups.length)return;
  viewedWordWeekIndex=nextIndex;
  renderViewedWordWeek();
}

prevWordWeek.addEventListener("click",()=>moveWordWeek(-1));
nextWordWeek.addEventListener("click",()=>moveWordWeek(1));

function renderContact(rows,vocabRows=[]) {
  const content=[],homework=[],messages=[];
  const headers=(rows[0]||[]).map(normalize);
  const termEnabled=headers.lastIndexOf(normalize("啟用"));
  const termColumn=headers.indexOf(normalize("學期別"));
  const weekColumn=headers.indexOf(normalize("目前週次"));
  const activeTerms=termEnabled>=0&&termColumn>=0&&weekColumn>=0
    ?rows.slice(1).filter(row=>truthy(row[termEnabled])&&normalize(row[termColumn])&&normalize(row[weekColumn])):[];
  const hasActiveTerm=activeTerms.length===1;
  const currentWeekLabel=hasActiveTerm?normalizeWeekLabel(activeTerms[0][weekColumn]):"";
  const currentTerm=hasActiveTerm?normalize(activeTerms[0][termColumn]):"";
  const previousViewedLabel=weeklyWordGroups[viewedWordWeekIndex]?.label;
  const wordMap=new Map();
  const currentWords=[];
  rows.slice(1).forEach(row=>{
    if(truthy(row[0])&&normalize(row[1]))content.push(row[1]);
    if(truthy(row[2])&&normalize(row[3]))homework.push(row[3]);
    if(truthy(row[4])&&normalize(row[5]))messages.push(row[5]);
    if(normalize(row[6]))currentWords.push({word:String(row[6]).trim(),translation:String(row[7]||"").trim()});
  });
  if(hasActiveTerm&&vocabRows.length){
    const vocabHeaders=(vocabRows[0]||[]).map(normalize);
    const vocabWeek=vocabHeaders.indexOf("週次"),vocabTerm=vocabHeaders.indexOf("學期");
    const wordColumns=vocabHeaders.map((header,index)=>({header,index})).filter(item=>/^單字\d+$/.test(item.header));
    vocabRows.slice(1).forEach(row=>{
      if(normalize(row[vocabTerm])!==currentTerm)return;
      const label=normalizeWeekLabel(row[vocabWeek]);
      if(!label)return;
      const words=wordColumns.map(({header,index})=>{
        const number=header.match(/\d+$/)?.[0];
        const translationColumn=vocabHeaders.indexOf(`中文${number}`);
        return {word:String(row[index]||"").trim(),translation:String(row[translationColumn]||"").trim()};
      }).filter(item=>item.word);
      if(words.length)wordMap.set(label,words);
    });
  }
  if(!wordMap.size&&currentWeekLabel&&currentWords.length)wordMap.set(currentWeekLabel,currentWords);
  const renderLines=items=>items.length?items.map(item=>`<p>✓ ${escapeHtml(item)}</p>`).join(""):"<p>今天沒有勾選內容。</p>";
  document.getElementById("classContent").innerHTML=renderLines(content);
  document.getElementById("homeworkContent").innerHTML=renderLines(homework);
  document.getElementById("teacherMessage").innerHTML=renderLines(messages);
  weeklyWordGroups=[...wordMap].map(([label,words])=>({label,words})).sort((a,b)=>weekSortValue(a.label)-weekSortValue(b.label)||a.label.localeCompare(b.label,"zh-Hant"));
  viewedWordWeekIndex=weeklyWordGroups.findIndex(group=>group.label===(previousViewedLabel||currentWeekLabel));
  if(viewedWordWeekIndex<0)viewedWordWeekIndex=weeklyWordGroups.findIndex(group=>group.label===currentWeekLabel);
  if(viewedWordWeekIndex<0&&weeklyWordGroups.length)viewedWordWeekIndex=0;
  const weeklyWordsCard=document.getElementById("weeklyWordsCard");
  weeklyWordsCard.hidden=!hasActiveTerm||weeklyWordGroups.length===0;
  if(!weeklyWordsCard.hidden)renderViewedWordWeek();
  else{document.getElementById("contactWeek").textContent="";document.getElementById("wordList").innerHTML="";prevWordWeek.disabled=true;nextWordWeek.disabled=true;}
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

async function syncContactSheets() {
  setTabSync("contact","loading");
  const [contactResult,vocabResult]=await Promise.allSettled([
    fetchSheet(PORTAL_CONFIG.sheets.contact),
    fetchSheet(PORTAL_CONFIG.sheets.vocab)
  ]);
  if(contactResult.status!=="fulfilled"){
    console.warn("contact 分頁同步失敗：",contactResult.reason);
    setTabSync("contact","error");
    return;
  }
  if(vocabResult.status!=="fulfilled")console.warn("單字週次資料同步失敗，改用聯絡簿目前單字：",vocabResult.reason);
  renderContact(contactResult.value,vocabResult.status==="fulfilled"?vocabResult.value:[]);
  setTabSync("contact","success");
}

function loadAllSheets() {
  syncOneSheet("task", renderTasks);
  syncContactSheets();
  syncOneSheet("missing", renderMissing);
}

updateClock();
setInterval(updateClock,1000);
loadAllSheets();
setInterval(loadAllSheets,PORTAL_CONFIG.refreshMs);
