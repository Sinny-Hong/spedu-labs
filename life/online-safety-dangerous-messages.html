<!DOCTYPE html>
<html lang="zh-TW">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>網路安全防衛隊：五個危險訊息大考驗</title>
  <!-- 引入 Tailwind CSS -->
  <script src="https://cdn.tailwindcss.com"></script>
  <!-- 引入 Google Fonts: Noto Sans TC & Lexend -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Lexend:wght@500;700&family=Noto+Sans+TC:wght@400;500;700;900&display=swap" rel="stylesheet">
  <style>
    body {
      font-family: 'Lexend', 'Noto Sans TC', sans-serif;
    }
    /* 自訂捲軸美化（僅在極小螢幕或字體放大時備用） */
    ::-webkit-scrollbar {
      width: 6px;
      height: 6px;
    }
    ::-webkit-scrollbar-track {
      background: transparent;
    }
    ::-webkit-scrollbar-thumb {
      background: #cbd5e1;
      border-radius: 9999px;
    }
  </style>
</head>
<body class="bg-slate-100 text-slate-800 min-h-screen lg:h-screen lg:overflow-hidden flex flex-col select-none">

  <!-- ==================== 頂部極簡狀態列 (固定高度 h-16) ==================== -->
  <header class="bg-indigo-900 text-white h-16 px-4 lg:px-8 flex items-center justify-between shrink-0 shadow-md z-20">
    <!-- 左側：標題 -->
    <div class="flex items-center gap-3">
      <span class="text-2xl lg:text-3xl">🛡️</span>
      <h1 class="text-lg lg:text-2xl font-black tracking-wide truncate">
        網路安全防衛隊
        <span class="hidden sm:inline-block text-indigo-300 font-medium text-base lg:text-lg ml-2">｜五大危險訊息考驗</span>
      </h1>
    </div>

    <!-- 中間：關卡進度圓點 (大螢幕顯示) -->
    <div id="progress-dots" class="hidden md:flex items-center gap-2 bg-indigo-950/60 px-4 py-1.5 rounded-full border border-indigo-700">
      <!-- 由 JS 動態產生 5 個關卡指示燈 -->
    </div>

    <!-- 右側：關卡數與得分 -->
    <div class="flex items-center gap-3 lg:gap-4 shrink-0">
      <div class="bg-indigo-800 px-3 py-1 rounded-lg border border-indigo-600 text-sm lg:text-base font-bold">
        關卡 <span id="level-indicator" class="text-amber-300 text-lg lg:text-xl mx-0.5">1</span> / 5
      </div>
      <div class="bg-amber-400 text-slate-900 px-3.5 py-1 rounded-lg font-black text-sm lg:text-base flex items-center gap-1.5 shadow-sm">
        <span>⭐ 得分：</span>
        <span id="score-indicator" class="text-lg lg:text-xl">0</span>
      </div>
    </div>
  </header>

  <!-- ==================== 主內容區 (大螢幕左右雙欄、零捲動) ==================== -->
  <main id="game-Screen" class="flex-1 max-w-[1600px] w-full mx-auto p-3 lg:p-6 grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6 lg:h-[calc(100vh-4rem)] lg:overflow-hidden">

    <!-- 【左側欄：模擬手機聊天室】(佔 5/12) -->
    <section class="lg:col-span-5 bg-white rounded-2xl shadow-sm border border-slate-200 flex flex-col lg:h-full overflow-hidden relative">
      
      <!-- 聊天室頂部聯絡人資訊 -->
      <div class="bg-slate-800 text-white px-4 py-3 flex items-center justify-between shrink-0">
        <div class="flex items-center gap-3">
          <div id="avatar-box" class="w-10 h-10 rounded-full bg-indigo-500 flex items-center justify-center text-xl shadow-inner">
            👤
          </div>
          <div>
            <div class="flex items-center gap-2">
              <span id="scenario-badge" class="bg-amber-400 text-slate-900 text-xs font-black px-2 py-0.5 rounded">01 網友借錢</span>
              <h2 id="sender-name" class="font-bold text-base lg:text-lg">網友阿凱</h2>
            </div>
            <p id="sender-status" class="text-xs text-slate-300">一起打遊戲認識三週的網友</p>
          </div>
        </div>
        <!-- 危險警訊提示按鈕 -->
        <button onclick="toggleHint()" class="bg-rose-500 hover:bg-rose-600 active:scale-95 transition text-white text-xs lg:text-sm font-bold px-3 py-1.5 rounded-full flex items-center gap-1 shadow">
          <span>🔍</span>
          <span>危險警訊提示</span>
        </button>
      </div>

      <!-- 聊天訊息顯示區 -->
      <div class="flex-1 bg-slate-100 p-4 lg:p-5 flex flex-col justify-center gap-3 overflow-y-auto relative">
        
        <!-- 情境背景小字條 -->
        <div class="bg-slate-200/90 text-slate-700 text-xs lg:text-sm px-3 py-2 rounded-lg text-center font-medium mx-auto max-w-md shadow-sm">
          📢 <span id="context-text">週末晚上，突然收到網友連發好幾則訊息...</span>
        </div>

        <!-- 對方傳來的訊息氣泡 1 -->
        <div class="flex items-start gap-2.5 mt-1">
          <div id="chat-avatar-1" class="w-8 h-8 rounded-full bg-slate-300 flex items-center justify-center text-sm shrink-0 mt-1">👤</div>
          <div class="bg-white border border-slate-200 rounded-2xl rounded-tl-none px-4 py-3 shadow-sm max-w-[88%]">
            <p id="msg-1" class="text-slate-800 text-base lg:text-lg leading-relaxed font-medium"></p>
          </div>
        </div>

        <!-- 對方傳來的訊息氣泡 2 (重點釣魚台詞) -->
        <div class="flex items-start gap-2.5">
          <div id="chat-avatar-2" class="w-8 h-8 rounded-full bg-slate-300 flex items-center justify-center text-sm shrink-0 mt-1">👤</div>
          <div class="bg-amber-50 border-2 border-amber-300 rounded-2xl rounded-tl-none px-4 py-3 shadow-sm max-w-[90%]">
            <p id="msg-2" class="text-slate-900 text-base lg:text-lg leading-relaxed font-bold"></p>
          </div>
        </div>

        <!-- 浮動式「危險警訊提示卡」(點開時覆蓋在聊天室下方，不撐高版面) -->
        <div id="hint-drawer" class="hidden absolute inset-x-3 bottom-3 bg-rose-950/95 text-white p-4 rounded-xl shadow-xl border border-rose-400 z-10 transition-all">
          <div class="flex items-start justify-between gap-2">
            <div class="flex items-center gap-2 text-rose-300 font-black text-sm lg:text-base mb-1">
              <span>⚠️ 背後隱藏的危險警訊：</span>
            </div>
            <button onclick="toggleHint()" class="text-rose-300 hover:text-white text-xs bg-rose-800 px-2 py-0.5 rounded">關閉 ✕</button>
          </div>
          <p id="hint-text" class="text-sm lg:text-base text-rose-50 leading-relaxed font-medium"></p>
        </div>

      </div>

      <!-- 模擬底部輸入框裝飾 -->
      <div class="bg-white border-t border-slate-200 px-4 py-2.5 flex items-center gap-2 text-slate-400 text-xs lg:text-sm shrink-0">
        <div class="flex-1 bg-slate-100 rounded-full px-4 py-1.5 truncate">請從右側選擇最安全的應對方式...</div>
        <span class="text-lg">➤</span>
      </div>
    </section>

    <!-- 【右側欄：作答選項 ＋ 固定回饋區】(佔 7/12) -->
    <section class="lg:col-span-7 flex flex-col justify-between gap-3 lg:gap-4 lg:h-full overflow-hidden">
      
      <!-- 上半部：題目提示與 3 個選項按鈕 -->
      <div class="bg-white rounded-2xl shadow-sm border border-slate-200 p-4 lg:p-6 flex-1 flex flex-col justify-between overflow-hidden">
        
        <div class="flex items-center justify-between border-b border-slate-100 pb-2.5 shrink-0">
          <h3 class="text-lg lg:text-xl font-black text-indigo-950 flex items-center gap-2">
            <span>🤔</span>
            <span>收到這則訊息，你該怎麼做最安全？</span>
          </h3>
          <span id="score-rule-badge" class="text-xs lg:text-sm font-bold text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-md shrink-0">
            一次答對 +20 分
          </span>
        </div>

        <!-- 選項容器 (自動均分高度，保證不超出) -->
        <div id="options-container" class="flex-1 flex flex-col justify-center gap-2.5 lg:gap-3.5 my-2">
          <!-- 由 JS 動態產生 3 個大按鈕 -->
        </div>

      </div>

      <!-- 下半部：固定高度回饋與「下一關」操作區 (h-44，永遠固定在右下角，免捲動！) -->
      <div id="feedback-box" class="bg-slate-200/70 border-2 border-dashed border-slate-300 rounded-2xl p-4 lg:p-5 h-auto lg:h-44 shrink-0 flex flex-col justify-center transition-all duration-200">
        
        <!-- 預設尚未作答時的提示畫面 -->
        <div id="feedback-placeholder" class="text-center text-slate-500 flex flex-col items-center justify-center gap-1 py-2">
          <span class="text-2xl">👆</span>
          <p class="font-bold text-sm lg:text-base">請點擊上方 A、B、C 其中一個選項來作答！</p>
          <p class="text-xs text-slate-400">作答後，這裡會直接顯示解析與「下一關」按鈕，不用往下滑喔！</p>
        </div>

        <!-- 作答後的回饋內容 (預設隱藏) -->
        <div id="feedback-content" class="hidden h-full flex flex-col justify-between gap-2">
          <div class="flex items-start gap-3">
            <div id="feedback-icon" class="text-2xl lg:text-3xl shrink-0 mt-0.5">✅</div>
            <div class="flex-1">
              <h4 id="feedback-title" class="font-black text-base lg:text-lg">答對了！做得好！</h4>
              <p id="feedback-desc" class="text-slate-700 text-sm lg:text-base leading-snug mt-0.5 font-medium"></p>
            </div>
          </div>

          <!-- 底部口訣與下一關按鈕同行排列 -->
          <div class="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-black/10">
            <div class="bg-white/90 px-3 py-1 rounded-lg border border-black/10 text-xs lg:text-sm font-black text-indigo-950 flex items-center gap-1.5">
              <span>📌 黃金口訣：</span>
              <span id="feedback-slogan" class="text-rose-600">不匯款、不買點數！</span>
            </div>

            <button id="next-btn" onclick="nextLevel()" class="hidden bg-indigo-600 hover:bg-indigo-700 active:scale-95 text-white font-black text-sm lg:text-base px-5 py-2 rounded-xl shadow-md transition flex items-center gap-2 ml-auto">
              <span id="next-btn-text">下一關</span>
              <span>➔</span>
            </button>
          </div>
        </div>

      </div>

    </section>

  </main>

  <!-- ==================== 總結過關畫面 (大螢幕同樣雙欄零捲動) ==================== -->
  <section id="summary-screen" class="hidden flex-1 max-w-[1500px] w-full mx-auto p-4 lg:p-6 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:h-[calc(100vh-4rem)] lg:overflow-hidden items-center">
    
    <!-- 左欄：總分獎盃卡 (佔 4/12) -->
    <div class="lg:col-span-4 bg-white rounded-3xl shadow-md border border-slate-200 p-6 lg:p-8 text-center flex flex-col items-center justify-center lg:h-full">
      <div class="text-6xl lg:text-7xl mb-3">🏆</div>
      <h2 class="text-2xl lg:text-3xl font-black text-indigo-950">闖關大成功！</h2>
      <p class="text-slate-500 text-sm lg:text-base mt-1">恭喜你完成五大網路危機考驗</p>
      
      <div class="my-6 bg-amber-50 border-2 border-amber-300 rounded-2xl py-4 px-8 w-full">
        <div class="text-sm font-bold text-amber-800">最終獲得總分</div>
        <div class="text-5xl lg:text-6xl font-black text-amber-500 my-1">
          <span id="final-score">100</span> <span class="text-2xl">分</span>
        </div>
        <div id="final-rank" class="text-sm font-black text-indigo-900 bg-amber-200 inline-block px-3 py-0.5 rounded-full mt-1">
          🌟 特級資安防衛隊長
        </div>
      </div>

      <button onclick="restartGame()" class="w-full bg-indigo-600 hover:bg-indigo-700 active:scale-95 text-white font-black text-lg py-3.5 rounded-xl shadow-lg transition flex items-center justify-center gap-2">
        <span>🔄</span>
        <span>再挑戰一次</span>
      </button>
    </div>

    <!-- 右欄：五大黃金防身口訣總複習 (佔 8/12) -->
    <div class="lg:col-span-8 bg-white rounded-3xl shadow-md border border-slate-200 p-5 lg:p-7 flex flex-col justify-between lg:h-full overflow-hidden">
      <div class="border-b border-slate-100 pb-3 shrink-0 flex items-center justify-between">
        <h3 class="text-xl lg:text-2xl font-black text-indigo-950 flex items-center gap-2">
          <span>🛡️️</span>
          <span>網路安全「三不與求助」黃金口訣總整理</span>
        </h3>
        <span class="text-xs lg:text-sm bg-emerald-100 text-emerald-800 font-bold px-3 py-1 rounded-full">全班一起大聲讀！</span>
      </div>

      <div id="summary-list" class="flex-1 flex flex-col justify-around gap-2 my-2 overflow-y-auto">
        <!-- 由 JS 動態填入 5 條口訣卡片 -->
      </div>
    </div>

  </section>

  <!-- ==================== 遊戲題庫與互動腳本 ==================== -->
  <script>
    const levels = [
      {
        id: "01 網友借錢",
        sender: "網友阿凱",
        status: "一起打遊戲認識三週的網友（沒見過面）",
        avatar: "🎮",
        context: "週末晚上，一起打手遊的網友阿凱突然連發好幾則緊急訊息給你...",
        msg1: "救命啊！我剛剛出門不小心把媽媽的機車弄壞了，現在在車行修理，還差 1,000 元，但我不敢跟家裡說……",
        msg2: "你現在去巷口超商，幫我買一張 1,000 元的『遊戲點數卡』，把背面密碼拍照傳給我就好！拜託啦，明天馬上雙倍還你！",
        hint: "機車行修車根本不可能收「遊戲點數卡」！這通常是詐騙集團假裝交朋友，或是對方的帳號已經被壞人盜用了，錢跟點數傳出去絕對拿不回來。",
        slogan: "不匯款、不買點數！先打電話查證或問師長。",
        options: [
          {
            label: "A",
            text: "夠義氣！馬上拿零用錢去超商幫他買點數卡，拍照傳過去救急。",
            correct: false,
            feedback: "太危險了！修機車怎麼可能用遊戲點數付錢？點數密碼一傳過去，對方馬上就會消失並封鎖你喔！請再選一次！"
          },
          {
            label: "B",
            text: "堅持「不匯款、不買點數」，直接拒絕他，並把這件事告訴爸媽或老師。",
            correct: true,
            feedback: "完全正確！網路上談到「借錢、買點數卡」99% 都是詐騙或帳號被盜，拒絕並找大人商量是最聰明的做法！"
          },
          {
            label: "C",
            text: "1,000 元太多了，先幫他買 300 元的點數卡就好，就算被騙也不會損失太多。",
            correct: false,
            feedback: "不可以喔！不管是 1,000 元還是 300 元，只要買了就是掉進詐騙陷阱，壞人還會繼續找藉口跟你要更多錢！請再選一次！"
          }
        ]
      },
      {
        id: "02 免費點數",
        sender: "福利發送中心",
        status: "頭貼是熱門遊戲圖案的陌生帳號",
        avatar: "🎁",
        context: "你在社群看到「私訊免費領 5000 鑽石」的活動，好奇點進去私訊對方...",
        msg1: "🎉 恭喜你成為今天的幸運玩家！你已獲得『傳說限定造型＋5000 免費點數』領取資格！",
        msg2: "名額只剩最後 3 個！請在 5 分鐘內回覆你的『遊戲登入帳號』和『密碼』，工程師會直接登入幫你把點數存進去，逾時不候！",
        hint: "故意說「只剩 3 個名額、倒數 5 分鐘」是為了製造緊張感，讓你來不及思考！真正的遊戲公司絕對不會跟玩家要密碼。",
        slogan: "不貪心、不給帳密！官方絕對不會要你的密碼。",
        options: [
          {
            label: "A",
            text: "太幸運了！趕快在 5 分鐘內把我的遊戲帳號跟密碼打字傳給他。",
            correct: false,
            feedback: "糟了！只要把帳號密碼交出去，壞人一秒就會把你的遊戲帳號偷走、改掉密碼，甚至盜刷裡面綁定的信用卡！請再選一次！"
          },
          {
            label: "B",
            text: "給他帳號就好，密碼先給假的試試看，看他會不會真的給我點數。",
            correct: false,
            feedback: "別浪費時間跟詐騙集團周旋！他們接下來可能會誘導你點釣魚網站或要求手機驗證碼，直接關掉最安全。請再選一次！"
          },
          {
            label: "C",
            text: "天下沒有白吃的午餐！真正的官方不會要密碼，立刻關閉對話並檢舉封鎖。",
            correct: true,
            feedback: "太棒了！你一眼就看穿了「限時免費送點數」的誘餌，牢牢守住了自己的帳號與密碼！"
          }
        ]
      },
      {
        id: "03 陌生連結",
        sender: "班上同學小潔",
        status: "平常很少聊天的同班同學帳號",
        avatar: "🔗",
        context: "放學後，你突然收到班上同學小潔傳來一則詭異訊息，還附了一串奇怪網址...",
        msg1: "欸！我剛剛在別人的社團看到這張偷拍照，長得超像你的，怎麼會被傳到網路上啊？你快點進去這個網址看：http://bit.ly/x9k2-pic",
        msg2: "（你問她是什麼照片，她完全沒回答，只跳針回覆）：點進去重新輸入一次 LINE 帳號密碼登入就可以看到了，快去看！",
        hint: "小潔不回答你的問題、講話不像平常，代表「小潔的帳號已經被盜用了」！那個網址是釣魚網站，只要輸入帳密，換你的 LINE 也會馬上被偷走。",
        slogan: "不點擊、不輸入帳密！先打電話或當面跟朋友確認。",
        options: [
          {
            label: "A",
            text: "絕對不點開奇怪網址，也不輸入密碼！明天去學校直接當面問小潔是不是帳號被盜了。",
            correct: true,
            feedback: "超精準的判斷！看到「奇怪縮網址＋要求重新輸入帳密登入」，絕對是盜帳號的釣魚網站，當面提醒同學最安全！"
          },
          {
            label: "B",
            text: "被偷拍太可怕了！趕快點進網址，照著畫面輸入我的 LINE 帳號密碼看清楚是哪張照片。",
            correct: false,
            feedback: "千萬不行！那個畫面是假的「釣魚網站」，你一輸入帳號密碼，你的 LINE 帳號馬上就會被壞人搶走，還會自動傳病毒給全班同學！請再選一次！"
          },
          {
            label: "C",
            text: "自己不敢點，先把這個網址轉傳給班上其他好朋友，叫他們幫我點進去看看。",
            correct: false,
            feedback: "這樣會害好朋友也中毒或被盜帳號喔！不明連結要做到「不點擊、不轉傳」。請再選一次！"
          }
        ]
      },
      {
        id: "04 傳照片給我",
        sender: "溫柔網友宇辰",
        status: "網路上認識一個月、每天關心你的網友",
        avatar: "📸",
        context: "平常對你很溫柔的網友宇辰，今天晚上聊天時突然提出了一個特別的要求...",
        msg1: "我們認識一個月了，我把你當成最重要的人。今天我也想看一點『特別的』，你可以去浴室拍一張沒穿衣服的照片傳給我嗎？",
        msg2: "你是不是不相信我？我保證看完馬上刪掉！如果你不傳，就代表你根本沒把我當好朋友，那我以後也不要理你了！",
        hint: "用「不傳就是不相信我、我就不理你」來逼迫你，這是標準的『情緒勒索』！私密照片一旦傳出去，對方隨時可以截圖或拿來威脅你。",
        slogan: "不拍攝、不傳送私密照！身體隱私自己顧，立刻封鎖。",
        options: [
          {
            label: "A",
            text: "怕他生氣不理我，那我把臉遮住拍一張傳給他，應該就不會被認出來了。",
            correct: false,
            feedback: "非常危險！壞人收到第一張照片後，就會拿之前的對話紀錄威脅你「不繼續拍露臉照就傳給全校看」！絕對不能拍！請再選一次！"
          },
          {
            label: "B",
            text: "堅決拒絕！「不拍攝、不傳送」任何私密照片，立刻封鎖他並告訴信任的師長。",
            correct: true,
            feedback: "做得太好了！真正尊重、關心你的朋友，絕對不會逼你做不舒服的事，更不會要求看私密照片！"
          },
          {
            label: "C",
            text: "用「閱後即焚（看完自動消失）」的功能傳給他，這樣他就沒辦法存檔了。",
            correct: false,
            feedback: "還是很危險喔！對方只要拿另一支手機翻拍螢幕，或是用錄影軟體，照片一樣會被存下來外流。唯一安全的方法就是「不拍、不傳」！請再選一次！"
          }
        ]
      },
      {
        id: "05 我知道你家在哪",
        sender: "代練玩家黑哥",
        status: "網路遊戲認識的陌生玩家",
        avatar: "🤬",
        context: "你拒絕幫黑哥繼續打遊戲任務後，黑哥突然翻臉，傳來好幾則恐嚇訊息...",
        msg1: "你敢拒絕我？你以為躲在螢幕後面我就找不到你嗎？我看過你的 IG 照片，你穿的那件運動服是ＸＸ國中的對吧？",
        msg2: "我還知道你常去民權路那家超商買飲料！你明天最好乖乖聽我的話，不然放學我就找人去校門口堵你！",
        hint: "他能知道你的學校和常去的超商，是因為平常公開上傳了穿制服學號的照片或打卡！遇到網路恐嚇千萬不能刪對話，那是報警最重要的證據。",
        slogan: "不害怕、先截圖留證據！封鎖對方並立刻告訴家長與老師。",
        options: [
          {
            label: "A",
            text: "太可怕了！趕快把所有聊天對話紀錄「全部刪掉」，假裝沒這回事，明天乖乖聽他的話。",
            correct: false,
            feedback: "千萬不能刪掉對話！把對話刪掉就沒有證據可以讓警察和老師抓壞人了，而且乖乖聽他的話只會被他一直勒索！請再選一次！"
          },
          {
            label: "B",
            text: "不甘示弱！在網路上跟他對罵，約他明天放學在超商門口單挑。",
            correct: false,
            feedback: "太危險了！絕對不要跟網友私下約見面或起衝突，保護自己的人身安全才是最重要的！請再選一次！"
          },
          {
            label: "C",
            text: "保持冷靜「不要刪對話」，先『截圖』保留恐嚇證據，封鎖對方，並馬上告訴爸媽和老師！",
            correct: true,
            feedback: "滿分過關！遇到網路霸凌或恐嚇，「先截圖留證據 ➔ 封鎖不理會 ➔ 立刻找大人求助」，同時把社群帳號設為私人，就能徹底保護自己！"
          }
        ]
      }
    ];

    let currentLevel = 0;
    let score = 0;
    let firstTry = true;
    let levelSolved = false;

    // 初始化進度圓點與第一關
    function initGame() {
      currentLevel = 0;
      score = 0;
      firstTry = true;
      levelSolved = false;
      document.getElementById("score-indicator").textContent = score;
      document.getElementById("game-Screen").classList.remove("hidden");
      document.getElementById("summary-screen").classList.add("hidden");
      renderProgressDots();
      loadLevel();
    }

    function renderProgressDots() {
      const container = document.getElementById("progress-dots");
      container.innerHTML = "";
      levels.forEach((lvl, idx) => {
        const dot = document.createElement("div");
        if (idx < currentLevel) {
          dot.className = "w-3 h-3 rounded-full bg-emerald-400";
        } else if (idx === currentLevel) {
          dot.className = "w-6 h-3 rounded-full bg-amber-400 transition-all";
        } else {
          dot.className = "w-3 h-3 rounded-full bg-indigo-700";
        }
        container.appendChild(dot);
      });
    }

    function loadLevel() {
      const data = levels[currentLevel];
      firstTry = true;
      levelSolved = false;

      // 更新頂部關卡數字與圓點
      document.getElementById("level-indicator").textContent = currentLevel + 1;
      document.getElementById("score-rule-badge").textContent = "一次答對 +20 分";
      document.getElementById("score-rule-badge").className = "text-xs lg:text-sm font-bold text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-md shrink-0";
      renderProgressDots();

      // 更新左側聊天室
      document.getElementById("scenario-badge").textContent = data.id;
      document.getElementById("sender-name").textContent = data.sender;
      document.getElementById("sender-status").textContent = data.status;
      document.getElementById("avatar-box").textContent = data.avatar;
      document.getElementById("chat-avatar-1").textContent = data.avatar;
      document.getElementById("chat-avatar-2").textContent = data.avatar;
      document.getElementById("context-text").textContent = data.context;
      document.getElementById("msg-1").textContent = data.msg1;
      document.getElementById("msg-2").textContent = data.msg2;
      document.getElementById("hint-text").textContent = data.hint;
      document.getElementById("hint-drawer").classList.add("hidden");

      // 產生右側選項按鈕
      const optContainer = document.getElementById("options-container");
      optContainer.innerHTML = "";
      data.options.forEach((opt, index) => {
        const btn = document.createElement("button");
        btn.id = `opt-btn-${index}`;
        btn.onclick = () => selectOption(index);
        btn.className = "w-full text-left p-3.5 lg:p-4 rounded-xl border-2 border-slate-200 hover:border-indigo-500 hover:bg-indigo-50/40 active:scale-[0.99] transition flex items-center gap-3.5 group bg-white shadow-sm";
        btn.innerHTML = `
          <span id="opt-badge-${index}" class="w-9 h-9 lg:w-10 lg:h-10 rounded-lg bg-slate-100 group-hover:bg-indigo-600 group-hover:text-white text-slate-700 font-black text-base lg:text-lg flex items-center justify-center shrink-0 transition">
            ${opt.label}
          </span>
          <span class="text-slate-800 font-bold text-sm lg:text-lg leading-snug flex-1">
            ${opt.text}
          </span>
        `;
        optContainer.appendChild(btn);
      });

      // 重設右下角回饋區為等待作答狀態
      const fbBox = document.getElementById("feedback-box");
      fbBox.className = "bg-slate-200/70 border-2 border-dashed border-slate-300 rounded-2xl p-4 lg:p-5 h-auto lg:h-44 shrink-0 flex flex-col justify-center transition-all duration-200";
      document.getElementById("feedback-placeholder").classList.remove("hidden");
      document.getElementById("feedback-content").classList.add("hidden");
      document.getElementById("next-btn").classList.add("hidden");
    }

    function toggleHint() {
      const drawer = document.getElementById("hint-drawer");
      drawer.classList.toggle("hidden");
    }

    function selectOption(index) {
      if (levelSolved) return; // 已經過關就鎖定不再重複扣分或加分

      const data = levels[currentLevel];
      const chosen = data.options[index];
      const btn = document.getElementById(`opt-btn-${index}`);
      const badge = document.getElementById(`opt-badge-${index}`);

      const fbBox = document.getElementById("feedback-box");
      const fbPlaceholder = document.getElementById("feedback-placeholder");
      const fbContent = document.getElementById("feedback-content");
      const fbIcon = document.getElementById("feedback-icon");
      const fbTitle = document.getElementById("feedback-title");
      const fbDesc = document.getElementById("feedback-desc");
      const fbSlogan = document.getElementById("feedback-slogan");
      const nextBtn = document.getElementById("next-btn");
      const nextBtnText = document.getElementById("next-btn-text");

      fbPlaceholder.classList.add("hidden");
      fbContent.classList.remove("hidden");
      fbSlogan.textContent = data.slogan;

      if (chosen.correct) {
        levelSolved = true;
        const pointsEarned = firstTry ? 20 : 15;
        score += pointsEarned;
        document.getElementById("score-indicator").textContent = score;

        // 標示正確按鈕樣式
        btn.className = "w-full text-left p-3.5 lg:p-4 rounded-xl border-2 border-emerald-500 bg-emerald-50 flex items-center gap-3.5 shadow-sm";
        badge.className = "w-9 h-9 lg:w-10 lg:h-10 rounded-lg bg-emerald-600 text-white font-black text-base lg:text-lg flex items-center justify-center shrink-0";
        badge.textContent = "✓";

        // 更新回饋框為綠色成功狀態
        fbBox.className = "bg-emerald-50 border-2 border-emerald-400 rounded-2xl p-4 lg:p-5 h-auto lg:h-44 shrink-0 flex flex-col justify-between transition-all duration-200 shadow-sm";
        fbIcon.textContent = "🎉";
        fbTitle.textContent = `答對了！獲得 +${pointsEarned} 分！`;
        fbTitle.className = "font-black text-base lg:text-lg text-emerald-900";
        fbDesc.textContent = chosen.feedback;

        // 顯示下一關按鈕
        nextBtn.classList.remove("hidden");
        nextBtnText.textContent = currentLevel < levels.length - 1 ? "下一關" : "看總成績與口訣";
      } else {
        firstTry = false;
        document.getElementById("score-rule-badge").textContent = "重新思考答對 +15 分";
        document.getElementById("score-rule-badge").className = "text-xs lg:text-sm font-bold text-amber-700 bg-amber-100 px-2.5 py-1 rounded-md shrink-0";

        // 標示錯誤按鈕樣式並禁用該按鈕
        btn.disabled = true;
        btn.className = "w-full text-left p-3.5 lg:p-4 rounded-xl border-2 border-rose-300 bg-rose-50/60 opacity-60 flex items-center gap-3.5 cursor-not-allowed";
        badge.className = "w-9 h-9 lg:w-10 lg:h-10 rounded-lg bg-rose-500 text-white font-black text-base lg:text-lg flex items-center justify-center shrink-0";
        badge.textContent = "✕";

        // 自動打開左側危險警訊提示幫助學生
        document.getElementById("hint-drawer").classList.remove("hidden");

        // 更新回饋框為紅色提醒狀態
        fbBox.className = "bg-rose-50 border-2 border-rose-300 rounded-2xl p-4 lg:p-5 h-auto lg:h-44 shrink-0 flex flex-col justify-between transition-all duration-200 shadow-sm";
        fbIcon.textContent = "⚠️️";
        fbTitle.textContent = "喔喔！這樣做有危險喔，請再選一次！";
        fbTitle.className = "font-black text-base lg:text-lg text-rose-800";
        fbDesc.textContent = chosen.feedback;
        nextBtn.classList.add("hidden");
      }
    }

    function nextLevel() {
      if (currentLevel < levels.length - 1) {
        currentLevel++;
        loadLevel();
      } else {
        showSummary();
      }
    }

    function showSummary() {
      document.getElementById("game-Screen").classList.add("hidden");
      const sumScreen = document.getElementById("summary-screen");
      sumScreen.classList.remove("hidden");

      document.getElementById("final-score").textContent = score;
      const rankEl = document.getElementById("final-rank");
      if (score === 100) {
        rankEl.textContent = "🌟 滿分傳奇！特級資安防衛隊長";
      } else if (score >= 85) {
        rankEl.textContent = "🛡️ 超強警覺！資安守護達人";
      } else {
        rankEl.textContent = "💪 順利過關！網路安全小尖兵";
      }

      const listContainer = document.getElementById("summary-list");
      listContainer.innerHTML = "";
      levels.forEach((lvl) => {
        const item = document.createElement("div");
        item.className = "bg-slate-50 border border-slate-200 rounded-xl p-3 lg:px-4 lg:py-2.5 flex items-center gap-3.5";
        item.innerHTML = `
          <div class="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-800 flex items-center justify-center text-xl shrink-0 font-bold">
            ${lvl.avatar}
          </div>
          <div class="flex-1 min-w-0">
            <div class="flex items-center gap-2">
              <span class="text-xs font-black bg-indigo-900 text-white px-2 py-0.5 rounded">${lvl.id}</span>
              <span class="text-sm lg:text-base font-black text-rose-600 truncate">${lvl.slogan}</span>
            </div>
            <p class="text-xs lg:text-sm text-slate-600 truncate mt-0.5">${lvl.hint}</p>
          </div>
        `;
        listContainer.appendChild(item);
      });
    }

    function restartGame() {
      initGame();
    }

    // 啟動遊戲
    initGame();
  </script>
</body>
</html>
