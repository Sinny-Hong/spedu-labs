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

