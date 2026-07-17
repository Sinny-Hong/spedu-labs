
const sidebar = document.getElementById("sidebar");
const menuToggle = document.getElementById("menuToggle");
const tabs = document.querySelectorAll(".tab");
const pages = document.querySelectorAll(".tab-page");
const moreBtn = document.getElementById("moreBtn");
const moreTools = document.getElementById("moreTools");
const fullscreenBtn = document.getElementById("fullscreenBtn");

menuToggle.addEventListener("click", () => {
  if (window.innerWidth <= 760) {
    sidebar.classList.toggle("mobile-open");
  } else {
    sidebar.classList.toggle("collapsed");
  }
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
    if (!document.fullscreenElement) {
      await document.documentElement.requestFullscreen();
    } else {
      await document.exitFullscreen();
    }
  } catch (error) {
    console.warn("無法切換全螢幕：", error);
  }
});

function updateClock() {
  const now = new Date();
  const h = now.getHours();
  const m = now.getMinutes();
  const s = now.getSeconds();

  const hourDeg = (h % 12) * 30 + m * 0.5;
  const minuteDeg = m * 6 + s * 0.1;
  const secondDeg = s * 6;

  document.getElementById("hourHand").style.transform = `translateX(-50%) rotate(${hourDeg}deg)`;
  document.getElementById("minuteHand").style.transform = `translateX(-50%) rotate(${minuteDeg}deg)`;
  document.getElementById("secondHand").style.transform = `translateX(-50%) rotate(${secondDeg}deg)`;

  const period = h < 12 ? "上午" : "下午";
  const pad = n => String(n).padStart(2, "0");
  document.getElementById("digitalTime").textContent = `${period} ${pad(h % 12 || 12)}:${pad(m)}:${pad(s)}`;

  const weekdays = ["星期日","星期一","星期二","星期三","星期四","星期五","星期六"];
  document.getElementById("dateLine").textContent =
    `${now.getFullYear()} / ${pad(now.getMonth()+1)} / ${pad(now.getDate())}　${weekdays[now.getDay()]}`;
}

updateClock();
setInterval(updateClock, 1000);
