// Spedu Labs 文法目錄卡片資料
// 本檔只保存卡片與分類資訊；搜尋、篩選、收藏功能仍由 index.html 負責。
window.GRAMMAR_DATA = [
  // ==== 互動式電子講義 ====
  { id: "pronouns-basic", category: "互動式電子講義", title: "人稱代名詞｜互動講義", desc: "主格、Be 動詞、所有格與家人稱謂，從配對、是非、圈選到排列造句與閱讀練習", filename: "pronouns.html", themeColor: "#3B82F6" },
  { id: "present-simple", category: "互動式電子講義", title: "現在簡單式｜互動講義", desc: "從使用時機、主詞判斷、第三人稱單數到 do／does，含造句與會考綜合練習", filename: "present-simple.html", themeColor: "#3B82F6" },
  { id: "past-simple", category: "互動式電子講義", title: "過去簡單式｜八頁互動講義", desc: "從 was／were、動詞過去式到 did＋原形，含進階練習與找過去式任務", filename: "past-simple.html", themeColor: "#3B82F6" },
  { id: "grammar-library", category: "互動式電子講義", title: "舊版三階段文法講義庫", desc: "集中瀏覽 37 份舊版單頁三階段文法講義，依主題分類快速開啟", filename: "grammar-library.html", themeColor: "#3B82F6" },

  // ==== 閱讀理解與測驗 ====
  { id: "r1", category: "閱讀理解與測驗", title: "閱讀｜電影時刻表", desc: "生活實境：學會看懂電影場次表、級別與時間規劃", filename: "reading-movie.html", themeColor: "#EC4899" },
  { id: "r2", category: "閱讀理解與測驗", title: "閱讀｜生活日曆", desc: "生活實境：看懂月曆格式、特定星期與重要假日標記", filename: "reading-calender.html", themeColor: "#EC4899" },
  { id: "r3", category: "閱讀理解與測驗", title: "閱讀｜飲料選單", desc: "生活實境：讀懂手搖飲冷熱、糖度、冰量與價格計算", filename: "reading-drink.html", themeColor: "#EC4899" },
  { id: "r4", category: "閱讀理解與測驗", title: "閱讀｜漢堡店菜單", desc: "生活實境：速食店菜單、套餐選配與口語點餐對答", filename: "reading-hamberger.html", themeColor: "#EC4899" },
  { id: "r5", category: "閱讀理解與測驗", title: "閱讀｜學校課表", desc: "生活實境：看懂校園作息課表、星期與學科課堂名稱", filename: "reading-suject.html", themeColor: "#EC4899" },
  { id: "r6", category: "閱讀理解與測驗", title: "閱讀｜服飾店", desc: "生活實境：閱讀服飾店商品、尺寸、價格與購物情境", filename: "reading-clothing-store.html", themeColor: "#EC4899" },
  { id: "r7", category: "閱讀理解與測驗", title: "閱讀｜異想小鎮地圖", desc: "使用 E-City 異想小鎮地圖判讀位置關係，支援原始版、隨機出題、線上批改與雙面列印", filename: "reading-my-town.html", themeColor: "#EC4899" },
  { id: "e1", category: "閱讀理解與測驗", title: "📝 評估｜生活英文 (V1)", desc: "高中職特教班及資源班生活英語聽說讀寫綜合評量 (第一版)", filename: "exam-lifeenglish-v1.html", themeColor: "#14B8A6" },
  { id: "e2", category: "閱讀理解與測驗", title: "📝 評估｜生活常識 (V1)", desc: "社會適應能力評估：自我保護、公共規章與基本生活常識", filename: "exam-lifesocial-v1.html", themeColor: "#14B8A6" },
  { id: "e5", category: "閱讀理解與測驗", title: "📝 評估｜生活數學 (V1)", desc: "特教功能性數學：找零、算錢、公車票價與日常加減計算挑戰", filename: "../life/social/exam-lifemath-v1.html", themeColor: "#14B8A6" },
  { id: "e6", category: "閱讀理解與測驗", title: "📝 評估｜生活語文 (V1)", desc: "特教功能性語文：公共標誌、重要指示語與口語表達溝通檢測", filename: "../life/social/exam-lifechinese-v1.html", themeColor: "#14B8A6" },

  // ==== 互動遊戲 ====
  { id: "g1", category: "互動遊戲", title: "🎮 遊戲｜地心探險數字挑戰", desc: "挑戰大考驗！熟悉英文數字 1～100000 聽力、大小與發音", filename: "game-corenum.html", themeColor: "#F43F5E" },
  { id: "g3", category: "互動遊戲", title: "🎮 遊戲｜小啾的時光農場", desc: "解鎖時光任務！訓練年月日、星期、小時、分鐘及秒針判讀", filename: "game-timefarm.html", themeColor: "#F43F5E" },
  { id: "g4", category: "互動遊戲", title: "🧩 配對板｜英文數字", desc: "英文數字三排對照，支援語音與課堂互動配對", filename: "match-numbers.html", themeColor: "#F43F5E" },
  { id: "g5", category: "互動遊戲", title: "🧩 配對板｜家人稱謂", desc: "家人稱謂與親友關係三排對照，支援發音", filename: "match-family.html", themeColor: "#F43F5E" },
  { id: "g6", category: "互動遊戲", title: "🧩 配對板｜時間與日期", desc: "星期、月份、日期與時間的三排對照語音配對", filename: "match-time-date.html", themeColor: "#F43F5E" },
  { id: "g7", category: "互動遊戲", title: "🧩 配對板｜人稱代名詞", desc: "限時配對、亂序、干擾卡與課堂訂正挑戰", filename: "match-pronouns.html", themeColor: "#F43F5E" },
  { id: "english-time", category: "互動遊戲", title: "⏰ 英文時間互動學習館", desc: "搭配大螢幕操作時鐘、英文發音、隨堂挑戰與時間表達鷹架", filename: "game-english-time.html", themeColor: "#F43F5E" },

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

  // ==== 其他 ====
  { id: "card-builder", category: "其他", title: "英文賀卡製作｜English Card Builder", desc: "選擇收件人、節慶祝賀、想說的話與寄件人，組合英文賀卡並查看寫法提示", filename: "card-builder.html", themeColor: "#64748B" },
  { id: "test-1", category: "其他", title: "Test 1", desc: "獨立測試 HTML，可直接覆蓋進行下一個實驗", filename: "test1.html", themeColor: "#64748B" },
  { id: "test-2", category: "其他", title: "Test 2", desc: "獨立測試 HTML，可直接覆蓋進行下一個實驗", filename: "test2.html", themeColor: "#64748B" },
  { id: "test-3", category: "其他", title: "Test 3", desc: "獨立測試 HTML，可直接覆蓋進行下一個實驗", filename: "test3.html", themeColor: "#64748B" },
  { id: "test-4", category: "其他", title: "Test 4", desc: "獨立測試 HTML，可直接覆蓋進行下一個實驗", filename: "test4.html", themeColor: "#64748B" },
  { id: "test-5", category: "其他", title: "Test 5", desc: "獨立測試 HTML，可直接覆蓋進行下一個實驗", filename: "test5.html", themeColor: "#64748B" }
];

window.GRAMMAR_CATEGORIES = [
  "互動式電子講義",
  "閱讀理解與測驗",
  "互動遊戲",
  "E-City 異想城市",
  "其他"
];
