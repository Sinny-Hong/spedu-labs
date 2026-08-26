window.CLASSROOM_CATEGORIES = ["課表查詢", "班務紀錄", "段考相關", "後台管理"];

window.CLASSROOM_DATA = [
  { id: "student", category: "課表查詢", tag: "學生", title: "學生個人課表", desc: "每位學生的個別化課表，方便學生、家長與教師查詢。", filename: "table-student.html", themeColor: "#3b82f6" },
  { id: "class", category: "課表查詢", tag: "班級", title: "學生原班課表通知單", desc: "依班級查看課程安排，適合點名簿與教室公告使用。", filename: "table-class.html", themeColor: "#2563eb" },
  { id: "all", category: "課表查詢", tag: "總覽", title: "異想教室總課表", desc: "統整全部教師、學生與抽離課程的課表總覽。", filename: "table-all.html", themeColor: "#0ea5e9" },
  { id: "teacher", category: "課表查詢", tag: "教師", title: "教師個人課表", desc: "查看各任課教師的授課時間與課程安排。", filename: "table-teacher.html", themeColor: "#10b981" },
  { id: "room", category: "課表查詢", tag: "教室", title: "個別教室課表", desc: "查看專科教室與資源教室的使用時間，避免場地衝突。", filename: "table-room.html", themeColor: "#14b8a6" },
  { id: "diary", category: "班務紀錄", tag: "日誌", title: "教室日誌", desc: "記錄每日課程進度、學生適應與學習表現。", filename: "table-diary.html", themeColor: "#8b5cf6" },
  { id: "check", category: "班務紀錄", tag: "點名", title: "出缺席點名表", desc: "追蹤抽離教學與彈性課堂的學生每週出席狀況。", filename: "table-check.html", themeColor: "#a855f7" },
  { id: "special-student-notice", category: "班務紀錄", tag: "特殊生簡介", title: "特殊需求學生簡介", desc: "依授課教師自動整理任教班級中的特殊需求學生資料與教學提醒，支援單人及整疊列印。", filename: "special-student-notice-v5.html", themeColor: "#dc2626", linkLabel: "開啟簡介 →" },
  { id: "student-guidance-form", category: "班務紀錄", tag: "輔導紀錄", title: "學生輔導紀錄表單（輸入）", desc: "供指定輸入者新增學生輔導紀錄；請使用獲授權的 Google 帳號。", filename: "https://docs.google.com/forms/d/e/1FAIpQLSfNZdMR-MCvXrsi2AqAt7vduagrnDh7TMTq0kf_J137Vj1peA/viewform?usp=dialog", themeColor: "#7c3aed", external: true, linkLabel: "填寫表單 ↗" },
  { id: "exam-score1", category: "段考相關", tag: "段考成績", title: "段考成績通知單(非主科)", desc: "依段考與原班任課教師整理其他科成績通知單。", filename: "report_card1.html", themeColor: "#d97706" },
  { id: "exam-score2", category: "段考相關", tag: "段考成績", title: "段考成績通知單(英文科)", desc: "依段考與原班任課教師整理英文科成績通知單。", filename: "report_card2.html", themeColor: "#d97706" },
  { id: "exam-score3", category: "段考相關", tag: "段考成績", title: "段考成績通知單(數學科)", desc: "依段考與原班任課教師整理數學科成績通知單。", filename: "report_card3.html", themeColor: "#d97706" },
  { id: "exam-score4", category: "段考相關", tag: "段考成績", title: "段考成績通知單(國文科)", desc: "國文科段考成績通知單欄位已保留，待功能完成後啟用。", filename: "report_card4.html", themeColor: "#d97706", available: false },
  { id: "student-guidance-responses", category: "班務紀錄", tag: "限定共用", title: "學生輔導紀錄（回覆）", desc: "僅限具有共用資料夾權限的授權帳號查看學生輔導紀錄回覆。", filename: "https://docs.google.com/spreadsheets/d/1NSbmw9PpUnAsjqJpWLTALgiZODqSpdlmv9XscfdmX64/edit?gid=460017595#gid=460017595", themeColor: "#f59e0b", external: true, linkLabel: "查看回覆 ↗" },
  { id: "student-sheet-admin", category: "後台管理", tag: "限定共用", title: "115學生課表後台試算表", desc: "僅限已加入共用對象的授權帳號開啟與編輯。", filename: "https://docs.google.com/spreadsheets/d/1RUvk22m4pEClx3nqrbn6684t6T_KS8XEB1EXubEw7A4/edit?usp=sharing", themeColor: "#f59e0b", external: true }
];
