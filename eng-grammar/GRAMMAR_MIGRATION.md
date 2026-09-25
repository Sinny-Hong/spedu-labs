# 文法教材入口與測試流程

盤點日期：2026-09-25。實際檔案為 49 份正式舊三階段教材，以及 `grammar_template_test.html` 這一份母版驗證檔。舊系統不再統一改版；只有在新版完成並通過實際教學驗收後，才移除相對應舊檔。

## 已有新版可取代（10 份，建議驗收後刪除）

- 人稱代名詞新版 `pronouns.html`：`grammar_I.html`、`grammar_me.html`、`grammar_my.html`、`grammar_be_am_are_is.html`、`grammar_my_sons.html`
- 過去簡單式新版 `prototype-past-simple.html`：`grammar_was_were.html`、`grammar_did_didn_t.html`、`grammar_Ved.html`、`grammar_went_saw.html`、`grammar_yesterday.html`

這 10 份已從正式入口卡片退場，但檔案暫時保留，方便教學驗收與回復。

## 新版製作中待刪（3 份）

- 現在簡單式新版完成後：`grammar_do_does.html`、`grammar_goes_plays.html`、`grammar_always.html`

在新版完成前，三份舊教材仍可由入口開啟；入口另顯示不可點擊的「現在簡單式｜新版講義（製作中）」預留卡。

## 保留（36 份）

- 代名詞與相關主題：`grammar_boys_.html`、`grammar_this_that_these_those.html`、`grammar_myself.html`、`grammar_ourselves.html`、`grammar_mine.html`
- 日常句型及片語：`grammar_please.html`、`grammar_spend_cost_take.html`、`grammar_can_can_t.html`、`grammar_mr_miss.html`、`grammar_family.html`、`grammar_and_but_or.html`、`grammar_because_so.html`、`grammar_before_after.html`、`grammar_if.html`
- 時態表達：`grammar_Ving.html`、`grammar_are_Ving.html`
- 名詞、數量與介系詞：`grammar_apples.html`、`grammar_n_countable.html`、`grammar_some_many.html`、`grammar_in_on_at_space.html`、`grammar_in_on_at_time.html`、`grammar_there_is_there_are.html`、`grammar_under_place.html`
- 形容詞：`grammar_adj_er.html`、`grammar_adj_est.html`、`grammar_adj_er_est.html`
- 數字與時間：`grammar_1_10.html`、`grammar_11_19.html`、`grammar_21_99.html`、`grammar_10_20_100.html`、`grammar_1_1000000.html`、`grammar_week.html`、`grammar_months.html`、`grammar_year.html`、`grammar_clock.html`、`grammar_time.html`

## 新版正式入口規劃

- 已完成：人稱代名詞、過去簡單式。
- 製作中：現在簡單式；以不可點擊卡預留位置，舊教材暫時保留。
- 可預留：後續每一個新版主題直接加入既有分類，使用 `status: "preparing"` 顯示「教材準備中」且不產生連結；完成後補上 `filename` 並移除 `status`。

## Test 1～5 固定測試槽

五個入口共用 `test.html`，只依網址參數載入各自資料檔：`test-slots/test-1.js` 至 `test-slots/test-5.js`。資料檔可用 `source` 指向同一資料夾內的待測 HTML，也可用 `html` 直接放完整 HTML 字串；測試殼不需複製。

手機操作：選一個空槽 → 上傳待測教材 → 覆蓋相對應的 `test-N.js`，填入標題、更新日期與 `source` → 等 GitHub Pages 更新 → 開啟固定 Test 網址。通過後把教材改成正式檔名、加入 `grammar-cards.js`，再把該資料檔的 `source` 清空供下次使用。
