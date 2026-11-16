/* 單字講義統整框架（測試區）：聽力、配對、拼寫共用同一個頁面。
   版面與題目邏輯取自 hear.html / match.html / write.html；資料取自 ../eng-115/vocab-data.js。 */
(() => {
  'use strict';
  const DATA = window.VOCAB_DATA && window.VOCAB_DATA.books;
  if (!DATA) throw new Error('無法載入 vocab-data.js');

  const $ = id => document.getElementById(id);
  const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  const store = {
    get(k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
    set(k, v) { try { localStorage.setItem(k, v); } catch (e) { /* 無痕模式等情況：略過 */ }
    }
  };
  const params = new URLSearchParams(location.search);
  const MODES = ['hear', 'match', 'write'];
  const HINTS = { blank: '空白', count: '字數', initial: '字首', trace: '描寫' };

  let bookKey, lessonKey, mode, hint, db = {}, shortLabel = '';
  const pick = (value, allowed, fallback) => (allowed.includes(value) ? value : fallback);

  /* ---------- DOM ---------- */
  const stage = $('stage');
  const page = $('page');
  const bookSelect = $('bookSelect');
  const lessonSelect = $('lessonSelect');
  const writeTab = $('writeTab');
  const hintMenu = $('hintMenu');
  const style = document.createElement('style');
  document.head.append(style);

  /* ---------- 資料 ---------- */
  function adapt(book) {
    return Object.fromEntries(Object.entries(book.lessons).map(([key, groups]) => [
      key,
      groups.map(group => ({
        gTitle: `◎ ${group.title}`,
        words: [...group.words].sort((a, b) => a.order - b.order).map(w => ({ eng: w.english, ch: w.chinese }))
      }))
    ]));
  }
  function setBook(key) {
    bookKey = key;
    const book = DATA[key];
    shortLabel = book.label.replace(/^115-1\s+康軒/, '');
    db = adapt(book);
    const keys = Object.keys(db);
    lessonSelect.replaceChildren(...keys.map(k => new Option(k, k)));
    if (!keys.includes(lessonKey)) lessonKey = keys[0];
    lessonSelect.value = lessonKey;
  }

  /* ---------- 語音 ---------- */
  const synth = 'speechSynthesis' in window ? window.speechSynthesis : null;
  function say(text, lang, onend) {
    const u = new SpeechSynthesisUtterance(text);
    u.lang = lang;
    if (lang === 'en-US') u.rate = 0.85;
    if (onend) u.onend = onend;
    synth.speak(u);
    return u;
  }
  function stopSpeech() { if (synth) synth.cancel(); }
  function cleanPastTense(raw) {
    if (raw.includes('/')) {
      const parts = raw.split('/');
      const present = parts[0].trim();
      const words = parts[1].trim().split(/\s+/);
      return words.length > 1 ? `${present} ${words.slice(1).join(' ')}` : present;
    }
    return raw.trim();
  }
  function speakWord(word, clean) {
    if (!synth) return;
    stopSpeech();
    say(clean ? cleanPastTense(word) : word, 'en-US');
  }
  function previewLoop(words, index, gap) {
    if (!synth || index >= words.length) return;
    stopSpeech();
    say(words[index], 'en-US', () => setTimeout(() => previewLoop(words, index + 1, gap), gap));
  }

  /* ---------- 共用頁首 ---------- */
  function headerHtml(title, barHtml, teacher) {
    return `
      <div class="border-b-4 border-double border-slate-400 pb-2 mb-4 shrink-0">
        <div class="hdr-title">
          <h1 class="title-large text-slate-800 tracking-wider font-chinese">${esc(title)}</h1>
          ${teacher ? '<div class="teacher-tag">教師版・解答</div>' : `<div class="flex gap-4 info-text text-slate-700 font-chinese mb-1">
            <div class="flex items-end">
              <span class="border-b-2 border-slate-400 w-20 text-center h-7 inline-block"></span>
              <span class="ml-1 shrink-0">班</span>
            </div>
            <div class="flex items-end">
              <span class="shrink-0">姓名：</span>
              <span class="border-b-2 border-slate-400 w-28 text-center h-7 inline-block"></span>
            </div>
          </div>`}
        </div>
        ${barHtml}
      </div>`;
  }
  const simpleBar = text => `<div class="hdr-bar"><span>${text}</span></div>`;

  /* ---------- 作答配色（全站規則）
     學生作答＝藍底藍字；批改正確＝綠底綠字；批改錯誤＝消失；解答＝粉底紅字 ---------- */
  const STATES = ['v-student', 'v-right', 'v-answer'];
  function setState(input, state) {
    input.classList.remove(...STATES);
    if (state) input.classList.add('v-' + state);
    const cell = input.closest('.write-cell');
    if (cell) cell.classList.toggle('has-val', input.value !== '');
  }
  const ico = d => `<svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${d}</svg>`;
  const ICON = {
    play: ico('<polygon points="6 3 20 12 6 21 6 3"/>'),
    mic: ico('<path d="m3 11 18-5v12L3 14v-3z"/><path d="M11.6 16.8a3 3 0 1 1-5.8-1.6"/>'),
    check: ico('<path d="M20 6 9 17l-5-5"/>'),
    eraser: ico('<path d="m7 21-4.3-4.3c-1-1-1-2.5 0-3.4l9.6-9.6c1-1 2.5-1 3.4 0l5.6 5.6c1 1 1 2.5 0 3.4L13 21"/><path d="M22 21H7"/><path d="m5 11 9 9"/>'),
    eye: ico('<path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/>')
  };
  /* 每組標題列：按鈕順序固定為 [聽音] [批改] [清空] [解答]，三種題型共用 */
  const gbtn = (action, label, icon, data = '', tone = '') => `<button type="button" data-action="${action}" ${data} class="gbtn ${tone} no-print">${ICON[icon]}<span>${label}</span></button>`;
  const badgeHtml = gi => `<span id="score-${gi}" class="score no-print hidden"></span>`;
  const grpBar = (title, buttons, gi) => `<div class="grp-bar"><div class="grp-title"><h3>${esc(title)}</h3>${gi === undefined ? '' : badgeHtml(gi)}</div><div class="grp-btns">${buttons}</div></div>`;
  function showScore(gi, right, total) {
    const b = $(`score-${gi}`);
    if (b) { b.textContent = `答對 ${right} / ${total}`; b.classList.remove('hidden'); }
  }
  function hideScore(gi) {
    const b = $(`score-${gi}`);
    if (b) { b.textContent = ''; b.classList.add('hidden'); }
  }
  const checkBtn = (action, gi, total) => gbtn(action, '批改', 'check', `data-g="${gi}" data-total="${total}"`, 'tone-ok');
  const ansBtn = (action, gi) => gbtn(action, '解答', 'eye', `data-g="${gi}"`, 'tone-ans');

  /* =====================================================================
     聽力
     ===================================================================== */
  const hear = (() => {
    const titles = ['第一題', '第二題', '第三題', '第四題', '第五題', '第六題', '第七題', '第八題', '第九題', '第十題', '第十一題', '第十二題'];
    let orders = {}, groupShown = {};

    function seedShuffle(array, seed) {
      let h = 0;
      for (let i = 0; i < seed.length; i++) h = Math.imul(31, h) + seed.charCodeAt(i) | 0;
      const rnd = () => { const x = Math.sin(h++) * 10000; return x - Math.floor(x); };
      const out = [...array];
      for (let i = out.length - 1; i > 0; i--) {
        const j = Math.floor(rnd() * (i + 1));
        [out[i], out[j]] = [out[j], out[i]];
      }
      return out;
    }
    function initOrders(key) {
      db[key].forEach((g, idx) => { orders[`${key}-${idx}`] = seedShuffle(g.words.map(w => w.eng), `${key}-${idx}`); });
    }
    const inputs = g => document.querySelectorAll(`input[data-gidx="${g}"]`);
    const answerOf = input => orders[`${lessonKey}-${input.dataset.gidx}`].indexOf(input.dataset.eng) + 1;
    function paint(input, on) {
      input.value = on ? String(answerOf(input)) : '';
      setState(input, on ? 'answer' : null);
    }
    function groupHtml(group, gi, forPrint) {
      let rows = '';
      for (let i = 0; i < 12; i++) {
        const w = group.words[i];
        if (w) {
          rows += `
            <div class="flex items-center px-1 py-1.5 hover:bg-slate-50/80 rounded transition cursor-pointer single-row-item" data-action="speak" data-w="${esc(w.eng)}">
              <span class="text-slate-800 font-bold mr-1 shrink-0 text-[15px]">(</span>
              <input type="text" readonly tabindex="-1" maxlength="2" data-gidx="${gi}" data-eng="${esc(w.eng)}" class="answer-input w-7 h-5 text-center font-bold text-slate-800 border-b-2 border-slate-400 focus:outline-none bg-transparent shrink-0 text-[15px] pointer-events-none">
              <span class="text-slate-800 font-bold ml-1 shrink-0 text-[15px]">)</span>
              <span class="ml-2 font-medium font-english truncate flex-grow tracking-tight text-slate-800 word-eng-span" style="max-width: 155px;">${esc(w.eng)}</span>
              <span class="font-chinese text-slate-500 text-[14px] pl-2 truncate text-right shrink-0 font-medium" style="max-width: 125px;"><span class="vocab-meaning">${esc(w.ch)}</span></span>
            </div>`;
        } else {
          rows += `
            <div class="flex items-center px-1 py-1.5 opacity-0 pointer-events-none select-none">
              <span class="text-[15px]">(</span><input type="text" class="w-7 h-5 border-b-2 text-[15px]"><span class="text-[15px]">)</span><span class="ml-2 text-[15px]">Empty</span>
            </div>`;
        }
      }
      const buttons = forPrint ? '' :
        gbtn('hear-preview', '預習', 'play', `data-g="${gi}"`, 'tone-pre') +
        gbtn('hear-quiz', '小考', 'mic', `data-g="${gi}"`, 'tone-quiz') +
        ansBtn('hear-ans', gi);
      return `
        <div class="bg-white flex flex-col justify-start flex-grow">
          ${grpBar(group.gTitle, buttons)}
          <div class="flex flex-col flex-grow justify-start pl-1">${rows}</div>
        </div>`;
    }
    function scale() {
      document.querySelectorAll('.word-eng-span').forEach(span => {
        const n = span.innerText.length;
        if (n > 24) { span.style.fontSize = '11px'; span.style.letterSpacing = '-0.8px'; }
        else if (n > 18) { span.style.fontSize = '12.5px'; span.style.letterSpacing = '-0.5px'; }
        else if (n > 12) span.style.fontSize = '14px';
        else span.style.fontSize = '16px';
      });
    }
    function runQuiz(orderKey, index) {
      const list = orders[orderKey];
      if (!synth || index >= list.length) return;
      stopSpeech();
      say(titles[index], 'zh-TW', () => setTimeout(() => {
        say(list[index], 'en-US', () => setTimeout(() => {
          say(list[index], 'en-US', () => setTimeout(() => runQuiz(orderKey, index + 1), 1800));
        }, 1200));
      }, 400));
    }
    return {
      title: '聽力選擇卷',
      bar: simpleBar('◎錯字用紅筆訂正，中文、英文各 1 次。'),
      render(key) {
        groupShown = {};
        initOrders(key);
        return `<div class="grid grid-cols-2 gap-x-6 gap-y-4 flex-grow mb-1 overflow-hidden" id="groups">${db[key].map((g, i) => groupHtml(g, i, false)).join('')}</div><div class="h-1 shrink-0"></div>`;
      },
      after() { scale(); },
      fill(root, key) {
        root.querySelectorAll('.answer-input').forEach(i => {
          i.value = String(orders[`${key}-${i.dataset.gidx}`].indexOf(i.dataset.eng) + 1);
          i.classList.add('v-answer');
        });
      },
      actions: {
        'hear-preview': el => { previewLoop(db[lessonKey][+el.dataset.g].words.map(w => w.eng), 0, 1500); },
        'hear-quiz': el => {
          stopSpeech();
          groupShown[`${lessonKey}-${el.dataset.g}`] = false;
          inputs(el.dataset.g).forEach(i => paint(i, false));
          runQuiz(`${lessonKey}-${el.dataset.g}`, 0);
        },
        'hear-ans': el => {
          const g = +el.dataset.g, k = `${lessonKey}-${g}`;
          groupShown[k] = !groupShown[k];
          inputs(g).forEach(i => paint(i, groupShown[k]));
        }
      }
    };
  })();

  /* =====================================================================
     配對
     ===================================================================== */
  const match = (() => {
    const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
    const BASE = 'match-input w-5 h-5 text-center font-black focus:outline-none bg-transparent text-[14px] p-0 shrink-0 cursor-pointer pointer-events-none';
    let activeInput = null, pendingLetter = null, pendingOption = null;

    function shuffle(array, seed) {
      let hash = 0;
      for (let i = 0; i < seed.length; i++) hash = seed.charCodeAt(i) + ((hash << 5) - hash);
      const out = [...array];
      for (let i = out.length - 1; i > 0; i--) {
        const j = Math.abs((hash + i) % (i + 1));
        [out[i], out[j]] = [out[j], out[i]];
      }
      return out;
    }
    function groupHtml(group, gi) {
      const words = group.words, total = words.length, half = Math.ceil(total / 2);
      const partA = words.slice(0, half), partB = words.slice(half);
      const shufA = shuffle(partA, `${lessonKey}-${gi}-A`), shufB = shuffle(partB, `${lessonKey}-${gi}-B`);
      let rows = '';
      for (let i = 0; i < 12; i++) {
        const isB = i >= 6, li = isB ? i - 6 : i;
        const left = (isB ? partB : partA)[li], rightList = isB ? shufB : shufA, right = rightList[li];
        let rowClass = 'flex items-center justify-between row-item px-1 quiz-row';
        if (i === 6) rowClass += ' border-t-2 border-dashed border-slate-300 pt-0.5';
        let leftHtml;
        if (left) {
          const ans = letters[rightList.findIndex(x => x.ch === left.ch)];
          leftHtml = `
            <div class="flex items-center flex-grow truncate h-[28px] pr-2 rounded cursor-pointer transition select-none" data-action="match-row" data-w="${esc(left.eng)}">
              <span class="text-[14px] font-bold text-slate-700 shrink-0">(</span>
              <input type="text" maxlength="1" data-ans="${ans}" readonly class="${BASE}">
              <span class="text-[14px] font-bold text-slate-700 shrink-0 mr-2">)</span>
              <span class="font-bold text-slate-400 text-[12px] font-english mr-1.5 shrink-0">${li + 1}.</span>
              <span class="font-english font-medium text-slate-800 text-[15.5px] tracking-tight truncate word-span leading-[1.45] pb-[3px]">${esc(left.eng)}</span>
            </div>`;
        } else leftHtml = '<div class="flex-grow h-[28px] opacity-0 pointer-events-none"></div>';
        let rightHtml;
        if (right) {
          const last = li === rightList.length - 1 || li === 5;
          const radius = last ? 'rounded-b' : (li === 0 ? 'rounded-t' : 'rounded-none');
          rightHtml = `
            <div data-action="match-opt" data-letter="${letters[li]}" class="match-option-card flex items-center bg-sky-100 border-x border-sky-300 ${radius} ${li === 0 ? 'border-t' : ''} ${last ? 'border-b' : ''} px-2 w-[115px] h-[30px] shrink-0 shadow-sm cursor-pointer hover:bg-sky-200 transition">
              <span class="font-bold text-sky-800 text-[13px] font-english mr-1 shrink-0">${letters[li]}.</span>
              <span class="font-chinese text-slate-800 text-[13px] font-medium truncate flex-grow leading-none"><span class="vocab-meaning">${esc(right.ch)}</span></span>
            </div>`;
        } else rightHtml = '<div class="w-[115px] h-[30px] shrink-0 opacity-0 pointer-events-none"></div>';
        rows += `<div class="${rowClass}">${leftHtml}${rightHtml}</div>`;
      }
      const buttons = checkBtn('match-check', gi, total) + gbtn('match-clear', '清空', 'eraser', `data-g="${gi}"`) + ansBtn('match-ans', gi);
      return `
        <div class="bg-white flex flex-col justify-start flex-grow">
          ${grpBar(group.gTitle, buttons, gi)}
          <div class="flex flex-col flex-grow justify-start">${rows}</div>
        </div>`;
    }
    const groupInputs = g => { const box = document.querySelectorAll('#groups > div')[g]; return box ? box.querySelectorAll('.match-input') : []; };
    function clearPending() {
      if (pendingOption) pendingOption.classList.remove('match-option-selected');
      pendingLetter = null; pendingOption = null;
    }
    function resetState() {
      document.querySelectorAll('.quiz-row').forEach(r => r.classList.remove('active-row'));
      activeInput = null; clearPending();
    }
    function scale() {
      document.querySelectorAll('.word-span').forEach(span => {
        const n = span.innerText.length;
        if (n > 20) { span.style.fontSize = '11.5px'; span.style.letterSpacing = '-0.7px'; }
        else if (n > 14) { span.style.fontSize = '13.5px'; span.style.letterSpacing = '-0.3px'; }
        else span.style.fontSize = '15.5px';
      });
    }
    function fill(input, letter) {
      input.value = letter;
      setState(input, 'student');
      input.closest('.quiz-row').classList.remove('active-row');
    }
    return {
      title: '中英文配對卷',
      bar: simpleBar('◎ 請將正確英文單字的代號填入括號中。錯字用紅筆訂正，中文、英文各 1 次。'),
      render(key) {
        activeInput = null; clearPending();
        return `<div class="grid grid-cols-2 gap-x-6 gap-y-4 flex-grow mb-1 overflow-hidden" id="groups">${db[key].map((g, i) => groupHtml(g, i)).join('')}</div><div class="h-1 shrink-0"></div>`;
      },
      after() { scale(); },
      fill(root) {
        root.querySelectorAll('.match-input').forEach(i => { i.value = i.dataset.ans; i.classList.add('v-answer'); });
      },
      actions: {
        'match-row'(el) {
          document.querySelectorAll('.quiz-row').forEach(r => r.classList.remove('active-row'));
          const row = el.closest('.quiz-row');
          row.classList.add('active-row');
          activeInput = row.querySelector('.match-input');
          speakWord(el.dataset.w, false);
          if (pendingLetter) {
            fill(activeInput, pendingLetter);
            activeInput = null; clearPending();
          }
        },
        'match-opt'(el) {
          if (activeInput) {
            fill(activeInput, el.dataset.letter);
            activeInput = null; clearPending();
          } else {
            clearPending();
            pendingLetter = el.dataset.letter; pendingOption = el;
            el.classList.add('match-option-selected');
          }
        },
        'match-check'(el) {
          let right = 0;
          groupInputs(+el.dataset.g).forEach(input => {
            const mine = input.value.trim().toUpperCase();
            if (mine === '') return;
            if (mine === input.dataset.ans) { right++; setState(input, 'right'); }
            else { input.value = ''; setState(input, null); }
          });
          showScore(el.dataset.g, right, el.dataset.total);
        },
        'match-clear'(el) {
          groupInputs(+el.dataset.g).forEach(i => { i.value = ''; setState(i, null); });
          resetState();
          hideScore(el.dataset.g);
        },
        'match-ans'(el) {
          const list = groupInputs(+el.dataset.g);
          const showing = list.length > 0 && list[0].classList.contains('v-answer');
          list.forEach(i => { i.value = showing ? '' : i.dataset.ans; setState(i, showing ? null : 'answer'); });
          resetState();
          hideScore(el.dataset.g);
        }
      }
    };
  })();

  /* =====================================================================
     拼寫（空白／字數／字首／描寫）
     ===================================================================== */
  const write = (() => {
    let qNo = 1, groupShown = {};
    const traceScale = a => { const n = Array.from(a).length; return n > 28 ? 0.44 : n > 22 ? 0.6 : n > 17 ? 0.76 : 1; };
    const hintScale = a => { const n = Array.from(a).length; return n > 28 ? 0.44 : n > 22 ? 0.6 : n > 17 ? 0.76 : n > 13 ? 0.88 : 1; };
    const inputs = g => document.querySelectorAll(`.spelling-input[data-gidx="${g}"]`);
    function hintHtml(answer) {
      if (hint === 'blank') return '<span class="write-print-hint" aria-hidden="true"></span>';
      if (hint === 'trace') return `<span class="write-print-hint write-hint-trace" style="--write-trace-scale:${traceScale(answer)}" aria-hidden="true">${esc(answer)}</span>`;
      let first = false;
      const tokens = Array.from(answer).map(ch => {
        if (/[A-Za-z]/.test(ch)) {
          const v = hint === 'initial' && !first ? ch : '_';
          first = true;
          return `<span class="write-hint-token">${esc(v)}</span>`;
        }
        if (/\s/.test(ch)) return '<span class="write-hint-space"></span>';
        return `<span class="write-hint-token">${esc(ch)}</span>`;
      }).join('');
      return `<span class="write-print-hint" style="font-size:17pt;--write-hint-scale:${hintScale(answer)}" aria-hidden="true"><span class="write-hint-content">${tokens}</span></span>`;
    }
    function groupHtml(group, gi) {
      let rows = '';
      for (let i = 0; i < 12; i++) {
        const w = group.words[i];
        if (w) {
          const clean = cleanPastTense(w.eng);
          rows += `
            <div class="flex items-center px-1 write-word-row row-border-style transition hover:bg-slate-50/50 cursor-pointer" data-action="speak" data-clean="1" data-w="${esc(w.eng)}">
              <div class="write-prompt text-slate-800 font-chinese font-medium">
                <span class="write-prompt-number font-bold text-slate-400 font-english text-[13px]">${qNo}.</span>
                <span class="write-meaning-window"><span class="vocab-meaning">${esc(w.ch)}</span></span>
              </div>
              <div class="write-cell flex-grow relative font-english pl-2 h-5 flex items-center">
                <input type="text" readonly tabindex="-1" data-gidx="${gi}" data-ans="${esc(clean)}" class="spelling-input no-print pointer-events-none w-full bg-transparent focus:outline-none text-[15px] font-bold text-slate-800 tracking-wide">
                ${hintHtml(clean)}
              </div>
            </div>`;
          qNo++;
        } else {
          rows += `
            <div class="flex items-center px-1 write-word-row row-border-style opacity-0 pointer-events-none select-none">
              <div class="write-prompt"></div><div class="flex-grow h-5"></div>
            </div>`;
        }
      }
      const buttons = gbtn('write-preview', '預習', 'play', `data-g="${gi}"`, 'tone-pre') + ansBtn('write-ans', gi);
      return `
        <div class="bg-white flex flex-col justify-start flex-grow">
          ${grpBar(group.gTitle, buttons)}
          <div class="flex flex-col flex-grow justify-start pl-1">${rows}</div>
        </div>`;
    }
    return {
      title: '單字拼寫卷',
      bar: `<div class="hdr-bar"><span>◎ 生字 (每個字 2 分，每次考 <span class="blank"></span> 個單字)</span><span>◎ 錯字請用紅筆訂正：中文 1 次、英文 1 次。</span></div>`,
      render(key) {
        qNo = 1; groupShown = {};
        return `<div class="grid grid-cols-2 gap-x-6 gap-y-4 flex-grow mb-1 overflow-hidden" id="groups">${db[key].map((g, i) => groupHtml(g, i)).join('')}</div><div class="h-1 shrink-0"></div>`;
      },
      after() {},
      actions: {
        'write-preview': el => { previewLoop(db[lessonKey][+el.dataset.g].words.map(w => w.eng), 0, 1400); },
        'write-ans': el => {
          const g = +el.dataset.g;
          groupShown[g] = !groupShown[g];
          inputs(g).forEach(i => { i.value = groupShown[g] ? i.dataset.ans : ''; setState(i, groupShown[g] ? 'answer' : null); });
        }
      }
    };
  })();

  const M = { hear, match, write };

  /* ---------- 繪製 ---------- */
  function paintToolbar() {
    document.querySelectorAll('.tab[data-mode]').forEach(b => b.setAttribute('aria-pressed', String(b.dataset.mode === mode)));
    writeTab.setAttribute('aria-pressed', String(mode === 'write'));
    $('writeLabel').textContent = mode === 'write' ? `拼寫・${HINTS[hint]} ▾` : '拼寫 ▾';
    hintMenu.querySelectorAll('[data-hint]').forEach(b => b.setAttribute('aria-checked', String(mode === 'write' && b.dataset.hint === hint)));
  }
  let ink = { finish() {}, clear() {} };
  function render() {
    stopSpeech();
    ink.finish(); ink.clear();
    const m = M[mode];
    document.body.dataset.mode = mode;
    document.title = `單字講義（測試）－${m.title}`;
    page.innerHTML = headerHtml(`${shortLabel} ${lessonKey} 英文科講義 ${m.title}`, m.bar) + m.render(lessonKey);
    m.after();
    paintToolbar();
    store.set('vocab-app-book', bookKey);
    store.set('vocab-app-lesson', lessonKey);
    store.set('vocab-app-mode', mode);
    store.set('vocab-app-hint', hint);
  }

  /* ---------- 列印本冊 ---------- */
  const PRINT_MODES = [['hear', null], ['match', null], ['write', 'blank'], ['write', 'count'], ['write', 'initial'], ['write', 'trace']];
  const TEACHER_MODES = [['hear', null], ['match', null]];
  const printKinds = { student: PRINT_MODES, zhuyin: PRINT_MODES, teacher: TEACHER_MODES };
  function paintPrintLabels() {
    const n = Object.keys(db).length;
    printMenu.querySelectorAll('[data-print]').forEach(b => {
      const kind = b.dataset.print;
      if (kind === 'page') return;
      const label = { student: '學生版', zhuyin: '注音版', teacher: '教師版' }[kind];
      b.textContent = `列印本冊(${label}${n * printKinds[kind].length}頁)`;
    });
  }
  function buildPage(key, md, hn, teacher) {
    const savedLesson = lessonKey, savedHint = hint;
    lessonKey = key; hint = hn || hint;
    const m = M[md];
    const body = m.render(key);
    lessonKey = savedLesson; hint = savedHint;
    const el = document.createElement('div');
    el.className = 'page-a4';
    el.innerHTML = headerHtml(`${shortLabel} ${key} 英文科講義 ${m.title}`, m.bar, teacher)
      + body.replace(/ id="groups"/g, '').replace(/ id="score-/g, ' data-id="score-');
    if (teacher) m.fill(el, key);
    return el;
  }
  let printing = false;
  async function printBook(kind) {
    if (printing || !printKinds[kind]) return;
    printing = true;
    stopSpeech(); ink.finish();
    const teacher = kind === 'teacher';
    const frag = document.createDocumentFragment();
    Object.keys(db).forEach(key => printKinds[kind].forEach(([md, hn]) => frag.append(buildPage(key, md, hn, teacher))));
    printRoot.replaceChildren(frag);
    const hadZhuyin = document.body.classList.contains('show-zhuyin');
    document.body.classList.toggle('show-zhuyin', kind === 'zhuyin');
    document.body.classList.add('batch');
    let finished = false;
    const finish = () => {
      if (finished) return;
      finished = true;
      document.body.classList.remove('batch');
      document.body.classList.toggle('show-zhuyin', hadZhuyin);
      printRoot.replaceChildren();
      printing = false;
      render();
    };
    window.addEventListener('afterprint', finish, { once: true });
    try {
      void printRoot.offsetHeight;
      const wait = [document.fonts.ready];
      if (kind === 'zhuyin') wait.push(document.fonts.load('400 16px "Bpmf GenSen Rounded"', '中ㄅ').catch(() => {}));
      await Promise.race([Promise.all(wait), new Promise(r => setTimeout(r, 5000))]);
      await new Promise(r => setTimeout(r, 150));
      window.print();
    } catch (err) { finish(); }
  }

  /* ---------- 事件 ---------- */
  stage.addEventListener('click', e => {
    const el = e.target.closest('[data-action]');
    if (!el) return;
    if (e.target.closest('input') && el.dataset.action === 'speak') return;
    const name = el.dataset.action;
    if (name === 'speak') { speakWord(el.dataset.w, el.dataset.clean === '1'); return; }
    const fn = M[mode].actions[name];
    if (fn) fn(el);
  });
  bookSelect.addEventListener('change', () => { setBook(bookSelect.value); paintPrintLabels(); render(); });
  lessonSelect.addEventListener('change', () => { lessonKey = lessonSelect.value; render(); });
  document.querySelectorAll('.tab[data-mode]').forEach(b => b.addEventListener('click', () => {
    closeMenu();
    if (mode !== b.dataset.mode) { mode = b.dataset.mode; render(); }
  }));
  const printBtn = $('printBtn');
  const printMenu = $('printMenu');
  const printRoot = $('printRoot');
  function closeMenu() {
    hintMenu.hidden = true; writeTab.setAttribute('aria-expanded', 'false');
    printMenu.hidden = true; printBtn.setAttribute('aria-expanded', 'false');
  }
  writeTab.addEventListener('click', e => {
    e.stopPropagation();
    const open = hintMenu.hidden;
    closeMenu();
    hintMenu.hidden = !open;
    writeTab.setAttribute('aria-expanded', String(!hintMenu.hidden));
  });
  hintMenu.addEventListener('click', e => {
    const b = e.target.closest('[data-hint]');
    if (!b) return;
    hint = b.dataset.hint;
    mode = 'write';
    closeMenu();
    render();
  });
  document.addEventListener('click', e => { if (!e.target.closest('.tab-menu')) closeMenu(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeMenu(); });
  printBtn.addEventListener('click', e => {
    e.stopPropagation();
    const open = printMenu.hidden;
    closeMenu();
    printMenu.hidden = !open;
    printBtn.setAttribute('aria-expanded', String(open));
  });
  printMenu.addEventListener('click', e => {
    const b = e.target.closest('[data-print]');
    if (!b) return;
    closeMenu();
    if (b.dataset.print === 'page') window.print();
    else printBook(b.dataset.print);
  });
  $('zhuyinBtn').addEventListener('click', e => {
    const on = document.body.classList.toggle('show-zhuyin');
    e.currentTarget.setAttribute('aria-pressed', String(on));
  });

  /* ---------- 手寫（沿用文法講義 v1.4 的墨跡模組） ---------- */
  style.textContent += "/* v1.4 module: optional speech and independent document-anchored ink. */\n#inkToggle[aria-pressed=\"true\"],.ink-tools button[aria-pressed=\"true\"]{background:#dbeafe;border-color:#60a5fa;color:#163f78}\n.ink-tools{position:fixed;left:6px;top:50%;transform:translateY(-50%);z-index:60;display:grid;gap:5px;padding:5px;background:#fffffff2;border:1px solid var(--line);border-radius:9px;box-shadow:0 3px 12px #0002}\n.ink-tools button{display:grid;place-items:center;width:36px;height:38px;border:1px solid var(--line);border-radius:6px;background:white;font-size:19px;cursor:pointer}.ink-tools button svg{width:21px;height:21px}\n#inkLayer{position:absolute;left:0;top:0;width:100%;z-index:20;pointer-events:none;overflow:hidden}body.ink-enabled .paper{touch-action:none;cursor:crosshair}\n.ink-tools{--line:#cbd5e1}.ink-tools[hidden],.module-notice[hidden]{display:none}\n@media print{#inkLayer,.ink-tools,.module-notice{display:none!important}}";
  document.body.insertAdjacentHTML('beforeend', "<aside id=\"inkTools\" class=\"ink-tools\" hidden aria-label=\"手寫工具\"><button type=\"button\" data-ink=\"close\" title=\"關閉手寫\" aria-label=\"關閉手寫\">×</button><button type=\"button\" data-ink=\"pen\" aria-pressed=\"true\" title=\"紅筆\" aria-label=\"紅筆\"><svg viewBox=\"0 0 24 24\" aria-hidden=\"true\"><path d=\"M5 16 16 5l3 3L8 19l-4 1z\" fill=\"none\" stroke=\"#d62828\" stroke-width=\"2.5\"/></svg></button><button type=\"button\" data-ink=\"highlight\" aria-pressed=\"false\" title=\"螢光筆\" aria-label=\"螢光筆\"><svg viewBox=\"0 0 24 24\" aria-hidden=\"true\"><path d=\"m6 14 8-10 6 5-8 10z\" fill=\"#fde047\" stroke=\"#806700\"/><path d=\"M4 21h13\" stroke=\"#e5bd00\" stroke-width=\"3\"/></svg></button><button type=\"button\" data-ink=\"eraser\" aria-pressed=\"false\" title=\"橡皮擦\" aria-label=\"橡皮擦\">▱</button><button type=\"button\" data-ink=\"undo\" title=\"復原上一步\" aria-label=\"復原上一步\">↶</button><button type=\"button\" data-ink=\"clear\" title=\"全部清除筆跡\" aria-label=\"全部清除筆跡\">⌫</button></aside><svg id=\"inkLayer\" xmlns=\"http://www.w3.org/2000/svg\" aria-hidden=\"true\"></svg><div id=\"moduleNotice\" class=\"module-notice\" role=\"status\" hidden></div>");
  style.textContent += 'body.ink-enabled #stage .page-a4{user-select:none}body.ink-enabled #stage :is([data-action],button,input){cursor:crosshair}';

  function mountInk(paper, inkButton) {
    const notice = document.getElementById('moduleNotice');
    let noticeTimer;
    function inform(text) {
      notice.textContent = text;
      notice.hidden = false;
      clearTimeout(noticeTimer);
      noticeTimer = setTimeout(() => { notice.hidden = true; }, 4200);
    }


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
    const anchorSelector='.single-row-item,.row-border-style,.match-option-card,[data-action],h1,h2,h3,p';
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
    return { finish, clear: () => { strokes = []; history = []; schedule(); } };
  }

  /* ---------- 啟動 ---------- */
  Object.entries(DATA).forEach(([key, book]) => bookSelect.add(new Option(book.label, key)));
  bookKey = pick(params.get('book'), Object.keys(DATA), pick(store.get('vocab-app-book'), Object.keys(DATA), Object.keys(DATA)[0]));
  lessonKey = params.get('lesson') || store.get('vocab-app-lesson');
  mode = pick(params.get('mode'), MODES, pick(store.get('vocab-app-mode'), MODES, 'hear'));
  hint = pick(params.get('hint'), Object.keys(HINTS), pick(store.get('vocab-app-hint'), Object.keys(HINTS), 'blank'));
  bookSelect.value = bookKey;
  setBook(bookKey);
  paintPrintLabels();
  ink = mountInk(stage, $('inkBtn'));
  render();
})();
