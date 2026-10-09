(() => {
  "use strict";

  const script = document.currentScript;
  if (!script || document.querySelector(".spedu-public-footer")) return;

  const footer = document.createElement("footer");
  footer.className = "spedu-public-footer";
  footer.setAttribute("aria-label", "教材授權資訊");

  const publicShareUrl = "https://sinny-hong.github.io/spedu-labs/share/";
  const brand = document.createElement("a");
  brand.href = publicShareUrl;
  brand.textContent = "Sinny’s Spedu Labs";
  brand.setAttribute("aria-label", "前往 Sinny’s Spedu Labs 公開教學資源");
  const shortText = script.dataset.footerShort === "true";
  footer.append("© ", brand);
  if (!shortText) footer.append("｜歡迎教學分享，請保留出處與原始連結。");

  const style = document.createElement("style");
  style.textContent = `
    .spedu-public-footer {
      box-sizing: border-box;
      width: 100%;
      margin: 12px auto 0;
      padding: 4px 10px;
      color: #8192a6;
      font: 400 12px/1.4 "Noto Sans TC", "Microsoft JhengHei", system-ui, sans-serif;
      text-align: center;
      white-space: nowrap;
    }
    .spedu-public-footer a {
      color: inherit;
      text-decoration: none;
    }
    .spedu-public-footer a:hover,
    .spedu-public-footer a:focus-visible {
      color: #0b3768;
      text-decoration: underline;
    }
    .spedu-public-footer--compact {
      margin-top: 8px;
      padding: 2px 6px;
    }
    .spedu-public-footer--short {
      flex: none;
      width: auto;
      margin: 0 0 0 auto;
      padding: 0;
      white-space: nowrap;
    }
    @media (max-width: 520px) {
      .spedu-public-footer { white-space: normal; }
      .header-bar:has(> .header-actions) { flex-wrap: wrap; }
      .header-bar > .header-actions { width: 100%; justify-content: flex-end; flex-wrap: wrap; }
      .header-bar > .header-actions .spedu-public-footer { white-space: nowrap; }
    }
    @media print {
      .spedu-public-footer { display: none !important; }
    }
  `;
  document.head.append(style);

  const targetSelector = script.dataset.footerTarget;
  const target = targetSelector ? document.querySelector(targetSelector) : document.body;
  if (!target) return;
  if (targetSelector) footer.classList.add("spedu-public-footer--compact");
  if (shortText) footer.classList.add("spedu-public-footer--short");
  target.append(footer);
})();
