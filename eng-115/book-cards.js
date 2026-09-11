window.BOOK_CATEGORIES = ["單字", "課文", "電子書"];

window.BOOK_DATA = [
  { id: "vocab_all", category: "單字", tag: "新版整合", title: "115-1 單字學習講義", desc: "同一入口切換七、八、九年級的單字聽力、配對與聽寫，並支援學生版及教師版列印", filename: "vocab.html", themeColor: "#0f766e" },
  { id: "g7_hear", category: "單字", tag: "聽力", title: "七上 單字聽力訓練卷", desc: "115 學年度第一學期課本單字聽力練習", filename: "115-1G7hear.html", themeColor: "#3b82f6" },
  { id: "g7_match", category: "單字", tag: "配對", title: "七上 中英文配對卷", desc: "115 學年度第一學期中英文單字配對", filename: "115-1G7match.html", themeColor: "#10b981" },
  { id: "g7_write", category: "單字", tag: "拼寫", title: "七上 單字拼寫練習卷", desc: "115 學年度第一學期單字拼寫練習", filename: "115-1G7write.html", themeColor: "#8b5cf6" },
  { id: "g8_hear", category: "單字", tag: "聽力", title: "八上 單字聽力訓練卷", desc: "115 學年度第一學期課本單字聽力練習", filename: "115-1G8hear.html", themeColor: "#3b82f6" },
  { id: "g8_match", category: "單字", tag: "配對", title: "八上 中英文配對卷", desc: "115 學年度第一學期中英文單字配對", filename: "115-1G8match.html", themeColor: "#10b981" },
  { id: "g8_write", category: "單字", tag: "拼寫", title: "八上 單字拼寫練習卷", desc: "115 學年度第一學期單字拼寫練習", filename: "115-1G8write.html", themeColor: "#8b5cf6" },
  { id: "g9_hear", category: "單字", tag: "聽力", title: "九上 單字聽力訓練卷", desc: "115 學年度第一學期課本單字聽力練習", filename: "115-1G9hear.html", themeColor: "#3b82f6" },
  { id: "g9_match", category: "單字", tag: "配對", title: "九上 中英文配對卷", desc: "115 學年度第一學期中英文單字配對", filename: "115-1G9match.html", themeColor: "#10b981" },
  { id: "g9_write", category: "單字", tag: "拼寫", title: "九上 單字拼寫練習卷", desc: "115 學年度第一學期單字拼寫練習", filename: "115-1G9write.html", themeColor: "#8b5cf6" },
  { id: "voc_1200", category: "單字", tag: "朗讀", title: "1200 單字選擇題朗讀", desc: "依題本頁面練習單字發音，支援語速、停頓與題號朗讀設定", filename: "1200voc.html", themeColor: "#336c5a" },

  { id: "g7_keyword", category: "課文", tag: "關鍵字", title: "七上 課文關鍵字解碼卷", desc: "課文重點字詞與閱讀線索練習", filename: "115-1G7readword.html", themeColor: "#f59e0b" },
  { id: "g7_trans", category: "課文", tag: "翻譯", title: "七上 課文翻譯卷", desc: "課文翻譯與閱讀理解練習", filename: "115-1G7reading.html", themeColor: "#f43f5e" },
  { id: "g8_keyword", category: "課文", tag: "關鍵字", title: "八上 課文關鍵字解碼卷", desc: "課文重點字詞與閱讀線索練習", filename: "115-1G8readword.html", themeColor: "#f59e0b" },
  { id: "g8_trans", category: "課文", tag: "翻譯", title: "八上 課文翻譯卷", desc: "課文翻譯與閱讀理解練習", filename: "115-1G8reading.html", themeColor: "#f43f5e" },
  { id: "g9_keyword", category: "課文", tag: "關鍵字", title: "九上 課文關鍵字解碼卷", desc: "課文重點字詞與閱讀線索練習", filename: "115-1G9readword.html", themeColor: "#f59e0b" },
  { id: "g9_trans", category: "課文", tag: "翻譯", title: "九上 課文翻譯卷", desc: "課文翻譯與閱讀理解練習", filename: "115-1G9reading.html", themeColor: "#f43f5e" },

  { id: "ebook_hle", category: "電子書", tag: "翰林", title: "翰林國中英語電子書", desc: "開啟 115 學年度上學期翰林國中英語電子書", filename: "https://edisc3.hle.com.tw/edisc_v3/ebook_v2023.html#degree=%E5%9C%8B%E4%B8%AD&cat=%E8%8B%B1%E8%AA%9E&prd=JEN&year=115%E4%B8%8A&grade=%E5%85%A8%E5%B9%B4%E7%B4%9A&tab=tab2", external: true, themeColor: "#f59e0b" },
  { id: "ebook_knsh", category: "電子書", tag: "康軒", title: "康軒國中英語電子書", desc: "開啟 115 學年度第一學期康軒國中英語電子書", filename: "https://digitalmaster.knsh.com.tw/v3/pages/j/index.html#year=1151&field=en&grade=all&item=ebook&bookcase=online", external: true, themeColor: "#0ea5e9" },
  { id: "match_numbers", category: "電子書", tag: "課堂配對板", title: "英文數字配對板", desc: "英文數字三排對照，支援語音與課堂互動配對", filename: "../eng-grammar/match-numbers.html", themeColor: "#2563eb" },
  { id: "match_family", category: "電子書", tag: "課堂配對板", title: "家人稱謂配對板", desc: "家人稱謂與親友關係三排對照，支援發音", filename: "../eng-grammar/match-family.html", themeColor: "#db2777" },
  { id: "match_pronouns", category: "電子書", tag: "課堂配對板", title: "人稱代名詞配對板", desc: "主格、受格、所有格、Be 動詞與反身代名詞互動提示", filename: "../eng-grammar/match-pronouns.html", themeColor: "#7c3aed" },
  { id: "match_time_date", category: "電子書", tag: "課堂配對板", title: "時間與日期配對板", desc: "星期、月份、日期與時間的三排對照，支援語音", filename: "../eng-grammar/match-time-date.html", themeColor: "#ea580c" }
];
