
const PORTAL_CONFIG = {
  sheetCsvUrl: "https://docs.google.com/spreadsheets/d/e/2PACX-1vRPfdr-4FdSCypU3KXOrp4ujj7zfY74wfY_Ya4-ZkauszV8TbnTqyOZgilPaMT1EDN3e4NkR8rL8-gg/pub?gid=1619194793&single=true&output=csv",
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

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    tabs.forEach(item => item.classList.remove("active"));
    pages.forEach(page => page.classList.remove("active"));
    tab.classList.add("active");
    document.getElementById(tab.dataset.tab).classList.add("active");
  });
});

moreBtn.addEventListener("click", () => {
  moreTools.classList.toggle("open");
  moreBtn.textContent = moreTools.classList.contains("open")
    ? "收起更多功能⌃"
    : "顯示更多功能⌄";
});

fullscreenBtn.addEventListener("click", async () => {
  try {
    if (!document.fullscreenElement) await document.documentElement.requestFullscreen();
    else await document.exitFullscreen();
  } catch (error) {
    console.warn("無法切換全螢幕：", error);
  }
});

function speakWord(word, button) {
  if (!("speechSynthesis" in window)) {
    alert("此瀏覽器不支援語音播放。");
    return;
  }
  speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(word);
  utterance.lang = "en-US";
  utterance.rate = 0.8;
  button?.classList.add("speaking");
  utterance.onend = () => button?.classList.remove("speaking");
  utterance.onerror = () => button?.classList.remove("speaking");
  speechSynthesis.speak(utterance);
}

document.addEventListener("click", event => {
  const button = event.target.closest(".speak-btn");
  if (button) speakWord(button.dataset.word, button);
});

const pad = n => String(n).padStart(2, "0");

function updateDateAndWeek(now) {
  const weekdays = ["星期日","星期一","星期二","星期三","星期四","星期五","星期六"];
  document.getElementById("headerDate").textContent =
    `${now.getMonth() + 1} 月 ${now.getDate()} 日　${weekdays[now.getDay()]}`;

  const weekEl = document.getElementById("schoolWeek");
  if (!PORTAL_CONFIG.semesterStartDate) {
    weekEl.hidden = true;
    return;
  }

  const start = new Date(`${PORTAL_CONFIG.semesterStartDate}T00:00:00`);
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const diffDays = Math.floor((today - start) / 86400000);
  const week = Math.floor(diffDays / 7) + 1;

  if (week >= 1) {
    weekEl.textContent = `第 ${week} 週`;
    weekEl.hidden = false;
  } else {
    weekEl.hidden = true;
  }
}

function updateClock() {
  const now = new Date();
  const h = now.getHours(), m = now.getMinutes(), s = now.getSeconds();

  document.getElementById("hourHand").style.transform =
    `translateX(-50%) rotate(${(h % 12) * 30 + m * 0.5}deg)`;
  document.getElementById("minuteHand").style.transform =
    `translateX(-50%) rotate(${m * 6 + s * 0.1}deg)`;
  document.getElementById("secondHand").style.transform =
    `translateX(-50%) rotate(${s * 6}deg)`;

  const period = h < 12 ? "上午" : "下午";
  document.getElementById("digitalTime").textContent =
    `${period} ${pad(h % 12 || 12)}:${pad(m)}:${pad(s)}`;

  const weekdays = ["星期日","星期一","星期二","星期三","星期四","星期五","星期六"];
  document.getElementById("dateLine").textContent =
    `${now.getFullYear()} / ${pad(now.getMonth()+1)} / ${pad(now.getDate())}　${weekdays[now.getDay()]}`;

  updateDateAndWeek(now);
}

function parseCsv(text) {
  const rows = [];
  let row = [], cell = "", quoted = false;

  for (let i = 0; i < text.length; i++) {
    const char = text[i], next = text[i + 1];
    if (char === '"' && quoted && next === '"') {
      cell += '"'; i++;
    } else if (char === '"') {
      quoted = !quoted;
    } else if (char === "," && !quoted) {
      row.push(cell); cell = "";
    } else if ((char === "\n" || char === "\r") && !quoted) {
      if (char === "\r" && next === "\n") i++;
      row.push(cell);
      if (row.some(v => String(v).trim() !== "")) rows.push(row);
      row = []; cell = "";
    } else {
      cell += char;
    }
  }
  row.push(cell);
  if (row.some(v => String(v).trim() !== "")) rows.push(row);
  return rows;
}

const normalize = value => String(value ?? "").trim().replace(/\s+/g, "");
const truthy = value => ["true","1","yes","y","是","啟用","顯示","v","✓","☑","checked"]
  .includes(normalize(value).toLowerCase());

function findHeaderRow(rows) {
  return rows.findIndex(row => {
    const keys = row.map(normalize);
    return keys.includes("主標題") && (keys.includes("啟用") || keys.includes("顯示"));
  });
}

function rowToObject(headers, row) {
  const obj = {};
  headers.forEach((header, i) => {
    const key = normalize(header);
    if (key) obj[key] = row[i] ?? "";
  });
  return obj;
}

function firstField(obj, names, fallback = "") {
  for (const name of names) {
    const value = obj[normalize(name)];
    if (String(value ?? "").trim() !== "") return String(value).trim();
  }
  return fallback;
}

function setConnection(state, text) {
  const dot = document.getElementById("onlineDot");
  const label = document.getElementById("connectionText");
  dot.classList.remove("offline", "loading");
  if (state) dot.classList.add(state);
  label.textContent = text;
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&","&amp;").replaceAll("<","&lt;")
    .replaceAll(">","&gt;").replaceAll('"',"&quot;")
    .replaceAll("'","&#039;");
}

function renderTask(data) {
  const taskCard = document.getElementById("taskCard");
  const pinned = truthy(firstField(data, ["置頂","老師置頂"]));
  const title = firstField(data, ["主標題","標題","今天任務"], "今日尚未設定任務");
  const subtitle = firstField(data, ["補充說明","副標題","說明"], "");
  const reminder = firstField(data, ["提醒文字","貼心提醒","備註"], "");
  const url = firstField(data, ["連結網址","網址","URL","連結"], "");

  taskCard.classList.toggle("pinned", pinned);
  taskCard.classList.toggle("no-qr", !url);
  document.getElementById("taskLabel").textContent = pinned ? "📌 老師置頂" : "今天任務";
  document.getElementById("taskTitle").textContent = title;

  const subtitleEl = document.getElementById("taskSubtitle");
  subtitleEl.textContent = subtitle;
  subtitleEl.hidden = !subtitle;

  document.getElementById("taskReminder").textContent =
    reminder || "請依照老師指示完成任務。";

  const qr = document.getElementById("taskQr");
  if (url) {
    qr.hidden = false;
    qr.innerHTML =
      `<div class="fake-qr"></div><span>掃描開始作答</span>` +
      `<a href="${escapeHtml(url)}" target="_blank" rel="noopener">開啟連結</a>`;
  } else {
    qr.hidden = true;
  }
}

async function loadSheetData() {
  setConnection("loading", "資料更新中");
  try {
    const sep = PORTAL_CONFIG.sheetCsvUrl.includes("?") ? "&" : "?";
    const response = await fetch(
      `${PORTAL_CONFIG.sheetCsvUrl}${sep}_=${Date.now()}`,
      { cache: "no-store" }
    );
    if (!response.ok) throw new Error(`HTTP ${response.status}`);

    const rows = parseCsv(await response.text());
    const headerIndex = findHeaderRow(rows);
    if (headerIndex < 0) throw new Error("找不到啟用、置頂、主標題欄位");

    const headers = rows[headerIndex];
    const records = rows.slice(headerIndex + 1)
      .map(row => rowToObject(headers, row))
      .filter(record => truthy(firstField(record, ["啟用","顯示"])));

    if (records.length) renderTask(records[0]);
    setConnection("", "資料已同步");
  } catch (error) {
    console.warn("試算表載入失敗：", error);
    setConnection("offline", "使用本機資料");
  }
}

updateClock();
setInterval(updateClock, 1000);
loadSheetData();
setInterval(loadSheetData, PORTAL_CONFIG.refreshMs);
