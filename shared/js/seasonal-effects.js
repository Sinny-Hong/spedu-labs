(() => {
  "use strict";

  const ACTIVE_THEME = "halloween";
  const STYLE_ID = "seasonal-effect-style";
  const LAYER_ID = "seasonal-effect-layer";
  const TRIGGER_ID = "seasonalEffectTrigger";
  const CLEANUP_DELAY = 7200;
  let cleanupTimer = 0;
  let animationFrames = [];

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

  function play() {
    stop();
    if (ACTIVE_THEME !== "halloween" || reducedMotion()) return false;
    const layer = document.createElement("div");
    layer.id = LAYER_ID;
    layer.setAttribute("aria-hidden", "true");
    document.body.append(layer);
    addBanner(layer);
    addGiantPumpkin(layer);
    animatePumpkin(layer, -1, 0);
    animatePumpkin(layer, 1, 180 + Math.random() * 160);
    animateFlyer(layer);
    animateCameo(layer);
    cleanupTimer = window.setTimeout(stop, CLEANUP_DELAY);
    return true;
  }

  function bindTrigger() {
    installStyles();
    document.getElementById(TRIGGER_ID)?.addEventListener("click", play);
  }

  window.SeasonalEffects = Object.freeze({ play, stop, activeTheme: ACTIVE_THEME });
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", bindTrigger, { once: true });
  else bindTrigger();
})();
