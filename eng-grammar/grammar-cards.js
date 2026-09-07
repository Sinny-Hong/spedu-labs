// Spedu Labs 文法目錄卡片資料
// 本檔只保存卡片與分類資訊；搜尋、篩選、收藏功能仍由 index.html 負責。
window.GRAMMAR_DATA = [
      // ==== 代名詞 ====
      { id: "1", category: "代名詞", title: "我、你、他 (主格)", desc: "我是...，自我介紹與主詞用法", filename: "grammar_I.html", themeColor: "#3B82F6" },
      { id: "2", category: "代名詞", title: "我、你、他 (受格)", desc: "動作的接受者 (love me, love him)", filename: "grammar_me.html", themeColor: "#3B82F6" },
      { id: "3", category: "代名詞", title: "我的、你的、他的 (所有格)", desc: "物品的主人 (my book, your dog)", filename: "grammar_my.html", themeColor: "#3B82F6" },
      { id: "4", category: "代名詞", title: "所有格與複數所有格", desc: "男孩們的...，名詞單複數所有格變化規則", filename: "grammar_boys_.html", themeColor: "#3B82F6" },
      { id: "5", category: "代名詞", title: "這個、那個、這些、那些", desc: "指示代名詞單複數與遠近距離辨析", filename: "grammar_this_that_these_those.html", themeColor: "#3B82F6" },
      { id: "6", category: "代名詞", title: "Be動詞 (am, are, is)", desc: "Be動詞的主詞搭配與現在式基本用法", filename: "grammar_be_am_are_is.html", themeColor: "#3B82F6" },
      { id: "7", category: "代名詞", title: "反身代名詞 (單數)", desc: "我自己、你自己、他自己 (myself, yourself, himself) 的用法", filename: "grammar_myself.html", themeColor: "#3B82F6" },
      { id: "8", category: "代名詞", title: "反身代名詞 (複數)", desc: "我們自己、你們自己、他們自己 (ourselves, yourselves) 的用法", filename: "grammar_ourselves.html", themeColor: "#3B82F6" },
      { id: "9", category: "代名詞", title: "所有格代名詞", desc: "區分「我的書 (my book)」與「我的東西 (mine)」的代名詞用法", filename: "grammar_mine.html", themeColor: "#3B82F6" },
      { id: "52", category: "代名詞", title: "人稱代名詞配對板", desc: "主格、受格、所有格、Be 動詞、所有格代名詞與反身代名詞的互動配對複習", filename: "game-pronoun-match.html", themeColor: "#3B82F6" },

      // ==== 日常句型及片語 ====
      { id: "10", category: "日常句型及片語", title: "祈使句(please)", desc: "祈使句的禮貌表達與日常應用", filename: "grammar_please.html", themeColor: "#2563EB" },
      { id: "11", category: "日常句型及片語", title: "花錢與花時間 (spend, cost, take)", desc: "主詞是人還是物？花費動詞三大解析", filename: "grammar_spend_cost_take.html", themeColor: "#2563EB" },
      { id: "12", category: "日常句型及片語", title: "我會... (can/can't)", desc: "能力表達與日常助動詞簡答", filename: "grammar_can_can_t.html", themeColor: "#2563EB" },
      { id: "13", category: "日常句型及片語", title: "男女稱謂 (Mr., Miss, Mrs.)", desc: "社交場合必備的先生、小姐、太太等禮貌稱謂與用法", filename: "grammar_mr_miss.html", themeColor: "#2563EB" },
      { id: "14", category: "日常句型及片語", title: "家人稱謂與關係", desc: "爸爸、媽媽、兄弟姊妹等家庭成員的英文名稱與介紹", filename: "grammar_family.html", themeColor: "#2563EB" },
      { id: "15", category: "日常句型及片語", title: "家人稱謂複數與所有格", desc: "結合家人稱謂與複數所有格的進階練習 (如 my sons)", filename: "grammar_my_sons.html", themeColor: "#2563EB" },
      { id: "16", category: "日常句型及片語", title: "連接詞 (and, but, or)", desc: "語意轉折「但是」與選擇「或者」的日常句子連結", filename: "grammar_and_but_or.html", themeColor: "#2563EB" },
      { id: "17", category: "日常句型及片語", title: "連接詞 (because, so)", desc: "表達因果關係「因為...所以...」的正確日常句型", filename: "grammar_because_so.html", themeColor: "#2563EB" },
      { id: "18", category: "日常句型及片語", title: "時間連接詞 (before, after)", desc: "連接詞之前之後 before、after 的生活句型與前後順序判讀", filename: "grammar_before_after.html", themeColor: "#2563EB" },
      { id: "19", category: "日常句型及片語", title: "If 條件句 (如果)", desc: "如果明天下雨，我就... 的日常生活假設與簡易句型", filename: "grammar_if.html", themeColor: "#2563EB" },

      // ==== 時態表達 ====
      { id: "20", category: "時態表達", title: "現在簡單式的判讀(do, does)", desc: "現在簡單式問句與否定的靈魂助動詞用法", filename: "grammar_do_does.html", themeColor: "#F59E0B" },
      { id: "21", category: "時態表達", title: "第三人稱單數動詞變化", desc: "當主詞為第三人稱單數時，一般動詞加 s/es (goes, plays)", filename: "grammar_goes_plays.html", themeColor: "#F59E0B" },
      { id: "22", category: "時態表達", title: "頻率副詞 (always)", desc: "習慣與動作發生頻率的表達與句中位置", filename: "grammar_always.html", themeColor: "#F59E0B" },
      { id: "23", category: "時態表達", title: "過去式(was, were)", desc: "過去狀態與位置 (I was busy yesterday.)", filename: "grammar_was_were.html", themeColor: "#F59E0B" },
      { id: "24", category: "時態表達", title: "過去式(did, didn't)", desc: "過去問句與否定 (I didn't play soccer.)", filename: "grammar_did_didn_t.html", themeColor: "#F59E0B" },
      { id: "25", category: "時態表達", title: "過去式(動詞加ed)", desc: "規則動詞過去式變化與發音規律", filename: "grammar_Ved.html", themeColor: "#F59E0B" },
      { id: "26", category: "時態表達", title: "過去式(不規則變化)", desc: "常見不規則動詞 (went, saw, ate) 的過去式", filename: "grammar_went_saw.html", themeColor: "#F59E0B" },
      { id: "27", category: "時態表達", title: "現在進行式：動詞變化", desc: "現在進行式的使用時機與動詞加 -ing 的變化規則", filename: "grammar_Ving.html", themeColor: "#F59E0B" },
      { id: "28", category: "時態表達", title: "過去時間副詞", desc: "過去式常搭配的時間副詞 (如 yesterday, last week 上週)", filename: "grammar_yesterday.html", themeColor: "#F59E0B" },
      { id: "50", category: "時態表達", title: "現在進行式：句型結構", desc: "am/is/are + V-ing 的肯定句、否定句與問句結構", filename: "grammar_are_Ving.html", themeColor: "#F59E0B" },

      // ==== 名詞與數量 ====
      { id: "29", category: "名詞與數量", title: "名詞複數變化的基本規則", desc: "名詞單數變複數加 s 的規則與計數概念", filename: "grammar_apples.html", themeColor: "#10B981" },
      { id: "30", category: "名詞與數量", title: "可數與不可數名詞", desc: "區分名詞可數與不可數的本質差異", filename: "grammar_n_countable.html", themeColor: "#10B981" },
      { id: "31", category: "名詞與數量", title: "數量不定代名詞 (some, many)", desc: "數量不定代名詞與可數、不可數名詞的搭配應用", filename: "grammar_some_many.html", themeColor: "#10B981" },
      { id: "32", category: "名詞與數量", title: "方位介系詞 (in, on, at)", desc: "基礎空間介系詞的具體感知", filename: "grammar_in_on_at_space.html", themeColor: "#10B981" },
      { id: "33", category: "名詞與數量", title: "時間介系詞 (in, on, at)", desc: "時間、特定日子與幾點鐘的介系詞搭配", filename: "grammar_in_on_at_time.html", themeColor: "#10B981" },
      { id: "34", category: "名詞與數量", title: "這裡有、那裡有 (There is/are)", desc: "某處存在某事物的存在句型", filename: "grammar_there_is_there_are.html", themeColor: "#10B981" },
      { id: "35", category: "名詞與數量", title: "方位介系詞 (under, next to...)", desc: "東西在「下面、旁邊、後面、前面」等具體空間位置感知", filename: "grammar_under_place.html", themeColor: "#10B981" },

      // ==== 形容詞、副詞、其他 ====
      { id: "36", category: "形容詞、副詞、其他", title: "形容詞比較級", desc: "A比B更...，比較級字尾 -er 的變化", filename: "grammar_adj_er.html", themeColor: "#0EA5E9" },
      { id: "37", category: "形容詞、副詞、其他", title: "形容詞最高級", desc: "班上最...、世界最...，最高級字尾 -est 的變化", filename: "grammar_adj_est.html", themeColor: "#0EA5E9" },
      { id: "38", category: "形容詞、副詞、其他", title: "形容詞三級分辨", desc: "原級、比較級與最高級的區分與綜合應用", filename: "grammar_adj_er_est.html", themeColor: "#0EA5E9" },

      // ==== 數字與時間 ====
      { id: "39", category: "數字與時間", title: "數字 1-10", desc: "基數 1-10 的拼寫與基本量詞結合", filename: "grammar_1_10.html", themeColor: "#8B5CF6" },
      { id: "40", category: "數字與時間", title: "數字 11-19", desc: "十幾的數字與基本年齡表達", filename: "grammar_11_19.html", themeColor: "#8B5CF6" },
      { id: "41", category: "數字與時間", title: "數字 21-99", desc: "兩位數的英文數字讀法與十位數規律", filename: "grammar_21_99.html", themeColor: "#8B5CF6" },
      { id: "42", category: "數字與時間", title: "整十數字與百位數", desc: "10、20、100 等整十數字的規律與應用", filename: "grammar_10_20_100.html", themeColor: "#8B5CF6" },
      { id: "43", category: "數字與時間", title: "大數字 (1 到 100 萬)", desc: "大數字（千、百萬）的讀法與進階數字表達", filename: "grammar_1_1000000.html", themeColor: "#8B5CF6" },
      { id: "44", category: "數字與時間", title: "星期一到星期日", desc: "一週七天 (Sunday 到 Saturday) 的拼寫與日子表達", filename: "grammar_week.html", themeColor: "#8B5CF6" },
      { id: "45", category: "數字與時間", title: "十二月份", desc: "一月到十二月的拼寫與月份基本概念", filename: "grammar_months.html", themeColor: "#8B5CF6" },
      { id: "46", category: "數字與時間", title: "西元年份與日期順序", desc: "西元年份讀法與日期書寫順序", filename: "grammar_year.html", themeColor: "#8B5CF6" },
      { id: "47", category: "數字與時間", title: "時間與鐘點表達", desc: "時間整點、半點、15 分的日常時鐘報時說法", filename: "grammar_clock.html", themeColor: "#8B5CF6" },
      { id: "48", category: "數字與時間", title: "日期的寫法 (序數)", desc: "日期的寫法與第1、第2、第3等序數 (first, second...) 的應用", filename: "grammar_first.html", themeColor: "#8B5CF6" },
      { id: "49", category: "數字與時間", title: "日期與月份搭配", desc: "日期搭配月份的完整說法與書寫練習 (如 July third)", filename: "grammar_July_third.html", themeColor: "#8B5CF6" },
      { id: "51", category: "數字與時間", title: "時間介系詞 (past, to)", desc: "用 past 與 to 表達幾點過幾分，以及差幾分到下一個整點", filename: "grammar_time.html", themeColor: "#8B5CF6" },

      // ==== 圖表閱讀測驗 ====
      { id: "r1", category: "圖表閱讀測驗", title: "閱讀｜電影時刻表", desc: "生活實境：學會看懂電影場次表、級別與時間規劃", filename: "reading-movie.html", themeColor: "#EC4899" },
      { id: "r2", category: "圖表閱讀測驗", title: "閱讀｜生活日曆", desc: "生活實境：看懂月曆格式、特定星期與重要假日標記", filename: "reading-calender.html", themeColor: "#EC4899" },
      { id: "r3", category: "圖表閱讀測驗", title: "閱讀｜飲料選單", desc: "生活實境：讀懂手搖飲冷熱、糖度、冰量與價格計算", filename: "reading-drink.html", themeColor: "#EC4899" },
      { id: "r4", category: "圖表閱讀測驗", title: "閱讀｜漢堡店菜單", desc: "生活實境：速食店菜單、套餐選配與口語點餐對答", filename: "reading-hamberger.html", themeColor: "#EC4899" },
      { id: "r5", category: "圖表閱讀測驗", title: "閱讀｜學校課表", desc: "生活實境：看懂校園作息課表、星期與學科課堂名稱", filename: "reading-suject.html", themeColor: "#EC4899" },

      // ==== 互動遊戲區 ====
      { id: "g1", category: "互動遊戲區", title: "🎮 遊戲｜地心探險數字挑戰", desc: "挑戰大考驗！熟悉英文數字 1 ~ 100000 聽力、大小與發音", filename: "game-corenum.html", themeColor: "#F43F5E" },
      { id: "g2", category: "互動遊戲區", title: "🎮 遊戲｜家庭樹", desc: "利用關聯圖釐清家庭成員、英文稱謂與輩分關係", filename: "game-family.html", themeColor: "#F43F5E" },
      { id: "g3", category: "互動遊戲區", title: "🎮 遊戲｜小啾的時光農場", desc: "解鎖時光任務！訓練年月日、星期、小時、分鐘及秒針判讀", filename: "game-timefarm.html", themeColor: "#F43F5E" },
      { id: "g4", category: "互動遊戲區", title: "🎮 遊戲｜人稱代名詞配對板", desc: "限時配對、亂序、干擾卡與課堂訂正挑戰", filename: "game-pronoun-match.html", themeColor: "#F43F5E" },

      // ==== 能力挑戰評估 ====
      { id: "e1", category: "能力挑戰評估", title: "📝 評估｜生活英文 (V1)", desc: "高中職特教班及資源班生活英語聽說讀寫綜合評量 (第一版)", filename: "exam-lifeenglish-v1.html", themeColor: "#14B8A6" },
      { id: "e2", category: "能力挑戰評估", title: "📝 評估｜生活常識 (V1)", desc: "社會適應能力評估：自我保護、公共規章與基本生活常識", filename: "exam-lifesocial-v1.html", themeColor: "#14B8A6" },
      { id: "e3", category: "能力挑戰評估", title: "📝 評估｜生活英文 (V2)", desc: "進階生活常用口語與情境英語綜合評估 (第二版挑戰卷)", filename: "exam-lifeenglish-v2.html", themeColor: "#14B8A6" },
      { id: "e4", category: "能力挑戰評估", title: "📝 評估｜生活英文 (V3)", desc: "多元情境、基礎生活指標英語口說與寫作評量 (第三版挑戰卷)", filename: "exam-lifeenglish-v3.html", themeColor: "#14B8A6" },
      { id: "e5", category: "能力挑戰評估", title: "📝 評估｜生活數學 (V1)", desc: "特教功能性數學：找零、算錢、公車票價與日常加減計算挑戰", filename: "exam-lifemath-v1.html", themeColor: "#14B8A6" },
      { id: "e6", category: "能力挑戰評估", title: "📝 評估｜生活語文 (V1)", desc: "特教功能性語文：公共標誌、重要指示語與口語表達溝通檢測", filename: "exam-lifechinese-v1.html", themeColor: "#14B8A6" }
];

window.GRAMMAR_CATEGORIES = ["代名詞", "日常句型及片語", "時態表達", "名詞與數量", "形容詞、副詞、其他", "數字與時間", "圖表閱讀測驗", "互動遊戲區", "能力挑戰評估"];

