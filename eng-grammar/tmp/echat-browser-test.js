const cp = require("child_process");
const fs = require("fs");
const path = require("path");

const lifeDir = process.argv[2];
const shotDir = process.argv[3];
const chromePath = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
const port = 9337;
const profile = path.join(shotDir, "chrome-profile");
const files = [
  "teen-relationship-boundaries.html",
  "online-safety-dangerous-messages.html",
  "online-dating-safety-challenge.html",
  "teen-survival-interpersonal-crisis.html"
];

fs.mkdirSync(shotDir, { recursive: true });
const chrome = cp.spawn(chromePath, [
  "--headless=new", "--disable-gpu", `--remote-debugging-port=${port}`,
  `--user-data-dir=${profile}`, "about:blank"
], { stdio: "ignore" });

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
async function json(url) {
  for (let i = 0; i < 30; i++) {
    try { return await (await fetch(url)).json(); } catch { await sleep(100); }
  }
  throw new Error("Chrome DevTools endpoint did not start");
}

(async () => {
  const tabs = await json(`http://127.0.0.1:${port}/json`);
  const tab = tabs.find(item => item.type === "page");
  const ws = new WebSocket(tab.webSocketDebuggerUrl);
  await new Promise((resolve, reject) => { ws.onopen = resolve; ws.onerror = reject; });
  let id = 0;
  const pending = new Map();
  ws.onmessage = event => {
    const message = JSON.parse(event.data);
    if (message.id && pending.has(message.id)) {
      pending.get(message.id)(message);
      pending.delete(message.id);
    }
  };
  const send = (method, params = {}) => new Promise(resolve => {
    const messageId = ++id;
    pending.set(messageId, resolve);
    ws.send(JSON.stringify({ id: messageId, method, params }));
  });
  const evaluate = async expression => {
    const reply = await send("Runtime.evaluate", { expression, returnByValue: true, awaitPromise: true });
    if (reply.result.exceptionDetails) throw new Error(reply.result.exceptionDetails.text);
    return reply.result.result.value;
  };

  const reports = [];
  for (const file of files) {
    await send("Emulation.setDeviceMetricsOverride", { width: 1440, height: 1000, deviceScaleFactor: 1, mobile: false });
    const url = "file:///" + path.join(lifeDir, file).replaceAll("\\", "/");
    await send("Page.navigate", { url });
    await sleep(1400);
    const initial = await evaluate(`(() => {
      const buttons=[...document.querySelectorAll("#options-container button")];
      const rects=buttons.map(button=>button.getBoundingClientRect());
      return {
        buttons:buttons.length,
        neutral:buttons.every(button=>!button.querySelector(".risk-badge")&&!/紅燈|黃燈|綠燈/.test(button.textContent)&&![...button.classList].some(name=>name.startsWith("risk-choice--"))),
        vertical:rects.length===3&&rects[0].top<rects[1].top&&rects[1].top<rects[2].top&&rects.every((rect,index)=>index===0||rect.top>=rects[index-1].bottom),
        withinViewport:rects.every(rect=>rect.left>=0&&rect.right<=innerWidth&&rect.bottom<=innerHeight),
        order:buttons.map(button=>button.querySelector("span").childNodes[0].textContent.trim())
      };
    })()`);
    if (initial.buttons !== 3 || !initial.neutral || !initial.vertical || !initial.withinViewport) throw new Error(`${file}: initial layout failed ${JSON.stringify(initial)}`);

    const redIndex = await evaluate(`getPhaseOptions().findIndex(option=>option.risk==="red")`);
    await evaluate(`document.querySelectorAll("#options-container button")[${redIndex}].click()`);
    const red = await evaluate(`({errors:Number(document.getElementById("error-indicator").textContent),revealed:document.querySelectorAll("#options-container button")[${redIndex}].classList.contains("risk-choice--red"),title:document.getElementById("feedback-title").textContent})`);
    if (red.errors !== 1 || !red.revealed || !red.title.includes("紅燈")) throw new Error(`${file}: red flow failed`);
    await sleep(1950);
    const retry = await evaluate(`({order:[...document.querySelectorAll("#options-container button")].map(button=>button.querySelector("span").childNodes[0].textContent.trim()),enabled:[...document.querySelectorAll("#options-container button")].filter(button=>!button.disabled).length})`);
    if (JSON.stringify(retry.order) !== JSON.stringify(initial.order) || retry.enabled !== 2) throw new Error(`${file}: retry/shuffle persistence failed`);

    const yellowIndex = await evaluate(`getPhaseOptions().findIndex(option=>option.risk==="yellow")`);
    await evaluate(`document.querySelectorAll("#options-container button")[${yellowIndex}].click()`);
    const yellow = await evaluate(`({errors:Number(document.getElementById("error-indicator").textContent),next:!document.getElementById("next-btn").classList.contains("hidden"),title:document.getElementById("feedback-title").textContent})`);
    if (yellow.errors !== 1 || !yellow.next || !yellow.title.includes("黃燈")) throw new Error(`${file}: yellow flow failed`);

    await evaluate(`loadLevel(0)`);
    await sleep(1200);
    const greenIndex = await evaluate(`getPhaseOptions().findIndex(option=>option.risk==="green")`);
    await evaluate(`document.querySelectorAll("#options-container button")[${greenIndex}].click()`);
    const green = await evaluate(`({errors:Number(document.getElementById("error-indicator").textContent),next:!document.getElementById("next-btn").classList.contains("hidden"),title:document.getElementById("feedback-title").textContent})`);
    if (green.errors !== 0 || !green.next || !green.title.includes("綠燈")) throw new Error(`${file}: green flow failed`);

    const positions = await evaluate(`(() => {const found=new Set();for(let i=0;i<40;i++){shuffledOptionsByPhase.clear();found.add(getPhaseOptions().findIndex(option=>option.risk==="green"));}return [...found]})()`);
    if (positions.length < 2) throw new Error(`${file}: green stayed in one position`);

    await send("Emulation.setDeviceMetricsOverride", { width: 390, height: 844, deviceScaleFactor: 1, mobile: false });
    await send("Page.navigate", { url });
    await sleep(1400);
    const mobile = await evaluate(`({innerWidth,clientWidth:document.documentElement.clientWidth,scrollWidth:document.documentElement.scrollWidth,buttons:document.querySelectorAll("#options-container button").length,offenders:[...document.querySelectorAll("body *")].map(el=>{const r=el.getBoundingClientRect();return{tag:el.tagName,id:el.id,cls:el.className?.toString().slice(0,100),left:r.left,right:r.right,width:r.width}}).filter(x=>x.right>innerWidth+.5||x.left<-.5).slice(0,12)})`);
    if (mobile.clientWidth !== mobile.scrollWidth || mobile.buttons !== 3) throw new Error(`${file}: mobile overflow/options failed ${JSON.stringify(mobile)}`);
    reports.push({ file, initial, red, retry, yellow, green, greenPositions: positions, mobile });
  }
  console.log(JSON.stringify(reports, null, 2));
  ws.close();
})().finally(() => {
  chrome.kill();
}).catch(error => {
  console.error(error);
  process.exitCode = 1;
});
