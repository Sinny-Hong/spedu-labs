# 名詞與單複數 代表範圍確認版

目前只製作經使用者核准的代表範圍，尚未套用全冊、推送或部署。此紀錄取代上一版分章測試的驗證結論。

內容唯一來源：最新正式 Word《A05-A06_名詞與單複數.docx》，2026-10-20 10:26 更新，51,353 bytes。限原卷前八頁；不含 B卷。原卷正文段落與表格（body 索引 0–129）已與先前原卷逐項比對，相同；B卷標題在索引 132，完全不取用。

直接實作母版：`present-simple.html`。直接擷取其基礎 CSS（只保留本範圍使用的選擇器）、手機規則，以及 book／chapter／pagehead／section／q-list／choice／answer-input／nav-panel 骨架。保留 render、bindInteractions、gradeSection、showAnswers 的分工與目錄 scrollIntoView 操作；不再沿用上一版 setChapter、setMode、printChapter 或題下 teacher-answer。

必要調整：頂部四鍵、✓／✕ 批改、不清除錯答、不計分、原位答案覆層、保留學生輸入、固定題目 ID 對應、整份依當下答案狀態列印，以及 A4 每頁重複表頭。

代表範圍共 33 個題目／表格欄位：1-1 五題（含兩題圈選、兩題選擇、一題開放回答）、2-3 a／an 十題左右各五題、第三章橫向表格十五格與 3-4 三題選擇。原卷重複的 key 欄位均保留，未補回刪題或混入教師備課註記。

## 題目與答案對照

| 固定 ID | 正式 Word 位置 | 題幹／內容 | 正解 |
|---|---|---|---|
| noun-1-1-q1 | 4 | 1. 圈出名詞：run / cat / happy | cat |
| noun-1-1-q2 | 5 | 2. 圈出名詞：teacher / quickly / play | teacher |
| noun-1-1-q3 | 6 | 3. 哪一個是物品？ | pencil |
| noun-1-1-q4 | 7 | 4. 哪一個是動物？ | dog |
| noun-1-1-q5 | 8 | 5. 寫出一個教室裡看得到的物品（中文或英文皆可）：＿＿＿＿ | 合理物品皆可 |
| noun-2-3-apple | 表35／第1列第1欄 | 1. ______ apple | an |
| noun-2-3-book | 表35／第2列第1欄 | 2. ______ book | a |
| noun-2-3-orange | 表35／第3列第1欄 | 3. ______ orange | an |
| noun-2-3-teacher | 表35／第4列第1欄 | 4. ______ teacher | a |
| noun-2-3-umbrella | 表35／第5列第1欄 | 5. ______ umbrella | an |
| noun-2-3-egg | 表35／第1列第2欄 | 6. ______ egg | an |
| noun-2-3-desk | 表35／第2列第2欄 | 7. ______ desk | a |
| noun-2-3-island | 表35／第3列第2欄 | 8. ______ island | an |
| noun-2-3-cat | 表35／第4列第2欄 | 9. ______ cat | a |
| noun-2-3-elephant | 表35／第5列第2欄 | 10. ______ elephant | an |
| noun-plural-s-cat | 表46／一般／cat／1 | cat → ______ | cats |
| noun-plural-s-book | 表46／一般／book／1 | book → ______ | books |
| noun-plural-s-dog | 表46／一般／dog／1 | dog → ______ | dogs |
| noun-plural-s-desk | 表46／一般／desk／1 | desk → ______ | desks |
| noun-plural-es-box | 表46／字尾 s／x／ch／sh／box／1 | box → ______ | boxes |
| noun-plural-es-watch | 表46／字尾 s／x／ch／sh／watch／1 | watch → ______ | watches |
| noun-plural-es-dish | 表46／字尾 s／x／ch／sh／dish／1 | dish → ______ | dishes |
| noun-plural-es-bus | 表46／字尾 s／x／ch／sh／bus／1 | bus → ______ | buses |
| noun-plural-consonant-y-baby | 表46／子音＋y／baby／1 | baby → ______ | babies |
| noun-plural-consonant-y-city | 表46／子音＋y／city／1 | city → ______ | cities |
| noun-plural-consonant-y-story | 表46／子音＋y／story／1 | story → ______ | stories |
| noun-plural-vowel-y-boy | 表46／母音＋y／boy／1 | boy → ______ | boys |
| noun-plural-vowel-y-key-1 | 表46／母音＋y／key／1 | key → ______ | keys |
| noun-plural-vowel-y-toy | 表46／母音＋y／toy／1 | toy → ______ | toys |
| noun-plural-vowel-y-key-2 | 表46／母音＋y／key／2 | key → ______ | keys |
| noun-3-4-desk | 49 | 1. one desk → two ＿＿ | desks |
| noun-3-4-watch | 50 | 2. one watch → two ＿＿ | watches |
| noun-3-4-baby | 51 | 3. one baby → two ＿＿ | babies |

## 檢查結果

已完成 Chrome 代表範圍驗證（2026-10-20）。目前停在使用者要求的介面驗收階段，未將機制擴充至原卷全部八頁。

- 33 個題目／表格欄位與正式 Word 對照，題幹、選項及順序相符。文字比對只忽略排版空白、作答線及全半形斜線。
- 頂部只有目錄、批改答案、顯示／隱藏答案、列印整份四鍵；三個代表章節全部連續顯示，目錄可定位章節與小節、回到頂端，網址不變。
- 一般填空與表格填空接受合理空白及大小寫正規化；` AN ` 可通過，`ann`、`watchs`、`book`（應為 books）仍判錯。
- 正確 ✓、錯誤 ✕ 均顯示在原作答位置；未答保持空白，錯誤輸入及選擇不被刪除。開放題在有作答後顯示「需教師判斷」。
- 更改文字或選項，原有批改標記立即清除；相關無障礙標籤同步清除。
- 顯示正解不需先作答；答案直接在原底線／原選項呈現，沒有題下解答區。顯示後再隱藏，學生輸入與選取完整保留。測得顯示前後頁高、表格高及捲動座標完全相同。
- 以固定 ID 查詢答案；實際重排 apple／book 的 DOM 位置後仍正確批改，沒有按畫面次序配對。
- 320、390、768、1280、1920 px，空白／揭答共十組檢查，無頁面橫向溢出，無可見答案被裁切。手機仍維持 a／an 左右各五題與複數橫向表格。
- 整份列印實際產生空白與揭答兩份 A4 檢查樣本，各兩頁並逐頁檢視。每頁均重複講義全名、班級、姓名；題目選項同頁，橫向表格完整，沒有額外空白標題頁。空白樣本實際文字沒有隱藏的表格答案；揭答樣本在原作答位置印出答案。
- 沒有加入計分、儲存、模式切換或其他額外功能。`present-simple.html` 雜湊與製作前一致，未修改母版本身、其他教材或首頁。

本機測試：[代表範圍確認版](http://127.0.0.1:8766/noun-number-preview.html?v=2)。僅限目前電腦、預覽服務執行期間使用，尚未推送 GitHub 或部署。
