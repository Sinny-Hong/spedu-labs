Sinny Spedu Labs Portal V1.3

本版完成：
- 左側子目錄全部連通。
- 「文法與生活英文」改為「生活英文與文法」。
- 標題旁加入日期與星期。
- 已預留開學週次功能。
- 串接使用者提供的 Google 試算表 CSV。
- 會自動辨識「啟用、置頂、主標題」欄位。
- 每 30 秒更新一次今日任務。
- 調整筆電版聯絡簿卡片比例，減少內部捲軸。

左側連結：
首頁 ./index.html
課本講義 ./eng-115/
生活英文與文法 ./eng-grammar/
數學教材 ./math/
生活教育 ./life/
升學輔導 ./info/
班務管理 ./classroom/

週次設定：
打開 portal.js，找到 semesterStartDate。
填入開學日，例如：
semesterStartDate: "2026-08-31"

重要：
在電腦直接雙擊 index.html 時，部分瀏覽器可能阻擋 Google CSV 跨網域讀取。
請以上傳 GitHub Pages 後的結果作為正式測試依據。
目前 CSV 先對應「今天任務」。聯絡簿、作業缺交、其他分頁需各自發布 CSV 網址後再串接。
