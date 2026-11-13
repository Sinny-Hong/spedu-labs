(() => {
  "use strict";

  // 節慶由 Google 試算表控制：M2 = TRUE/FALSE 開關，M3 = 節慶名稱（例如「感恩節」）。
  // 開關為 FALSE、讀取失敗或節慶不認得時，一律改播 Sinny 隨機角色。
  const CSV_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vRPfdr-4FdSCypU3KXOrp4ujj7zfY74wfY_Ya4-ZkauszV8TbnTqyOZgilPaMT1EDN3e4NkR8rL8-gg/pub?single=true&output=csv&gid=878488999";
  const FETCH_TIMEOUT = 3500;
  const CACHE_MS = 15000;
  const FESTIVALS = Object.freeze({
    "萬聖節": "halloween", "感恩節": "thanksgiving", "聖誕節": "christmas",
    "元旦煙火": "new-year", "農曆新年": "lunar-new-year", "元宵節": "lantern",
    "情人節": "valentine", "復活節": "easter", "母親節": "mothers-day",
    "父親節": "fathers-day", "端午節": "dragon-boat", "中秋節": "mid-autumn",
    "教師節": "teachers-day", "生日快樂": "birthday"
  });
  // 還沒有專屬動畫的節慶，先用大表情符號頂著。
  const EMOJI_ONLY = Object.freeze({
    christmas: "🎄", "new-year": "🎆", "lunar-new-year": "🧧", lantern: "🏮",
    valentine: "💝", easter: "🐣", "mothers-day": "💐", "fathers-day": "👔",
    "dragon-boat": "🐲", "mid-autumn": "🥮", "teachers-day": "📚", birthday: "🎂"
  });
  const STYLE_ID = "seasonal-effect-style";
  const LAYER_ID = "seasonal-effect-layer";
  const SINNY_LAYER_ID = "seasonal-sinny-layer";
  const TRIGGER_ID = "seasonalEffectTrigger";
  const CLEANUP_DELAY = 7200;
  const SINNY_DURATION = 3000;
  const sinnyBase = new URL("../../assets/sinny/", document.currentScript.src);
  let cleanupTimer = 0;
  let animationFrames = [];
  let sinnyTimer = 0;
  let sinnyRequest = 0;
  let previousSinny = "";
  let sinnyManifest;
  let sheetCache = null;

  function parseCsv(text) {
    const rows = [];
    let row = [], cell = "", quoted = false;
    for (let i = 0; i < text.length; i++) {
      const char = text[i], next = text[i + 1];
      if (char === '"' && quoted && next === '"') { cell += '"'; i++; }
      else if (char === '"') quoted = !quoted;
      else if (char === "," && !quoted) { row.push(cell); cell = ""; }
      else if ((char === "\n" || char === "\r") && !quoted) {
        if (char === "\r" && next === "\n") i++;
        row.push(cell); rows.push(row); row = []; cell = "";
      } else cell += char;
    }
    if (row.length > 0 || cell !== "" || !/[\r\n]$/.test(text)) { row.push(cell); rows.push(row); }
    return rows;
  }

  function sheetCell(rows, row, column) { return String(rows[row]?.[column] ?? "").trim(); }

  // 回傳要播的代號：節慶代號或 "sinny"
  function resolveSelected(rows) {
    const enabled = sheetCell(rows, 1, 12).toUpperCase() === "TRUE";   // M2
    const themeName = sheetCell(rows, 2, 12);                          // M3
    if (!enabled) return "sinny";
    let code = FESTIVALS[themeName] || "";
    for (let i = 1; i <= 14 && !code; i++) {                           // P2:Q15 對照表
      if (sheetCell(rows, i, 15) === themeName) code = sheetCell(rows, i, 16);
    }
    if (!code && Object.values(FESTIVALS).includes(themeName)) code = themeName;
    if (!code) console.warn(`節慶彩蛋：M3「${themeName || "空白"}」沒有對應節慶，改播 Sinny。`);
    return code || "sinny";
  }

  async function loadSelected() {
    if (sheetCache && Date.now() - sheetCache.at < CACHE_MS) return sheetCache.code;
    const controller = new AbortController();
    const timer = window.setTimeout(() => controller.abort(), FETCH_TIMEOUT);
    try {
      const response = await fetch(`${CSV_URL}&_=${Date.now()}`, { cache: "no-store", signal: controller.signal });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const rows = parseCsv((await response.text()).replace(/^\uFEFF/, ""));
      sheetCache = { code: resolveSelected(rows), at: Date.now() };
    } catch (error) {
      console.warn("節慶彩蛋：試算表讀取失敗，沿用上次結果或改播 Sinny。", error);
    } finally {
      window.clearTimeout(timer);
    }
    return sheetCache?.code || "sinny";
  }

  function installStyles() {
    if (document.getElementById(STYLE_ID)) return;
    const style = document.createElement("style");
    style.id = STYLE_ID;
    style.textContent = `
      .seasonal-card {
        grid-column: 3;
        grid-row: 2;
        color: #a95516;
        background: #fff0df;
      }
      .seasonal-card:hover { background: #ffe4c6; }
      .seasonal-card .widget-visual {
        display: grid;
        place-items: center;
        font-size: 30px;
        line-height: 1;
      }
      #${LAYER_ID} {
        position: fixed;
        inset: 0;
        z-index: 9999;
        width: 100vw;
        height: 100dvh;
        overflow: clip;
        pointer-events: none;
        contain: strict;
      }
      #${LAYER_ID} .halloween-emoji {
        position: absolute;
        left: 0;
        top: 0;
        display: grid;
        place-items: center;
        width: var(--effect-size);
        height: var(--effect-size);
        font-size: var(--effect-size);
        line-height: 1;
        user-select: none;
        will-change: transform, opacity;
        filter: drop-shadow(0 5px 4px rgba(41, 24, 19, .2));
      }
      #${LAYER_ID} .seasonal-banner {
        position: absolute;
        z-index: 4;
        top: 0;
        left: 50%;
        width: min(88vw, 720px);
        height: 88px;
        display: flex;
        justify-content: center;
        align-items: flex-start;
        gap: clamp(2px, .6vw, 7px);
        padding-top: 8px;
        transform: translateX(-50%);
        transform-origin: top center;
        animation: seasonal-banner-party 6.5s ease both;
      }
      #${LAYER_ID} .seasonal-banner::before {
        content: "";
        position: absolute;
        top: 9px;
        left: 2%;
        right: 2%;
        height: 3px;
        border-radius: 99px;
        background: #3d3156;
      }
      #${LAYER_ID} .seasonal-flag {
        position: relative;
        display: grid;
        place-items: start center;
        width: clamp(34px, 5.2vw, 54px);
        height: clamp(48px, 7vw, 68px);
        padding-top: 13px;
        color: #fff7dc;
        background: var(--flag-color);
        clip-path: polygon(0 0, 100% 0, 50% 100%);
        font: 900 clamp(14px, 2vw, 21px)/1 system-ui, sans-serif;
        text-shadow: 0 2px 1px rgba(33, 19, 42, .35);
        transform-origin: 50% 0;
        animation: seasonal-flag-sway 1.25s ease-in-out calc(var(--flag-index) * -.09s) infinite alternate;
      }
      #${LAYER_ID} .seasonal-giant-pumpkin {
        position: absolute;
        z-index: 0;
        left: 50%;
        top: 50%;
        width: min(56vw, 410px);
        height: min(56vw, 410px);
        display: grid;
        place-items: center;
        font-size: min(43vw, 330px);
        line-height: 1;
        opacity: 0;
        filter: saturate(.88);
        animation: seasonal-giant-pumpkin 4.8s cubic-bezier(.22,.74,.28,1) .35s both;
      }
      #${LAYER_ID} .seasonal-cameo { z-index: 3; }
      #${LAYER_ID} .seasonal-spider-line {
        position: absolute;
        z-index: 2;
        top: 0;
        width: 2px;
        height: 31vh;
        background: rgba(80, 75, 91, .6);
        transform-origin: top;
      }
      #${LAYER_ID} .turkey-train {
        position: absolute;
        z-index: 3;
        left: 0;
        bottom: var(--turkey-floor);
        display: flex;
        align-items: flex-end;
        will-change: transform;
      }
      #${LAYER_ID} .turkey-tow {
        display: flex;
        align-items: center;
        margin-bottom: calc(var(--turkey-size) * .3);
        transform-origin: right center;
        filter: drop-shadow(0 3px 3px rgba(70, 36, 12, .28));
        will-change: transform;
      }
      #${LAYER_ID} .turkey-banner {
        display: flex;
        align-items: center;
        justify-content: center;
        height: calc(var(--turkey-size) * .44);
        padding: 0 calc(var(--turkey-size) * .14) 0 calc(var(--turkey-size) * .24);
        border-block: 3px solid #d9822b;
        background: linear-gradient(#fff8e1, #ffe8b3);
        clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%, 6% 50%);
      }
      #${LAYER_ID} .turkey-banner span {
        font: 900 calc(var(--turkey-size) * .27)/1 "Fredoka", "Baloo 2", "Comic Sans MS", "Marker Felt", "Microsoft JhengHei", system-ui, sans-serif;
        color: var(--letter-color);
        animation: turkey-letter-bob .7s ease-in-out calc(var(--i) * -.08s) infinite alternate;
      }
      #${LAYER_ID} .turkey-rope {
        width: calc(var(--turkey-size) * .26);
        height: 3px;
        border-radius: 3px;
        background: #8d5524;
      }
      #${LAYER_ID} .turkey-bird {
        width: var(--turkey-size);
        height: calc(var(--turkey-size) * 1.03);
        transform-origin: 50% 100%;
        filter: drop-shadow(0 5px 4px rgba(70, 36, 12, .25));
        will-change: transform;
      }
      #${LAYER_ID} .turkey-svg { display: block; width: 100%; height: 100%; overflow: visible; }
      #${LAYER_ID} .turkey-wing {
        transform-box: fill-box;
        transform-origin: 50% 10%;
        animation: turkey-flap .26s ease-in-out infinite alternate;
      }
      #${LAYER_ID} .turkey-wing.right { animation-direction: alternate-reverse; }
      @keyframes turkey-letter-bob {
        from { transform: translateY(-3px) rotate(-3deg); }
        to { transform: translateY(3px) rotate(3deg); }
      }
      @keyframes turkey-flap {
        from { transform: rotate(-18deg); }
        to { transform: rotate(14deg); }
      }
      @keyframes seasonal-banner-party {
        0% { transform: translate(-50%, -105%) rotate(-1deg); opacity: 0; }
        12% { transform: translate(-50%, 0) rotate(1deg); opacity: 1; }
        82% { transform: translate(-50%, 0) rotate(-1deg); opacity: 1; }
        100% { transform: translate(-50%, -105%) rotate(1deg); opacity: 0; }
      }
      @keyframes seasonal-flag-sway {
        from { transform: rotate(-4deg); }
        to { transform: rotate(4deg); }
      }
      @keyframes seasonal-giant-pumpkin {
        0% { transform: translate(-50%, -50%) scale(.18) rotate(-12deg); opacity: 0; }
        18% { transform: translate(-50%, -50%) scale(1.04) rotate(5deg); opacity: .19; }
        34% { transform: translate(-50%, -50%) scale(.96) rotate(-5deg); opacity: .17; }
        50% { transform: translate(-50%, -50%) scale(1) rotate(4deg); opacity: .17; }
        72% { transform: translate(-50%, -50%) scale(.98) rotate(-3deg); opacity: .14; }
        100% { transform: translate(-50%, -50%) scale(.55) rotate(8deg); opacity: 0; }
      }
      @media (max-width: 600px) {
        .seasonal-card .widget-visual { font-size: 27px; }
        #${LAYER_ID} .seasonal-banner { width: 96vw; height: 62px; gap: 1px; }
        #${LAYER_ID} .seasonal-flag { width: 31px; height: 44px; padding-top: 11px; font-size: 12px; }
        #${LAYER_ID} .seasonal-giant-pumpkin { width: 72vw; height: 72vw; font-size: 58vw; }
      }
      @media (prefers-reduced-motion: reduce) {
        #${LAYER_ID} { display: none !important; }
      }
      #${SINNY_LAYER_ID} {
        position: fixed;
        z-index: 9998;
        display: grid;
        place-items: center;
        pointer-events: none;
        background: transparent;
      }
      #${SINNY_LAYER_ID} img {
        display: block;
        max-width: 100%;
        max-height: 100%;
        width: auto;
        height: auto;
        object-fit: contain;
        border: 0;
        background: transparent;
        animation: seasonal-sinny-visit 3s ease-in-out both;
      }
      @keyframes seasonal-sinny-visit {
        0% { opacity: 0; transform: translateY(16px); }
        15%, 72% { opacity: 1; transform: translateY(0); }
        100% { opacity: 0; transform: translateY(-7px); }
      }
      @media (prefers-reduced-motion: reduce) {
        #${SINNY_LAYER_ID} img { animation: seasonal-sinny-fade 3s linear both; }
      }
      @keyframes seasonal-sinny-fade {
        0%, 100% { opacity: 0; }
        15%, 72% { opacity: 1; }
      }
    `;
    document.head.append(style);
  }

  function reducedMotion() {
    return window.matchMedia?.("(prefers-reduced-motion: reduce)").matches === true;
  }

  function stop() {
    window.clearTimeout(cleanupTimer);
    cleanupTimer = 0;
    animationFrames.forEach(id => window.cancelAnimationFrame(id));
    animationFrames = [];
    document.getElementById(LAYER_ID)?.remove();
  }

  function makeEmoji(layer, emoji, size) {
    const item = document.createElement("span");
    item.className = "halloween-emoji";
    item.textContent = emoji;
    item.setAttribute("aria-hidden", "true");
    item.style.setProperty("--effect-size", `${size}px`);
    layer.append(item);
    return item;
  }

  function addBanner(layer) {
    const banner = document.createElement("div");
    banner.className = "seasonal-banner";
    const colors = ["#6b4185", "#f28a24", "#2e3447"];
    [..."HALLOWEEN"].forEach((letter, index) => {
      const flag = document.createElement("span");
      flag.className = "seasonal-flag";
      flag.textContent = letter;
      flag.style.setProperty("--flag-index", index);
      flag.style.setProperty("--flag-color", colors[index % colors.length]);
      banner.append(flag);
    });
    layer.append(banner);
  }

  function addGiantPumpkin(layer) {
    const pumpkin = document.createElement("div");
    pumpkin.className = "seasonal-giant-pumpkin";
    pumpkin.textContent = "🎃";
    pumpkin.setAttribute("aria-hidden", "true");
    layer.append(pumpkin);
  }

  function animatePumpkin(layer, direction, delay) {
    const compact = window.innerWidth <= 600;
    const size = compact ? 32 + Math.random() * 8 : 46 + Math.random() * 13;
    const startX = direction < 0
      ? window.innerWidth * (.28 + Math.random() * .12)
      : window.innerWidth * (.58 + Math.random() * .13);
    const pumpkin = makeEmoji(layer, "🎃", size);
    const floor = () => window.innerHeight - size - (compact ? 4 : 8);
    let x = startX;
    let y = -size - 10;
    let vx = direction * (55 + Math.random() * 35);
    let vy = 35 + Math.random() * 45;
    let rotation = Math.random() * 20 - 10;
    let bounces = 0;
    let rolling = false;
    let previous = 0;
    let startTime = 0;

    function frame(now) {
      if (!startTime) startTime = now + delay;
      if (now < startTime) {
        animationFrames.push(window.requestAnimationFrame(frame));
        return;
      }
      const dt = previous ? Math.min((now - previous) / 1000, .034) : 0;
      previous = now;

      if (!rolling) {
        vy += 1500 * dt;
        x += vx * dt;
        y += vy * dt;
        rotation += vx * dt * 1.05;
        if (y >= floor()) {
          y = floor();
          bounces += 1;
          if (bounces <= 3) {
            vy = -Math.max(120, Math.abs(vy) * (bounces === 1 ? .54 : .42));
            vx *= 1.12;
          } else {
            rolling = true;
            vy = 0;
          }
        }
      } else {
        vx += direction * 135 * dt;
        x += vx * dt;
        rotation += (vx / Math.max(size, 1)) * 58 * dt;
      }

      pumpkin.style.transform = `translate3d(${x}px, ${y}px, 0) rotate(${rotation}deg)`;
      if (x > -size * 2 && x < window.innerWidth + size * 2) {
        animationFrames.push(window.requestAnimationFrame(frame));
      } else {
        pumpkin.remove();
      }
    }

    animationFrames.push(window.requestAnimationFrame(frame));
  }

  function animateFlyer(layer) {
    const compact = window.innerWidth <= 600;
    const ghost = Math.random() < .35;
    const size = compact ? 34 + Math.random() * 7 : 47 + Math.random() * 15;
    const flyer = makeEmoji(layer, ghost ? "👻" : "🦇", size);
    const leftToRight = Math.random() < .5;
    const startX = leftToRight ? -size * 1.5 : window.innerWidth + size * .5;
    const finishX = leftToRight ? window.innerWidth + size * 1.5 : -size * 1.5;
    const startY = window.innerHeight * (.34 + Math.random() * .19);
    const finishY = window.innerHeight * (.08 + Math.random() * .16);
    const middleX = startX + (finishX - startX) * .48;
    const middleY = startY + (finishY - startY) * .43 + (ghost ? 16 : -12);
    const duration = ghost ? 5700 + Math.random() * 500 : 4200 + Math.random() * 650;
    const pauseStart = ghost ? .43 : .34;
    const pauseEnd = ghost ? .57 : .43;
    const flip = leftToRight ? 1 : -1;

    const animation = flyer.animate([
      { transform: `translate3d(${startX}px, ${startY}px, 0) scaleX(${flip}) rotate(-8deg)`, opacity: 0, offset: 0 },
      { opacity: 1, offset: .07 },
      { transform: `translate3d(${middleX}px, ${middleY}px, 0) scaleX(${flip}) rotate(5deg)`, opacity: 1, offset: pauseStart },
      { transform: `translate3d(${middleX + flip * 8}px, ${middleY - 5}px, 0) scaleX(${flip}) rotate(-3deg)`, opacity: 1, offset: pauseEnd },
      { transform: `translate3d(${finishX}px, ${finishY}px, 0) scaleX(${flip}) rotate(7deg)`, opacity: 0, offset: 1 }
    ], {
      duration,
      delay: 300 + Math.random() * 450,
      easing: ghost ? "cubic-bezier(.36,.08,.28,1)" : "cubic-bezier(.38,.02,.27,1)",
      fill: "both"
    });
    animation.addEventListener("finish", () => flyer.remove(), { once: true });
  }

  function animateCameo(layer) {
    const compact = window.innerWidth <= 600;
    const choice = Math.floor(Math.random() * 3);

    if (choice === 0) {
      const size = compact ? 30 : 43;
      const fromLeft = Math.random() < .5;
      const x = fromLeft ? window.innerWidth * .08 : window.innerWidth * .86;
      const line = document.createElement("span");
      line.className = "seasonal-spider-line";
      line.style.left = `${x + size / 2}px`;
      layer.append(line);
      const spider = makeEmoji(layer, "🕷️", size);
      spider.classList.add("seasonal-cameo");
      const dropY = window.innerHeight * (compact ? .22 : .28);
      line.animate([
        { transform: "scaleY(0)", opacity: 0 },
        { transform: "scaleY(1)", opacity: 1, offset: .3 },
        { transform: "scaleY(1)", opacity: 1, offset: .72 },
        { transform: "scaleY(0)", opacity: 0 }
      ], { duration: 3900, delay: 950, easing: "ease-in-out", fill: "both" });
      const motion = spider.animate([
        { transform: `translate3d(${x}px, ${-size * 1.2}px, 0) rotate(-7deg)`, opacity: 0 },
        { transform: `translate3d(${x}px, ${dropY}px, 0) rotate(6deg)`, opacity: 1, offset: .3 },
        { transform: `translate3d(${x + 4}px, ${dropY + 2}px, 0) rotate(-5deg)`, opacity: 1, offset: .58 },
        { transform: `translate3d(${x}px, ${dropY}px, 0) rotate(5deg)`, opacity: 1, offset: .72 },
        { transform: `translate3d(${x}px, ${-size * 1.2}px, 0) rotate(0deg)`, opacity: 0 }
      ], { duration: 3900, delay: 950, easing: "cubic-bezier(.42,0,.3,1)", fill: "both" });
      motion.addEventListener("finish", () => { spider.remove(); line.remove(); }, { once: true });
      return;
    }

    if (choice === 1) {
      const size = compact ? 38 : 54;
      const cat = makeEmoji(layer, "🐈‍⬛", size);
      cat.classList.add("seasonal-cameo");
      const leftToRight = Math.random() < .5;
      const startX = leftToRight ? -size * 1.5 : window.innerWidth + size;
      const finishX = leftToRight ? window.innerWidth + size : -size * 1.5;
      const y = window.innerHeight - size - (compact ? 3 : 8);
      const flip = leftToRight ? -1 : 1;
      const motion = cat.animate([
        { transform: `translate3d(${startX}px, ${y}px, 0) scaleX(${flip})`, opacity: 0 },
        { opacity: 1, offset: .08 },
        { transform: `translate3d(${window.innerWidth * (leftToRight ? .42 : .58)}px, ${y}px, 0) scaleX(${flip})`, opacity: 1, offset: .42 },
        { transform: `translate3d(${window.innerWidth * (leftToRight ? .46 : .54)}px, ${y - 3}px, 0) scaleX(${flip})`, opacity: 1, offset: .56 },
        { transform: `translate3d(${finishX}px, ${y}px, 0) scaleX(${flip})`, opacity: 0 }
      ], { duration: 4400, delay: 1050, easing: "cubic-bezier(.36,.08,.3,1)", fill: "both" });
      motion.addEventListener("finish", () => cat.remove(), { once: true });
      return;
    }

    const size = compact ? 42 : 58;
    const vampire = makeEmoji(layer, "🧛", size);
    vampire.classList.add("seasonal-cameo");
    const fromLeft = Math.random() < .5;
    const x = fromLeft ? 12 : window.innerWidth - size - 12;
    const hiddenY = window.innerHeight + size;
    const peekY = window.innerHeight - size * .82;
    const motion = vampire.animate([
      { transform: `translate3d(${x}px, ${hiddenY}px, 0) rotate(0deg)`, opacity: 0 },
      { transform: `translate3d(${x}px, ${peekY}px, 0) rotate(-5deg)`, opacity: 1, offset: .28 },
      { transform: `translate3d(${x + (fromLeft ? 7 : -7)}px, ${peekY}px, 0) rotate(5deg)`, opacity: 1, offset: .48 },
      { transform: `translate3d(${x}px, ${peekY}px, 0) rotate(-4deg)`, opacity: 1, offset: .7 },
      { transform: `translate3d(${x}px, ${hiddenY}px, 0) rotate(0deg)`, opacity: 0 }
    ], { duration: 3700, delay: 1250, easing: "cubic-bezier(.3,.7,.3,1)", fill: "both" });
    motion.addEventListener("finish", () => vampire.remove(), { once: true });
  }

  // ===== 感恩節：可愛火鸡拉著 Thanksgiving 布條蹦跳跑過 + 落葉 =====
  const TURKEY_SVG = `
    <svg class="turkey-svg" viewBox="0 0 120 124" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <g>
        <g transform="rotate(-80 60 84)"><ellipse cx="60" cy="50" rx="11" ry="26" fill="#8e5a2b"/><ellipse cx="60" cy="47" rx="5.5" ry="16" fill="#b98550"/></g>
        <g transform="rotate(-53 60 84)"><ellipse cx="60" cy="50" rx="11" ry="26" fill="#c0392b"/><ellipse cx="60" cy="47" rx="5.5" ry="16" fill="#e8776b"/></g>
        <g transform="rotate(-27 60 84)"><ellipse cx="60" cy="50" rx="11" ry="26" fill="#e67e22"/><ellipse cx="60" cy="47" rx="5.5" ry="16" fill="#f5a962"/></g>
        <g transform="rotate(80 60 84)"><ellipse cx="60" cy="50" rx="11" ry="26" fill="#8e5a2b"/><ellipse cx="60" cy="47" rx="5.5" ry="16" fill="#b98550"/></g>
        <g transform="rotate(53 60 84)"><ellipse cx="60" cy="50" rx="11" ry="26" fill="#c0392b"/><ellipse cx="60" cy="47" rx="5.5" ry="16" fill="#e8776b"/></g>
        <g transform="rotate(27 60 84)"><ellipse cx="60" cy="50" rx="11" ry="26" fill="#e67e22"/><ellipse cx="60" cy="47" rx="5.5" ry="16" fill="#f5a962"/></g>
        <g><ellipse cx="60" cy="50" rx="11" ry="26" fill="#f1c40f"/><ellipse cx="60" cy="47" rx="5.5" ry="16" fill="#f9e27a"/></g>
      </g>
      <g fill="#e8a22b"><rect x="46" y="108" width="5" height="10" rx="2.5"/><rect x="69" y="108" width="5" height="10" rx="2.5"/>
        <ellipse cx="46" cy="119" rx="8" ry="3.4"/><ellipse cx="74" cy="119" rx="8" ry="3.4"/></g>
      <ellipse cx="60" cy="86" rx="30" ry="26" fill="#9c5a2a"/>
      <ellipse cx="60" cy="92" rx="20" ry="17" fill="#d39a5b"/>
      <ellipse class="turkey-wing" cx="31" cy="88" rx="9" ry="16" fill="#7a4520"/>
      <ellipse class="turkey-wing right" cx="89" cy="88" rx="9" ry="16" fill="#7a4520"/>
      <circle cx="60" cy="61" r="21" fill="#a8662f"/>
      <ellipse cx="53" cy="41" rx="3" ry="6" transform="rotate(-22 53 41)" fill="#6b3a1a"/>
      <ellipse cx="60" cy="39" rx="3" ry="7" fill="#6b3a1a"/>
      <ellipse cx="67" cy="41" rx="3" ry="6" transform="rotate(22 67 41)" fill="#6b3a1a"/>
      <ellipse cx="45" cy="66" rx="5" ry="3.4" fill="#ff9aa8" opacity=".65"/>
      <ellipse cx="75" cy="66" rx="5" ry="3.4" fill="#ff9aa8" opacity=".65"/>
      <circle cx="51" cy="57" r="6.5" fill="#fff"/><circle cx="69" cy="57" r="6.5" fill="#fff"/>
      <circle cx="52" cy="58" r="3.6" fill="#2b1a10"/><circle cx="68" cy="58" r="3.6" fill="#2b1a10"/>
      <circle cx="53.2" cy="56.4" r="1.3" fill="#fff"/><circle cx="69.2" cy="56.4" r="1.3" fill="#fff"/>
      <polygon points="54,64 66,64 60,73" fill="#f5a623"/>
      <path d="M57 72 Q60 86 63 72 Z" fill="#d63031"/>
    </svg>`;

  function addTurkeyTrain(layer) {
    const compact = window.innerWidth <= 600;
    const size = compact ? 82 : 124;
    const hopHeight = size * .42;
    const hopsPerSecond = compact ? 2.3 : 2;
    const duration = compact ? 5600 : 6600;
    const letterColors = ["#c0392b", "#e67e22", "#8e5a2b", "#d4a017"];
    const train = document.createElement("div");
    train.className = "turkey-train";
    train.style.setProperty("--turkey-size", `${size}px`);
    train.style.setProperty("--turkey-floor", `${compact ? 6 : 10}px`);
    const letters = [..."Thanksgiving"].map((letter, index) =>
      `<span style="--i:${index};--letter-color:${letterColors[index % letterColors.length]}">${letter}</span>`
    ).join("");
    train.innerHTML = `<div class="turkey-tow"><div class="turkey-banner">${letters}</div><span class="turkey-rope"></span></div>` +
      `<div class="turkey-bird">${TURKEY_SVG}</div>`;
    train.setAttribute("aria-hidden", "true");
    layer.append(train);

    const bird = train.querySelector(".turkey-bird");
    const tow = train.querySelector(".turkey-tow");
    const trainWidth = train.getBoundingClientRect().width || size * 3.8;
    const distance = window.innerWidth + trainWidth + 20;
    let startTime = 0;

    function frame(now) {
      if (!startTime) startTime = now;
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const phase = (elapsed / 1000) * hopsPerSecond * Math.PI;
      const lift = Math.abs(Math.sin(phase));
      const ground = Math.pow(1 - lift, 6);
      const lag = phase - 1.1;
      train.style.transform = `translate3d(${-trainWidth - 10 + distance * progress}px, 0, 0)`;
      bird.style.transform = `translateY(${-lift * hopHeight}px) rotate(${Math.cos(phase) * 5}deg) scale(${1 + .1 * ground}, ${1 - .13 * ground})`;
      tow.style.transform = `translateY(${-Math.abs(Math.sin(lag)) * hopHeight * .5}px) rotate(${Math.sin(lag) * -2.5}deg)`;
      if (progress < 1) animationFrames.push(window.requestAnimationFrame(frame));
      else train.remove();
    }
    animationFrames.push(window.requestAnimationFrame(frame));
  }

  function addFallingLeaves(layer) {
    const compact = window.innerWidth <= 600;
    const pool = ["🍁", "🍂", "🍂", "🍁", "🍃", "🌰", "🥧", "🌽"];
    const count = compact ? 12 : 18;
    const width = window.innerWidth;
    const height = window.innerHeight;
    for (let i = 0; i < count; i++) {
      const size = (compact ? 24 : 30) + Math.random() * (compact ? 10 : 16);
      const item = makeEmoji(layer, pool[Math.floor(Math.random() * pool.length)], size);
      const x = Math.random() * Math.max(1, width - size);
      const sway = (30 + Math.random() * 50) * (Math.random() < .5 ? -1 : 1);
      const spin = (Math.random() < .5 ? -1 : 1) * (120 + Math.random() * 220);
      item.style.opacity = "0";
      item.animate([
        { transform: `translate3d(${x}px, ${-size * 1.5}px, 0) rotate(0deg)`, opacity: 0 },
        { transform: `translate3d(${x + sway}px, ${height * .25}px, 0) rotate(${spin * .3}deg)`, opacity: 1, offset: .12 },
        { transform: `translate3d(${x - sway * .6}px, ${height * .55}px, 0) rotate(${spin * .6}deg)`, opacity: 1, offset: .5 },
        { transform: `translate3d(${x + sway * .8}px, ${height * .85}px, 0) rotate(${spin * .85}deg)`, opacity: 1, offset: .82 },
        { transform: `translate3d(${x}px, ${height - size}px, 0) rotate(${spin}deg)`, opacity: 0 }
      ], { duration: 3600 + Math.random() * 1400, delay: Math.random() * 1800, easing: "ease-in-out", fill: "both" });
    }
  }

  function makeLayer() {
    stop();
    const layer = document.createElement("div");
    layer.id = LAYER_ID;
    layer.setAttribute("aria-hidden", "true");
    document.body.append(layer);
    cleanupTimer = window.setTimeout(stop, CLEANUP_DELAY);
    return layer;
  }

  function playThanksgiving() {
    const layer = makeLayer();
    addFallingLeaves(layer);
    addTurkeyTrain(layer);
    return true;
  }

  // 還沒有專屬動畫的節慶：中央放一個大表情符號，浮現後淡出。
  function playEmoji(emoji) {
    const layer = makeLayer();
    const size = Math.min(window.innerWidth * .42, 220);
    const item = makeEmoji(layer, emoji, size);
    const x = (window.innerWidth - size) / 2;
    const y = (window.innerHeight - size) / 2;
    item.animate([
      { transform: `translate3d(${x}px, ${y + 24}px, 0) scale(.5)`, opacity: 0 },
      { transform: `translate3d(${x}px, ${y}px, 0) scale(1.05)`, opacity: 1, offset: .3 },
      { transform: `translate3d(${x}px, ${y}px, 0) scale(1)`, opacity: 1, offset: .7 },
      { transform: `translate3d(${x}px, ${y - 16}px, 0) scale(.7)`, opacity: 0 }
    ], { duration: 3200, easing: "ease-in-out", fill: "both" });
    return true;
  }

  function playHalloween() {
    const layer = makeLayer();
    addBanner(layer);
    addGiantPumpkin(layer);
    animatePumpkin(layer, -1, 0);
    animatePumpkin(layer, 1, 180 + Math.random() * 160);
    animateFlyer(layer);
    animateCameo(layer);
    return true;
  }

  function playTheme(code) {
    if (reducedMotion()) return false;
    if (code === "halloween") return playHalloween();
    if (code === "thanksgiving") return playThanksgiving();
    if (EMOJI_ONLY[code]) return playEmoji(EMOJI_ONLY[code]);
    return false;
  }

  function clearSinny() {
    window.clearTimeout(sinnyTimer);
    sinnyTimer = 0;
    document.getElementById(SINNY_LAYER_ID)?.remove();
  }

  function positionSinny(layer) {
    const panel = document.querySelector(".clock-panel");
    if (!panel) return false;
    const rect = panel.getBoundingClientRect();
    const left = Math.max(0, rect.left);
    const top = Math.max(0, rect.top);
    const right = Math.min(window.innerWidth, rect.right);
    const bottom = Math.min(window.innerHeight, rect.bottom);
    if (right <= left || bottom <= top) return false;
    Object.assign(layer.style, { left: `${left}px`, top: `${top}px`, width: `${right - left}px`, height: `${bottom - top}px` });
    return true;
  }

  async function showSinny() {
    const request = ++sinnyRequest;
    clearSinny();
    stop();
    try {
      sinnyManifest ||= fetch(new URL("manifest.json", sinnyBase)).then(response => {
        if (!response.ok) throw new Error(`Sinny manifest: ${response.status}`);
        return response.json();
      }).catch(error => { sinnyManifest = null; throw error; });
      const manifest = await sinnyManifest;
      if (request !== sinnyRequest) return;
      const files = manifest.images.map(item => item.file).filter(file => /^[a-z0-9-]+\.webp$/.test(file));
      const choices = files.filter(file => file !== previousSinny);
      if (!choices.length) return;
      const file = choices[Math.floor(Math.random() * choices.length)];
      const image = new Image();
      image.alt = "";
      image.src = new URL(file, sinnyBase).href;
      await image.decode();
      if (request !== sinnyRequest) return;
      const layer = document.createElement("div");
      layer.id = SINNY_LAYER_ID;
      layer.setAttribute("aria-hidden", "true");
      if (!positionSinny(layer)) return;
      layer.append(image);
      document.body.append(layer);
      previousSinny = file;
      sinnyTimer = window.setTimeout(clearSinny, SINNY_DURATION);
    } catch (error) {
      console.warn("Sinny 角色圖片無法載入。", error);
    }
  }

  async function onTrigger() {
    const request = ++sinnyRequest;
    clearSinny();
    stop();
    const code = await loadSelected();
    if (request !== sinnyRequest) return;
    if (code === "sinny" || !playTheme(code)) showSinny();
  }

  function bindTrigger() {
    installStyles();
    document.getElementById(TRIGGER_ID)?.addEventListener("click", onTrigger);
    loadSelected();   // 先讀一次，讓第一次按的時候比較快
  }

  window.SeasonalEffects = Object.freeze({ play: playTheme, stop, reload: loadSelected });
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", bindTrigger, { once: true });
  else bindTrigger();
})();
