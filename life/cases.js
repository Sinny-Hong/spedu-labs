<<<<<<< HEAD
// cases.js
// 《異想事件簿》案件題庫
// answer 使用 0 起算：A=0、B=1、C=2、D=3

window.CASES = [
  {
    id: "case001",
    caseNumber: "CASE 001",
    episode: 1,
    title: "Discord 限時免費點數",
    shortTitle: "Discord 詐騙調查",
    description: "一則看似官方的 Discord Nitro 免費活動公告，要求使用者立刻點擊網址領取獎勵。請觀察訊息中的細節，判斷它是否可信。",
    coverImage: "images/case001-cover.png",

    scenes: [
      {
        id: "case001-scene01",
        sceneNumber: 1,
        title: "可疑的免費活動",
        image: "images/case001-scene01.png",
        story:
          "主角收到一則 Discord Nitro 限時免費活動訊息。訊息看起來很像官方公告，但網址、帳號、倒數計時和留言都讓人覺得可疑。主角沒有立刻操作，而是先觀察訊息內容並確認真假。",

        // 主線調查：全部完成後才解鎖下一個場景或案件判定
        mainQuestions: [
          {
            id: "case001-main01",
            title: "線索 1｜活動網址",
            content: "觀察公告中的連結：discord-event-gift.com。",
            question: "這個網址最可疑的地方是什麼？",
            choices: [
              "網址中有 discord 字樣",
              "它不是 Discord 官方網域",
              "網址使用英文"
            ],
            answer: 1,
            explanation:
              "網址雖然包含 discord，但不是 Discord 官方網域。詐騙網站常把品牌名稱放進網址，讓人誤以為是官方網站。",
            notebook:
              "網址含有品牌名稱，不代表它就是官方網站。"
          },
          {
            id: "case001-main02",
            title: "線索 2｜發文帳號",
            content: "公告由 PixelAdmin 發出，帳號旁邊標示 BOT。",
            question: "看到 BOT 標示時，應該怎麼判斷？",
            choices: [
              "BOT 一定是官方帳號",
              "只要名稱像管理員就可信",
              "還要確認伺服器身分與官方公告來源"
            ],
            answer: 2,
            explanation:
              "BOT 只是機器人帳號標示，不代表它屬於 Discord 官方。名稱也可以自行設定，仍要檢查伺服器來源與官方公告。",
            notebook:
              "BOT 與管理員名稱都不能直接證明官方身分。"
          },
          {
            id: "case001-main03",
            title: "線索 3｜限量贈送",
            content: "公告寫著：前 1000 名會員可免費獲得 Nitro 三個月。",
            question: "面對限量免費贈送，最安全的做法是什麼？",
            choices: [
              "立刻點擊，避免額滿",
              "先到 Discord 官方網站查證",
              "先請朋友幫忙點擊"
            ],
            answer: 1,
            explanation:
              "限量與免費很容易讓人急著行動。安全做法是離開訊息中的連結，改到 Discord 官方網站或官方公告查證。",
            notebook:
              "限量免費活動要先到官方來源查證。"
          },
          {
            id: "case001-main04",
            title: "線索 4｜時間壓力",
            content: "公告寫著活動只到今天晚上 11:59，錯過就沒有。",
            question: "這種寫法可能造成什麼影響？",
            choices: [
              "讓人因為緊張而來不及查證",
              "讓網頁載入更快",
              "證明活動一定是真的"
            ],
            answer: 0,
            explanation:
              "詐騙常利用「今天截止」「錯過就沒有」製造急迫感，讓人快速點擊，沒有時間冷靜查證。",
            notebook:
              "限時警告可能是在製造壓力，讓人停止思考。"
          },
          {
            id: "case001-main05",
            title: "線索 5｜領取按鈕",
            content: "畫面有一個醒目的綠色 Claim Now! 按鈕，引導使用者立刻點擊。",
            question: "看到這種按鈕時，第一步應該做什麼？",
            choices: [
              "先檢查網址和活動來源",
              "按下去再決定",
              "只要是綠色按鈕就安全"
            ],
            answer: 0,
            explanation:
              "按鈕外觀不能證明安全。點擊前應先確認網址、發文帳號與官方公告來源。",
            notebook:
              "醒目的領取按鈕不能取代來源查證。"
          },
          {
            id: "case001-main06",
            title: "線索 6｜倒數計時",
            content: "公告下方顯示活動倒數：08 小時 17 分 32 秒。",
            question: "倒數計時最可能被用來做什麼？",
            choices: [
              "增加畫面美觀",
              "催促使用者立刻行動",
              "證明伺服器有很多人"
            ],
            answer: 1,
            explanation:
              "倒數計時會讓人產生時間不足的感覺，容易在沒有查證的情況下做決定。",
            notebook:
              "倒數計時常用來催促點擊與降低警覺。"
          },
          {
            id: "case001-main07",
            title: "線索 7｜官方風格圖片",
            content: "公告使用 Discord Nitro 圖片、品牌配色和角色設計，看起來很像官方活動。",
            question: "只靠圖片外觀，可以判斷活動是真的嗎？",
            choices: [
              "可以，官方圖片無法複製",
              "不可以，圖片與標誌都可能被盜用",
              "可以，只要有 Nitro 字樣"
            ],
            answer: 1,
            explanation:
              "品牌圖片、Logo 與配色都可以被複製。判斷真假應以網址、帳號身分和官方公告為主。",
            notebook:
              "官方風格圖片可能被盜用，不能只看外觀。"
          },
          {
            id: "case001-main08",
            title: "線索 8｜大量反應",
            content: "公告下方有很多表情反應，像是派對、火焰、愛心和眼睛。",
            question: "大量表情反應可以證明活動安全嗎？",
            choices: [
              "可以，很多人按就一定是真的",
              "不可以，反應數字可能被安排或偽造",
              "可以，只要超過 100 個"
            ],
            answer: 1,
            explanation:
              "反應數量只能表示畫面上看起來很多人互動，不能證明活動來源與網址安全。",
            notebook:
              "大量按讚與表情反應不能當成安全證明。"
          },
          {
            id: "case001-main09",
            title: "線索 9｜成功留言",
            content: "下方留言都說自己已經成功領到 Nitro，並催促其他人快點領。",
            question: "這些留言為什麼仍然需要懷疑？",
            choices: [
              "可能是事先安排的假帳號與假留言",
              "留言中有表情符號",
              "留言時間很接近"
            ],
            answer: 0,
            explanation:
              "詐騙頁面常用假帳號與成功留言製造可信感。留言看起來熱鬧，也不能取代官方查證。",
            notebook:
              "成功留言可能是安排好的假證據。"
          },
          {
            id: "case001-main10",
            title: "線索 10｜案件判斷",
            content:
              "綜合網址、BOT 身分、限時限量、倒數、Claim Now 按鈕、官方風格圖片、反應數和成功留言。",
            question: "這則 Discord Nitro 公告最可能是什麼？",
            choices: [
              "Discord 官方週年活動",
              "一般伺服器的正常福利",
              "誘導點擊的釣魚詐騙"
            ],
            answer: 2,
            explanation:
              "這張公告同時使用多種常見詐騙手法：假冒官方、製造急迫感、利用免費贈品與假互動，引導使用者點擊可疑網址。",
            notebook:
              "本案是假冒 Discord 活動、誘導點擊可疑網址的釣魚詐騙。"
          }
        ],

        // 案外案：不影響主線進度
        extraMissions: [
          {
            id: "case001-extra01",
            title: "案外案 1",
            question: "根據第一話的內容，主角收到可疑訊息後，先做了什麼事？",
            choices: [
              "立刻依照指示操作",
              "把訊息轉傳給所有同學",
              "先觀察訊息內容並確認真假",
              "直接刪除所有手機資料"
            ],
            answer: 2,
            explanation:
              "主角沒有立刻照做，而是先查看訊息中的可疑之處。"
          },
          {
            id: "case001-extra02",
            title: "案外案 2",
            question: "文中提到「blue」這個單字，blue 是什麼意思？",
            choices: [
              "紅色",
              "藍色",
              "黑色",
              "白色"
            ],
            answer: 1,
            explanation:
              "blue 的中文意思是「藍色」。"
          },
          {
            id: "case001-extra03",
            title: "案外案 3",
            question: "某項服務的使用期限是 7 月 25 日，今天是 7 月 22 日，還剩下幾天可以使用？",
            choices: [
              "2 天",
              "3 天",
              "4 天",
              "5 天"
            ],
            answer: 1,
            explanation:
              "從 7 月 22 日到 7 月 25 日，還剩 3 天。"
          },
          {
            id: "case001-extra04",
            title: "案外案 4",
            question: "某個帳號可以使用到下午 5 點，現在是下午 3 點，還剩下幾個小時？",
            choices: [
              "1 小時",
              "2 小時",
              "3 小時",
              "4 小時"
            ],
            answer: 1,
            explanation:
              "下午 3 點到下午 5 點，共有 2 小時。"
          },
          {
            id: "case001-extra05",
            title: "案外案 5",
            question: "收到陌生人傳來的網址，並要求輸入帳號、密碼或驗證碼時，怎麼做比較安全？",
            choices: [
              "立刻輸入資料",
              "請朋友先輸入看看",
              "截圖後公開貼上網路",
              "不點網址，先向可信任的大人或官方管道確認"
            ],
            answer: 3,
            explanation:
              "陌生網址可能是假網站，帳號、密碼和驗證碼都不可以隨便提供。"
          }
        ],

        completion: {
          requiredMainQuestions: 10,
          unlockNextScene: false,
          unlockFinalJudgment: true,
          message: "10 條主線線索已收集完成，可以進行案件判定。"
        }
      }
    ],

    finalJudgment: {
      question: "這則 Discord Nitro 公告是真活動，還是假活動？",
      choices: [
        "真活動",
        "假活動"
      ],
      answer: 1,
      explanation:
        "這是假冒 Discord 活動的釣魚詐騙。可疑網址、假冒帳號、限時壓力、倒數計時與假互動，都是常見的誘騙手法。",
      stamp: "CASE CLOSED"
    }
  }
];

=======
from pathlib import Path

html = r'''<!DOCTYPE html>
<html lang="zh-TW">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>異想事件簿｜Detective Game</title>
<style>
*{box-sizing:border-box}
:root{
  --navy:#163a59;
  --navy-deep:#0f2b43;
  --navy-soft:#234f73;
  --cream:#fffaf0;
  --paper:#f7f1e4;
  --orange:#f6aa3b;
  --orange-dark:#cf7d16;
  --green:#4ca36d;
  --red:#d34b4b;
  --ink:#173a59;
  --muted:#7e8e9e;
  --line:#d9c9a7;
  --bluebox:#eaf2ff;
  --shadow:0 12px 28px rgba(0,0,0,.18);
}
html,body{
  margin:0;
  min-height:100%;
  font-family:"Microsoft JhengHei","Noto Sans TC",sans-serif;
  background:#e9eef2;
  color:var(--ink);
}
button,select,input{font:inherit}
button{touch-action:manipulation}
body{padding:10px}

.app{
  width:min(1180px,100%);
  min-height:calc(100vh - 20px);
  margin:auto;
  border:4px solid var(--navy);
  border-radius:30px;
  overflow:hidden;
  background:linear-gradient(180deg,var(--navy-soft),var(--navy-deep));
  box-shadow:var(--shadow);
  position:relative;
}

.topbar{
  min-height:92px;
  display:flex;
  align-items:center;
  justify-content:space-between;
  gap:18px;
  padding:16px 24px;
  background:var(--navy);
  color:#fff;
  position:relative;
  z-index:15;
}
.brand-title{
  min-width:0;
  text-align:right;
}
.brand-title strong{
  display:block;
  font-size:1.08rem;
  letter-spacing:.04em;
}
.brand-title span{
  display:block;
  margin-top:5px;
  color:#d8e6f1;
  font-size:.92rem;
}

.menu-toggle{
  border:2px solid rgba(255,255,255,.28);
  border-radius:999px;
  padding:10px 16px 10px 11px;
  background:linear-gradient(180deg,#ffbd55,#f39c25);
  color:#533408;
  font-weight:900;
  display:flex;
  align-items:center;
  gap:10px;
  cursor:pointer;
  box-shadow:0 5px 0 rgba(0,0,0,.18), inset 0 1px 0 rgba(255,255,255,.45);
  transition:transform .16s ease,filter .16s ease;
}
.menu-toggle:hover{transform:translateY(-2px);filter:brightness(1.04)}
.menu-toggle:active{transform:translateY(2px)}
.menu-icon{
  width:38px;
  height:38px;
  border-radius:50%;
  display:grid;
  place-items:center;
  background:rgba(255,255,255,.4);
  font-size:1.25rem;
}
.menu-toggle.open .menu-icon{transform:rotate(90deg)}
.menu-toggle .close-label{display:none}
.menu-toggle.open .open-label{display:none}
.menu-toggle.open .close-label{display:inline}

.layout{
  display:grid;
  grid-template-columns:300px 1fr;
  min-height:calc(100vh - 112px);
}
.sidebar{
  background:
    repeating-linear-gradient(0deg,transparent 0 37px,rgba(25,61,91,.05) 38px 39px),
    var(--cream);
  border-right:3px solid var(--navy);
  padding:24px 20px 30px;
  transition:transform .28s ease,width .28s ease,padding .28s ease;
  overflow:hidden;
}
.sidebar.collapsed{
  width:0;
  padding-left:0;
  padding-right:0;
  border-right:0;
}
.sidebar-inner{width:256px}
.logo-card{
  padding:16px;
  border:3px solid var(--navy);
  border-radius:22px;
  background:#fff1c8;
  margin-bottom:18px;
}
.logo-card .case-no{font-weight:900;color:var(--orange-dark);font-size:.95rem}
.logo-card h1{font-size:1.35rem;margin:6px 0 0}
.nav-group{display:grid;gap:10px;margin-top:18px}
.nav-btn,.nav-select{
  width:100%;
  border:2px solid #d9ccb0;
  border-radius:16px;
  padding:13px 14px;
  background:#fff;
  color:var(--ink);
  font-weight:800;
}
.nav-btn{
  cursor:pointer;
  text-align:left;
}
.nav-btn:hover{border-color:var(--orange)}
.nav-btn.active{background:var(--navy);color:#fff;border-color:var(--navy)}
.nav-label{
  display:block;
  font-size:.82rem;
  color:var(--muted);
  font-weight:800;
  margin:6px 2px 5px;
}
.progress-box{
  margin-top:20px;
  padding:16px;
  border:3px solid #d8c7a2;
  border-radius:20px;
  background:rgba(255,255,255,.72);
}
.progress-row{
  display:flex;
  justify-content:space-between;
  gap:10px;
  font-weight:900;
}
.progress-track{
  height:16px;
  border:3px solid var(--navy);
  border-radius:999px;
  overflow:hidden;
  background:#fff;
  margin-top:11px;
}
.progress-bar{height:100%;width:0;background:var(--orange);transition:width .25s ease}

.main{
  min-width:0;
  padding:28px;
  color:#fff;
}
.scene-shell{
  width:min(860px,100%);
  margin:auto;
}
.scene-card{
  background:var(--cream);
  color:var(--ink);
  border-radius:26px;
  padding:18px;
  box-shadow:0 10px 0 rgba(0,0,0,.18);
}
.scene-image{
  min-height:260px;
  border-radius:18px;
  overflow:hidden;
  background:linear-gradient(135deg,#d7e3ef,#f8e7b8);
  display:grid;
  place-items:center;
  border:3px solid #d8c18e;
}
.scene-image img{
  width:100%;
  display:block;
  max-height:540px;
  object-fit:contain;
}
.scene-placeholder{
  text-align:center;
  padding:30px;
  color:var(--muted);
  font-weight:800;
}
.scene-placeholder b{
  display:block;
  color:var(--navy);
  font-size:1.6rem;
  margin-bottom:8px;
}
.scene-story{
  margin-top:16px;
  padding:18px 20px;
  background:var(--bluebox);
  border-radius:17px;
  line-height:1.75;
  font-size:1.05rem;
}
.section-title{
  display:flex;
  align-items:center;
  justify-content:space-between;
  gap:12px;
  margin:28px 0 14px;
}
.section-title h2{margin:0;font-size:1.35rem}
.section-title span{
  padding:6px 11px;
  border-radius:999px;
  background:rgba(255,255,255,.16);
  font-size:.88rem;
  font-weight:900;
}

.main-grid{
  display:grid;
  grid-template-columns:repeat(5,minmax(82px,1fr));
  gap:14px;
}
.main-question{
  min-height:112px;
  border:0;
  border-radius:19px;
  background:linear-gradient(180deg,#f9bb55,#ee951c);
  color:#4c310c;
  box-shadow:0 7px 0 rgba(0,0,0,.23);
  font-weight:900;
  cursor:pointer;
  padding:12px 8px;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  gap:7px;
  transition:transform .14s ease,filter .14s ease;
}
.main-question:hover{transform:translateY(-3px);filter:brightness(1.04)}
.main-question:active{transform:translateY(2px)}
.main-question.done{background:linear-gradient(180deg,#66bd82,#3e975e);color:#fff}
.main-question .num{font-size:1.5rem}
.main-question .name{font-size:.9rem;line-height:1.2}

.extra-grid{
  display:flex;
  flex-wrap:wrap;
  gap:18px;
  justify-content:center;
}
.extra-question{
  width:92px;
  height:92px;
  border:4px solid #ffe1a7;
  border-radius:50%;
  background:linear-gradient(180deg,#fff7db,#ffc868);
  color:#62400c;
  box-shadow:0 7px 0 rgba(0,0,0,.2);
  font-size:1.35rem;
  font-weight:900;
  cursor:pointer;
  transition:transform .14s ease,filter .14s ease;
}
.extra-question:hover{transform:translateY(-3px) scale(1.03);filter:brightness(1.04)}
.extra-question:active{transform:translateY(2px)}
.extra-question.done{
  background:linear-gradient(180deg,#78c990,#4ca36d);
  color:#fff;
  border-color:#dff4e7;
}
.unlock{
  margin-top:22px;
  display:none;
  background:#fff4cc;
  color:#56380d;
  border-radius:18px;
  padding:16px 18px;
  font-weight:900;
  text-align:center;
}
.unlock.show{display:block}

.overlay{
  position:absolute;
  inset:92px 0 0;
  background:rgba(4,18,31,.72);
  display:none;
  align-items:flex-start;
  justify-content:center;
  padding:34px 18px 70px;
  overflow-y:auto;
  z-index:30;
}
.overlay.show{display:flex}
.modal{
  width:min(720px,100%);
  background:var(--cream);
  color:var(--ink);
  border-radius:28px;
  padding:26px;
  position:relative;
  box-shadow:var(--shadow);
}
.modal-close{
  position:absolute;
  right:20px;
  top:18px;
  width:52px;
  height:52px;
  border:0;
  border-radius:50%;
  background:linear-gradient(180deg,#e66868,#c83e3e);
  color:#fff;
  font-size:1.4rem;
  font-weight:900;
  cursor:pointer;
  box-shadow:0 5px 0 rgba(0,0,0,.18);
}
.modal h2{margin:0 72px 16px 0;font-size:1.55rem}
.question-content{
  background:var(--bluebox);
  border-radius:18px;
  padding:16px 18px;
  line-height:1.7;
  margin-bottom:16px;
}
.question-text{
  font-size:1.2rem;
  font-weight:900;
  line-height:1.6;
}
.choices{display:grid;gap:11px;margin-top:18px}
.choice{
  display:flex;
  gap:12px;
  align-items:flex-start;
  border:3px solid #d8c9aa;
  border-radius:17px;
  padding:14px 16px;
  background:#fff;
  cursor:pointer;
  font-weight:800;
}
.choice:has(input:checked){
  border-color:var(--orange);
  box-shadow:0 0 0 4px rgba(246,170,59,.22);
}
.choice input{margin-top:4px;transform:scale(1.25)}
.submit-btn,.secondary-btn{
  width:100%;
  border:0;
  border-radius:17px;
  padding:15px;
  font-weight:900;
  cursor:pointer;
}
.submit-btn{
  margin-top:18px;
  background:var(--navy);
  color:#fff;
}
.secondary-btn{
  margin-top:12px;
  background:var(--orange);
  color:#54350b;
}
.feedback{
  display:none;
  margin-top:18px;
  border-radius:18px;
  padding:16px;
  line-height:1.65;
  font-weight:800;
}
.feedback.show{display:block}
.feedback.correct{background:#dff4e7;color:#205f39}
.feedback.wrong{background:#fce2e2;color:#8a2b2b}
.feedback strong{display:block;margin-bottom:6px}
.notebook-list{display:grid;gap:12px}
.note{
  padding:14px 16px;
  border-left:7px solid var(--navy);
  border-radius:12px;
  background:#eaf2ff;
  line-height:1.55;
  font-weight:800;
}
.empty{color:var(--muted);text-align:center;padding:24px}
.settings-grid{display:grid;gap:16px}
.setting-row{
  padding:15px;
  border:2px solid #d9ccb0;
  border-radius:16px;
  background:#fff;
}
.setting-row label{display:block;font-weight:900;margin-bottom:8px}
.setting-row input,.setting-row select{
  width:100%;
  border:2px solid #ccd6df;
  border-radius:12px;
  padding:11px 12px;
}
.switch-row{
  display:flex;
  align-items:center;
  justify-content:space-between;
  gap:16px;
}
.danger-btn{
  width:100%;
  border:0;
  border-radius:14px;
  padding:13px;
  background:var(--red);
  color:#fff;
  font-weight:900;
  cursor:pointer;
}

@media(max-width:900px){
  .layout{display:block}
  .sidebar{
    position:absolute;
    inset:92px auto 0 0;
    width:min(82%,320px);
    z-index:20;
    transform:translateX(0);
    box-shadow:var(--shadow);
  }
  .sidebar.collapsed{
    width:min(82%,320px);
    padding:24px 20px 30px;
    border-right:3px solid var(--navy);
    transform:translateX(-105%);
  }
}
@media(max-width:650px){
  body{padding:0}
  .app{min-height:100vh;border-radius:0;border-width:0}
  .topbar{padding:12px 14px;min-height:82px}
  .layout{min-height:calc(100vh - 82px)}
  .sidebar{inset:82px auto 0 0}
  .main{padding:20px 14px 34px}
  .scene-card{padding:12px;border-radius:20px}
  .scene-image{min-height:200px}
  .main-grid{grid-template-columns:repeat(2,1fr);gap:12px}
  .main-question{min-height:94px}
  .extra-grid{gap:14px}
  .extra-question{width:78px;height:78px}
  .overlay{inset:82px 0 0;padding:24px 12px 50px}
  .modal{padding:22px 18px}
  .menu-toggle{padding-right:12px}
  .menu-toggle .open-label,.menu-toggle .close-label{display:none!important}
}
</style>
</head>
<body>
<div class="app">
  <header class="topbar">
    <button id="menuToggle" class="menu-toggle" type="button" aria-expanded="true">
      <span class="menu-icon">🔍</span>
      <span class="open-label">開啟選單</span>
      <span class="close-label">收合選單</span>
    </button>

    <div class="brand-title">
      <strong id="topCaseTitle">異想事件簿</strong>
      <span id="topSceneTitle">載入案件中……</span>
    </div>
  </header>

  <div class="layout">
    <aside id="sidebar" class="sidebar">
      <div class="sidebar-inner">
        <div class="logo-card">
          <div id="sidebarCaseNo" class="case-no">CASE</div>
          <h1 id="sidebarCaseTitle">異想事件簿</h1>
        </div>

        <div class="nav-group">
          <button id="homeBtn" class="nav-btn active" type="button">🏠 首頁</button>

          <label class="nav-label" for="caseSelect">案件選擇</label>
          <select id="caseSelect" class="nav-select"></select>

          <label class="nav-label" for="sceneSelect">場景選擇</label>
          <select id="sceneSelect" class="nav-select"></select>

          <button id="notebookBtn" class="nav-btn" type="button">📓 偵探筆記</button>
          <button id="settingsBtn" class="nav-btn" type="button">⚙️ 偵探設定</button>
        </div>

        <div class="progress-box">
          <div class="progress-row">
            <span>主線進度</span>
            <span id="progressText">0 / 10</span>
          </div>
          <div class="progress-track">
            <div id="progressBar" class="progress-bar"></div>
          </div>
        </div>
      </div>
    </aside>

    <main class="main">
      <div class="scene-shell">
        <section class="scene-card">
          <div id="sceneImage" class="scene-image">
            <div class="scene-placeholder">
              <b>案件情境圖</b>
              請將圖片放入 images 資料夾
            </div>
          </div>
          <div id="sceneStory" class="scene-story">正在讀取案件資料……</div>
        </section>

        <div class="section-title">
          <h2>主線調查</h2>
          <span>方塊 1～10</span>
        </div>
        <div id="mainGrid" class="main-grid"></div>

        <div class="section-title">
          <h2>案外案</h2>
          <span>圓形 1～5</span>
        </div>
        <div id="extraGrid" class="extra-grid"></div>

        <div id="unlockNote" class="unlock">主線調查完成，可以進行案件判定。</div>
      </div>
    </main>
  </div>

  <div id="questionOverlay" class="overlay">
    <section class="modal" role="dialog" aria-modal="true" aria-labelledby="questionTitle">
      <button class="modal-close" data-close="questionOverlay" type="button">×</button>
      <h2 id="questionTitle">題目</h2>
      <div id="questionContent" class="question-content"></div>
      <div id="questionText" class="question-text"></div>
      <div id="choices" class="choices"></div>
      <button id="submitAnswer" class="submit-btn" type="button">送出答案</button>
      <div id="feedback" class="feedback" aria-live="polite"></div>
    </section>
  </div>

  <div id="notebookOverlay" class="overlay">
    <section class="modal" role="dialog" aria-modal="true" aria-labelledby="notebookTitle">
      <button class="modal-close" data-close="notebookOverlay" type="button">×</button>
      <h2 id="notebookTitle">偵探筆記</h2>
      <div id="notebookList" class="notebook-list"></div>
    </section>
  </div>

  <div id="settingsOverlay" class="overlay">
    <section class="modal" role="dialog" aria-modal="true" aria-labelledby="settingsTitle">
      <button class="modal-close" data-close="settingsOverlay" type="button">×</button>
      <h2 id="settingsTitle">偵探設定</h2>
      <div class="settings-grid">
        <div class="setting-row">
          <label for="detectiveName">偵探姓名</label>
          <input id="detectiveName" type="text" placeholder="請輸入姓名">
        </div>
        <div class="setting-row switch-row">
          <div>
            <strong>語音朗讀</strong>
            <div style="margin-top:4px;color:var(--muted);font-size:.9rem">預設關閉</div>
          </div>
          <input id="voiceToggle" type="checkbox">
        </div>
        <div class="setting-row">
          <label for="voiceSpeed">朗讀速度</label>
          <select id="voiceSpeed">
            <option value="0.8">慢</option>
            <option value="1" selected>正常</option>
            <option value="1.2">快</option>
          </select>
        </div>
        <button id="clearRecord" class="danger-btn" type="button">清除本機紀錄</button>
      </div>
    </section>
  </div>
</div>

<script src="cases.js"></script>
<script>
(() => {
  const appData = Array.isArray(window.CASES) ? window.CASES : [];
  const storageKey = "detectiveGameSaveV1";

  const state = {
    caseIndex: 0,
    sceneIndex: 0,
    activeQuestion: null,
    activeType: null,
    save: loadSave()
  };

  const el = {
    sidebar: document.getElementById("sidebar"),
    menuToggle: document.getElementById("menuToggle"),
    topCaseTitle: document.getElementById("topCaseTitle"),
    topSceneTitle: document.getElementById("topSceneTitle"),
    sidebarCaseNo: document.getElementById("sidebarCaseNo"),
    sidebarCaseTitle: document.getElementById("sidebarCaseTitle"),
    caseSelect: document.getElementById("caseSelect"),
    sceneSelect: document.getElementById("sceneSelect"),
    sceneImage: document.getElementById("sceneImage"),
    sceneStory: document.getElementById("sceneStory"),
    mainGrid: document.getElementById("mainGrid"),
    extraGrid: document.getElementById("extraGrid"),
    progressText: document.getElementById("progressText"),
    progressBar: document.getElementById("progressBar"),
    unlockNote: document.getElementById("unlockNote"),
    questionOverlay: document.getElementById("questionOverlay"),
    questionTitle: document.getElementById("questionTitle"),
    questionContent: document.getElementById("questionContent"),
    questionText: document.getElementById("questionText"),
    choices: document.getElementById("choices"),
    submitAnswer: document.getElementById("submitAnswer"),
    feedback: document.getElementById("feedback"),
    notebookBtn: document.getElementById("notebookBtn"),
    notebookOverlay: document.getElementById("notebookOverlay"),
    notebookList: document.getElementById("notebookList"),
    settingsBtn: document.getElementById("settingsBtn"),
    settingsOverlay: document.getElementById("settingsOverlay"),
    detectiveName: document.getElementById("detectiveName"),
    voiceToggle: document.getElementById("voiceToggle"),
    voiceSpeed: document.getElementById("voiceSpeed"),
    clearRecord: document.getElementById("clearRecord")
  };

  function loadSave() {
    try {
      return JSON.parse(localStorage.getItem(storageKey)) || {
        answered: {},
        notebook: [],
        settings: { detectiveName: "", voice: false, speed: "1" }
      };
    } catch {
      return {
        answered: {},
        notebook: [],
        settings: { detectiveName: "", voice: false, speed: "1" }
      };
    }
  }

  function saveState() {
    localStorage.setItem(storageKey, JSON.stringify(state.save));
  }

  function currentCase() {
    return appData[state.caseIndex];
  }

  function currentScene() {
    const c = currentCase();
    return c?.scenes?.[state.sceneIndex];
  }

  function questionKey(type, id) {
    return `${type}:${id}`;
  }

  function initSelectors() {
    el.caseSelect.innerHTML = "";
    appData.forEach((item, index) => {
      const option = document.createElement("option");
      option.value = index;
      option.textContent = `${item.caseNumber}｜${item.shortTitle || item.title}`;
      el.caseSelect.appendChild(option);
    });
    refreshSceneSelect();
  }

  function refreshSceneSelect() {
    el.sceneSelect.innerHTML = "";
    const scenes = currentCase()?.scenes || [];
    scenes.forEach((scene, index) => {
      const option = document.createElement("option");
      option.value = index;
      option.textContent = `場景 ${index + 1}｜${scene.title}`;
      el.sceneSelect.appendChild(option);
    });
    el.sceneSelect.value = String(state.sceneIndex);
  }

  function render() {
    const c = currentCase();
    const s = currentScene();

    if (!c || !s) {
      el.sceneStory.textContent = "找不到案件資料，請確認 cases.js 已放在同一個資料夾。";
      return;
    }

    el.caseSelect.value = String(state.caseIndex);
    el.topCaseTitle.textContent = `${c.caseNumber}｜${c.title}`;
    el.topSceneTitle.textContent = `場景 ${state.sceneIndex + 1}｜${s.title}`;
    el.sidebarCaseNo.textContent = c.caseNumber;
    el.sidebarCaseTitle.textContent = c.title;
    el.sceneStory.textContent = s.story || "";

    renderImage(s.image, s.title);
    renderMainQuestions(s.mainQuestions || []);
    renderExtraQuestions(s.extraMissions || []);
    updateProgress(s.mainQuestions || []);

    el.detectiveName.value = state.save.settings.detectiveName || "";
    el.voiceToggle.checked = !!state.save.settings.voice;
    el.voiceSpeed.value = state.save.settings.speed || "1";
  }

  function renderImage(src, title) {
    el.sceneImage.innerHTML = "";
    if (!src) {
      el.sceneImage.innerHTML = `<div class="scene-placeholder"><b>案件情境圖</b>尚未設定圖片路徑</div>`;
      return;
    }

    const img = document.createElement("img");
    img.src = src;
    img.alt = title || "案件情境圖";
    img.addEventListener("error", () => {
      el.sceneImage.innerHTML = `<div class="scene-placeholder"><b>案件情境圖</b>${src}<br>圖片尚未放入指定位置</div>`;
    });
    el.sceneImage.appendChild(img);
  }

  function renderMainQuestions(list) {
    el.mainGrid.innerHTML = "";
    list.forEach((question, index) => {
      const key = questionKey("main", question.id);
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "main-question";
      if (state.save.answered[key]) btn.classList.add("done");
      btn.innerHTML = `
        <span class="num">${state.save.answered[key] ? "✓" : index + 1}</span>
        <span class="name">${question.title?.replace(/^線索\s*\d+\s*[｜|]\s*/, "") || `主線 ${index + 1}`}</span>
      `;
      btn.addEventListener("click", () => openQuestion(question, "main"));
      el.mainGrid.appendChild(btn);
    });
  }

  function renderExtraQuestions(list) {
    el.extraGrid.innerHTML = "";
    list.forEach((question, index) => {
      const key = questionKey("extra", question.id);
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "extra-question";
      if (state.save.answered[key]) btn.classList.add("done");
      btn.textContent = state.save.answered[key] ? "✓" : index + 1;
      btn.setAttribute("aria-label", `圓形 ${index + 1}`);
      btn.addEventListener("click", () => openQuestion(question, "extra"));
      el.extraGrid.appendChild(btn);
    });
  }

  function updateProgress(mainQuestions) {
    const done = mainQuestions.filter(q => state.save.answered[questionKey("main", q.id)]).length;
    const total = mainQuestions.length;
    el.progressText.textContent = `${done} / ${total}`;
    el.progressBar.style.width = total ? `${(done / total) * 100}%` : "0%";
    el.unlockNote.classList.toggle("show", total > 0 && done === total);
  }

  function openQuestion(question, type) {
    state.activeQuestion = question;
    state.activeType = type;

    el.questionTitle.textContent = question.title || (type === "main" ? "主線調查" : "案外案");
    el.questionContent.textContent = question.content || "";
    el.questionContent.style.display = question.content ? "block" : "none";
    el.questionText.textContent = question.question || "";
    el.choices.innerHTML = "";
    el.feedback.className = "feedback";
    el.feedback.innerHTML = "";
    el.submitAnswer.disabled = false;

    question.choices.forEach((choice, index) => {
      const label = document.createElement("label");
      label.className = "choice";
      label.innerHTML = `
        <input type="radio" name="answer" value="${index}">
        <span>${String.fromCharCode(65 + index)}. ${choice}</span>
      `;
      el.choices.appendChild(label);
    });

    el.questionOverlay.classList.add("show");
    speakQuestion(question);
  }

  function submitAnswer() {
    const question = state.activeQuestion;
    if (!question) return;

    const checked = el.choices.querySelector('input[name="answer"]:checked');
    if (!checked) {
      el.feedback.className = "feedback wrong show";
      el.feedback.innerHTML = "<strong>請先選擇一個答案。</strong>";
      return;
    }

    const selected = Number(checked.value);
    const correct = Number(question.answer);
    const answerLetter = String.fromCharCode(65 + correct);
    const key = questionKey(state.activeType, question.id);

    state.save.answered[key] = true;

    if (state.activeType === "main" && question.notebook) {
      if (!state.save.notebook.some(item => item.id === question.id)) {
        state.save.notebook.push({ id: question.id, text: question.notebook });
      }
    }

    saveState();

    el.feedback.className = `feedback ${selected === correct ? "correct" : "wrong"} show`;
    el.feedback.innerHTML = `
      <strong>${selected === correct ? "答對了" : "答錯了"}</strong>
      <div>${selected === correct ? "答案" : "正確答案"}：${answerLetter}</div>
      <div>解析：${question.explanation || ""}</div>
    `;

    render();
  }

  function renderNotebook() {
    el.notebookList.innerHTML = "";
    if (!state.save.notebook.length) {
      el.notebookList.innerHTML = '<div class="empty">目前還沒有收集到主線線索。</div>';
      return;
    }
    state.save.notebook.forEach((item, index) => {
      const note = document.createElement("div");
      note.className = "note";
      note.textContent = `${index + 1}. ${item.text}`;
      el.notebookList.appendChild(note);
    });
  }

  function speakQuestion(question) {
    if (!state.save.settings.voice || !("speechSynthesis" in window)) return;
    speechSynthesis.cancel();
    const text = [question.content, question.question, ...(question.choices || [])].filter(Boolean).join("。");
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "zh-TW";
    utterance.rate = Number(state.save.settings.speed || 1);
    speechSynthesis.speak(utterance);
  }

  function closeOverlay(id) {
    document.getElementById(id)?.classList.remove("show");
    if ("speechSynthesis" in window) speechSynthesis.cancel();
  }

  el.menuToggle.addEventListener("click", () => {
    const collapsed = el.sidebar.classList.toggle("collapsed");
    el.menuToggle.classList.toggle("open", !collapsed);
    el.menuToggle.setAttribute("aria-expanded", String(!collapsed));
  });

  el.caseSelect.addEventListener("change", () => {
    state.caseIndex = Number(el.caseSelect.value);
    state.sceneIndex = 0;
    refreshSceneSelect();
    render();
  });

  el.sceneSelect.addEventListener("change", () => {
    state.sceneIndex = Number(el.sceneSelect.value);
    render();
  });

  document.getElementById("homeBtn").addEventListener("click", () => {
    alert("首頁教學畫面會在下一階段加入。");
  });

  el.notebookBtn.addEventListener("click", () => {
    renderNotebook();
    el.notebookOverlay.classList.add("show");
  });

  el.settingsBtn.addEventListener("click", () => {
    el.settingsOverlay.classList.add("show");
  });

  el.submitAnswer.addEventListener("click", submitAnswer);

  document.querySelectorAll("[data-close]").forEach(btn => {
    btn.addEventListener("click", () => closeOverlay(btn.dataset.close));
  });

  [el.questionOverlay, el.notebookOverlay, el.settingsOverlay].forEach(overlay => {
    overlay.addEventListener("click", event => {
      if (event.target === overlay) closeOverlay(overlay.id);
    });
  });

  el.detectiveName.addEventListener("input", () => {
    state.save.settings.detectiveName = el.detectiveName.value;
    saveState();
  });

  el.voiceToggle.addEventListener("change", () => {
    state.save.settings.voice = el.voiceToggle.checked;
    saveState();
  });

  el.voiceSpeed.addEventListener("change", () => {
    state.save.settings.speed = el.voiceSpeed.value;
    saveState();
  });

  el.clearRecord.addEventListener("click", () => {
    if (!confirm("確定要清除全部本機紀錄嗎？")) return;
    localStorage.removeItem(storageKey);
    state.save = loadSave();
    render();
    closeOverlay("settingsOverlay");
  });

  initSelectors();
  render();
})();
</script>
</body>
</html>
'''

path = Path("/mnt/data/detective-game.html")
path.write_text(html, encoding="utf-8")

print(f"已建立：{path.name}")
print(f"檔案大小：{path.stat().st_size:,} bytes")
>>>>>>> 55832b449aede49b4cf25089e5a9889f551812bf
