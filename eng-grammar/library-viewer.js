// Shared directory viewer for E-City and printable life-English materials.
(() => {
  "use strict";
  const folder = document.body.dataset.libraryFolder;
  const base = `${folder}/`;
  const key = `spedu-${folder}-last-file`;
  const fallback = window.LIBRARY_MANIFEST || [];
  const picker = document.getElementById("topic-picker");
  const frame = document.getElementById("topic-frame");
  const title = document.querySelector("#current-title span");
  const notice = document.getElementById("notice");
  const download = document.querySelector('[data-action="download"]');
  const isPdf = file => /\.pdf$/i.test(file);
  const eligible = file => /\.(html|pdf)$/i.test(file) && !/[/\\]/.test(file) &&
    !/^(index|library|[._~])/i.test(file) && !/(backup|temp|tmp|備份)/i.test(file);
  const url = item => base + encodeURIComponent(item.file);
  let items = fallback.filter(item => eligible(item.file));
  let current = null;
  let selectionVersion = 0;
  function load(item) {
    current = item;
    if (!item) {
      notice.textContent = "目前尚無教材。";
      notice.hidden = false;
      title.textContent = "尚無教材";
      download.removeAttribute("href");
      return;
    }
    picker.value = item.file;
    title.textContent = item.title;
    frame.title = item.title;
    document.body.classList.toggle("is-pdf", isPdf(item.file));
    download.href = url(item);
    download.download = item.file;
    notice.textContent = "正在載入教材……";
    notice.hidden = false;
    try { localStorage.setItem(key, item.file); } catch {}
    frame.src = url(item);
  }
  function render(preferred) {
    picker.replaceChildren();
    for (const item of items) {
      const option = document.createElement("option");
      option.value = item.file;
      option.textContent = `${isPdf(item.file) ? "PDF 紙本" : "互動教材"}｜${item.title}`;
      picker.append(option);
    }
    const item = items.find(item => item.file === preferred) || items[0];
    if (!current || current.file !== item?.file) load(item);
    else picker.value = current.file;
  }
  picker.addEventListener("change", () => {
    selectionVersion++;
    load(items.find(item => item.file === picker.value));
  });
  frame.addEventListener("load", () => { if (current) notice.hidden = true; });
  frame.addEventListener("error", () => {
    notice.textContent = "無法預覽，請使用「另開／列印」或「下載」。";
    notice.hidden = false;
  });
  document.querySelector('[data-action="home"]').addEventListener("click", () => { location.href = "index.html"; });
  document.querySelector('[data-action="reload"]').addEventListener("click", () => load(current));
  document.querySelector('[data-action="open"]').addEventListener("click", () => {
    if (current) window.open(url(current), "_blank", "noopener");
  });
  let remembered;
  try { remembered = localStorage.getItem(key); } catch {}
  render(remembered);
  // Only the deployed site discovers published additions. Local previews use
  // the bundled list so that remote files never replace local work in progress.
  if (location.hostname !== "sinny-hong.github.io") return;
  (async () => {
    const version = selectionVersion;
    try {
      const response = await fetch(`https://api.github.com/repos/Sinny-Hong/spedu-labs/contents/eng-grammar/${folder}?ref=main`, { signal: AbortSignal.timeout(8000) });
      if (!response.ok) return;
      const entries = await response.json();
      if (!Array.isArray(entries)) return;
      const discovered = await Promise.all(entries.filter(e => e.type === "file" && eligible(e.name)).map(async entry => {
        const known = fallback.find(item => item.file === entry.name);
        if (known) return known;
        let label = entry.name.replace(/\.(html|pdf)$/i, "");
        if (!isPdf(entry.name)) {
          try {
            const page = await fetch(base + encodeURIComponent(entry.name), { signal: AbortSignal.timeout(5000) });
            if (page.ok) label = new DOMParser().parseFromString(await page.text(), "text/html").title.trim() || label;
          } catch {}
        }
        return { file: entry.name, title: label };
      }));
      if (!discovered.length) return;
      items = discovered.sort((a, b) => a.file.localeCompare(b.file, undefined, { numeric: true }));
      render(version === selectionVersion ? remembered || current?.file : current?.file);
    } catch { /* Keep the immediately available bundled directory. */ }
  })();
})();
