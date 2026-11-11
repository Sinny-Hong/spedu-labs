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
  const zhuyin = document.createElement('select');
  [['off','注音：關'],['on','注音：開']].forEach(([v,t]) => zhuyin.add(new Option(t,v)));
  zhuyin.setAttribute('aria-label','注音');
  controls.append(zhuyin);
  const handwriting = document.createElement('select');
  [['off','手寫：關'],['on','手寫：開']].forEach(([v,t]) => handwriting.add(new Option(t,v)));
  handwriting.setAttribute('aria-label','手寫');
  controls.append(handwriting);
  zhuyin.addEventListener('change', () => {
    document.body.classList.toggle('show-zhuyin', zhuyin.value === 'on');
  });
  const printing = document.createElement('select');
  const printChoices = kind === 'write'
    ? [['','列印選項'],['current','列印本頁'],['blank','學生：空白'],['count','學生：字數'],['initial','學生：字首'],['trace','學生：描寫'],['teacher','教師版']]
    : [['','列印選項'],['current','列印本頁'],['student','學生版六頁'],['teacher','教師版六頁']];
  printChoices.forEach(([v,t]) => printing.add(new Option(t,v)));
  printing.setAttribute('aria-label','列印');
  controls.append(printing);
  const style = document.createElement('style');
  style.textContent = '.six-toolbar{flex-direction:row!important;justify-content:flex-start!important;align-items:center!important}.six-field{display:flex;flex-direction:column;gap:3px;flex:none}.six-field label{font-size:12px;font-weight:700;color:#475569}.six-field select{height:38px;padding:4px 10px;flex-grow:0}.six-book select{width:230px}.six-lesson select{width:90px}.six-controls{display:flex;gap:6px;margin-left:auto;flex:none}.six-controls select{height:38px;border:1px solid #cbd5e1;border-radius:6px;padding:5px;background:white;font-size:13px}#lesson-selectors{display:none!important}#screen-pages .page-a4{scroll-margin-top:80px}@media print{#screen-pages .page-a4{display:none!important}body.printing-all #print-all-container{display:block!important}}';
  style.textContent += '@font-face{font-family:VocabBpmf;src:url("fonts/BpmfIansui-Regular.ttf") format("truetype");font-display:block}body.show-zhuyin .vocab-meaning{font-family:VocabBpmf!important;font-weight:400}.six-ink-tools{position:fixed;right:12px;top:82px;z-index:51;background:white;border:1px solid #cbd5e1;border-radius:8px;padding:6px;box-shadow:0 4px 12px #0002;display:flex;gap:4px}.six-ink-tools[hidden]{display:none}.six-ink-tools button{padding:5px 8px;border:1px solid #cbd5e1;border-radius:5px;font-size:12px}.six-ink-tools button[aria-pressed=true]{background:#dbeafe}.six-ink-layer{position:absolute;left:0;top:0;width:100%;height:100%;z-index:40;pointer-events:none;touch-action:none}@media print{.six-ink-tools,.six-ink-layer{display:none!important}}';
  document.head.append(style);
  const inkTools = document.createElement('aside');
  inkTools.className = 'six-ink-tools no-print';
  inkTools.hidden = true;
  inkTools.innerHTML = '<button type="button" data-ink="pen" aria-label="紅筆">🖊 紅筆</button><button type="button" data-ink="highlight" aria-label="螢光筆">🖍 螢光筆</button><button type="button" data-ink="eraser" aria-label="橡皮擦">橡皮擦</button><button type="button" data-ink="undo" aria-label="復原">↶ 復原</button><button type="button" data-ink="clear" aria-label="清除筆跡">⌫ 清除</button>';
  document.body.append(inkTools);
  const inkLayer = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  inkLayer.classList.add('six-ink-layer', 'no-print');
  document.body.append(inkLayer);
  let inkMode = 'pen';
  let activeStroke = null;
  const inkStrokes = [];
  handwriting.addEventListener('change', () => {
    const enabled = handwriting.value === 'on';
    inkTools.hidden = !enabled;
    inkLayer.style.pointerEvents = enabled ? 'auto' : 'none';
  });
  inkTools.addEventListener('click', event => {
    const action = event.target.closest('[data-ink]')?.dataset.ink;
    if (!action) return;
    if (action === 'undo') inkStrokes.pop()?.remove();
    else if (action === 'clear') { inkStrokes.splice(0).forEach(stroke => stroke.remove()); }
    else inkMode = action;
    inkTools.querySelectorAll('[data-ink]').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.ink === inkMode)));
  });
  const point = event => `${event.clientX + scrollX},${event.clientY + scrollY}`;
  inkLayer.addEventListener('pointerdown', event => {
    if (inkMode === 'eraser') {
      const hit = inkStrokes.findLast(stroke => {
        const box = stroke.getBoundingClientRect();
        return event.clientX >= box.left - 12 && event.clientX <= box.right + 12 && event.clientY >= box.top - 12 && event.clientY <= box.bottom + 12;
      });
      if (hit) { hit.remove(); inkStrokes.splice(inkStrokes.indexOf(hit), 1); }
      return;
    }
    activeStroke = document.createElementNS('http://www.w3.org/2000/svg', 'polyline');
    activeStroke.setAttribute('points', point(event));
    activeStroke.setAttribute('fill', 'none');
    activeStroke.setAttribute('stroke', inkMode === 'highlight' ? '#facc15' : '#dc2626');
    activeStroke.setAttribute('stroke-width', inkMode === 'highlight' ? '16' : '3');
    activeStroke.setAttribute('stroke-linecap', 'round');
    activeStroke.setAttribute('stroke-linejoin', 'round');
    activeStroke.style.opacity = inkMode === 'highlight' ? '.45' : '1';
    inkLayer.append(activeStroke);
    inkStrokes.push(activeStroke);
    inkLayer.setPointerCapture(event.pointerId);
  });
  inkLayer.addEventListener('pointermove', event => { if (activeStroke) activeStroke.setAttribute('points', activeStroke.getAttribute('points') + ' ' + point(event)); });
  inkLayer.addEventListener('pointerup', () => { activeStroke = null; });
  inkLayer.addEventListener('pointercancel', () => { activeStroke = null; });
  let rendering = false;
  let observer;
  function renderAll() {
    if (rendering) return;
    rendering = true;
    observer?.disconnect();
    const keys = Array.from(lessonButtons.querySelectorAll('[data-lesson]'), button => button.dataset.lesson);
    lessonSelect.replaceChildren(...keys.map(key => new Option(key, key)));
    const selected = lessonSelect.value || keys[0];
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
    inkLayer.style.height = `${Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)}px`;
    window.setSixLesson(selected);
    lessonSelect.value = selected;
    observer = new IntersectionObserver(entries => {
      const visible = entries.filter(e => e.isIntersecting).sort((a,b) => b.intersectionRatio-a.intersectionRatio)[0];
      if (visible) { lessonSelect.value = visible.target.dataset.lesson; window.setSixLesson(lessonSelect.value); }
    }, { rootMargin:'-65px 0px -45% 0px', threshold:[0,0.25,0.5] });
    Array.from(pages.children).forEach(p => observer.observe(p));
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
    if (value === 'current') { window.print(); return; }
    if (kind === 'write' && value !== 'teacher') window.setWriteHintMode(value);
    originalPrint(value === 'teacher');
  };
  window.onload = () => { originalInit(); setTimeout(renderAll, 0); };
})();
