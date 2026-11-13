/* 測試版共用的六頁導覽與批次列印控制。 */
(() => {
  const kind = location.pathname.split('/').pop().replace('.html', '');
  const originalInit = window.onload;
  const originalLoad = window.loadLesson;
  const originalPrint = window.printAllLessons;
  const toolbar = document.querySelector('body > .no-print');
  const page = document.querySelector('body > .page-a4');
  const lessonButtons = document.getElementById('lesson-selectors');
  const bookSelect = toolbar.querySelector('select[id$="BookSelector"]');
  const hintButtons = document.getElementById('writeHintButtons');
  const pages = document.createElement('div');
  pages.id = 'screen-pages';
  page.before(pages);
  pages.append(page);
  lessonButtons.style.setProperty('display', 'none', 'important');
  const lessonSelect = document.createElement('select');
  lessonSelect.setAttribute('aria-label', '單元');
  lessonSelect.className = bookSelect.className;
  const controls = document.createElement('div');
  controls.className = 'six-controls';
  const bookLabel = document.createElement('label');
  bookLabel.textContent = '冊別／年級';
  bookLabel.htmlFor = bookSelect.id;
  const lessonLabel = document.createElement('label');
  lessonLabel.textContent = '課次';
  const bookField = document.createElement('div');
  bookField.className = 'six-field six-book';
  bookField.append(bookLabel, bookSelect);
  const lessonField = document.createElement('div');
  lessonField.className = 'six-field six-lesson';
  lessonField.append(lessonLabel, lessonSelect);
  toolbar.replaceChildren(bookField, lessonField, controls, lessonButtons, ...(hintButtons ? [hintButtons] : []));
  toolbar.className = 'no-print six-toolbar';
  toolbar.style.cssText = 'position:sticky;top:0;z-index:30;width:100%;margin:0;padding:8px max(14px,calc((100vw - 1190px)/2));display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:flex-start;align-items:center;gap:14px;border-radius:0;min-height:72px;box-sizing:border-box;overflow-x:auto;background:white;border-bottom:1px solid #cbd5e1';
  if (hintButtons) {
    hintButtons.style.display = 'none';
    const hint = document.createElement('select');
    hint.setAttribute('aria-label', '拼寫提示');
    [['blank','空白'],['count','字數'],['initial','字首'],['trace','描寫']].forEach(([value,label]) => hint.add(new Option('拼寫提示：' + label, value)));
    hint.value = window.writeHintMode || 'blank';
    hint.onchange = () => { window.setWriteHintMode(hint.value); renderAll(); };
    controls.append(hint);
  }
  function makeToggle(label) {
    const button = document.createElement('button');
    button.type = 'button';
    button.textContent = label;
    button.setAttribute('aria-pressed', 'false');
    controls.append(button);
    return button;
  }

  const zhuyin = makeToggle('注音');
  const handwriting = makeToggle('手寫');
  zhuyin.addEventListener('click', () => {
    const enabled = document.body.classList.toggle('show-zhuyin');
    zhuyin.setAttribute('aria-pressed', String(enabled));
  });
  const printing = document.createElement('select');
  const printChoices = kind === 'write'
    ? [['','列印選項'],['blank','學生：空白'],['count','學生：字數'],['initial','學生：字首'],['trace','學生：描寫'],['teacher','教師版']]
    : [['','列印選項'],['student','學生版六頁'],['teacher','教師版六頁']];
  printChoices.forEach(([v,t]) => printing.add(new Option(t,v)));
  printing.setAttribute('aria-label','列印');
  controls.append(printing);
  const style = document.createElement('style');
  style.textContent = '.six-toolbar{flex-direction:row!important;justify-content:flex-start!important;align-items:center!important}.six-field{display:flex;flex-direction:column;gap:3px;flex:none}.six-field label{font-size:12px;font-weight:700;color:#475569}.six-field select{height:38px;padding:4px 10px;flex-grow:0}.six-book select{width:230px}.six-lesson select{width:90px}.six-controls{display:flex;gap:6px;margin-left:auto;flex:none}.six-controls select,.six-controls button{height:38px;border:1px solid #cbd5e1;border-radius:6px;padding:5px;background:white;font-size:13px}.six-controls button[aria-pressed=true]{background:#dbeafe;border-color:#2563eb;color:#1e40af}#lesson-selectors{display:none!important}#screen-pages .page-a4{scroll-margin-top:80px}@media print{#screen-pages .page-a4{display:none!important}body.printing-all #print-all-container{display:block!important}}';
  style.textContent += 'body.show-zhuyin .vocab-meaning{font-family:var(--font-bpmf)!important;font-weight:400}';
  document.head.append(style);

  // Use the grammar worksheet's v1.4 ink tools with the vocabulary pages as paper.
  handwriting.id = 'inkToggle';
  pages.classList.add('paper');
  style.textContent += "/* v1.4 module: optional speech and independent document-anchored ink. */\n#inkToggle[aria-pressed=\"true\"],.ink-tools button[aria-pressed=\"true\"]{background:#dbeafe;border-color:#60a5fa;color:#163f78}\n.ink-tools{position:fixed;left:6px;top:50%;transform:translateY(-50%);z-index:60;display:grid;gap:5px;padding:5px;background:#fffffff2;border:1px solid var(--line);border-radius:9px;box-shadow:0 3px 12px #0002}\n.ink-tools button{display:grid;place-items:center;width:36px;height:38px;border:1px solid var(--line);border-radius:6px;background:white;font-size:19px;cursor:pointer}.ink-tools button svg{width:21px;height:21px}\n#inkLayer{position:absolute;left:0;top:0;width:100%;z-index:20;pointer-events:none;overflow:hidden}body.ink-enabled .paper{touch-action:none;cursor:crosshair}\n.ink-tools{--line:#cbd5e1}.ink-tools[hidden],.module-notice[hidden]{display:none}\n@media print{#inkLayer,.ink-tools,.module-notice{display:none!important}}";
  document.body.insertAdjacentHTML('beforeend', "<aside id=\"inkTools\" class=\"ink-tools\" hidden aria-label=\"手寫工具\"><button type=\"button\" data-ink=\"close\" title=\"關閉手寫\" aria-label=\"關閉手寫\">×</button><button type=\"button\" data-ink=\"pen\" aria-pressed=\"true\" title=\"紅筆\" aria-label=\"紅筆\"><svg viewBox=\"0 0 24 24\" aria-hidden=\"true\"><path d=\"M5 16 16 5l3 3L8 19l-4 1z\" fill=\"none\" stroke=\"#d62828\" stroke-width=\"2.5\"/></svg></button><button type=\"button\" data-ink=\"highlight\" aria-pressed=\"false\" title=\"螢光筆\" aria-label=\"螢光筆\"><svg viewBox=\"0 0 24 24\" aria-hidden=\"true\"><path d=\"m6 14 8-10 6 5-8 10z\" fill=\"#fde047\" stroke=\"#806700\"/><path d=\"M4 21h13\" stroke=\"#e5bd00\" stroke-width=\"3\"/></svg></button><button type=\"button\" data-ink=\"eraser\" aria-pressed=\"false\" title=\"橡皮擦\" aria-label=\"橡皮擦\">▱</button><button type=\"button\" data-ink=\"undo\" title=\"復原上一步\" aria-label=\"復原上一步\">↶</button><button type=\"button\" data-ink=\"clear\" title=\"全部清除筆跡\" aria-label=\"全部清除筆跡\">⌫</button></aside><svg id=\"inkLayer\" xmlns=\"http://www.w3.org/2000/svg\" aria-hidden=\"true\"></svg><div id=\"moduleNotice\" class=\"module-notice\" role=\"status\" hidden></div>");

  function mountInk(paper, inkButton) {
    const notice = document.getElementById('moduleNotice');
    let noticeTimer;
    function inform(text) {
      notice.textContent = text;
      notice.hidden = false;
      clearTimeout(noticeTimer);
      noticeTimer = setTimeout(() => { notice.hidden = true; }, 4200);
    }

    style.textContent += 'body.ink-enabled #screen-pages .page-a4{user-select:none}body.ink-enabled #screen-pages :is([onclick],button,input){cursor:crosshair}';

    // Worksheet controls are part of the writing surface while ink is enabled.
    for (const eventName of ['click', 'contextmenu']) {
      paper.addEventListener(eventName, event => {
        if (!enabled) return;
        event.preventDefault();
        event.stopImmediatePropagation();
      }, true);
    }

    /* v1.4 module — Ink: reference is exam-board-v4.html, 4px × .75 = 3 CSS px. */
    const layer=document.getElementById('inkLayer'),tools=document.getElementById('inkTools'),NS='http://www.w3.org/2000/svg';let enabled=false,tool='pen',strokes=[],history=[],active=null,frame=0,printing=false;
    const create=(tag,attrs={})=>{const node=document.createElementNS(NS,tag);Object.entries(attrs).forEach(([k,v])=>node.setAttribute(k,v));return node};
    function snapshot(){history.push(strokes.slice());if(history.length>60)history.shift()}
    function chooseTool(value){tool=value;tools.querySelectorAll('[aria-pressed]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.ink===value)))}
    function mode(on){if(active)finish();enabled=on;tools.hidden=!on;inkButton.setAttribute('aria-pressed',String(on));document.body.classList.toggle('ink-enabled',on);if(on)chooseTool('pen');schedule()}
    inkButton.addEventListener('click',()=>mode(!enabled));tools.addEventListener('click',ev=>{const action=ev.target.closest('[data-ink]')?.dataset.ink;if(!action)return;if(action==='close')mode(false);else if(action==='undo'){if(active)finish();if(history.length){strokes=history.pop();schedule()}}else if(action==='clear'){if(active)finish();if(strokes.length){snapshot();strokes=[];schedule()}}else chooseTool(action)});
    const anchorSelector='.single-row-item,.row-border-style,.match-option-card,[onclick],h1,h2,h3,p';
    function stableText(el){const clone=el.cloneNode(true);clone.querySelectorAll('.chosen,.score,.word-zone').forEach(x=>x.remove());return clone.textContent}
    function signature(el){const r=el.getBoundingClientRect();return {width:r.width,height:r.height,text:stableText(el)}}
    function valid(s){if(!s.anchor.isConnected)return false;const r=s.anchor.getBoundingClientRect();return Math.abs(r.width-s.layout.width)<1&&Math.abs(r.height-s.layout.height)<1&&stableText(s.anchor)===s.layout.text}
    function pathFor(s){const r=s.anchor.getBoundingClientRect(),points=s.points.map(p=>({x:r.left+scrollX+p.x,y:r.top+scrollY+p.y}));if(points.length===1)return 'M'+points[0].x+' '+points[0].y+' l.01 .01';let path='M'+points[0].x+' '+points[0].y;for(let i=1;i<points.length-1;i++){const a=points[i],b=points[i+1];path+=' Q'+a.x+' '+a.y+' '+(a.x+b.x)/2+' '+(a.y+b.y)/2}const last=points[points.length-1];return path+' L'+last.x+' '+last.y}
    function render(){frame=0;if(printing)return;const book=paper.getBoundingClientRect();layer.setAttribute('height',Math.ceil(book.bottom+scrollY+60));layer.replaceChildren();const yellow=create('g',{opacity:'.24'}),red=create('g');layer.append(yellow,red);for(const s of strokes){if(!valid(s))continue;const path=create('path',{d:pathFor(s),fill:'none',stroke:s.tool==='highlight'?'#facc15':'#d62828','stroke-width':s.tool==='highlight'?18:3,'stroke-linecap':'round','stroke-linejoin':'round'});(s.tool==='highlight'?yellow:red).append(path)}}
    function schedule(){if(!frame)frame=requestAnimationFrame(render)}
    function point(ev,anchor){const r=anchor.getBoundingClientRect();return {x:ev.clientX-r.left,y:ev.clientY-r.top}}
    function hit(s,x,y){if(!valid(s))return false;const r=s.anchor.getBoundingClientRect(),p={x:x-r.left,y:y-r.top},radius=s.tool==='highlight'?16:10;for(let i=0;i<s.points.length;i++){const a=s.points[Math.max(0,i-1)],b=s.points[i],dx=b.x-a.x,dy=b.y-a.y,t=Math.max(0,Math.min(1,((p.x-a.x)*dx+(p.y-a.y)*dy)/(dx*dx+dy*dy||1)));if(Math.hypot(p.x-a.x-t*dx,p.y-a.y-t*dy)<radius)return true}return false}
    function erase(ev){strokes=strokes.filter(s=>!hit(s,ev.clientX,ev.clientY));schedule()}
    paper.addEventListener('pointerdown',ev=>{if(!enabled||active||ev.button!==0||!ev.target.closest('.page-a4'))return;ev.preventDefault();const anchor=ev.target.closest(anchorSelector)||ev.target.closest('.page-a4');snapshot();paper.setPointerCapture(ev.pointerId);active={pointer:ev.pointerId,tool};if(tool==='eraser')erase(ev);else{const stroke={anchor,layout:signature(anchor),tool,points:[point(ev,anchor)]};strokes.push(stroke);active.stroke=stroke;schedule()}});
    paper.addEventListener('pointermove',ev=>{if(!active||active.pointer!==ev.pointerId)return;ev.preventDefault();if(active.tool==='eraser')erase(ev);else{const events=ev.getCoalescedEvents?.()||[];for(const e of events.length?events:[ev])active.stroke.points.push(point(e,active.stroke.anchor));schedule()}});
    function finish(){if(!active)return;if(active.stroke)active.stroke.points=active.stroke.points.slice();active=null;schedule()}
    paper.addEventListener('pointerup',finish);paper.addEventListener('pointercancel',finish);paper.addEventListener('lostpointercapture',finish);
    new ResizeObserver(schedule).observe(paper);new MutationObserver(schedule).observe(paper,{subtree:true,childList:true,characterData:true,attributes:true});addEventListener('resize',()=>{if(strokes.length)inform('版面已改變；無法確認對位的筆跡暫時隱藏，恢復原版面即可顯示。');schedule()});addEventListener('scroll',schedule,{passive:true});document.fonts?.ready.then(schedule);
    addEventListener('beforeprint',()=>{printing=true;finish();if('speechSynthesis'in window)speechSynthesis.cancel()});addEventListener('afterprint',()=>{printing=false;schedule()});schedule();
    return finish;
  }

  const finishInk = mountInk(pages, handwriting);
  let rendering = false;
  let observer;
  function renderAll() {
    if (rendering) return;
    rendering = true;
    observer?.disconnect();
    const keys = Array.from(lessonButtons.querySelectorAll('[data-lesson]'), button => button.dataset.lesson);
    lessonSelect.replaceChildren(...keys.map(key => new Option(key, key)));
    const selected = lessonSelect.value || keys[0];
    finishInk();
    pages.replaceChildren(page);
    keys.forEach((key, index) => {
      originalLoad(key);
      const target = index === keys.length - 1 ? page : page.cloneNode(true);
      target.dataset.lesson = key;
      if (target !== page) pages.append(target);
    });
    // 將原始頁面移到正確順序；其他頁面的內容由各課重新產生。
    keys.forEach((key, index) => {
      originalLoad(key);
      const target = pages.children[index];
      target.innerHTML = page.innerHTML;
      target.dataset.lesson = key;

    });
    window.setSixLesson(selected);
    lessonSelect.value = selected;
    observer = new IntersectionObserver(entries => {
      const visible = entries.filter(e => e.isIntersecting).sort((a,b) => b.intersectionRatio-a.intersectionRatio)[0];
      if (visible) { lessonSelect.value = visible.target.dataset.lesson; window.setSixLesson(lessonSelect.value); }
    }, { rootMargin:'-65px 0px -45% 0px', threshold:[0,0.25,0.5] });
    pages.querySelectorAll('.page-a4').forEach(p => observer.observe(p));
    rendering = false;
  }
  window.loadLesson = key => { const target = Array.from(pages.children).find(p => p.dataset.lesson === key); if (target) target.scrollIntoView({behavior:'smooth'}); else originalLoad(key); };
  pages.addEventListener('pointerdown', event => { const target = event.target.closest('.page-a4'); if (target) window.setSixLesson(target.dataset.lesson); }, true);
  lessonSelect.onchange = () => window.loadLesson(lessonSelect.value);
  bookSelect.addEventListener('change', () => setTimeout(renderAll, 0));
  printing.onchange = () => {
    const value = printing.value;
    printing.value = '';
    if (!value) return;
    if (kind === 'write' && value !== 'teacher') window.setWriteHintMode(value);
    originalPrint(value === 'teacher');
  };
  window.onload = () => { originalInit(); setTimeout(renderAll, 0); };
})();
