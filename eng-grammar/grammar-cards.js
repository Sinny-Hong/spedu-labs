// Spedu Labs 文法目錄卡片資料
// 本檔只保存卡片與分類資訊；分類捲動與卡片開啟由 index.html 及共用程式負責。
window.GRAMMAR_DATA = [
  // ==== 互動式電子講義 ====
  { id: "topic-hub", category: "互動式電子講義", tag: "文法講義", title: "主題式文法", desc: "依文法主題切換互動講義，搭配點讀、練習與列印功能", filename: "library-topic.html", themeColor: "#3B82F6", newTab: true },
  { id: "reading-hub", category: "互動式電子講義", tag: "閱讀教材", title: "閱讀測驗", desc: "集中瀏覽閱讀教材，保留提示、批改、解答、語音與列印功能", filename: "library-reading.html", themeColor: "#EC4899", newTab: true },
  { id: "grammar-library", category: "互動式電子講義", tag: "Level 3", title: "三階段文法", desc: "保留原有 37 份單頁三階段文法講義，依主題分類切換", filename: "library-level3.html", themeColor: "#3B82F6", newTab: true },
  { id: "life-english-hub", category: "互動式電子講義", tag: "電子講義與 PDF", title: "生活英文", desc: "單字、生活情境、能力評估與可列印教材，支援 HTML 講義及 PDF 預覽", filename: "library-life-english.html", themeColor: "#14B8A6", newTab: true },

  // ==== 互動遊戲 ====
  { id: "ecity-hub", category: "互動遊戲", tag: "系列總入口", title: "E-City 異想城市", desc: "集中切換家庭、小鎮、購物、時間與方向等生活情境遊戲", filename: "library-ecity.html", themeColor: "#F59E0B", newTab: true },
  { id: "g1", category: "互動遊戲", title: "🎮 遊戲｜地心探險數字挑戰", desc: "挑戰大考驗！熟悉英文數字 1～100000 聽力、大小與發音", filename: "game-corenum.html", themeColor: "#F43F5E" },
  { id: "g3", category: "互動遊戲", title: "🎮 遊戲｜小啾的時光農場", desc: "解鎖時光任務！訓練年月日、星期、小時、分鐘及秒針判讀", filename: "game-timefarm.html", themeColor: "#F43F5E" },
  { id: "g4", category: "互動遊戲", title: "🧩 配對板｜英文數字", desc: "英文數字三排對照，支援語音與課堂互動配對", filename: "match-numbers.html", themeColor: "#F43F5E" },
  { id: "g5", category: "互動遊戲", title: "🧩 配對板｜家人稱謂", desc: "家人稱謂與親友關係三排對照，支援發音", filename: "match-family.html", themeColor: "#F43F5E" },
  { id: "g6", category: "互動遊戲", title: "🧩 配對板｜時間與日期", desc: "星期、月份、日期與時間的三排對照語音配對", filename: "match-time-date.html", themeColor: "#F43F5E" },
  { id: "g7", category: "互動遊戲", title: "🧩 配對板｜人稱代名詞", desc: "限時配對、亂序、干擾卡與課堂訂正挑戰", filename: "match-pronouns.html", themeColor: "#F43F5E" },

  { id: "ecity-snake-maze", category: "E-City 異想城市", tag: "方向英文", title: "貪食蛇迷宮逃脫", desc: "依蛇頭朝向練習直走與左右轉，挑戰六關迷宮並記錄最少操作次數，支援雙語提示與方向海報", filename: "ecity-snake-maze.html", themeColor: "#40B56C" },

  // ==== E-City 異想城市 ====
  { id: "g2", category: "E-City 異想城市", tag: "異想小鎮", title: "異想家庭樹", desc: "觀察家庭樹、點讀親屬英文並完成五題選擇題，可切換三種難度", filename: "ecity-family-tree.html", themeColor: "#F59E0B" },
  { id: "ecity-01", category: "E-City 異想城市", tag: "異想小鎮", title: "我的異想小鎮", desc: "隨機城市地圖與八種位置句型挑戰，附中英提示板、單字發音與答題音效", filename: "ecity-my-town.html", themeColor: "#F59E0B" },
  { id: "ecity-fastfood", category: "E-City 異想城市", tag: "異想小鎮", title: "異想速食店", desc: "透過餐點單字與點餐對話，練習金錢、數量及閱讀理解", filename: "ecity-fastfood.html", themeColor: "#F59E0B" },
  { id: "ecity-clothing", category: "E-City 異想城市", tag: "異想小鎮", title: "異想服飾店", desc: "透過服飾商品與購物對話，練習尺寸、顏色及價格理解", filename: "ecity-clothing.html", themeColor: "#F59E0B" },
  { id: "ecity-cinema", category: "E-City 異想城市", tag: "異想小鎮", title: "異想電影院", desc: "閱讀電影時刻表，練習 AM／PM、場次時間與片長判讀", filename: "ecity-cinema.html", themeColor: "#F59E0B" },
  { id: "ecity-schedule", category: "E-City 異想城市", tag: "異想小鎮", title: "異想行事曆", desc: "閱讀一週行程與活動安排，練習星期、時間及相對時間", filename: "ecity-schedule.html", themeColor: "#F59E0B" },
  { id: "ecity-timetable", category: "E-City 異想城市", tag: "異想小鎮", title: "異想課表", desc: "閱讀學校課表，練習星期、節次與表格十字定位", filename: "ecity-timetable.html", themeColor: "#F59E0B" },
  { id: "ecity-calendar", category: "E-City 異想城市", tag: "異想小鎮", title: "異想月曆", desc: "閱讀月份月曆，練習日期、節慶與跨週日期推算", filename: "ecity-calendar.html", themeColor: "#F59E0B" },
  { id: "ecity-tug-of-war", category: "E-City 異想城市", tag: "異想小鎮", title: "拔河錦標賽", desc: "兩隊用英文數字、日期或數學題庫即時搶答，把繩索拉向己方", filename: "../math/ecity-tug-of-war.html", themeColor: "#7C3AED" },

  // ==== 日常英文 ====
  { id: "card-builder", category: "日常英文", title: "英文賀卡製作｜English Card Builder", desc: "選擇收件人、節慶祝賀、想說的話與寄件人，組合英文賀卡並查看寫法提示", filename: "card-builder.html", themeColor: "#14B8A6" },
  { id: "english-time", category: "日常英文", title: "⏰ 英文時間互動學習館", desc: "搭配大螢幕操作時鐘、英文發音、隨堂挑戰與時間表達鷹架", filename: "game-english-time.html", themeColor: "#14B8A6" },
  { id: "e1", category: "日常英文", title: "📝 評估｜生活英文 (V1)", desc: "高中職特教班及資源班生活英語聽說讀寫綜合評量 (第一版)", filename: "exam-lifeenglish-v1.html", themeColor: "#14B8A6" },

];

window.GRAMMAR_CATEGORIES = [
  "互動式電子講義",
  "互動遊戲",
  "E-City 異想城市",
  "日常英文"
];
