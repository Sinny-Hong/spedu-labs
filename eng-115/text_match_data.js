// 教材文字取自使用者提供的七、八、九年級正式試算表；七上分組依使用者指定方案調整。
const TEXT_MATCH_DATA = {
  "7": {
    "L1": {
      "grade": "7",
      "lesson": "L1",
      "groups": [
        {
          "grade": "7",
          "lesson": "L1",
          "part": "Dialogue",
          "group": 1,
          "items": [
            {
              "id": "A",
              "number": 1,
              "zh": "早安，Nick。",
              "en": "Good morning, Nick.",
              "zhkw": [
                "Nick",
                "早安"
              ],
              "enkw": [
                "morning",
                "Good"
              ]
            },
            {
              "id": "B",
              "number": 2,
              "zh": "早安，Ann。",
              "en": "Good morning, Ann.",
              "zhkw": [
                "Ann",
                "早安"
              ],
              "enkw": [
                "morning",
                "Good"
              ]
            },
            {
              "id": "C",
              "number": 3,
              "zh": "Nick，那個年輕的男人是誰？",
              "en": "Nick, who’s that young man?",
              "zhkw": [
                "男人是誰",
                "Nick"
              ],
              "enkw": [
                "who’s",
                "young"
              ]
            },
            {
              "id": "D",
              "number": 4,
              "zh": "他又高又帥。",
              "en": "He’s tall and handsome.",
              "zhkw": [
                "又高又帥"
              ],
              "enkw": [
                "handsome",
                "He’s"
              ]
            },
            {
              "id": "E",
              "number": 5,
              "zh": "他是我們新的體育老師。",
              "en": "He’s our new PE teacher.",
              "zhkw": [
                "體育老師"
              ],
              "enkw": [
                "teacher",
                "He’s"
              ]
            },
            {
              "id": "F",
              "number": 6,
              "zh": "真地嗎？",
              "en": "Really?",
              "zhkw": [
                "真地嗎"
              ],
              "enkw": [
                "Really"
              ]
            },
            {
              "id": "G",
              "number": 7,
              "zh": "是的，他是 Bella 的朋友，他的名字叫做 Scott。",
              "en": "Yes, he’s Bella’s friend, and his name is Scott.",
              "zhkw": [
                "名字叫做",
                "Bella"
              ],
              "enkw": [
                "Bella’s",
                "friend"
              ]
            },
            {
              "id": "H",
              "number": 8,
              "zh": "Ann，我們又在同一班了！",
              "en": "Ann, we’re in the same class again!",
              "zhkw": [
                "同一班了",
                "Ann"
              ],
              "enkw": [
                "we’re",
                "class"
              ]
            },
            {
              "id": "I",
              "number": 9,
              "zh": "對呀，太棒了！",
              "en": "Yeah, it’s great!",
              "zhkw": [
                "太棒了",
                "對呀"
              ],
              "enkw": [
                "great",
                "Yeah"
              ]
            },
            {
              "id": "J",
              "number": 10,
              "zh": "嗨，Rita。這是 Nick。",
              "en": "Hi, Rita. This is Nick.",
              "zhkw": [
                "Rita",
                "Nick"
              ],
              "enkw": [
                "Rita",
                "Nick"
              ]
            }
          ],
          "order": [
            8,
            3,
            0,
            9,
            4,
            6,
            5,
            7,
            1,
            2
          ]
        },
        {
          "grade": "7",
          "lesson": "L1",
          "part": "Dialogue",
          "group": 2,
          "items": [
            {
              "id": "A",
              "number": 1,
              "zh": "他是我堂哥。他在七年一班。",
              "en": "He’s my cousin. He’s in Class 701.",
              "zhkw": [
                "七年一班",
                "是我堂哥"
              ],
              "enkw": [
                "cousin",
                "Class"
              ]
            },
            {
              "id": "B",
              "number": 2,
              "zh": "很高興認識你，Nick。我是 Rita。",
              "en": "Nice to meet you, Nick. I’m Rita.",
              "zhkw": [
                "興認識你",
                "Nick"
              ],
              "enkw": [
                "Nice",
                "meet"
              ]
            },
            {
              "id": "C",
              "number": 3,
              "zh": "我也很高興認識你，Rita。",
              "en": "Nice to meet you, too, Rita.",
              "zhkw": [
                "興認識你",
                "Rita"
              ],
              "enkw": [
                "Nice",
                "meet"
              ]
            },
            {
              "id": "D",
              "number": 4,
              "zh": "嘿，Rita。好消息。",
              "en": "Hey, Rita. Good news.",
              "zhkw": [
                "Rita",
                "好消息"
              ],
              "enkw": [
                "Rita",
                "Good"
              ]
            },
            {
              "id": "E",
              "number": 5,
              "zh": "Bella 是我們的英文老師！",
              "en": "Bella is our English teacher!",
              "zhkw": [
                "英文老師",
                "Bella"
              ],
              "enkw": [
                "English",
                "teacher"
              ]
            },
            {
              "id": "F",
              "number": 6,
              "zh": "喔，不。這下可不好了。",
              "en": "Oh, no. That’s not good.",
              "zhkw": [
                "可不好了"
              ],
              "enkw": [
                "That’s",
                "good"
              ]
            },
            {
              "id": "G",
              "number": 7,
              "zh": "有什麼問題嗎？",
              "en": "What’s the problem?",
              "zhkw": [
                "麼問題嗎"
              ],
              "enkw": [
                "problem",
                "What’s"
              ]
            },
            {
              "id": "H",
              "number": 8,
              "zh": "她是個很棒的老師。",
              "en": "She’s a great teacher.",
              "zhkw": [
                "棒的老師"
              ],
              "enkw": [
                "teacher",
                "She’s"
              ]
            },
            {
              "id": "I",
              "number": 9,
              "zh": "嗯……她也是個嚴格的老師。",
              "en": "Well… she’s a strict teacher, too.",
              "zhkw": [
                "格的老師"
              ],
              "enkw": [
                "teacher",
                "strict"
              ]
            },
            {
              "id": "J",
              "number": 10,
              "zh": "Nick！",
              "en": "Nick!",
              "zhkw": [
                "Nick"
              ],
              "enkw": [
                "Nick"
              ]
            }
          ],
          "order": [
            1,
            5,
            3,
            6,
            8,
            0,
            7,
            4,
            9,
            2
          ]
        },
        {
          "grade": "7",
          "lesson": "L1",
          "part": "Reading",
          "group": 1,
          "items": [
            {
              "id": "A",
              "number": 1,
              "zh": "嗨，我是 Nick。",
              "en": "Hi, I’m Nick.",
              "zhkw": [
                "Nick",
                "我是"
              ],
              "enkw": [
                "Nick"
              ]
            },
            {
              "id": "B",
              "number": 2,
              "zh": "我是一位國中生。",
              "en": "I’m a junior high school student.",
              "zhkw": [
                "位國中生"
              ],
              "enkw": [
                "student",
                "junior"
              ]
            },
            {
              "id": "C",
              "number": 3,
              "zh": "我來自一個溫暖的家庭。",
              "en": "I’m from a warm family.",
              "zhkw": [
                "暖的家庭"
              ],
              "enkw": [
                "family",
                "warm"
              ]
            },
            {
              "id": "D",
              "number": 4,
              "zh": "我的祖父是一名農夫。",
              "en": "My grandfather is a farmer.",
              "zhkw": [
                "一名農夫"
              ],
              "enkw": [
                "grandfather",
                "farmer"
              ]
            },
            {
              "id": "E",
              "number": 5,
              "zh": "我的祖母是一名廚師。",
              "en": "My grandmother is a cook.",
              "zhkw": [
                "一名廚師"
              ],
              "enkw": [
                "grandmother",
                "cook"
              ]
            },
            {
              "id": "F",
              "number": 6,
              "zh": "他們人很好。",
              "en": "They are nice.",
              "zhkw": [
                "們人很好"
              ],
              "enkw": [
                "nice"
              ]
            },
            {
              "id": "G",
              "number": 7,
              "zh": "Paul 是我的爸爸。",
              "en": "Paul is my father.",
              "zhkw": [
                "我的爸爸",
                "Paul"
              ],
              "enkw": [
                "father",
                "Paul"
              ]
            },
            {
              "id": "H",
              "number": 8,
              "zh": "他是一位高大的男人。",
              "en": "He is a tall man.",
              "zhkw": [
                "大的男人"
              ],
              "enkw": [
                "tall"
              ]
            },
            {
              "id": "I",
              "number": 9,
              "zh": "他是一位護理師。",
              "en": "He is a nurse.",
              "zhkw": [
                "位護理師"
              ],
              "enkw": [
                "nurse"
              ]
            }
          ],
          "order": [
            4,
            5,
            1,
            0,
            3,
            8,
            7,
            2,
            6
          ]
        },
        {
          "grade": "7",
          "lesson": "L1",
          "part": "Reading",
          "group": 2,
          "items": [
            {
              "id": "A",
              "number": 1,
              "zh": "Lily 是我的媽媽。",
              "en": "Lily is my mother.",
              "zhkw": [
                "我的媽媽",
                "Lily"
              ],
              "enkw": [
                "mother",
                "Lily"
              ]
            },
            {
              "id": "B",
              "number": 2,
              "zh": "她是一位美麗的女人。",
              "en": "She is a beautiful woman.",
              "zhkw": [
                "麗的女人"
              ],
              "enkw": [
                "beautiful",
                "woman"
              ]
            },
            {
              "id": "C",
              "number": 3,
              "zh": "她是一名醫生。",
              "en": "She is a doctor.",
              "zhkw": [
                "一名醫生"
              ],
              "enkw": [
                "doctor"
              ]
            },
            {
              "id": "D",
              "number": 4,
              "zh": "Bella 是我的姐姐。",
              "en": "Bella is my sister.",
              "zhkw": [
                "Bella",
                "我的姐姐"
              ],
              "enkw": [
                "sister",
                "Bella"
              ]
            },
            {
              "id": "E",
              "number": 5,
              "zh": "她也是我的英文老師。",
              "en": "She is my English teacher, too.",
              "zhkw": [
                "英文老師"
              ],
              "enkw": [
                "English",
                "teacher"
              ]
            },
            {
              "id": "F",
              "number": 6,
              "zh": "Eddie 是我的哥哥。",
              "en": "Eddie is my brother.",
              "zhkw": [
                "Eddie",
                "我的哥哥"
              ],
              "enkw": [
                "brother",
                "Eddie"
              ]
            },
            {
              "id": "G",
              "number": 7,
              "zh": "他是一位高中生。",
              "en": "He’s a senior high school student.",
              "zhkw": [
                "位高中生"
              ],
              "enkw": [
                "student",
                "senior"
              ]
            },
            {
              "id": "H",
              "number": 8,
              "zh": "Abby 是我們的寵物豬。",
              "en": "Abby is our pet pig.",
              "zhkw": [
                "的寵物豬",
                "Abby"
              ],
              "enkw": [
                "Abby"
              ]
            },
            {
              "id": "I",
              "number": 9,
              "zh": "她很可愛。",
              "en": "She’s cute.",
              "zhkw": [
                "她很可愛"
              ],
              "enkw": [
                "She’s",
                "cute"
              ]
            }
          ],
          "order": [
            6,
            2,
            8,
            5,
            1,
            3,
            7,
            4,
            0
          ]
        }
      ]
    },
    "L2": {
      "grade": "7",
      "lesson": "L2",
      "groups": [
        {
          "grade": "7",
          "lesson": "L2",
          "part": "Dialogue",
          "group": 1,
          "items": [
            {
              "id": "A",
              "number": 1,
              "zh": "這些玩偶好可愛。",
              "en": "These dolls are cute.",
              "zhkw": [
                "偶好可愛"
              ],
              "enkw": [
                "dolls",
                "cute"
              ]
            },
            {
              "id": "B",
              "number": 2,
              "zh": "這些是什麼？",
              "en": "What are these?",
              "zhkw": [
                "些是什麼"
              ],
              "enkw": [
                "What"
              ]
            },
            {
              "id": "C",
              "number": 3,
              "zh": "嘿，它們難道不是中國的十二生肖嗎？",
              "en": "Hey, aren’t they the Chinese zodiac animal signs?",
              "zhkw": [
                "二生肖嗎"
              ],
              "enkw": [
                "Chinese",
                "aren’t"
              ]
            },
            {
              "id": "D",
              "number": 4,
              "zh": "不，它們不是。",
              "en": "No, they aren’t.",
              "zhkw": [
                "它們不是"
              ],
              "enkw": [
                "aren’t"
              ]
            },
            {
              "id": "E",
              "number": 5,
              "zh": "中國的十二生肖是鼠、牛、虎、兔、龍、蛇、馬、羊、猴、雞、狗和豬。",
              "en": "The Chinese zodiac animal signs are the rat, ox, tiger, rabbit, dragon, snake, horse, goat, monkey, rooster, dog, and pig.",
              "zhkw": [
                "生肖是鼠",
                "狗和豬"
              ],
              "enkw": [
                "Chinese",
                "rooster"
              ]
            },
            {
              "id": "F",
              "number": 6,
              "zh": "哇！我的生肖是什麼？",
              "en": "Wow! What’s my animal sign?",
              "zhkw": [
                "肖是什麼"
              ],
              "enkw": [
                "What’s",
                "animal"
              ]
            },
            {
              "id": "G",
              "number": 7,
              "zh": "你的出生年是 2000。你屬龍。",
              "en": "Your birth year is 2000. You’re a dragon.",
              "zhkw": [
                "出生年是",
                "你屬龍"
              ],
              "enkw": [
                "You’re",
                "dragon"
              ]
            },
            {
              "id": "H",
              "number": 8,
              "zh": "屬龍的人聰明且充滿活力。",
              "en": "A dragon is smart and energetic.",
              "zhkw": [
                "充滿活力"
              ],
              "enkw": [
                "energetic",
                "dragon"
              ]
            },
            {
              "id": "I",
              "number": 9,
              "zh": "那是真的。",
              "en": "That’s true.",
              "zhkw": [
                "那是真的"
              ],
              "enkw": [
                "That’s",
                "true"
              ]
            }
          ],
          "order": [
            3,
            0,
            2,
            4,
            5,
            1,
            8,
            7,
            6
          ]
        },
        {
          "grade": "7",
          "lesson": "L2",
          "part": "Dialogue",
          "group": 2,
          "items": [
            {
              "id": "A",
              "number": 1,
              "zh": "你的生肖是什麼，Bella？",
              "en": "What’s your animal sign, Bella?",
              "zhkw": [
                "肖是什麼",
                "Bella"
              ],
              "enkw": [
                "What’s",
                "animal"
              ]
            },
            {
              "id": "B",
              "number": 2,
              "zh": "我的出生年是 1999。我屬兔。",
              "en": "My birth year is 1999. I’m a rabbit.",
              "zhkw": [
                "出生年是",
                "我屬兔"
              ],
              "enkw": [
                "rabbit",
                "birth"
              ]
            },
            {
              "id": "C",
              "number": 3,
              "zh": "屬兔的人人很好且溫暖。",
              "en": "A rabbit is nice and warm.",
              "zhkw": [
                "好且溫暖"
              ],
              "enkw": [
                "rabbit",
                "nice"
              ]
            },
            {
              "id": "D",
              "number": 4,
              "zh": "難怪你人緣好。",
              "en": "No wonder you are a people person.",
              "zhkw": [
                "你人緣好"
              ],
              "enkw": [
                "wonder",
                "people"
              ]
            },
            {
              "id": "E",
              "number": 5,
              "zh": "那 Abby the pig 呢？",
              "en": "What about Abby the pig?",
              "zhkw": [
                "Abby"
              ],
              "enkw": [
                "Abby"
              ]
            },
            {
              "id": "F",
              "number": 6,
              "zh": "她的出生年是 2024。",
              "en": "Her birth year is 2024.",
              "zhkw": [
                "出生年是"
              ],
              "enkw": [
                "birth",
                "year"
              ]
            },
            {
              "id": "G",
              "number": 7,
              "zh": "她也屬龍。",
              "en": "She’s a dragon, too.",
              "zhkw": [
                "她也屬龍"
              ],
              "enkw": [
                "dragon",
                "She’s"
              ]
            },
            {
              "id": "H",
              "number": 8,
              "zh": "難怪她很聰明！哈哈！",
              "en": "No wonder she’s smart! Ha ha!",
              "zhkw": [
                "她很聰明",
                "哈哈"
              ],
              "enkw": [
                "wonder",
                "she’s"
              ]
            }
          ],
          "order": [
            2,
            3,
            5,
            1,
            7,
            0,
            6,
            4
          ]
        },
        {
          "grade": "7",
          "lesson": "L2",
          "part": "Reading",
          "group": 1,
          "items": [
            {
              "id": "A",
              "number": 1,
              "zh": "牠們是亞洲象或是非洲象？",
              "en": "Are they Asian elephants or African elephants?",
              "zhkw": [
                "是非洲象"
              ],
              "enkw": [
                "elephants",
                "African"
              ]
            },
            {
              "id": "B",
              "number": 2,
              "zh": "非洲象和亞洲象不同。",
              "en": "African elephants are different from Asian elephants.",
              "zhkw": [
                "洲象不同"
              ],
              "enkw": [
                "elephants",
                "different"
              ]
            },
            {
              "id": "C",
              "number": 3,
              "zh": "非洲象非常大，而且牠們的耳朵也很大。",
              "en": "African elephants are very big, and their ears are big, too.",
              "zhkw": [
                "朵也很大",
                "象非常大"
              ],
              "enkw": [
                "elephants",
                "African"
              ]
            },
            {
              "id": "D",
              "number": 4,
              "zh": "亞洲象體型小，耳朵短小。",
              "en": "Asian elephants are small, and their ears are short.",
              "zhkw": [
                "象體型小",
                "耳朵短小"
              ],
              "enkw": [
                "elephants",
                "Asian"
              ]
            },
            {
              "id": "E",
              "number": 5,
              "zh": "非洲象大約有 3.2 公尺高，但亞洲象僅約 2.75 公尺高。",
              "en": "An African elephant is about 3.2 meters tall, but an Asian elephant is only about 2.75 meters tall.",
              "zhkw": [
                "象大約有",
                "洲象僅約"
              ],
              "enkw": [
                "elephant",
                "African"
              ]
            },
            {
              "id": "F",
              "number": 6,
              "zh": "亞洲象的壽命約為 60 年，但非洲象的壽命約為 70 年。",
              "en": "Asian elephants’ lifespans are about 60 years, but African elephants’ lifespans are about 70 years.",
              "zhkw": [
                "壽命約為"
              ],
              "enkw": [
                "elephants",
                "lifespans"
              ]
            }
          ],
          "order": [
            1,
            2,
            3,
            4,
            5,
            0
          ]
        }
      ]
    },
    "L3": {
      "grade": "7",
      "lesson": "L3",
      "groups": [
        {
          "grade": "7",
          "lesson": "L3",
          "part": "Dialogue",
          "group": 1,
          "items": [
            {
              "id": "A",
              "number": 1,
              "zh": "歡迎，Bella！請進。",
              "en": "Welcome, Bella! Please come in.",
              "zhkw": [
                "Bella",
                "歡迎"
              ],
              "enkw": [
                "Welcome",
                "Please"
              ]
            },
            {
              "id": "B",
              "number": 2,
              "zh": "謝謝你，Scott。",
              "en": "Thank you, Scott.",
              "zhkw": [
                "Scott",
                "謝謝你"
              ],
              "enkw": [
                "Thank",
                "Scott"
              ]
            },
            {
              "id": "C",
              "number": 3,
              "zh": "你的房子又漂亮又安靜。",
              "en": "Your house is nice and quiet.",
              "zhkw": [
                "亮又安靜"
              ],
              "enkw": [
                "house",
                "quiet"
              ]
            },
            {
              "id": "D",
              "number": 4,
              "zh": "謝謝，但這不太是我的風格。",
              "en": "Thanks, but it’s not really my style.",
              "zhkw": [
                "我的風格",
                "謝謝"
              ],
              "enkw": [
                "Thanks",
                "really"
              ]
            },
            {
              "id": "E",
              "number": 5,
              "zh": "喔，我了解了。",
              "en": "Oh, I see.",
              "zhkw": [
                "我了解了"
              ],
              "enkw": [
                "Oh"
              ]
            },
            {
              "id": "F",
              "number": 6,
              "zh": "嗯，改造一下，如何？",
              "en": "Well, what about a makeover?",
              "zhkw": [
                "改造一下",
                "如何"
              ],
              "enkw": [
                "makeover",
                "Well"
              ]
            },
            {
              "id": "G",
              "number": 7,
              "zh": "好主意！",
              "en": "Great idea!",
              "zhkw": [
                "好主意"
              ],
              "enkw": [
                "Great",
                "idea"
              ]
            },
            {
              "id": "H",
              "number": 8,
              "zh": "但怎麼做呢？",
              "en": "But how?",
              "zhkw": [
                "怎麼做呢"
              ],
              "enkw": [
                "But"
              ]
            }
          ],
          "order": [
            1,
            6,
            3,
            0,
            2,
            5,
            7,
            4
          ]
        },
        {
          "grade": "7",
          "lesson": "L3",
          "part": "Dialogue",
          "group": 2,
          "items": [
            {
              "id": "A",
              "number": 1,
              "zh": "讓我們從 RoomGPT 取得一些想法吧。",
              "en": "Let’s get some ideas from RoomGPT.",
              "zhkw": [
                "RoomGPT",
                "些想法吧"
              ],
              "enkw": [
                "RoomGPT",
                "Let’s"
              ]
            },
            {
              "id": "B",
              "number": 2,
              "zh": "RoomGPT？那是什麼？",
              "en": "RoomGPT? What’s that?",
              "zhkw": [
                "RoomGPT",
                "那是什麼"
              ],
              "enkw": [
                "RoomGPT",
                "What’s"
              ]
            },
            {
              "id": "C",
              "number": 3,
              "zh": "它是個人工智慧的工具。",
              "en": "It is an AI tool.",
              "zhkw": [
                "慧的工具"
              ],
              "enkw": [
                "tool"
              ]
            },
            {
              "id": "D",
              "number": 4,
              "zh": "嗯，我的智慧型手機在哪裡？",
              "en": "Uh, where is my smartphone?",
              "zhkw": [
                "機在哪裡"
              ],
              "enkw": [
                "smartphone"
              ]
            },
            {
              "id": "E",
              "number": 5,
              "zh": "它在桌上。",
              "en": "It’s on the table.",
              "zhkw": [
                "它在桌上"
              ],
              "enkw": [
                "table",
                "It’s"
              ]
            },
            {
              "id": "F",
              "number": 6,
              "zh": "好，看這個。",
              "en": "OK, look at this.",
              "zhkw": [
                "看這個"
              ],
              "enkw": [
                "look"
              ]
            },
            {
              "id": "G",
              "number": 7,
              "zh": "第一步，上傳一張照片。",
              "en": "Step one, upload a photo.",
              "zhkw": [
                "一張照片",
                "第一步"
              ],
              "enkw": [
                "upload",
                "photo"
              ]
            },
            {
              "id": "H",
              "number": 8,
              "zh": "第二步，選擇一個房間種類。",
              "en": "Step two, choose a room type.",
              "zhkw": [
                "房間種類",
                "第二步"
              ],
              "enkw": [
                "choose",
                "Step"
              ]
            }
          ],
          "order": [
            4,
            2,
            1,
            0,
            6,
            7,
            3,
            5
          ]
        },
        {
          "grade": "7",
          "lesson": "L3",
          "part": "Dialogue",
          "group": 3,
          "items": [
            {
              "id": "A",
              "number": 1,
              "zh": "房間種類？",
              "en": "Room type?",
              "zhkw": [
                "房間種類"
              ],
              "enkw": [
                "Room",
                "type"
              ]
            },
            {
              "id": "B",
              "number": 2,
              "zh": "對。客廳、浴室或是臥室？",
              "en": "Yes. The living room, the bathroom, or the bedroom?",
              "zhkw": [
                "或是臥室",
                "客廳"
              ],
              "enkw": [
                "bathroom",
                "bedroom"
              ]
            },
            {
              "id": "C",
              "number": 3,
              "zh": "臥室。接下來呢？",
              "en": "The bedroom. What’s next?",
              "zhkw": [
                "接下來呢",
                "臥室"
              ],
              "enkw": [
                "bedroom",
                "What’s"
              ]
            },
            {
              "id": "D",
              "number": 4,
              "zh": "選擇一個房間主題。",
              "en": "Choose a room theme.",
              "zhkw": [
                "房間主題"
              ],
              "enkw": [
                "Choose",
                "theme"
              ]
            },
            {
              "id": "E",
              "number": 5,
              "zh": "哇！這些主題真地好酷！",
              "en": "Wow! These themes are really cool!",
              "zhkw": [
                "真地好酷"
              ],
              "enkw": [
                "themes",
                "really"
              ]
            },
            {
              "id": "F",
              "number": 6,
              "zh": "等一下。大改造很貴的。",
              "en": "Wait. A big makeover is expensive.",
              "zhkw": [
                "造很貴的",
                "等一下"
              ],
              "enkw": [
                "expensive",
                "makeover"
              ]
            },
            {
              "id": "G",
              "number": 7,
              "zh": "你沒關係嗎？",
              "en": "Are you OK with that?",
              "zhkw": [
                "沒關係嗎"
              ],
              "enkw": [
                "Are"
              ]
            },
            {
              "id": "H",
              "number": 8,
              "zh": "哈！這是一個好問題。",
              "en": "Ha! That’s a good question.",
              "zhkw": [
                "個好問題"
              ],
              "enkw": [
                "question",
                "That’s"
              ]
            }
          ],
          "order": [
            6,
            2,
            1,
            0,
            4,
            3,
            5,
            7
          ]
        },
        {
          "grade": "7",
          "lesson": "L3",
          "part": "Reading",
          "group": 1,
          "items": [
            {
              "id": "A",
              "number": 1,
              "zh": "你的床又大又軟，或者又小又硬？",
              "en": "Is your bed big and soft, or is it small and hard?",
              "zhkw": [
                "又大又軟",
                "又小又硬"
              ],
              "enkw": [
                "small",
                "soft"
              ]
            },
            {
              "id": "B",
              "number": 2,
              "zh": "事實上，世界各地的床都不一樣。",
              "en": "In fact, beds around the world are different.",
              "zhkw": [
                "都不一樣",
                "事實上"
              ],
              "enkw": [
                "different",
                "around"
              ]
            },
            {
              "id": "C",
              "number": 3,
              "zh": "讓我們認識兩位新朋友和他們的床。",
              "en": "Let’s meet two new friends and their beds.",
              "zhkw": [
                "他們的床"
              ],
              "enkw": [
                "friends",
                "Let’s"
              ]
            },
            {
              "id": "D",
              "number": 4,
              "zh": "Jenny 是一個十一歲的女孩。",
              "en": "Jenny is an eleven-year-old girl.",
              "zhkw": [
                "歲的女孩",
                "Jenny"
              ],
              "enkw": [
                "eleven",
                "Jenny"
              ]
            },
            {
              "id": "E",
              "number": 5,
              "zh": "她的房子是一間冰屋。",
              "en": "Her house is an igloo.",
              "zhkw": [
                "一間冰屋"
              ],
              "enkw": [
                "house",
                "igloo"
              ]
            },
            {
              "id": "F",
              "number": 6,
              "zh": "這是她的臥室，同時也是廚房、客廳和飯廳。",
              "en": "This is her bedroom, kitchen, living room, and dining room, too.",
              "zhkw": [
                "她的臥室",
                "也是廚房"
              ],
              "enkw": [
                "bedroom",
                "kitchen"
              ]
            },
            {
              "id": "G",
              "number": 7,
              "zh": "她的床在哪裡？",
              "en": "Where is her bed?",
              "zhkw": [
                "床在哪裡"
              ],
              "enkw": [
                "Where"
              ]
            }
          ],
          "order": [
            4,
            6,
            2,
            5,
            3,
            1,
            0
          ]
        },
        {
          "grade": "7",
          "lesson": "L3",
          "part": "Reading",
          "group": 2,
          "items": [
            {
              "id": "A",
              "number": 1,
              "zh": "它在廚房旁邊。",
              "en": "It is beside the kitchen.",
              "zhkw": [
                "廚房旁邊"
              ],
              "enkw": [
                "kitchen",
                "beside"
              ]
            },
            {
              "id": "B",
              "number": 2,
              "zh": "它是一個又大又硬的冰床。",
              "en": "It is a big and hard ice bed.",
              "zhkw": [
                "硬的冰床"
              ],
              "enkw": [
                "hard"
              ]
            },
            {
              "id": "C",
              "number": 3,
              "zh": "Jason 二十一歲。",
              "en": "Jason is twenty-one years old.",
              "zhkw": [
                "Jason",
                "二十一歲"
              ],
              "enkw": [
                "twenty",
                "Jason"
              ]
            },
            {
              "id": "D",
              "number": 4,
              "zh": "他的房子在一個洞穴裡面。",
              "en": "His house is inside a cave.",
              "zhkw": [
                "洞穴裡面"
              ],
              "enkw": [
                "inside",
                "house"
              ]
            },
            {
              "id": "E",
              "number": 5,
              "zh": "他的床在哪裡？",
              "en": "Where is his bed?",
              "zhkw": [
                "床在哪裡"
              ],
              "enkw": [
                "Where"
              ]
            },
            {
              "id": "F",
              "number": 6,
              "zh": "它在桌子旁邊。",
              "en": "It is next to the table.",
              "zhkw": [
                "桌子旁邊"
              ],
              "enkw": [
                "table",
                "next"
              ]
            },
            {
              "id": "G",
              "number": 7,
              "zh": "它是一個又小又舊的毛毯。",
              "en": "It is a small and old blanket.",
              "zhkw": [
                "舊的毛毯"
              ],
              "enkw": [
                "blanket",
                "small"
              ]
            }
          ],
          "order": [
            6,
            1,
            4,
            3,
            2,
            0,
            5
          ]
        }
      ]
    },
    "L4": {
      "grade": "7",
      "lesson": "L4",
      "groups": [
        {
          "grade": "7",
          "lesson": "L4",
          "part": "Dialogue",
          "group": 1,
          "items": [
            {
              "id": "A",
              "number": 1,
              "zh": "BLACKPINK 太棒了！",
              "en": "BLACKPINK is great!",
              "zhkw": [
                "BLACKPINK",
                "太棒了"
              ],
              "enkw": [
                "BLACKPINK",
                "great"
              ]
            },
            {
              "id": "B",
              "number": 2,
              "zh": "我可以一遍又一遍地聽她們的歌！",
              "en": "I can listen to their songs again and again!",
              "zhkw": [
                "她們的歌"
              ],
              "enkw": [
                "listen",
                "songs"
              ]
            },
            {
              "id": "C",
              "number": 3,
              "zh": "我也是。",
              "en": "Same here.",
              "zhkw": [
                "我也是"
              ],
              "enkw": [
                "Same"
              ]
            },
            {
              "id": "D",
              "number": 4,
              "zh": "嘿！看她們的 Instagram。",
              "en": "Hey! Check out their Instagram.",
              "zhkw": [
                "Instagram",
                "看她們的"
              ],
              "enkw": [
                "Instagram",
                "Check"
              ]
            },
            {
              "id": "E",
              "number": 5,
              "zh": "我們可以看她們的直播。",
              "en": "We can watch their live stream.",
              "zhkw": [
                "們的直播"
              ],
              "enkw": [
                "stream",
                "watch"
              ]
            },
            {
              "id": "F",
              "number": 6,
              "zh": "酷！我等不及了！",
              "en": "Cool! I can’t wait!",
              "zhkw": [
                "等不及了"
              ],
              "enkw": [
                "can’t",
                "Cool"
              ]
            },
            {
              "id": "G",
              "number": 7,
              "zh": "快點，我們過馬路吧。",
              "en": "Come on, let’s cross the road.",
              "zhkw": [
                "過馬路吧",
                "快點"
              ],
              "enkw": [
                "let’s",
                "cross"
              ]
            },
            {
              "id": "H",
              "number": 8,
              "zh": "Ha-Joon，小心！",
              "en": "Ha-Joon, watch out!",
              "zhkw": [
                "Joon",
                "Ha"
              ],
              "enkw": [
                "watch",
                "Joon"
              ]
            }
          ],
          "order": [
            2,
            3,
            7,
            5,
            6,
            4,
            1,
            0
          ]
        },
        {
          "grade": "7",
          "lesson": "L4",
          "part": "Dialogue",
          "group": 2,
          "items": [
            {
              "id": "A",
              "number": 1,
              "zh": "你還好嗎？",
              "en": "Are you OK?",
              "zhkw": [
                "你還好嗎"
              ],
              "enkw": [
                "Are"
              ]
            },
            {
              "id": "B",
              "number": 2,
              "zh": "我很好，謝謝。",
              "en": "I’m fine, thanks.",
              "zhkw": [
                "我很好",
                "謝謝"
              ],
              "enkw": [
                "thanks",
                "fine"
              ]
            },
            {
              "id": "C",
              "number": 3,
              "zh": "抱歉，我真是個低頭族。",
              "en": "Sorry, I’m a real phubber.",
              "zhkw": [
                "個低頭族",
                "抱歉"
              ],
              "enkw": [
                "phubber",
                "Sorry"
              ]
            },
            {
              "id": "D",
              "number": 4,
              "zh": "Ha-Joon，別一直低頭看你的手機。",
              "en": "Ha-Joon, don’t look down at your phone all the time.",
              "zhkw": [
                "你的手機",
                "Joon"
              ],
              "enkw": [
                "don’t",
                "phone"
              ]
            },
            {
              "id": "E",
              "number": 5,
              "zh": "你說得對。",
              "en": "You’re right.",
              "zhkw": [
                "你說得對"
              ],
              "enkw": [
                "You’re",
                "right"
              ]
            },
            {
              "id": "F",
              "number": 6,
              "zh": "你猜怎麼樣？在南韓，現在有一些紅綠燈是在地面上。",
              "en": "Guess what? In South Korea, some traffic lights are on the ground now.",
              "zhkw": [
                "在地面上",
                "猜怎麼樣"
              ],
              "enkw": [
                "traffic",
                "lights"
              ]
            },
            {
              "id": "G",
              "number": 7,
              "zh": "看？「你喜歡這樣嗎？」",
              "en": "See? “How you like that?”",
              "zhkw": [
                "歡這樣嗎"
              ],
              "enkw": [
                "like"
              ]
            },
            {
              "id": "H",
              "number": 8,
              "zh": "那是個好點子！",
              "en": "That’s a great idea!",
              "zhkw": [
                "個好點子"
              ],
              "enkw": [
                "That’s",
                "great"
              ]
            }
          ],
          "order": [
            4,
            1,
            6,
            7,
            0,
            2,
            5,
            3
          ]
        },
        {
          "grade": "7",
          "lesson": "L4",
          "part": "Reading",
          "group": 1,
          "items": [
            {
              "id": "A",
              "number": 1,
              "zh": "地面上的紅綠燈不是唯一針對低頭族的智慧設計。",
              "en": "A traffic light on the ground is not the only smart design for phubbers.",
              "zhkw": [
                "智慧設計"
              ],
              "enkw": [
                "phubbers",
                "traffic"
              ]
            },
            {
              "id": "B",
              "number": 2,
              "zh": "在南韓，智慧型手機使用者可以在他們的手機上下載一個應用程式。",
              "en": "In South Korea, smartphone users can download an app on their phones.",
              "zhkw": [
                "應用程式",
                "在南韓"
              ],
              "enkw": [
                "smartphone",
                "download"
              ]
            },
            {
              "id": "C",
              "number": 3,
              "zh": "它可以警告使用者在斑馬線上迎面而來的車子。",
              "en": "It can warn them about the oncoming cars at crosswalks!",
              "zhkw": [
                "來的車子"
              ],
              "enkw": [
                "crosswalks",
                "oncoming"
              ]
            },
            {
              "id": "D",
              "number": 4,
              "zh": "而且，在美國，低頭族現在可以在特別的手機小路上行走。",
              "en": "Also, in the USA, phubbers can walk in special phone lanes now.",
              "zhkw": [
                "路上行走",
                "在美國"
              ],
              "enkw": [
                "phubbers",
                "special"
              ]
            },
            {
              "id": "E",
              "number": 5,
              "zh": "那樣的話，智慧型手機使用者只會佔用其他低頭族的路。",
              "en": "That way, smartphone users are only in the way of other phubbers.",
              "zhkw": [
                "頭族的路",
                "那樣的話"
              ],
              "enkw": [
                "smartphone",
                "phubbers"
              ]
            },
            {
              "id": "F",
              "number": 6,
              "zh": "很聰明，對吧？",
              "en": "Smart, right?",
              "zhkw": [
                "很聰明",
                "對吧"
              ],
              "enkw": [
                "Smart",
                "right"
              ]
            },
            {
              "id": "G",
              "number": 7,
              "zh": "在臺灣你也可以看到像這些的聰明設計嗎？",
              "en": "Can you see smart designs like these in Taiwan, too?",
              "zhkw": [
                "明設計嗎"
              ],
              "enkw": [
                "designs",
                "Taiwan"
              ]
            }
          ],
          "order": [
            1,
            5,
            6,
            0,
            4,
            3,
            2
          ]
        }
      ]
    },
    "L5": {
      "grade": "7",
      "lesson": "L5",
      "groups": [
        {
          "grade": "7",
          "lesson": "L5",
          "part": "Dialogue",
          "group": 1,
          "items": [
            {
              "id": "A",
              "number": 1,
              "zh": "醒來，Nick。該上學了。你正在做什麼？",
              "en": "Wake up, Nick. Time for school. What are you doing?",
              "zhkw": [
                "在做什麼",
                "Nick"
              ],
              "enkw": [
                "school",
                "doing"
              ]
            },
            {
              "id": "B",
              "number": 2,
              "zh": "我正在找我的手錶。媽媽，現在幾點了？",
              "en": "I’m looking for my watch. Mom, what time is it?",
              "zhkw": [
                "我的手錶",
                "在幾點了"
              ],
              "enkw": [
                "looking",
                "watch"
              ]
            },
            {
              "id": "C",
              "number": 3,
              "zh": "七點二十分。快一點。",
              "en": "It’s seven twenty. Hurry up.",
              "zhkw": [
                "點二十分",
                "快一點"
              ],
              "enkw": [
                "twenty",
                "seven"
              ]
            },
            {
              "id": "D",
              "number": 4,
              "zh": "好的，媽媽。",
              "en": "OK, Mom.",
              "zhkw": [
                "好的",
                "媽媽"
              ],
              "enkw": [
                "OK"
              ]
            },
            {
              "id": "E",
              "number": 5,
              "zh": "噢，順帶一提，今晚我可以參加學校的團體談話嗎？",
              "en": "Oh, by the way, can I join the group chat at school tonight?",
              "zhkw": [
                "體談話嗎",
                "順帶一提"
              ],
              "enkw": [
                "tonight",
                "school"
              ]
            },
            {
              "id": "F",
              "number": 6,
              "zh": "團體談話？",
              "en": "The group chat?",
              "zhkw": [
                "團體談話"
              ],
              "enkw": [
                "group",
                "chat"
              ]
            },
            {
              "id": "G",
              "number": 7,
              "zh": "是的。這是和美國學生進行的一個會議。",
              "en": "Yes, it’s a meeting with students from the USA.",
              "zhkw": [
                "一個會議",
                "是的"
              ],
              "enkw": [
                "students",
                "meeting"
              ]
            },
            {
              "id": "H",
              "number": 8,
              "zh": "會議是在幾點？",
              "en": "What time is the meeting?",
              "zhkw": [
                "是在幾點"
              ],
              "enkw": [
                "meeting",
                "time"
              ]
            }
          ],
          "order": [
            7,
            1,
            2,
            6,
            4,
            5,
            0,
            3
          ]
        },
        {
          "grade": "7",
          "lesson": "L5",
          "part": "Dialogue",
          "group": 2,
          "items": [
            {
              "id": "A",
              "number": 1,
              "zh": "在晚上九點。",
              "en": "It’s at 9 p.m.",
              "zhkw": [
                "晚上九點"
              ],
              "enkw": [
                "It’s"
              ]
            },
            {
              "id": "B",
              "number": 2,
              "zh": "會議是關於什麼？",
              "en": "What’s the meeting about?",
              "zhkw": [
                "關於什麼"
              ],
              "enkw": [
                "meeting",
                "What’s"
              ]
            },
            {
              "id": "C",
              "number": 3,
              "zh": "關於我們的學校生活。",
              "en": "It’s about our school life.",
              "zhkw": [
                "學校生活"
              ],
              "enkw": [
                "school",
                "It’s"
              ]
            },
            {
              "id": "D",
              "number": 4,
              "zh": "真棒！",
              "en": "Great!",
              "zhkw": [
                "真棒"
              ],
              "enkw": [
                "Great"
              ]
            },
            {
              "id": "E",
              "number": 5,
              "zh": "Nick，你在做什麼？",
              "en": "Nick, what are you doing?",
              "zhkw": [
                "在做什麼",
                "Nick"
              ],
              "enkw": [
                "doing",
                "Nick"
              ]
            },
            {
              "id": "F",
              "number": 6,
              "zh": "我正在準備團體談話。",
              "en": "I’m preparing for the group chat.",
              "zhkw": [
                "團體談話"
              ],
              "enkw": [
                "preparing",
                "group"
              ]
            },
            {
              "id": "G",
              "number": 7,
              "zh": "團體談話？今天是星期幾？",
              "en": "The group chat? What day is today?",
              "zhkw": [
                "是星期幾",
                "團體談話"
              ],
              "enkw": [
                "group",
                "today"
              ]
            },
            {
              "id": "H",
              "number": 8,
              "zh": "星期四。",
              "en": "It’s Thursday.",
              "zhkw": [
                "星期四"
              ],
              "enkw": [
                "Thursday",
                "It’s"
              ]
            }
          ],
          "order": [
            1,
            6,
            4,
            2,
            0,
            5,
            3,
            7
          ]
        },
        {
          "grade": "7",
          "lesson": "L5",
          "part": "Dialogue",
          "group": 3,
          "items": [
            {
              "id": "A",
              "number": 1,
              "zh": "團體談話不是在星期五嗎？",
              "en": "Isn’t it on Friday?",
              "zhkw": [
                "星期五嗎"
              ],
              "enkw": [
                "Friday",
                "Isn’t"
              ]
            },
            {
              "id": "B",
              "number": 2,
              "zh": "不，不是。團體談話在今晚九點鐘。",
              "en": "No, it isn’t. It’s at 9 o’clock in the evening.",
              "zhkw": [
                "晚九點鐘",
                "不是"
              ],
              "enkw": [
                "o’clock",
                "evening"
              ]
            },
            {
              "id": "C",
              "number": 3,
              "zh": "噢，不！",
              "en": "Oh, no!",
              "zhkw": [],
              "enkw": [
                "Oh"
              ]
            },
            {
              "id": "D",
              "number": 4,
              "zh": "好的，大家。現在紐約市是早上八點鐘。",
              "en": "OK, everyone. It’s 8 a.m. in New York City.",
              "zhkw": [
                "上八點鐘",
                "好的"
              ],
              "enkw": [
                "everyone",
                "It’s"
              ]
            },
            {
              "id": "E",
              "number": 5,
              "zh": "我們一起向我們的朋友們說早安吧。",
              "en": "Let’s say good morning to our friends.",
              "zhkw": [
                "說早安吧"
              ],
              "enkw": [
                "morning",
                "friends"
              ]
            },
            {
              "id": "F",
              "number": 6,
              "zh": "早安。",
              "en": "Good morning.",
              "zhkw": [
                "早安"
              ],
              "enkw": [
                "morning",
                "Good"
              ]
            },
            {
              "id": "G",
              "number": 7,
              "zh": "晚安。",
              "en": "Good evening.",
              "zhkw": [
                "晚安"
              ],
              "enkw": [
                "evening",
                "Good"
              ]
            }
          ],
          "order": [
            5,
            4,
            6,
            0,
            1,
            3,
            2
          ]
        },
        {
          "grade": "7",
          "lesson": "L5",
          "part": "Reading",
          "group": 1,
          "items": [
            {
              "id": "A",
              "number": 1,
              "zh": "太陽升起。快起床。",
              "en": "The sun is up. Rise and shine.",
              "zhkw": [
                "太陽升起",
                "快起床"
              ],
              "enkw": [
                "shine",
                "Rise"
              ]
            },
            {
              "id": "B",
              "number": 2,
              "zh": "今天是星期一。",
              "en": "Today is Monday.",
              "zhkw": [
                "是星期一"
              ],
              "enkw": [
                "Monday",
                "Today"
              ]
            },
            {
              "id": "C",
              "number": 3,
              "zh": "現在臺北是早上七點鐘。",
              "en": "It’s seven o’clock in the morning in Taipei.",
              "zhkw": [
                "上七點鐘"
              ],
              "enkw": [
                "o’clock",
                "morning"
              ]
            },
            {
              "id": "D",
              "number": 4,
              "zh": "該上學了。",
              "en": "It’s time for school.",
              "zhkw": [
                "該上學了"
              ],
              "enkw": [
                "school",
                "It’s"
              ]
            },
            {
              "id": "E",
              "number": 5,
              "zh": "我的朋友們 Daniel、Eric 和 Miako 現在正在做什麼呢？",
              "en": "What are my friends, Daniel, Eric, and Miako, doing now?",
              "zhkw": [
                "做什麼呢",
                "Daniel"
              ],
              "enkw": [
                "friends",
                "Daniel"
              ]
            },
            {
              "id": "F",
              "number": 6,
              "zh": "在紐約市，Daniel 正在和他的家人一起做晚餐。",
              "en": "In New York City, Daniel is making dinner with his family.",
              "zhkw": [
                "起做晚餐",
                "Daniel"
              ],
              "enkw": [
                "Daniel",
                "making"
              ]
            },
            {
              "id": "G",
              "number": 7,
              "zh": "現在那裡是星期日傍晚。",
              "en": "It’s Sunday evening there.",
              "zhkw": [
                "期日傍晚"
              ],
              "enkw": [
                "evening",
                "Sunday"
              ]
            },
            {
              "id": "H",
              "number": 8,
              "zh": "來自巴黎的 Eric 正在睡覺。",
              "en": "Eric from Paris is sleeping.",
              "zhkw": [
                "自巴黎的",
                "Eric"
              ],
              "enkw": [
                "sleeping",
                "Paris"
              ]
            },
            {
              "id": "I",
              "number": 9,
              "zh": "巴黎現在才晚上十二點鐘。",
              "en": "It’s only 12 a.m. in Paris.",
              "zhkw": [
                "十二點鐘"
              ],
              "enkw": [
                "Paris",
                "It’s"
              ]
            },
            {
              "id": "J",
              "number": 10,
              "zh": "早安，Miako。現在東京是早上八點鐘。",
              "en": "Good morning, Miako. It’s 8 a.m. in Tokyo.",
              "zhkw": [
                "上八點鐘",
                "Miako"
              ],
              "enkw": [
                "morning",
                "Miako"
              ]
            },
            {
              "id": "K",
              "number": 11,
              "zh": "她在上學途中。",
              "en": "She is on her way to school.",
              "zhkw": [
                "上學途中"
              ],
              "enkw": [
                "school"
              ]
            },
            {
              "id": "L",
              "number": 12,
              "zh": "祝你有個美好的一天！",
              "en": "Have a nice day!",
              "zhkw": [
                "好的一天"
              ],
              "enkw": [
                "nice"
              ]
            }
          ],
          "order": [
            3,
            5,
            4,
            8,
            7,
            10,
            6,
            9,
            2,
            11,
            0,
            1
          ]
        }
      ]
    },
    "L6": {
      "grade": "7",
      "lesson": "L6",
      "groups": [
        {
          "grade": "7",
          "lesson": "L6",
          "part": "Dialogue",
          "group": 1,
          "items": [
            {
              "id": "A",
              "number": 1,
              "zh": "嗨，我是 Min-Ho。我來自南韓。",
              "en": "Hi, I’m Min-Ho. I’m from South Korea.",
              "zhkw": [
                "來自南韓",
                "Min"
              ],
              "enkw": [
                "South",
                "Korea"
              ]
            },
            {
              "id": "B",
              "number": 2,
              "zh": "嗨，我是 Brian。我來自英國。",
              "en": "Hi, I’m Brian. I’m from the UK.",
              "zhkw": [
                "Brian",
                "來自英國"
              ],
              "enkw": [
                "Brian"
              ]
            },
            {
              "id": "C",
              "number": 3,
              "zh": "快點，我們去走走。",
              "en": "Come on, let’s go for a walk.",
              "zhkw": [
                "們去走走",
                "快點"
              ],
              "enkw": [
                "let’s",
                "Come"
              ]
            },
            {
              "id": "D",
              "number": 4,
              "zh": "我可以帶你們參觀學校。",
              "en": "I can show you around the school.",
              "zhkw": [
                "參觀學校"
              ],
              "enkw": [
                "around",
                "school"
              ]
            },
            {
              "id": "E",
              "number": 5,
              "zh": "那棟很大的藍色建築物是什麼？",
              "en": "What’s that big blue building?",
              "zhkw": [
                "物是什麼"
              ],
              "enkw": [
                "building",
                "What’s"
              ]
            },
            {
              "id": "F",
              "number": 6,
              "zh": "喔，那是學校體育館。",
              "en": "Oh, that’s the school gym.",
              "zhkw": [
                "校體育館"
              ],
              "enkw": [
                "that’s",
                "school"
              ]
            },
            {
              "id": "G",
              "number": 7,
              "zh": "太棒了。我放學後可以在那裡鍛鍊身體。",
              "en": "Great. I can work out there after school.",
              "zhkw": [
                "鍛鍊身體",
                "太棒了"
              ],
              "enkw": [
                "school",
                "Great"
              ]
            },
            {
              "id": "H",
              "number": 8,
              "zh": "自助餐廳在哪裡？",
              "en": "Where’s the cafeteria?",
              "zhkw": [
                "廳在哪裡"
              ],
              "enkw": [
                "cafeteria",
                "Where’s"
              ]
            },
            {
              "id": "I",
              "number": 9,
              "zh": "沒有餐廳。我們在教室裡吃午餐。",
              "en": "There isn’t one. We eat lunch in the classroom.",
              "zhkw": [
                "裡吃午餐",
                "沒有餐廳"
              ],
              "enkw": [
                "classroom",
                "isn’t"
              ]
            }
          ],
          "order": [
            2,
            0,
            3,
            8,
            6,
            1,
            7,
            4,
            5
          ]
        },
        {
          "grade": "7",
          "lesson": "L6",
          "part": "Dialogue",
          "group": 2,
          "items": [
            {
              "id": "A",
              "number": 1,
              "zh": "真地嗎？在南韓的學校有大型的自助餐廳。",
              "en": "Really? There are large cafeterias in South Korean schools.",
              "zhkw": [
                "自助餐廳",
                "真地嗎"
              ],
              "enkw": [
                "cafeterias",
                "schools"
              ]
            },
            {
              "id": "B",
              "number": 2,
              "zh": "這裡沒有。",
              "en": "There aren’t any here.",
              "zhkw": [
                "這裡沒有"
              ],
              "enkw": [
                "aren’t"
              ]
            },
            {
              "id": "C",
              "number": 3,
              "zh": "沒關係。我們也可以在教室裡吃午餐。",
              "en": "That’s okay! We can eat lunch in the classroom, too.",
              "zhkw": [
                "裡吃午餐",
                "沒關係"
              ],
              "enkw": [
                "classroom",
                "That’s"
              ]
            },
            {
              "id": "D",
              "number": 4,
              "zh": "這是我們的教室。進來見你們的新同學吧。",
              "en": "This is our classroom. Come inside and meet your new classmates.",
              "zhkw": [
                "新同學吧",
                "們的教室"
              ],
              "enkw": [
                "classmates",
                "classroom"
              ]
            },
            {
              "id": "E",
              "number": 5,
              "zh": "太好了！我們去跟大家說聲嗨吧！",
              "en": "Great! Let’s say hi to everybody!",
              "zhkw": [
                "說聲嗨吧",
                "太好了"
              ],
              "enkw": [
                "everybody",
                "Great"
              ]
            },
            {
              "id": "F",
              "number": 6,
              "zh": "哪裡可以放我的鞋子？",
              "en": "Where can I put my shoes?",
              "zhkw": [
                "我的鞋子"
              ],
              "enkw": [
                "shoes"
              ]
            },
            {
              "id": "G",
              "number": 7,
              "zh": "門外有任何架子嗎？",
              "en": "Are there any shelves outside the door?",
              "zhkw": [
                "何架子嗎"
              ],
              "enkw": [
                "shelves",
                "outside"
              ]
            },
            {
              "id": "H",
              "number": 8,
              "zh": "別擔心，Min-Ho。我們在室內可以穿鞋。",
              "en": "Don’t worry, Min-Ho. We can wear our shoes inside.",
              "zhkw": [
                "可以穿鞋",
                "別擔心"
              ],
              "enkw": [
                "inside",
                "Don’t"
              ]
            }
          ],
          "order": [
            0,
            3,
            5,
            1,
            4,
            2,
            6,
            7
          ]
        },
        {
          "grade": "7",
          "lesson": "L6",
          "part": "Dialogue",
          "group": 3,
          "items": [
            {
              "id": "A",
              "number": 1,
              "zh": "喔，謝謝。我想⋯⋯我還在適應新環境。",
              "en": "Oh, thanks. I guess… I’m still finding my feet!",
              "zhkw": [
                "應新環境",
                "謝謝"
              ],
              "enkw": [
                "finding",
                "thanks"
              ]
            },
            {
              "id": "B",
              "number": 2,
              "zh": "午餐時間到了。我好餓。",
              "en": "It’s time for lunch. I’m hungry.",
              "zhkw": [
                "時間到了",
                "我好餓"
              ],
              "enkw": [
                "hungry",
                "lunch"
              ]
            },
            {
              "id": "C",
              "number": 3,
              "zh": "嘿，Brian，你在找什麼？",
              "en": "Hey, Brian, what are you looking for?",
              "zhkw": [
                "Brian",
                "在找什麼"
              ],
              "enkw": [
                "looking",
                "Brian"
              ]
            },
            {
              "id": "D",
              "number": 4,
              "zh": "我的午餐。我到處都找不到它。",
              "en": "My lunch. I can’t find it anywhere.",
              "zhkw": [
                "找不到它",
                "我的午餐"
              ],
              "enkw": [
                "anywhere",
                "lunch"
              ]
            },
            {
              "id": "E",
              "number": 5,
              "zh": "它在蒸飯箱裡。",
              "en": "It’s in the warming cabinet.",
              "zhkw": [
                "蒸飯箱裡"
              ],
              "enkw": [
                "warming",
                "cabinet"
              ]
            },
            {
              "id": "F",
              "number": 6,
              "zh": "呃！它是溫的。",
              "en": "Eww! It’s warm.",
              "zhkw": [
                "它是溫的"
              ],
              "enkw": [
                "It’s",
                "warm"
              ]
            },
            {
              "id": "G",
              "number": 7,
              "zh": "那是個問題嗎？",
              "en": "Is that a problem?",
              "zhkw": [
                "個問題嗎"
              ],
              "enkw": [
                "problem"
              ]
            },
            {
              "id": "H",
              "number": 8,
              "zh": "嗯⋯⋯我今天吃三明治和一個蘋果當午餐。",
              "en": "Well… I have sandwiches and an apple for lunch today.",
              "zhkw": [
                "果當午餐"
              ],
              "enkw": [
                "sandwiches",
                "apple"
              ]
            }
          ],
          "order": [
            4,
            1,
            3,
            2,
            5,
            7,
            6,
            0
          ]
        },
        {
          "grade": "7",
          "lesson": "L6",
          "part": "Reading",
          "group": 1,
          "items": [
            {
              "id": "A",
              "number": 1,
              "zh": "嘿，媽媽，",
              "en": "Hey Mom,",
              "zhkw": [
                "媽媽"
              ],
              "enkw": [
                "Hey"
              ]
            },
            {
              "id": "B",
              "number": 2,
              "zh": "你在英國過得如何？",
              "en": "How are you doing in the UK?",
              "zhkw": [
                "過得如何"
              ],
              "enkw": [
                "doing"
              ]
            },
            {
              "id": "C",
              "number": 3,
              "zh": "我很好，但我一直想著你。",
              "en": "I’m good, but I’m thinking about you all the time.",
              "zhkw": [
                "直想著你",
                "我很好"
              ],
              "enkw": [
                "thinking",
                "good"
              ]
            },
            {
              "id": "D",
              "number": 4,
              "zh": "在臺灣有許多不同的事物。",
              "en": "There are a lot of different things in Taiwan.",
              "zhkw": [
                "同的事物"
              ],
              "enkw": [
                "different",
                "things"
              ]
            },
            {
              "id": "E",
              "number": 5,
              "zh": "我仍在適應新環境，但別擔心我。",
              "en": "I’m still finding my feet, but don’t worry about me.",
              "zhkw": [
                "應新環境",
                "別擔心我"
              ],
              "enkw": [
                "finding",
                "still"
              ]
            },
            {
              "id": "F",
              "number": 6,
              "zh": "學校每個人真地都對我很好。",
              "en": "Everyone at school is really nice to me.",
              "zhkw": [
                "對我很好"
              ],
              "enkw": [
                "Everyone",
                "school"
              ]
            },
            {
              "id": "G",
              "number": 7,
              "zh": "然而，有一個學生。",
              "en": "However, there is one student.",
              "zhkw": [
                "一個學生",
                "然而"
              ],
              "enkw": [
                "However",
                "student"
              ]
            },
            {
              "id": "H",
              "number": 8,
              "zh": "他的名字是 Min-Ho，他來自南韓。",
              "en": "His name is Min-Ho, and he is from South Korea.",
              "zhkw": [
                "的名字是",
                "來自南韓"
              ],
              "enkw": [
                "South",
                "Korea"
              ]
            },
            {
              "id": "I",
              "number": 9,
              "zh": "他對我不是很友善。",
              "en": "He isn’t very friendly to me.",
              "zhkw": [
                "是很友善"
              ],
              "enkw": [
                "friendly",
                "isn’t"
              ]
            },
            {
              "id": "J",
              "number": 10,
              "zh": "看我們相片中的 V 手勢。",
              "en": "Look at the V-sign in our photo.",
              "zhkw": [
                "相片中的",
                "手勢"
              ],
              "enkw": [
                "photo",
                "Look"
              ]
            },
            {
              "id": "K",
              "number": 11,
              "zh": "我該怎麼辦？",
              "en": "What can I do?",
              "zhkw": [
                "該怎麼辦"
              ],
              "enkw": [
                "What"
              ]
            },
            {
              "id": "L",
              "number": 12,
              "zh": "Brian",
              "en": "Brian",
              "zhkw": [
                "Brian"
              ],
              "enkw": [
                "Brian"
              ]
            }
          ],
          "order": [
            10,
            5,
            9,
            1,
            7,
            8,
            6,
            4,
            2,
            11,
            0,
            3
          ]
        }
      ]
    }
  },
  "8": {
    "L1": {
      "grade": "8",
      "lesson": "L1",
      "groups": [
        {
          "grade": "8",
          "lesson": "L1",
          "part": "對話",
          "group": 1,
          "items": [
            {
              "id": "A",
              "number": 1,
              "zh": "潔米：嘿，你暑假過得如何？",
              "en": "Jamie: Hey, how was your summer vacation?",
              "zhkw": [
                "過得如何",
                "潔米"
              ],
              "enkw": [
                "vacation",
                "summer"
              ]
            },
            {
              "id": "B",
              "number": 2,
              "zh": "柴克：很棒。我拜訪了我在印度的阿姨。",
              "en": "Zac: It was good. I visited my aunt in India.",
              "zhkw": [
                "度的阿姨",
                "柴克"
              ],
              "enkw": [
                "visited",
                "India"
              ]
            },
            {
              "id": "C",
              "number": 3,
              "zh": "潔米：那邊的天氣如何？",
              "en": "Jamie: How was the weather there?",
              "zhkw": [
                "天氣如何",
                "潔米"
              ],
              "enkw": [
                "weather",
                "Jamie"
              ]
            },
            {
              "id": "D",
              "number": 4,
              "zh": "柴克：那裡很熱，而且下很多雨。",
              "en": "Zac: It was hot, and it rained a lot.",
              "zhkw": [
                "下很多雨",
                "那裡很熱"
              ],
              "enkw": [
                "rained"
              ]
            },
            {
              "id": "E",
              "number": 5,
              "zh": "潔米：就像臺灣的天氣一樣。",
              "en": "Jamie: Just like the weather in Taiwan.",
              "zhkw": [
                "天氣一樣",
                "潔米"
              ],
              "enkw": [
                "weather",
                "Taiwan"
              ]
            },
            {
              "id": "F",
              "number": 6,
              "zh": "柴克：對呀。那你去澳洲的旅行如何呢？",
              "en": "Zac: Right. And how was your trip to Australia?",
              "zhkw": [
                "行如何呢",
                "柴克"
              ],
              "enkw": [
                "Australia",
                "Right"
              ]
            },
            {
              "id": "G",
              "number": 7,
              "zh": "潔米：很好玩。我玩得很開心。",
              "en": "Jamie: It was fun. I had a good time.",
              "zhkw": [
                "得很開心",
                "很好玩"
              ],
              "enkw": [
                "Jamie",
                "good"
              ]
            },
            {
              "id": "H",
              "number": 8,
              "zh": "柴克：那邊天氣如何？",
              "en": "Zac: What was the weather like?",
              "zhkw": [
                "天氣如何",
                "柴克"
              ],
              "enkw": [
                "weather",
                "like"
              ]
            },
            {
              "id": "I",
              "number": 9,
              "zh": "潔米：那裡滿冷的，而且還下了幾天雪。",
              "en": "Jamie: It was cold, and it snowed for a few days.",
              "zhkw": [
                "了幾天雪",
                "裡滿冷的"
              ],
              "enkw": [
                "snowed",
                "Jamie"
              ]
            }
          ],
          "order": [
            4,
            6,
            8,
            1,
            3,
            2,
            7,
            0,
            5
          ]
        },
        {
          "grade": "8",
          "lesson": "L1",
          "part": "對話",
          "group": 2,
          "items": [
            {
              "id": "A",
              "number": 1,
              "zh": "潔米：我從澳洲寄了一張明信片給你。你有收到嗎？",
              "en": "Jamie: I sent you a postcard from Australia. Did you get it?",
              "zhkw": [
                "信片給你",
                "有收到嗎"
              ],
              "enkw": [
                "Australia",
                "postcard"
              ]
            },
            {
              "id": "B",
              "number": 2,
              "zh": "柴克：有的，我上週收到了。謝謝。",
              "en": "Zac: Yes, I got it last week. Thanks.",
              "zhkw": [
                "週收到了",
                "柴克"
              ],
              "enkw": [
                "Thanks",
                "last"
              ]
            },
            {
              "id": "C",
              "number": 3,
              "zh": "潔米：太好了。這裡有一張我和我姑丈的照片。",
              "en": "Jamie: Great. And here’s a picture of me with my uncle.",
              "zhkw": [
                "丈的照片",
                "太好了"
              ],
              "enkw": [
                "picture",
                "here’s"
              ]
            },
            {
              "id": "D",
              "number": 4,
              "zh": "柴克：哇！你有滑雪板？",
              "en": "Zac: Wow! You have a snowboard?",
              "zhkw": [
                "有滑雪板",
                "柴克"
              ],
              "enkw": [
                "snowboard"
              ]
            },
            {
              "id": "E",
              "number": 5,
              "zh": "潔米：我向我姑姑借的。她還借給我她的手套。",
              "en": "Jamie: I borrowed it from my aunt. She also lent me her gloves.",
              "zhkw": [
                "她的手套",
                "姑姑借的"
              ],
              "enkw": [
                "borrowed",
                "gloves"
              ]
            },
            {
              "id": "F",
              "number": 6,
              "zh": "柴克：她人真好。還有你從哪裡得到那件漂亮的夾克？",
              "en": "Zac: That was kind of her. And where did you get the lovely jacket?",
              "zhkw": [
                "亮的夾克",
                "她人真好"
              ],
              "enkw": [
                "lovely",
                "jacket"
              ]
            },
            {
              "id": "G",
              "number": 7,
              "zh": "潔米：我爸媽送我的生日禮物。我討厭厚重的夾克，但這件很溫暖且不會太厚重。",
              "en": "Jamie: My parents gave it to me for my birthday. I hate heavy jackets, but this one is warm and not too heavy.",
              "zhkw": [
                "會太厚重",
                "生日禮物"
              ],
              "enkw": [
                "birthday",
                "parents"
              ]
            },
            {
              "id": "H",
              "number": 8,
              "zh": "柴克：太好了！我也想要一件。",
              "en": "Zac: It’s nice! I want one, too.",
              "zhkw": [
                "想要一件",
                "太好了"
              ],
              "enkw": [
                "It’s",
                "nice"
              ]
            }
          ],
          "order": [
            3,
            1,
            0,
            4,
            6,
            5,
            2,
            7
          ]
        },
        {
          "grade": "8",
          "lesson": "L1",
          "part": "閱讀",
          "group": 1,
          "items": [
            {
              "id": "A",
              "number": 1,
              "zh": "親愛的柴克︰你過得如何？",
              "en": "Dear Zac, How are you doing?",
              "zhkw": [
                "愛的柴克",
                "過得如何"
              ],
              "enkw": [
                "doing",
                "Dear"
              ]
            },
            {
              "id": "B",
              "number": 2,
              "zh": "我和我家人現在在澳洲。這裡的人說澳式英文。",
              "en": "My family and I are in Australia now. People here speak Australian English.",
              "zhkw": [
                "在在澳洲",
                "澳式英文"
              ],
              "enkw": [
                "Australian",
                "Australia"
              ]
            },
            {
              "id": "C",
              "number": 3,
              "zh": "有天早上，一個男人在街上對我說︰「去死」，而我非常生氣。",
              "en": "One morning, a man said “go die” to me on the street, and I was so mad.",
              "zhkw": [
                "上對我說",
                "非常生氣"
              ],
              "enkw": [
                "morning",
                "street"
              ]
            },
            {
              "id": "D",
              "number": 4,
              "zh": "但事實上，他的意思是「你好」。",
              "en": "But in fact, he meant “good day.”",
              "zhkw": [
                "的意思是",
                "但事實上"
              ],
              "enkw": [
                "meant",
                "fact"
              ]
            },
            {
              "id": "E",
              "number": 5,
              "zh": "另一次，我去一家咖啡廳。我點了餅乾和熱巧克力，因為天氣很冷。",
              "en": "Another time, I went to a coffee shop. I ordered cookies and hot chocolate because the weather was cold.",
              "zhkw": [
                "熱巧克力",
                "家咖啡廳"
              ],
              "enkw": [
                "chocolate",
                "Another"
              ]
            },
            {
              "id": "F",
              "number": 6,
              "zh": "店員對我說︰「餅奇和熱巧奇，你的餐點馬上來。」",
              "en": "The clerk said to me, “Bikkies and hot chokkie, your order is coming right up.”",
              "zhkw": [
                "點馬上來",
                "和熱巧奇"
              ],
              "enkw": [
                "Bikkies",
                "chokkie"
              ]
            },
            {
              "id": "G",
              "number": 7,
              "zh": "多奇怪呀！無論如何，我們不久後學校見囉。",
              "en": "How strange! Anyway, see you at school soon.",
              "zhkw": [
                "學校見囉",
                "多奇怪呀"
              ],
              "enkw": [
                "strange",
                "Anyway"
              ]
            },
            {
              "id": "H",
              "number": 8,
              "zh": "你的朋友，潔米",
              "en": "Your friend, Jamie",
              "zhkw": [
                "你的朋友",
                "潔米"
              ],
              "enkw": [
                "friend",
                "Jamie"
              ]
            },
            {
              "id": "I",
              "number": 9,
              "zh": "柴克．雨果 育仁路 30 號 臺北市 11249 臺灣（中華民國）",
              "en": "Zac Hugo, No. 30, Yuren Rd., Taipei 11249, Taiwan (ROC)",
              "zhkw": [
                "中華民國",
                "育仁路"
              ],
              "enkw": [
                "Taipei",
                "Taiwan"
              ]
            }
          ],
          "order": [
            4,
            7,
            6,
            5,
            3,
            8,
            2,
            1,
            0
          ]
        }
      ]
    },
    "L2": {
      "grade": "8",
      "lesson": "L2",
      "groups": [
        {
          "grade": "8",
          "lesson": "L2",
          "part": "對話",
          "group": 1,
          "items": [
            {
              "id": "A",
              "number": 1,
              "zh": "寇弟：你好，我是寇弟。我可以跟由紀通話嗎？",
              "en": "Cody: Hello, this is Cody. May I speak to Yuki, please?",
              "zhkw": [
                "紀通話嗎",
                "我是寇弟"
              ],
              "enkw": [
                "please",
                "Hello"
              ]
            },
            {
              "id": "B",
              "number": 2,
              "zh": "由紀：我就是。有什麼事嗎，寇弟？",
              "en": "Yuki: Speaking. What’s up, Cody?",
              "zhkw": [
                "什麼事嗎",
                "我就是"
              ],
              "enkw": [
                "Speaking",
                "What’s"
              ]
            },
            {
              "id": "C",
              "number": 3,
              "zh": "寇弟：你有參加任何學校社團嗎？",
              "en": "Cody: Are you in any school clubs?",
              "zhkw": [
                "校社團嗎",
                "寇弟"
              ],
              "enkw": [
                "school",
                "clubs"
              ]
            },
            {
              "id": "D",
              "number": 4,
              "zh": "由紀：沒有。我沒辦法下定決心，因為所有的社團都好有趣。那你呢？",
              "en": "Yuki: No. I can’t make up my mind because all the clubs are interesting. What about you?",
              "zhkw": [
                "都好有趣",
                "下定決心"
              ],
              "enkw": [
                "interesting",
                "can’t"
              ]
            },
            {
              "id": "E",
              "number": 5,
              "zh": "寇弟：我正在考慮電玩設計社，因為電腦科學是我最愛的科目。",
              "en": "Cody: I’m thinking about the video game design club because computer science is my favorite subject.",
              "zhkw": [
                "愛的科目",
                "玩設計社"
              ],
              "enkw": [
                "thinking",
                "computer"
              ]
            },
            {
              "id": "F",
              "number": 6,
              "zh": "由紀：真的嗎？我也喜歡電腦科學。",
              "en": "Yuki: Really? I like computer science, too.",
              "zhkw": [
                "電腦科學",
                "真的嗎"
              ],
              "enkw": [
                "computer",
                "science"
              ]
            },
            {
              "id": "G",
              "number": 7,
              "zh": "寇弟：我知道呀。所以我一聽到這個社團，就想到你了。或許我們可以參加同一個社團。",
              "en": "Cody: I know. So when I heard about the club, I thought of you. Maybe we can join the same club.",
              "zhkw": [
                "一個社團",
                "這個社團"
              ],
              "enkw": [
                "thought",
                "heard"
              ]
            },
            {
              "id": "H",
              "number": 8,
              "zh": "由紀：我可以考慮一下，再回電給你嗎？",
              "en": "Yuki: Can I think about it and call you back?",
              "zhkw": [
                "考慮一下",
                "電給你嗎"
              ],
              "enkw": [
                "think",
                "Yuki"
              ]
            }
          ],
          "order": [
            1,
            5,
            0,
            2,
            6,
            7,
            4,
            3
          ]
        },
        {
          "grade": "8",
          "lesson": "L2",
          "part": "對話",
          "group": 2,
          "items": [
            {
              "id": "A",
              "number": 1,
              "zh": "寇弟：當然。晚點聊。",
              "en": "Cody: Sure. Talk to you later.",
              "zhkw": [
                "晚點聊",
                "寇弟"
              ],
              "enkw": [
                "later",
                "Cody"
              ]
            },
            {
              "id": "B",
              "number": 2,
              "zh": "由紀：嗨，寇弟。你知道嗎？在信跟我說了有關水上運動社的事之後，我就報名參加了。",
              "en": "Yuki: Hi, Cody. You know what? I signed up for the water sports club after Shin told me about it.",
              "zhkw": [
                "的事之後",
                "名參加了"
              ],
              "enkw": [
                "signed",
                "sports"
              ]
            },
            {
              "id": "C",
              "number": 3,
              "zh": "寇弟：水上運動社？你開玩笑的吧？你很不會游泳耶。",
              "en": "Cody: Water sports club? Are you pulling my leg? You are a poor swimmer.",
              "zhkw": [
                "會游泳耶",
                "玩笑的吧"
              ],
              "enkw": [
                "pulling",
                "swimmer"
              ]
            },
            {
              "id": "D",
              "number": 4,
              "zh": "由紀：信在去年加入社團以前很不會游泳。但到年底，他能游得像魚那樣好。",
              "en": "Yuki: Shin was a poor swimmer before he joined the club last year. But at the end of the year, he could swim like a fish.",
              "zhkw": [
                "不會游泳",
                "魚那樣好"
              ],
              "enkw": [
                "swimmer",
                "joined"
              ]
            },
            {
              "id": "E",
              "number": 5,
              "zh": "寇弟：我明白了。對了，這是誰的相機? 真不錯。",
              "en": "Cody: I see. By the way, whose camera is this? It’s nice.",
              "zhkw": [
                "誰的相機",
                "我明白了"
              ],
              "enkw": [
                "camera",
                "whose"
              ]
            },
            {
              "id": "F",
              "number": 6,
              "zh": "由紀：是我的。它是用於水上運動社的水下相機。",
              "en": "Yuki: It’s mine. It’s an underwater camera for my water sports club.",
              "zhkw": [
                "水下相機",
                "是我的"
              ],
              "enkw": [
                "underwater",
                "camera"
              ]
            },
            {
              "id": "G",
              "number": 7,
              "zh": "寇弟：酷哦！",
              "en": "Cody: Cool!",
              "zhkw": [
                "寇弟",
                "酷哦"
              ],
              "enkw": [
                "Cody",
                "Cool"
              ]
            }
          ],
          "order": [
            0,
            4,
            5,
            1,
            3,
            2,
            6
          ]
        },
        {
          "grade": "8",
          "lesson": "L2",
          "part": "閱讀",
          "group": 1,
          "items": [
            {
              "id": "A",
              "number": 1,
              "zh": "我們有很棒的師資。",
              "en": "We have great teachers.",
              "zhkw": [
                "棒的師資"
              ],
              "enkw": [
                "teachers",
                "great"
              ]
            },
            {
              "id": "B",
              "number": 2,
              "zh": "我們的老師，賈伯斯女士，在臺灣電玩遊戲比賽四度奪得冠軍。",
              "en": "Our teacher, Ms. Jobs, is a four-time winner of the Taiwan Video Game Contest.",
              "zhkw": [
                "奪得冠軍",
                "們的老師"
              ],
              "enkw": [
                "teacher",
                "Contest"
              ]
            },
            {
              "id": "C",
              "number": 3,
              "zh": "另外，我們也有兩位客座老師。他們都是來自知名電玩遊戲公司的遊戲工程師",
              "en": "Also, we have two guest teachers. They’re game engineers from a famous video game company.",
              "zhkw": [
                "戲工程師",
                "客座老師"
              ],
              "enkw": [
                "engineers",
                "teachers"
              ]
            },
            {
              "id": "D",
              "number": 4,
              "zh": "你可以從他們身上學到很多東西。",
              "en": "You can learn a lot from them.",
              "zhkw": [
                "很多東西"
              ],
              "enkw": [
                "learn",
                "them"
              ]
            },
            {
              "id": "E",
              "number": 5,
              "zh": "我們有電玩設計的簡易課程。",
              "en": "We have easy lessons on video game design.",
              "zhkw": [
                "簡易課程"
              ],
              "enkw": [
                "lessons",
                "design"
              ]
            },
            {
              "id": "F",
              "number": 6,
              "zh": "我們的課程一點也不難，而且我們的老師們會用有趣的方式教學。",
              "en": "Our lessons are not difficult at all, and our teachers teach in a fun way.",
              "zhkw": [
                "方式教學",
                "點也不難"
              ],
              "enkw": [
                "difficult",
                "teachers"
              ]
            },
            {
              "id": "G",
              "number": 7,
              "zh": "在完成課程後，你可以設計你自己的電玩遊戲。",
              "en": "You can design your own video games after you finish the lessons.",
              "zhkw": [
                "電玩遊戲",
                "成課程後"
              ],
              "enkw": [
                "lessons",
                "design"
              ]
            },
            {
              "id": "H",
              "number": 8,
              "zh": "我們能帶你去倫敦遊戲節。",
              "en": "We can take you to the London Game Festival.",
              "zhkw": [
                "敦遊戲節"
              ],
              "enkw": [
                "Festival",
                "London"
              ]
            },
            {
              "id": "I",
              "number": 9,
              "zh": "每年我們都會免費帶兩位學生去倫敦遊戲節。",
              "en": "Every year, we take two students on a trip to the London Game Festival for free.",
              "zhkw": [
                "敦遊戲節"
              ],
              "enkw": [
                "students",
                "Festival"
              ]
            },
            {
              "id": "J",
              "number": 10,
              "zh": "在那裡，你可以看到許多表演，還可以玩很多的遊戲。",
              "en": "There, you can see many shows and play a lot of games.",
              "zhkw": [
                "許多表演",
                "多的遊戲"
              ],
              "enkw": [
                "shows",
                "games"
              ]
            },
            {
              "id": "K",
              "number": 11,
              "zh": "我們的課程於九月十日開始。",
              "en": "Our lessons start on September 10.",
              "zhkw": [
                "十日開始"
              ],
              "enkw": [
                "September",
                "lessons"
              ]
            },
            {
              "id": "L",
              "number": 12,
              "zh": "現在加入或錯失良機。由你決定！",
              "en": "Join now or miss out. The choice is yours!",
              "zhkw": [
                "錯失良機",
                "由你決定"
              ],
              "enkw": [
                "choice",
                "yours"
              ]
            }
          ],
          "order": [
            9,
            2,
            7,
            3,
            10,
            5,
            8,
            6,
            1,
            4,
            11,
            0
          ]
        }
      ]
    },
    "L3": {
      "grade": "8",
      "lesson": "L3",
      "groups": [
        {
          "grade": "8",
          "lesson": "L3",
          "part": "對話",
          "group": 1,
          "items": [
            {
              "id": "A",
              "number": 1,
              "zh": "金：有人打破了我最喜歡的杯子。",
              "en": "Kim: Someone broke my favorite cup.",
              "zhkw": [
                "歡的杯子"
              ],
              "enkw": [
                "favorite",
                "Someone"
              ]
            },
            {
              "id": "B",
              "number": 2,
              "zh": "潔米：也許是萊奇打破的。",
              "en": "Jamie: Maybe Lucky did it.",
              "zhkw": [
                "奇打破的",
                "潔米"
              ],
              "enkw": [
                "Jamie",
                "Maybe"
              ]
            },
            {
              "id": "C",
              "number": 3,
              "zh": "金：我們來檢查狗狗監視器的影片。",
              "en": "Kim: Let’s check the video from the dog monitor.",
              "zhkw": [
                "器的影片"
              ],
              "enkw": [
                "monitor",
                "Let’s"
              ]
            },
            {
              "id": "D",
              "number": 4,
              "zh": "潔米：暫停！媽媽十二點半的時候在洗碗盤。",
              "en": "Jamie: Stop! Mom was doing the dishes at half past twelve.",
              "zhkw": [
                "在洗碗盤",
                "潔米"
              ],
              "enkw": [
                "dishes",
                "twelve"
              ]
            },
            {
              "id": "E",
              "number": 5,
              "zh": "金：就是她。我就知道。",
              "en": "Kim: It was her. I knew it.",
              "zhkw": [
                "我就知道",
                "就是她"
              ],
              "enkw": [
                "knew"
              ]
            },
            {
              "id": "F",
              "number": 6,
              "zh": "潔米：放輕鬆，金。你看。她離開的時候杯子還是好好的。",
              "en": "Jamie: Take it easy, Kim. Look. The cup was fine when she left.",
              "zhkw": [
                "是好好的",
                "放輕鬆"
              ],
              "enkw": [
                "Jamie",
                "Take"
              ]
            },
            {
              "id": "G",
              "number": 7,
              "zh": "金：好吧。",
              "en": "Kim: All right.",
              "zhkw": [
                "好吧"
              ],
              "enkw": [
                "right"
              ]
            }
          ],
          "order": [
            0,
            4,
            6,
            2,
            3,
            1,
            5
          ]
        },
        {
          "grade": "8",
          "lesson": "L3",
          "part": "對話",
          "group": 2,
          "items": [
            {
              "id": "A",
              "number": 1,
              "zh": "金：嘿，你一點十五分的時候在廚房做什麼？就是你。",
              "en": "Kim: Hey, what were you doing in the kitchen at a quarter after one? It was you.",
              "zhkw": [
                "房做什麼",
                "就是你"
              ],
              "enkw": [
                "kitchen",
                "quarter"
              ]
            },
            {
              "id": "B",
              "number": 2,
              "zh": "潔米：冷靜點。我在喝水，而且我甚至沒有靠近桌子。看見了嗎？",
              "en": "Jamie: Cool down. I was drinking water, and I wasn’t even close to the table. See?",
              "zhkw": [
                "靠近桌子",
                "我在喝水"
              ],
              "enkw": [
                "drinking",
                "wasn’t"
              ]
            },
            {
              "id": "C",
              "number": 3,
              "zh": "金：那麼是誰打破了我的杯子？",
              "en": "Kim: Then who broke my cup?",
              "zhkw": [
                "我的杯子"
              ],
              "enkw": [
                "broke",
                "Then"
              ]
            },
            {
              "id": "D",
              "number": 4,
              "zh": "潔米：呃，你看。是你打破的。你凌晨兩點的時候在廚房裡。",
              "en": "Jamie: Er, look. You did. You were in the kitchen at 2 a.m.",
              "zhkw": [
                "在廚房裡",
                "你打破的"
              ],
              "enkw": [
                "kitchen",
                "Jamie"
              ]
            },
            {
              "id": "E",
              "number": 5,
              "zh": "金：我在廚房裡？我一點也不記得。",
              "en": "Kim: I was in the kitchen? I don’t remember that at all.",
              "zhkw": [
                "也不記得",
                "在廚房裡"
              ],
              "enkw": [
                "remember",
                "kitchen"
              ]
            },
            {
              "id": "F",
              "number": 6,
              "zh": "潔米：你的眼睛沒有睜開。你在做什麼呢？",
              "en": "Jamie: Your eyes weren’t open. What were you doing?",
              "zhkw": [
                "沒有睜開",
                "做什麼呢"
              ],
              "enkw": [
                "weren’t",
                "Jamie"
              ]
            },
            {
              "id": "G",
              "number": 7,
              "zh": "金：糟糕！！當我打破杯子時，我正在夢遊。",
              "en": "Kim: Oh no! I was sleepwalking when I broke my cup.",
              "zhkw": [
                "破杯子時",
                "正在夢遊"
              ],
              "enkw": [
                "sleepwalking",
                "broke"
              ]
            }
          ],
          "order": [
            3,
            1,
            5,
            4,
            2,
            6,
            0
          ]
        },
        {
          "grade": "8",
          "lesson": "L3",
          "part": "閱讀",
          "group": 1,
          "items": [
            {
              "id": "A",
              "number": 1,
              "zh": "在艾瑪搬到新的城市後，她幾乎每晚都會做惡夢。",
              "en": "After Emma moved to a new city, she had bad dreams almost every night.",
              "zhkw": [
                "的城市後",
                "會做惡夢"
              ],
              "enkw": [
                "dreams",
                "almost"
              ]
            },
            {
              "id": "B",
              "number": 2,
              "zh": "一次夢裡，她正在吃蛋糕，那時候她的牙齒一顆接一顆地脫落。",
              "en": "In one dream, she was eating cake when her teeth fell out one by one.",
              "zhkw": [
                "顆地脫落",
                "在吃蛋糕"
              ],
              "enkw": [
                "eating",
                "dream"
              ]
            },
            {
              "id": "C",
              "number": 3,
              "zh": "另一次夢裡，一隻熊正在追趕她。這些夢總是喚醒她。",
              "en": "In another, a bear was running after her. These dreams always woke her up.",
              "zhkw": [
                "在追趕她",
                "是喚醒她"
              ],
              "enkw": [
                "another",
                "running"
              ]
            },
            {
              "id": "D",
              "number": 4,
              "zh": "之後她就再也睡不著了，因為她感到很害怕。",
              "en": "After that, she couldn't fall asleep again because she was scared.",
              "zhkw": [
                "睡不著了",
                "到很害怕"
              ],
              "enkw": [
                "couldn't",
                "asleep"
              ]
            },
            {
              "id": "E",
              "number": 5,
              "zh": "她無法得到足夠的睡眠，總是很疲倦。",
              "en": "She couldn't get enough sleep and was tired all the time.",
              "zhkw": [
                "夠的睡眠",
                "是很疲倦"
              ],
              "enkw": [
                "couldn't",
                "enough"
              ]
            },
            {
              "id": "F",
              "number": 6,
              "zh": "艾瑪把她的問題告訴了家人和朋友。",
              "en": "Emma told her family and friends about her problem.",
              "zhkw": [
                "人和朋友"
              ],
              "enkw": [
                "friends",
                "problem"
              ]
            },
            {
              "id": "G",
              "number": 7,
              "zh": "「你只是對新學校感到緊張。」她的父母說，並給了她一些訣竅。",
              "en": "\"You’re just nervous about your new school,\" her parents said and gave her some tips.",
              "zhkw": [
                "感到緊張",
                "一些訣竅"
              ],
              "enkw": [
                "nervous",
                "parents"
              ]
            },
            {
              "id": "H",
              "number": 8,
              "zh": "然而，全都沒用。",
              "en": "However, nothing worked.",
              "zhkw": [
                "全都沒用",
                "然而"
              ],
              "enkw": [
                "However",
                "nothing"
              ]
            },
            {
              "id": "I",
              "number": 9,
              "zh": "有一天，她的朋友達科塔送給她一個捕夢網。",
              "en": "One day, her friend Dakota gave her a dreamcatcher.",
              "zhkw": [
                "個捕夢網",
                "有一天"
              ],
              "enkw": [
                "dreamcatcher",
                "friend"
              ]
            },
            {
              "id": "J",
              "number": 10,
              "zh": "他告訴她說：「把這個掛在床邊。網子會捕捉惡夢，但好夢會從洞中通過。」",
              "en": "\"Hang this by your bed. The web catches the bad dreams, but the good ones go through the holes,\" he told her.",
              "zhkw": [
                "洞中通過",
                "掛在床邊"
              ],
              "enkw": [
                "catches",
                "dreams"
              ]
            },
            {
              "id": "K",
              "number": 11,
              "zh": "艾瑪把它掛了起來，而它真的管用！她終於可以徹夜好眠了。",
              "en": "Emma hung it up, and it worked! Finally, she could sleep through the night.",
              "zhkw": [
                "夜好眠了",
                "掛了起來"
              ],
              "enkw": [
                "Finally",
                "worked"
              ]
            },
            {
              "id": "L",
              "number": 12,
              "zh": "捕夢網將她從可怕的夜晚解救出來。",
              "en": "The dreamcatcher saved her from terrible nights.",
              "zhkw": [
                "解救出來"
              ],
              "enkw": [
                "dreamcatcher",
                "terrible"
              ]
            }
          ],
          "order": [
            6,
            7,
            5,
            8,
            11,
            9,
            2,
            3,
            0,
            4,
            1,
            10
          ]
        }
      ]
    },
    "L4": {
      "grade": "8",
      "lesson": "L4",
      "groups": [
        {
          "grade": "8",
          "lesson": "L4",
          "part": "對話",
          "group": 1,
          "items": [
            {
              "id": "A",
              "number": 1,
              "zh": "寇弟：柴克，你在做什麼？",
              "en": "Cody: What are you doing, Zac?",
              "zhkw": [
                "在做什麼",
                "寇弟"
              ],
              "enkw": [
                "doing",
                "Cody"
              ]
            },
            {
              "id": "B",
              "number": 2,
              "zh": "柴克：我在為我的 YouTube 頻道製作影片。",
              "en": "Zac: I’m making a video for my YouTube channel.",
              "zhkw": [
                "YouTube",
                "製作影片"
              ],
              "enkw": [
                "YouTube",
                "channel"
              ]
            },
            {
              "id": "C",
              "number": 3,
              "zh": "由紀：好酷喔！",
              "en": "Yuki: How cool!",
              "zhkw": [
                "好酷喔",
                "由紀"
              ],
              "enkw": [
                "Yuki",
                "cool"
              ]
            },
            {
              "id": "D",
              "number": 4,
              "zh": "柴克：我喜愛製作影片，我希望有一天我能成為知名的 YouTube 影片創作者。",
              "en": "Zac: I enjoy making videos, and I hope to be a famous YouTuber one day.",
              "zhkw": [
                "為知名的",
                "製作影片"
              ],
              "enkw": [
                "YouTuber",
                "making"
              ]
            },
            {
              "id": "E",
              "number": 5,
              "zh": "由紀：寇弟，那你呢？你未來想當什麼？",
              "en": "Yuki: And you, Cody? What do you want to be in the future?",
              "zhkw": [
                "想當什麼",
                "那你呢"
              ],
              "enkw": [
                "future",
                "Yuki"
              ]
            },
            {
              "id": "F",
              "number": 6,
              "zh": "寇弟：我計劃當一名律師。我想要幫助需要幫助的人，為他們爭取權利。",
              "en": "Cody: I plan to be a lawyer. I want to help people in need and fight for their rights.",
              "zhkw": [
                "幫助的人",
                "一名律師"
              ],
              "enkw": [
                "lawyer",
                "people"
              ]
            },
            {
              "id": "G",
              "number": 7,
              "zh": "由紀：你真棒。",
              "en": "Yuki: Good for you.",
              "zhkw": [
                "你真棒",
                "由紀"
              ],
              "enkw": [
                "Yuki",
                "Good"
              ]
            }
          ],
          "order": [
            6,
            3,
            4,
            0,
            2,
            1,
            5
          ]
        },
        {
          "grade": "8",
          "lesson": "L4",
          "part": "對話",
          "group": 2,
          "items": [
            {
              "id": "A",
              "number": 1,
              "zh": "寇弟：由紀，你夢想的工作是什麼？",
              "en": "Cody: What’s your dream job, Yuki?",
              "zhkw": [
                "作是什麼",
                "寇弟"
              ],
              "enkw": [
                "What’s",
                "dream"
              ]
            },
            {
              "id": "B",
              "number": 2,
              "zh": "由紀：當歌手是我夢想的工作。",
              "en": "Yuki: Being a singer is my dream job.",
              "zhkw": [
                "想的工作",
                "由紀"
              ],
              "enkw": [
                "singer",
                "Being"
              ]
            },
            {
              "id": "C",
              "number": 3,
              "zh": "柴克：有夢想很棒。而且你真的很會唱歌。",
              "en": "Zac: It’s great to have a dream. And you’re really good at singing.",
              "zhkw": [
                "很會唱歌",
                "夢想很棒"
              ],
              "enkw": [
                "singing",
                "you’re"
              ]
            },
            {
              "id": "D",
              "number": 4,
              "zh": "由紀：但是我討厭在人群面前唱歌。當人們看著我時，我感到很緊張。",
              "en": "Yuki: But I hate singing in front of people. I get butterflies in my stomach when people watch me.",
              "zhkw": [
                "面前唱歌",
                "看著我時"
              ],
              "enkw": [
                "butterflies",
                "singing"
              ]
            },
            {
              "id": "E",
              "number": 5,
              "zh": "柴克：別擔心。一直練習就對了。",
              "en": "Zac: Don’t worry. Just keep practicing.",
              "zhkw": [
                "習就對了",
                "別擔心"
              ],
              "enkw": [
                "practicing",
                "Don’t"
              ]
            },
            {
              "id": "F",
              "number": 6,
              "zh": "寇弟：或者你可以戴上一頂超大假髮，這樣一來你就看不到別人了。",
              "en": "Cody: Or you can put on a big wig, and then you can’t see people.",
              "zhkw": [
                "超大假髮",
                "到別人了"
              ],
              "enkw": [
                "people",
                "can’t"
              ]
            },
            {
              "id": "G",
              "number": 7,
              "zh": "由紀：哈哈。好主意。",
              "en": "Yuki: Haha. Good idea.",
              "zhkw": [
                "好主意",
                "由紀"
              ],
              "enkw": [
                "Yuki",
                "Haha"
              ]
            }
          ],
          "order": [
            6,
            5,
            2,
            1,
            0,
            4,
            3
          ]
        },
        {
          "grade": "8",
          "lesson": "L4",
          "part": "閱讀",
          "group": 1,
          "items": [
            {
              "id": "A",
              "number": 1,
              "zh": "IU 是一位成功的韓國歌手。她在世界各地都有粉絲。",
              "en": "IU is a successful Korean singer. She has fans all over the world.",
              "zhkw": [
                "韓國歌手",
                "都有粉絲"
              ],
              "enkw": [
                "successful",
                "Korean"
              ]
            },
            {
              "id": "B",
              "number": 2,
              "zh": "這是她的成功故事。",
              "en": "This is her success story.",
              "zhkw": [
                "成功故事"
              ],
              "enkw": [
                "success",
                "story"
              ]
            },
            {
              "id": "C",
              "number": 3,
              "zh": "IU 在初中時發現了自己對音樂的熱愛。",
              "en": "IU found her love for music in junior high school.",
              "zhkw": [
                "樂的熱愛",
                "IU"
              ],
              "enkw": [
                "junior",
                "school"
              ]
            },
            {
              "id": "D",
              "number": 4,
              "zh": "在七年級時，她第一次在舞臺上唱歌，並決定要成為一名歌星。",
              "en": "In the seventh grade, she sang on stage for the first time and decided to become a singer.",
              "zhkw": [
                "臺上唱歌",
                "一名歌星"
              ],
              "enkw": [
                "seventh",
                "decided"
              ]
            },
            {
              "id": "E",
              "number": 5,
              "zh": "她的親戚不相信她，還嘲笑她的夢想。",
              "en": "Her relatives didn't believe in her and made fun of her dream.",
              "zhkw": [
                "不相信她",
                "她的夢想"
              ],
              "enkw": [
                "relatives",
                "believe"
              ]
            },
            {
              "id": "F",
              "number": 6,
              "zh": "然而，IU 沒有放棄。",
              "en": "However, IU didn't give up.",
              "zhkw": [
                "沒有放棄",
                "然而"
              ],
              "enkw": [
                "However",
                "give"
              ]
            },
            {
              "id": "G",
              "number": 7,
              "zh": "IU 在 2007 年終於有一家公司簽下她之前，她大約參加了二十次試鏡。",
              "en": "IU went to about twenty auditions before a company finally signed her in 2007.",
              "zhkw": [
                "下她之前",
                "十次試鏡"
              ],
              "enkw": [
                "auditions",
                "company"
              ]
            },
            {
              "id": "H",
              "number": 8,
              "zh": "三年後，IU 藉由她的歌曲《Good Day》首次獲得成功。",
              "en": "Three years later, IU had her first success with her song \"Good Day.\"",
              "zhkw": [
                "她的歌曲",
                "獲得成功"
              ],
              "enkw": [
                "success",
                "Three"
              ]
            },
            {
              "id": "I",
              "number": 9,
              "zh": "在那之後，許多人開始聽她的音樂。",
              "en": "After that, many people started listening to her music.",
              "zhkw": [
                "她的音樂",
                "在那之後"
              ],
              "enkw": [
                "listening",
                "started"
              ]
            },
            {
              "id": "J",
              "number": 10,
              "zh": "現在，除了唱歌，IU 還會寫歌和演戲。她的作品非常受歡迎。",
              "en": "Now, besides singing, IU also writes songs and acts. Her work is very popular.",
              "zhkw": [
                "常受歡迎",
                "歌和演戲"
              ],
              "enkw": [
                "besides",
                "singing"
              ]
            },
            {
              "id": "K",
              "number": 11,
              "zh": "還不止這樣。她經常捐錢給需要幫助的人。",
              "en": "And that's not all. She often gives her money to those in need.",
              "zhkw": [
                "幫助的人",
                "不止這樣"
              ],
              "enkw": [
                "that's",
                "often"
              ]
            },
            {
              "id": "L",
              "number": 12,
              "zh": "她是年輕人的好榜樣。",
              "en": "She is a good example for young people.",
              "zhkw": [
                "的好榜樣"
              ],
              "enkw": [
                "example",
                "people"
              ]
            }
          ],
          "order": [
            4,
            8,
            0,
            2,
            11,
            5,
            7,
            1,
            9,
            3,
            6,
            10
          ]
        }
      ]
    },
    "L5": {
      "grade": "8",
      "lesson": "L5",
      "groups": [
        {
          "grade": "8",
          "lesson": "L5",
          "part": "對話",
          "group": 1,
          "items": [
            {
              "id": "A",
              "number": 1,
              "zh": "由紀：爸爸，我們要怎麼去飯店？",
              "en": "Yuki: How do we go to our hotel, Dad?",
              "zhkw": [
                "麼去飯店",
                "由紀"
              ],
              "enkw": [
                "hotel",
                "Yuki"
              ]
            },
            {
              "id": "B",
              "number": 2,
              "zh": "爸爸：我們可以搭火車或地鐵。",
              "en": "Dad: We can take the train or the Tube.",
              "zhkw": [
                "車或地鐵",
                "爸爸"
              ],
              "enkw": [
                "train",
                "take"
              ]
            },
            {
              "id": "C",
              "number": 3,
              "zh": "由紀：什麼是地鐵？",
              "en": "Yuki: What’s the Tube?",
              "zhkw": [
                "麼是地鐵",
                "由紀"
              ],
              "enkw": [
                "What’s",
                "Yuki"
              ]
            },
            {
              "id": "D",
              "number": 4,
              "zh": "爸爸：就是倫敦的捷運。",
              "en": "Dad: It’s the metro in London.",
              "zhkw": [
                "敦的捷運",
                "爸爸"
              ],
              "enkw": [
                "London",
                "metro"
              ]
            },
            {
              "id": "E",
              "number": 5,
              "zh": "媽媽：我們坐捷運去吧，因為我們的飯店離綠園站很近。",
              "en": "Mom: Let’s go by metro because our hotel is near Green Park Station.",
              "zhkw": [
                "園站很近",
                "捷運去吧"
              ],
              "enkw": [
                "Station",
                "Let’s"
              ]
            },
            {
              "id": "F",
              "number": 6,
              "zh": "由紀：太棒了。",
              "en": "Yuki: Great.",
              "zhkw": [
                "太棒了",
                "由紀"
              ],
              "enkw": [
                "Great",
                "Yuki"
              ]
            },
            {
              "id": "G",
              "number": 7,
              "zh": "由紀：媽媽，我們半小時前從綠園站下車。現在，我們又回到皮卡迪利路了。",
              "en": "Yuki: Mom, we got off at Green Park Station half an hour ago. Now, we are back on Piccadilly Road again.",
              "zhkw": [
                "園站下車",
                "迪利路了"
              ],
              "enkw": [
                "Piccadilly",
                "Station"
              ]
            },
            {
              "id": "H",
              "number": 8,
              "zh": "媽媽：我們迷路了，但是我們沒有地圖。我們向別人尋求幫助吧。",
              "en": "Mom: We are lost, but we don’t have a map. Let’s ask someone for help.",
              "zhkw": [
                "求幫助吧",
                "沒有地圖"
              ],
              "enkw": [
                "someone",
                "don’t"
              ]
            },
            {
              "id": "I",
              "number": 9,
              "zh": "由紀：不好意思。我們要怎麼去梅費爾飯店呢？",
              "en": "Yuki: Excuse me. How do we get to the May Fair Hotel?",
              "zhkw": [
                "爾飯店呢",
                "不好意思"
              ],
              "enkw": [
                "Excuse",
                "Hotel"
              ]
            }
          ],
          "order": [
            6,
            0,
            8,
            7,
            4,
            5,
            2,
            1,
            3
          ]
        },
        {
          "grade": "8",
          "lesson": "L5",
          "part": "對話",
          "group": 2,
          "items": [
            {
              "id": "A",
              "number": 1,
              "zh": "男人：直走然後在柏克萊街左轉。沿著那條街走兩個街區。然後在斯特拉頓街和柏克萊街的轉角處左轉。飯店就在一家超市的對面。",
              "en": "Man: Go straight and turn left on Berkeley Street. Go along the street for two blocks. Then turn left at the corner of Stratton Street and Berkeley Street. The hotel is across from a supermarket.",
              "zhkw": [
                "角處左轉",
                "萊街左轉"
              ],
              "enkw": [
                "supermarket",
                "straight"
              ]
            },
            {
              "id": "B",
              "number": 2,
              "zh": "由紀：非常謝謝你。",
              "en": "Yuki: Thank you so much.",
              "zhkw": [
                "常謝謝你",
                "由紀"
              ],
              "enkw": [
                "Thank",
                "Yuki"
              ]
            },
            {
              "id": "C",
              "number": 3,
              "zh": "爸爸：不好意思。請問 101 號房在哪裡？",
              "en": "Dad: Excuse me. Where is Room 101?",
              "zhkw": [
                "房在哪裡",
                "不好意思"
              ],
              "enkw": [
                "Excuse",
                "Room"
              ]
            },
            {
              "id": "D",
              "number": 4,
              "zh": "職員：它在一樓。走上樓梯，它是右手邊的第一間。",
              "en": "Clerk: It’s on the first floor. Go up the stairs, and it’s the first one on the right.",
              "zhkw": [
                "的第一間",
                "它在一樓"
              ],
              "enkw": [
                "stairs",
                "Clerk"
              ]
            },
            {
              "id": "E",
              "number": 5,
              "zh": "爸爸：往上？我們不是在一樓嗎？",
              "en": "Dad: Up? Aren’t we on the first floor?",
              "zhkw": [
                "在一樓嗎",
                "爸爸"
              ],
              "enkw": [
                "Aren’t",
                "first"
              ]
            },
            {
              "id": "F",
              "number": 6,
              "zh": "職員：先生，這裡是地面樓。",
              "en": "Clerk: This is the ground floor, sir.",
              "zhkw": [
                "是地面樓",
                "職員"
              ],
              "enkw": [
                "ground",
                "Clerk"
              ]
            },
            {
              "id": "G",
              "number": 7,
              "zh": "爸爸：喔，對喔。在英國不一樣。謝謝。",
              "en": "Dad: Oh, right. It’s different in UK. Thanks.",
              "zhkw": [
                "國不一樣",
                "爸爸"
              ],
              "enkw": [
                "different",
                "Thanks"
              ]
            },
            {
              "id": "H",
              "number": 8,
              "zh": "由紀：爸爸，我們等一下可以做些什麼？",
              "en": "Yuki: Dad, what can we do later?",
              "zhkw": [
                "做些什麼",
                "由紀"
              ],
              "enkw": [
                "later",
                "Yuki"
              ]
            },
            {
              "id": "I",
              "number": 9,
              "zh": "爸爸：我們去綠園野餐吧。我們可以走路過去。",
              "en": "Dad: Let’s go picnicking at Green Park. We can go there on foot.",
              "zhkw": [
                "園野餐吧",
                "走路過去"
              ],
              "enkw": [
                "picnicking",
                "Let’s"
              ]
            },
            {
              "id": "J",
              "number": 10,
              "zh": "由紀：酷喔。",
              "en": "Yuki: Cool.",
              "zhkw": [
                "由紀",
                "酷喔"
              ],
              "enkw": [
                "Yuki",
                "Cool"
              ]
            }
          ],
          "order": [
            0,
            7,
            5,
            4,
            3,
            9,
            2,
            6,
            8,
            1
          ]
        },
        {
          "grade": "8",
          "lesson": "L5",
          "part": "閱讀",
          "group": 1,
          "items": [
            {
              "id": "A",
              "number": 1,
              "zh": "今天是我們在倫敦的第二天。",
              "en": "Today was our second day in London.",
              "zhkw": [
                "的第二天"
              ],
              "enkw": [
                "second",
                "London"
              ]
            },
            {
              "id": "B",
              "number": 2,
              "zh": "今天的計畫是要去莎士比亞環球劇場看一齣戲劇以及欣賞沿途風光。",
              "en": "The plan for today was to see a play at Shakespeare’s Globe and go sightseeing along the way.",
              "zhkw": [
                "沿途風光"
              ],
              "enkw": [
                "Shakespeare’s",
                "sightseeing"
              ]
            },
            {
              "id": "C",
              "number": 3,
              "zh": "在享用完飯店豐盛的早餐後，我們展開我們的一天。",
              "en": "After a big breakfast at the hotel, we started our day.",
              "zhkw": [
                "的早餐後",
                "們的一天"
              ],
              "enkw": [
                "breakfast",
                "started"
              ]
            },
            {
              "id": "D",
              "number": 4,
              "zh": "首先，我們搭公車到海德公園賞鳥。",
              "en": "First, we took a bus to Hyde Park and went bird watching there.",
              "zhkw": [
                "公園賞鳥",
                "首先"
              ],
              "enkw": [
                "watching",
                "First"
              ]
            },
            {
              "id": "E",
              "number": 5,
              "zh": "然後我們在湖的周圍散步。",
              "en": "Then we walked around the lake.",
              "zhkw": [
                "周圍散步"
              ],
              "enkw": [
                "walked",
                "around"
              ]
            },
            {
              "id": "F",
              "number": 6,
              "zh": "在那之後，我們搭地鐵去大笨鐘。當鐘敲響了十二聲時，我正忙於拍照。",
              "en": "After that, we went to Big Ben by metro. I was busy taking pictures when the clock hit twelve.",
              "zhkw": [
                "去大笨鐘",
                "十二聲時"
              ],
              "enkw": [
                "pictures",
                "taking"
              ]
            },
            {
              "id": "G",
              "number": 7,
              "zh": "鐘聲悅耳，許多人停下腳步聆聽。",
              "en": "The sound of the bells was beautiful, and many people stopped to listen.",
              "zhkw": [
                "腳步聆聽",
                "鐘聲悅耳"
              ],
              "enkw": [
                "beautiful",
                "stopped"
              ]
            },
            {
              "id": "H",
              "number": 8,
              "zh": "大約十二點半，我們到了劇院。",
              "en": "Around twelve thirty, we got to the theater.",
              "zhkw": [
                "十二點半",
                "到了劇院"
              ],
              "enkw": [
                "theater",
                "Around"
              ]
            },
            {
              "id": "I",
              "number": 9,
              "zh": "在那裡，我們看了莎士比亞的《羅密歐與茱麗葉》。",
              "en": "There, we saw Shakespeare's Romeo and Juliet.",
              "zhkw": [
                "士比亞的",
                "與茱麗葉"
              ],
              "enkw": [
                "Shakespeare's",
                "Juliet"
              ]
            },
            {
              "id": "J",
              "number": 10,
              "zh": "能和家人一起觀看這齣著名的戲劇是一次很棒的經歷。",
              "en": "It was a great experience to see the famous play with my family.",
              "zhkw": [
                "棒的經歷"
              ],
              "enkw": [
                "experience",
                "famous"
              ]
            },
            {
              "id": "K",
              "number": 11,
              "zh": "最後，我們乘船遊覽泰晤士河，並在船上享用下午茶。多麼美好的一天！",
              "en": "Finally, we went on a boat ride on the River Thames and enjoyed afternoon tea on the boat. What a wonderful day!",
              "zhkw": [
                "泰晤士河",
                "用下午茶"
              ],
              "enkw": [
                "afternoon",
                "wonderful"
              ]
            }
          ],
          "order": [
            8,
            4,
            1,
            6,
            9,
            7,
            10,
            0,
            3,
            5,
            2
          ]
        }
      ]
    },
    "L6": {
      "grade": "8",
      "lesson": "L6",
      "groups": [
        {
          "grade": "8",
          "lesson": "L6",
          "part": "對話",
          "group": 1,
          "items": [
            {
              "id": "A",
              "number": 1,
              "zh": "潔米：今晚將有一個聖誕醜毛衣派對。金需要一件毛衣。你覺得這件怎麼樣？",
              "en": "Jamie: There will be an ugly Christmas sweater party tonight. Kim needs a sweater. What do you think of this one?",
              "zhkw": [
                "毛衣派對",
                "件怎麼樣"
              ],
              "enkw": [
                "Christmas",
                "sweater"
              ]
            },
            {
              "id": "B",
              "number": 2,
              "zh": "寇弟：好滑稽的毛衣喔！她穿這件衣服的時候，就會像一棵行走的聖誕樹。這件衣服要多少錢？",
              "en": "Cody: What a funny sweater! She’ll be like a walking Christmas tree when she wears it. How much does it cost?",
              "zhkw": [
                "的聖誕樹",
                "服的時候"
              ],
              "enkw": [
                "Christmas",
                "sweater"
              ]
            },
            {
              "id": "C",
              "number": 3,
              "zh": "潔米：它要價新臺幣五百元。嗯，價錢有點高耶。",
              "en": "Jamie: It costs five hundred NT dollars. Hmm, the price is a little high.",
              "zhkw": [
                "幣五百元",
                "有點高耶"
              ],
              "enkw": [
                "hundred",
                "dollars"
              ]
            },
            {
              "id": "D",
              "number": 4,
              "zh": "寇弟：不要花那麼多錢在一件毛衣上。我家裡有一件滑稽的毛衣。她可以拿去，妳也可以省下一些錢。",
              "en": "Cody: Don’t spend that much money on a sweater. I have a funny sweater at home. She can have it, and you can save some money.",
              "zhkw": [
                "件毛衣上",
                "稽的毛衣"
              ],
              "enkw": [
                "sweater",
                "Don’t"
              ]
            },
            {
              "id": "E",
              "number": 5,
              "zh": "潔米：你真好！謝啦。",
              "en": "Jamie: How nice of you! Thanks.",
              "zhkw": [
                "你真好",
                "潔米"
              ],
              "enkw": [
                "Thanks",
                "Jamie"
              ]
            },
            {
              "id": "F",
              "number": 6,
              "zh": "潔米：我要買手套給我爺爺。昨天我在另一家百貨公司花了一個小時找手套，但它們都太貴了。",
              "en": "Jamie: I’m going to buy gloves for my grandpa. I spent an hour looking for gloves at another department store yesterday, but they were all too expensive.",
              "zhkw": [
                "時找手套",
                "給我爺爺"
              ],
              "enkw": [
                "department",
                "yesterday"
              ]
            },
            {
              "id": "G",
              "number": 7,
              "zh": "寇弟：你看這些手套。它們正在特價。",
              "en": "Cody: Look at these gloves. They’re on sale.",
              "zhkw": [
                "這些手套",
                "正在特價"
              ],
              "enkw": [
                "They’re",
                "gloves"
              ]
            },
            {
              "id": "H",
              "number": 8,
              "zh": "潔米：而且它們既溫暖又好看。我要買兩雙。",
              "en": "Jamie: And they are warm and beautiful. I’ll take two pairs.",
              "zhkw": [
                "暖又好看",
                "要買兩雙"
              ],
              "enkw": [
                "beautiful",
                "Jamie"
              ]
            }
          ],
          "order": [
            0,
            1,
            4,
            6,
            5,
            2,
            7,
            3
          ]
        },
        {
          "grade": "8",
          "lesson": "L6",
          "part": "對話",
          "group": 2,
          "items": [
            {
              "id": "A",
              "number": 1,
              "zh": "店員：一共是新臺幣五百一十元。您想要如何支付，用現金還是刷卡呢？",
              "en": "Clerk: The total is NT$510. How would you like to pay, in cash or by card?",
              "zhkw": [
                "百一十元",
                "是刷卡呢"
              ],
              "enkw": [
                "Clerk",
                "total"
              ]
            },
            {
              "id": "B",
              "number": 2,
              "zh": "潔米：用現金。這是一千元。",
              "en": "Jamie: In cash. Here is one thousand dollars.",
              "zhkw": [
                "是一千元",
                "用現金"
              ],
              "enkw": [
                "thousand",
                "dollars"
              ]
            },
            {
              "id": "C",
              "number": 3,
              "zh": "店員：這是找給您的錢。祝您有個美好的一天。",
              "en": "Clerk: OK. Here’s your change. Have a nice day.",
              "zhkw": [
                "好的一天",
                "給您的錢"
              ],
              "enkw": [
                "Here’s",
                "change"
              ]
            },
            {
              "id": "D",
              "number": 4,
              "zh": "寇弟：妳會和妳的爺爺一起過聖誕節嗎？",
              "en": "Cody: Are you going to spend Christmas with your grandpa?",
              "zhkw": [
                "聖誕節嗎",
                "寇弟"
              ],
              "enkw": [
                "Christmas",
                "grandpa"
              ]
            },
            {
              "id": "E",
              "number": 5,
              "zh": "潔米：會啊。我和家人明天會搭火車去他家。",
              "en": "Jamie: Yes. My family and I will go to his place by train tomorrow.",
              "zhkw": [
                "車去他家",
                "潔米"
              ],
              "enkw": [
                "tomorrow",
                "family"
              ]
            },
            {
              "id": "F",
              "number": 6,
              "zh": "寇弟：那樣要花多久時間呀？",
              "en": "Cody: How long does it take?",
              "zhkw": [
                "久時間呀",
                "寇弟"
              ],
              "enkw": [
                "Cody",
                "long"
              ]
            },
            {
              "id": "G",
              "number": 7,
              "zh": "潔米：大概要花兩個小時。他現在住在臺中。",
              "en": "Jamie: It takes about two hours. He lives in Taichung now.",
              "zhkw": [
                "兩個小時",
                "住在臺中"
              ],
              "enkw": [
                "Taichung",
                "Jamie"
              ]
            },
            {
              "id": "H",
              "number": 8,
              "zh": "寇弟：我明白了。",
              "en": "Cody: I see.",
              "zhkw": [
                "我明白了",
                "寇弟"
              ],
              "enkw": [
                "Cody"
              ]
            }
          ],
          "order": [
            6,
            7,
            5,
            2,
            4,
            0,
            3,
            1
          ]
        },
        {
          "grade": "8",
          "lesson": "L6",
          "part": "閱讀",
          "group": 1,
          "items": [
            {
              "id": "A",
              "number": 1,
              "zh": "由於快時尚，人們現在可以用低廉的價格買到設計好看的新衣服。",
              "en": "Thanks to fast fashion, people now can buy new clothes with nice designs at low prices.",
              "zhkw": [
                "的新衣服",
                "於快時尚"
              ],
              "enkw": [
                "fashion",
                "clothes"
              ]
            },
            {
              "id": "B",
              "number": 2,
              "zh": "然而，這些漂亮衣服背後的真相可能真的很醜陋。",
              "en": "However, the truth behind those beautiful clothes can be really ugly.",
              "zhkw": [
                "的很醜陋",
                "然而"
              ],
              "enkw": [
                "beautiful",
                "However"
              ]
            },
            {
              "id": "C",
              "number": 3,
              "zh": "為了保持價格低廉，但又仍能賺錢，快時尚公司會不擇手段。",
              "en": "To keep the prices low but still make money, fast fashion companies will do anything.",
              "zhkw": [
                "不擇手段",
                "價格低廉"
              ],
              "enkw": [
                "companies",
                "anything"
              ]
            },
            {
              "id": "D",
              "number": 4,
              "zh": "他們為了雇用廉價勞工將工廠遷移到像是印度之類的國家。那些勞工長時間工作，工資卻很低。",
              "en": "They move the factories to countries like India for cheap workers. Those workers work long hours for very low pay.",
              "zhkw": [
                "類的國家",
                "時間工作"
              ],
              "enkw": [
                "factories",
                "countries"
              ]
            },
            {
              "id": "E",
              "number": 5,
              "zh": "在某些國家，勞工一個小時的工作只能賺大約新臺幣兩塊半。",
              "en": "In some countries, a worker makes only about 2.5 NT dollars for an hour’s work.",
              "zhkw": [
                "幣兩塊半",
                "某些國家"
              ],
              "enkw": [
                "countries",
                "dollars"
              ]
            },
            {
              "id": "F",
              "number": 6,
              "zh": "而且，大多數公司使用聚酯纖維製作衣服，因為它很便宜。",
              "en": "What’s more, most companies use polyester to make clothes because it is cheap.",
              "zhkw": [
                "製作衣服",
                "它很便宜"
              ],
              "enkw": [
                "companies",
                "polyester"
              ]
            },
            {
              "id": "G",
              "number": 7,
              "zh": "然而，當你洗這些衣服時，聚酯纖維會逐漸脫落。最後，它進入大海並傷害環境。",
              "en": "However, the polyester comes off the clothes little by little when you wash them. In the end, it goes into the sea and hurts the environment.",
              "zhkw": [
                "傷害環境",
                "逐漸脫落"
              ],
              "enkw": [
                "environment",
                "polyester"
              ]
            },
            {
              "id": "H",
              "number": 8,
              "zh": "藉由使用廉價工人和塑膠，在短時間內製造廉價衣服不用花這些快時尚公司很多錢。",
              "en": "By using cheap workers and polyester, it doesn’t cost much for those fast fashion companies to make cheap clothes in a short time.",
              "zhkw": [
                "司很多錢",
                "人和塑膠"
              ],
              "enkw": [
                "polyester",
                "companies"
              ]
            },
            {
              "id": "I",
              "number": 9,
              "zh": "然而，這對工人和環境都不好。",
              "en": "However, this is bad for the workers and the environment.",
              "zhkw": [
                "境都不好",
                "然而"
              ],
              "enkw": [
                "environment",
                "However"
              ]
            },
            {
              "id": "J",
              "number": 10,
              "zh": "所以，當你想從一家快時尚公司購買衣服時，停下來想一想──我真的需要它們嗎？",
              "en": "So, when you want to buy clothes from a fast fashion company, stop for a second and think—do I really need them?",
              "zhkw": [
                "買衣服時",
                "要它們嗎"
              ],
              "enkw": [
                "clothes",
                "fashion"
              ]
            }
          ],
          "order": [
            7,
            1,
            8,
            2,
            6,
            5,
            3,
            9,
            4,
            0
          ]
        }
      ]
    }
  },
  "9": {
    "L1": {
      "grade": "9",
      "lesson": "L1",
      "groups": [
        {
          "grade": "9",
          "lesson": "L1",
          "part": "Reading",
          "group": 1,
          "items": [
            {
              "id": "A",
              "number": 1,
              "zh": "班級：902　名字：Emily　科目：歷史",
              "en": "Class: 902  Name: Emily  Subject: History",
              "zhkw": [
                "Emily",
                "班級"
              ],
              "enkw": [
                "Subject",
                "History"
              ]
            },
            {
              "id": "B",
              "number": 2,
              "zh": "主題：薯條真地源自法國嗎？",
              "en": "Topic: Are French Fries Truly French?",
              "zhkw": [
                "自法國嗎",
                "主題"
              ],
              "enkw": [
                "French",
                "Topic"
              ]
            },
            {
              "id": "C",
              "number": 3,
              "zh": "你為什麼選這個主題？",
              "en": "Why did you choose the topic?",
              "zhkw": [
                "這個主題"
              ],
              "enkw": [
                "choose",
                "topic"
              ]
            },
            {
              "id": "D",
              "number": 4,
              "zh": "因為我喜歡薯條。",
              "en": "Because I love French fries.",
              "zhkw": [
                "喜歡薯條"
              ],
              "enkw": [
                "French",
                "fries"
              ]
            },
            {
              "id": "E",
              "number": 5,
              "zh": "A 部分：寫下這個食物的歷史。",
              "en": "Part A: Write down the history of the food.",
              "zhkw": [
                "物的歷史",
                "部分"
              ],
              "enkw": [
                "history",
                "Write"
              ]
            },
            {
              "id": "F",
              "number": 6,
              "zh": "法國人（French）給了這世界第一個吹風機、造紙機和比基尼（bikini）。",
              "en": "The French gave the world the first hairdryer, paper machine, and bikini.",
              "zhkw": [
                "個吹風機",
                "和比基尼"
              ],
              "enkw": [
                "hairdryer",
                "machine"
              ]
            },
            {
              "id": "G",
              "number": 7,
              "zh": "然而，他們並沒有給這世界薯條。",
              "en": "However, they didn’t give the world French fries.",
              "zhkw": [
                "世界薯條",
                "然而"
              ],
              "enkw": [
                "However",
                "didn’t"
              ]
            },
            {
              "id": "H",
              "number": 8,
              "zh": "很多人也許都還沒有聽過這個事實。",
              "en": "Many people probably haven’t heard about this fact yet.",
              "zhkw": [
                "這個事實"
              ],
              "enkw": [
                "probably",
                "haven’t"
              ]
            }
          ],
          "order": [
            1,
            6,
            7,
            4,
            2,
            0,
            3,
            5
          ]
        },
        {
          "grade": "9",
          "lesson": "L1",
          "part": "Reading",
          "group": 2,
          "items": [
            {
              "id": "A",
              "number": 1,
              "zh": "最早的薯條是在十七世紀晚期，來自比利時（Belgium）的默茲河（Meuse River）沿岸。",
              "en": "The earliest French fries were from Belgium along the Meuse River in the late 17th century.",
              "zhkw": [
                "世紀晚期",
                "Belgium"
              ],
              "enkw": [
                "earliest",
                "Belgium"
              ]
            },
            {
              "id": "B",
              "number": 2,
              "zh": "當時在該區域的人們捕撈魚並炸魚是很普遍的，但當冬天河水結冰時，捕魚變得困難。",
              "en": "It was common for people in the area to catch and fry fish, but that was difficult when the river froze in the winter.",
              "zhkw": [
                "很普遍的",
                "水結冰時"
              ],
              "enkw": [
                "difficult",
                "common"
              ]
            },
            {
              "id": "C",
              "number": 3,
              "zh": "當他們無法捕魚為食，他們就將馬鈴薯切成細長的枝條狀並油炸。",
              "en": "When they could not catch fish for food, they would cut potatoes into long thin sticks and fry them.",
              "zhkw": [
                "狀並油炸",
                "捕魚為食"
              ],
              "enkw": [
                "potatoes",
                "sticks"
              ]
            },
            {
              "id": "D",
              "number": 4,
              "zh": "第一次世界大戰（World War I）期間，在比利時的美國士兵第一次嘗到這美味的食物。",
              "en": "During World War I, American soldiers in Belgium tasted this delicious food for the first time.",
              "zhkw": [
                "味的食物",
                "世界大戰"
              ],
              "enkw": [
                "delicious",
                "American"
              ]
            },
            {
              "id": "E",
              "number": 5,
              "zh": "他們稱這些炸馬鈴薯為「薯條」，因為法語是當地的主要語言。",
              "en": "They called these fried potatoes “French fries” because French was the main language there.",
              "zhkw": [
                "主要語言",
                "馬鈴薯為"
              ],
              "enkw": [
                "potatoes",
                "language"
              ]
            },
            {
              "id": "F",
              "number": 6,
              "zh": "他們也將這個食物帶回美國。",
              "en": "They also took the food back to the USA.",
              "zhkw": [
                "帶回美國"
              ],
              "enkw": [
                "also",
                "took"
              ]
            },
            {
              "id": "G",
              "number": 7,
              "zh": "從那時起，薯條就風靡了世界各地。",
              "en": "Since then, French fries have become popular all over the world.",
              "zhkw": [
                "世界各地",
                "從那時起"
              ],
              "enkw": [
                "popular",
                "French"
              ]
            },
            {
              "id": "H",
              "number": 8,
              "zh": "B 部分：你有找到其他關於這個食物的事實嗎？如果有，把它們寫下來。",
              "en": "Part B: Did you find any other facts about this food? If yes, write them down.",
              "zhkw": [
                "的事實嗎",
                "們寫下來"
              ],
              "enkw": [
                "other",
                "facts"
              ]
            }
          ],
          "order": [
            5,
            3,
            0,
            1,
            4,
            6,
            7,
            2
          ]
        },
        {
          "grade": "9",
          "lesson": "L1",
          "part": "Reading",
          "group": 3,
          "items": [
            {
              "id": "A",
              "number": 1,
              "zh": "比利時（Belgium）有一間法式炸薯條博物館。",
              "en": "There is a French fry museum in Belgium.",
              "zhkw": [
                "條博物館",
                "Belgium"
              ],
              "enkw": [
                "Belgium",
                "French"
              ]
            },
            {
              "id": "B",
              "number": 2,
              "zh": "美國人在七月的第二個禮拜五慶祝全國薯條日。",
              "en": "Americans celebrate National French Fry Day on the second Friday of July.",
              "zhkw": [
                "國薯條日"
              ],
              "enkw": [
                "Americans",
                "celebrate"
              ]
            },
            {
              "id": "C",
              "number": 3,
              "zh": "英國（the UK）的薯條通常比美國的粗一點。",
              "en": "Fries in the UK are usually thicker than those in the USA.",
              "zhkw": [
                "的粗一點",
                "英國"
              ],
              "enkw": [
                "usually",
                "thicker"
              ]
            },
            {
              "id": "D",
              "number": 4,
              "zh": "太棒了！你做得很好！",
              "en": "Excellent! You’ve done a good job!",
              "zhkw": [
                "做得很好",
                "太棒了"
              ],
              "enkw": [
                "Excellent",
                "You’ve"
              ]
            },
            {
              "id": "E",
              "number": 5,
              "zh": "這些炸馬鈴薯有著有趣的歷史。",
              "en": "These fried potatoes have an interesting history.",
              "zhkw": [
                "趣的歷史"
              ],
              "enkw": [
                "interesting",
                "potatoes"
              ]
            },
            {
              "id": "F",
              "number": 6,
              "zh": "順道一提，你吃過幾種不同種類的薯條呢？",
              "en": "By the way, how many different types of French fries have you tried before?",
              "zhkw": [
                "的薯條呢",
                "順道一提"
              ],
              "enkw": [
                "different",
                "French"
              ]
            },
            {
              "id": "G",
              "number": 7,
              "zh": "Davis 先生",
              "en": "Mr. Davis",
              "zhkw": [
                "Davis",
                "先生"
              ],
              "enkw": [
                "Davis"
              ]
            }
          ],
          "order": [
            1,
            4,
            6,
            0,
            3,
            5,
            2
          ]
        },
        {
          "grade": "9",
          "lesson": "L1",
          "part": "Dialogue",
          "group": 4,
          "items": [
            {
              "id": "A",
              "number": 1,
              "zh": "（在餐廳裡）",
              "en": "(In a restaurant)",
              "zhkw": [
                "在餐廳裡"
              ],
              "enkw": [
                "restaurant"
              ]
            },
            {
              "id": "B",
              "number": 2,
              "zh": "Carla：那麼，你以前曾經來過這間餐廳嗎？這是我最喜愛的餐廳之一。",
              "en": "So, have you been to this restaurant before? It’s one of my favorites.",
              "zhkw": [
                "間餐廳嗎",
                "餐廳之一"
              ],
              "enkw": [
                "restaurant",
                "favorites"
              ]
            },
            {
              "id": "C",
              "number": 3,
              "zh": "Nick：是的，我以前曾經在這裡用餐。食物很棒。沒有人可以製作出更好的披薩。",
              "en": "Yes, I’ve eaten here before. The food is great. Nobody makes better pizzas.",
              "zhkw": [
                "好的披薩",
                "這裡用餐"
              ],
              "enkw": [
                "Nobody",
                "better"
              ]
            },
            {
              "id": "D",
              "number": 4,
              "zh": "Carla：（向服務生揮手）沒錯。它多年來一直是這座城市最熱門的披薩店之一。",
              "en": "(waving to the waiter) That’s true. It has been one of the most popular pizza places in this city for years.",
              "zhkw": [
                "薩店之一",
                "務生揮手"
              ],
              "enkw": [
                "popular",
                "waving"
              ]
            },
            {
              "id": "E",
              "number": 5,
              "zh": "服務生：嗨，您已經決定好要點什麼了嗎？",
              "en": "Hi, have you decided on your order yet?",
              "zhkw": [
                "什麼了嗎",
                "服務生"
              ],
              "enkw": [
                "decided",
                "order"
              ]
            },
            {
              "id": "F",
              "number": 6,
              "zh": "Carla：是的，我想要一個九吋的起司王披薩。",
              "en": "Yes, I’d like to have a 9-inch Cheese King pizza.",
              "zhkw": [
                "司王披薩",
                "Carla"
              ],
              "enkw": [
                "Cheese",
                "pizza"
              ]
            },
            {
              "id": "G",
              "number": 7,
              "zh": "服務生：當然。馬上來！",
              "en": "Of course. Coming right up!",
              "zhkw": [
                "服務生",
                "馬上來"
              ],
              "enkw": [
                "course",
                "Coming"
              ]
            },
            {
              "id": "H",
              "number": 8,
              "zh": "（十五分鐘後）",
              "en": "(15 minutes later)",
              "zhkw": [
                "五分鐘後"
              ],
              "enkw": [
                "minutes",
                "later"
              ]
            }
          ],
          "order": [
            4,
            2,
            1,
            0,
            7,
            3,
            6,
            5
          ]
        },
        {
          "grade": "9",
          "lesson": "L1",
          "part": "Dialogue",
          "group": 5,
          "items": [
            {
              "id": "A",
              "number": 1,
              "zh": "服務生：這是您點的餐。請享用您的餐點！",
              "en": "Here is your order. Enjoy your meal!",
              "zhkw": [
                "您的餐點",
                "您點的餐"
              ],
              "enkw": [
                "order",
                "Enjoy"
              ]
            },
            {
              "id": "B",
              "number": 2,
              "zh": "Carla：不好意思，我們點了一個九吋的起司王披薩，但是你剛剛拿給我們兩個五吋的披薩。",
              "en": "Excuse me, we ordered a 9-inch Cheese King pizza, but you’ve just brought us two 5-inch pizzas.",
              "zhkw": [
                "吋的披薩",
                "司王披薩"
              ],
              "enkw": [
                "ordered",
                "brought"
              ]
            },
            {
              "id": "C",
              "number": 3,
              "zh": "服務生：噢，我對此感到很抱歉！讓我跟廚師確認。我馬上回來。",
              "en": "Oh, I’m so sorry about that! Let me check with the cook. I’ll be right back.",
              "zhkw": [
                "到很抱歉",
                "廚師確認"
              ],
              "enkw": [
                "sorry",
                "check"
              ]
            },
            {
              "id": "D",
              "number": 4,
              "zh": "（五分鐘後）",
              "en": "(5 minutes later)",
              "zhkw": [
                "五分鐘後"
              ],
              "enkw": [
                "minutes",
                "later"
              ]
            },
            {
              "id": "E",
              "number": 5,
              "zh": "服務生：我們的新廚師今天已經弄錯了一、兩個訂單。關於此事很抱歉。不過你們不需要付更多錢買十吋披薩。",
              "en": "Our new cook has gotten one or two orders wrong today. Sorry about that. But you don’t need to pay more for ten inches.",
              "zhkw": [
                "十吋披薩",
                "弄錯了一"
              ],
              "enkw": [
                "gotten",
                "orders"
              ]
            },
            {
              "id": "F",
              "number": 6,
              "zh": "Carla：十吋？",
              "en": "Ten inches?",
              "zhkw": [
                "Carla",
                "十吋"
              ],
              "enkw": [
                "inches"
              ]
            },
            {
              "id": "G",
              "number": 7,
              "zh": "服務生：對，我們已經決定免費多給您一吋披薩──五加五等於十。",
              "en": "Yes, we have decided to give you one more inch of pizza for free—five and five makes ten.",
              "zhkw": [
                "一吋披薩",
                "五等於十"
              ],
              "enkw": [
                "decided",
                "pizza"
              ]
            },
            {
              "id": "H",
              "number": 8,
              "zh": "Carla：噢，不。你剛剛犯了另一個錯──這次與披薩的數學有關！即便你給我們三個五吋的披薩，仍舊是不夠的！",
              "en": "Oh, no. You just made another mistake—this time with your pizza math! Even if you give us three 5-inch pizzas, it will still not be enough!",
              "zhkw": [
                "吋的披薩",
                "數學有關"
              ],
              "enkw": [
                "another",
                "mistake"
              ]
            }
          ],
          "order": [
            4,
            5,
            3,
            0,
            7,
            1,
            2,
            6
          ]
        }
      ]
    },
    "L2": {
      "grade": "9",
      "lesson": "L2",
      "groups": [
        {
          "grade": "9",
          "lesson": "L2",
          "part": "Reading",
          "group": 1,
          "items": [
            {
              "id": "A",
              "number": 1,
              "zh": "食物外送應用程式使生活更輕鬆",
              "en": "Food Delivery Apps Make Life Easier",
              "zhkw": [
                "活更輕鬆"
              ],
              "enkw": [
                "Delivery",
                "Easier"
              ]
            },
            {
              "id": "B",
              "number": 2,
              "zh": "有那麼多食物外送應用程式，誰還會想每天下廚呢？",
              "en": "With so many food delivery apps out there, who wants to cook every day?",
              "zhkw": [
                "應用程式",
                "天下廚呢"
              ],
              "enkw": [
                "delivery",
                "wants"
              ]
            },
            {
              "id": "C",
              "number": 3,
              "zh": "在美國，每五名年輕人就有三人使用食物外送應用程式。",
              "en": "In the USA, three out of every five young people use food delivery apps.",
              "zhkw": [
                "應用程式",
                "在美國"
              ],
              "enkw": [
                "delivery",
                "people"
              ]
            },
            {
              "id": "D",
              "number": 4,
              "zh": "在臺灣，那數字在各年齡層都還在成長。",
              "en": "In Taiwan, that number is growing among people of all ages.",
              "zhkw": [
                "還在成長",
                "在臺灣"
              ],
              "enkw": [
                "growing",
                "Taiwan"
              ]
            },
            {
              "id": "E",
              "number": 5,
              "zh": "由下頁的圖表，我們可以看到人們因為一些原因而對這些應用程式感興趣。",
              "en": "From the chart on the next page, we can see that people are interested in these apps for several reasons.",
              "zhkw": [
                "式感興趣",
                "頁的圖表"
              ],
              "enkw": [
                "interested",
                "several"
              ]
            },
            {
              "id": "F",
              "number": 6,
              "zh": "首先，使用食物外送應用程式節省時間，因為人們不必花費時間外出前往餐廳。",
              "en": "First of all, using food delivery apps saves time because people do not have to spend time going out to restaurants.",
              "zhkw": [
                "前往餐廳",
                "節省時間"
              ],
              "enkw": [
                "restaurants",
                "delivery"
              ]
            },
            {
              "id": "G",
              "number": 7,
              "zh": "他們可以只要舒服地坐在家中或辦公室，等待他們美味的餐點送達。",
              "en": "They can just sit comfortably at their homes or offices and wait for their delicious meals to arrive.",
              "zhkw": [
                "或辦公室",
                "餐點送達"
              ],
              "enkw": [
                "comfortably",
                "delicious"
              ]
            },
            {
              "id": "H",
              "number": 8,
              "zh": "第二點，許多人認為食物外送應用程式既方便又有用。",
              "en": "Second, many people think that food delivery apps are convenient and helpful.",
              "zhkw": [
                "便又有用",
                "第二點"
              ],
              "enkw": [
                "convenient",
                "delivery"
              ]
            },
            {
              "id": "I",
              "number": 9,
              "zh": "有了它們，人們不需要下廚。",
              "en": "With them, people do not need to cook.",
              "zhkw": [
                "需要下廚",
                "有了它們"
              ],
              "enkw": [
                "people",
                "them"
              ]
            }
          ],
          "order": [
            5,
            2,
            6,
            8,
            7,
            0,
            3,
            4,
            1
          ]
        },
        {
          "grade": "9",
          "lesson": "L2",
          "part": "Reading",
          "group": 2,
          "items": [
            {
              "id": "A",
              "number": 1,
              "zh": "當人們生病或疲勞時，那真地可以幫上忙。",
              "en": "That can really help when people are sick or tired.",
              "zhkw": [
                "或疲勞時",
                "以幫上忙"
              ],
              "enkw": [
                "really",
                "people"
              ]
            },
            {
              "id": "B",
              "number": 2,
              "zh": "第三點，外送應用程式通常提供折扣。它們可以幫助人們省錢。",
              "en": "Third, delivery apps usually offer discounts. They can help people save money.",
              "zhkw": [
                "提供折扣",
                "人們省錢"
              ],
              "enkw": [
                "discounts",
                "delivery"
              ]
            },
            {
              "id": "C",
              "number": 3,
              "zh": "第四點，食物外送應用程式提供用戶更多選擇。它們讓人們選擇他們最喜歡的食物種類及餐廳。",
              "en": "Fourth, food delivery apps offer users more choices. They let people choose their favorite types of food and restaurants.",
              "zhkw": [
                "類及餐廳",
                "更多選擇"
              ],
              "enkw": [
                "restaurants",
                "delivery"
              ]
            },
            {
              "id": "D",
              "number": 4,
              "zh": "此外，當天氣不好時，一些用戶會使用食物外送應用程式。",
              "en": "What’s more, some users use food delivery apps when the weather is bad.",
              "zhkw": [
                "應用程式",
                "氣不好時"
              ],
              "enkw": [
                "delivery",
                "weather"
              ]
            },
            {
              "id": "E",
              "number": 5,
              "zh": "有了它們，人們不用出門即可享用自己最喜歡的食物。",
              "en": "With them, people can enjoy their favorite food without going out.",
              "zhkw": [
                "歡的食物",
                "有了它們"
              ],
              "enkw": [
                "favorite",
                "without"
              ]
            },
            {
              "id": "F",
              "number": 6,
              "zh": "簡而言之，食物外送應用程式不僅變得更受歡迎，也讓我們的生活更輕鬆。",
              "en": "In a word, food delivery apps have not only become more popular but also made our lives easier.",
              "zhkw": [
                "更受歡迎",
                "活更輕鬆"
              ],
              "enkw": [
                "delivery",
                "popular"
              ]
            },
            {
              "id": "G",
              "number": 7,
              "zh": "使用食物外送應用程式的原因",
              "en": "Reasons for Using Food Delivery Apps",
              "zhkw": [
                "式的原因"
              ],
              "enkw": [
                "Delivery",
                "Reasons"
              ]
            },
            {
              "id": "H",
              "number": 8,
              "zh": "節省時間。方便又有用。",
              "en": "It saves time. It is convenient and helpful.",
              "zhkw": [
                "便又有用",
                "節省時間"
              ],
              "enkw": [
                "convenient",
                "helpful"
              ]
            },
            {
              "id": "I",
              "number": 9,
              "zh": "提供折扣。提供更多選擇。天氣不好。",
              "en": "It offers discounts. It offers more choices. The weather is bad.",
              "zhkw": [
                "更多選擇",
                "提供折扣"
              ],
              "enkw": [
                "discounts",
                "choices"
              ]
            }
          ],
          "order": [
            8,
            7,
            2,
            1,
            5,
            6,
            4,
            3,
            0
          ]
        },
        {
          "grade": "9",
          "lesson": "L2",
          "part": "Dialogue",
          "group": 3,
          "items": [
            {
              "id": "A",
              "number": 1,
              "zh": "（Nick 和 Bella 下雨天待在家裡。）",
              "en": "(Nick and Bella are at home on a rainy day.)",
              "zhkw": [
                "待在家裡",
                "Bella"
              ],
              "enkw": [
                "Bella",
                "rainy"
              ]
            },
            {
              "id": "B",
              "number": 2,
              "zh": "Nick：我不喜歡下雨天。我感到無聊。",
              "en": "I don’t like rainy days. I’m bored.",
              "zhkw": [
                "歡下雨天",
                "感到無聊"
              ],
              "enkw": [
                "don’t",
                "rainy"
              ]
            },
            {
              "id": "C",
              "number": 3,
              "zh": "Bella：對啊，我厭倦坐在沙發上無所事事。",
              "en": "Yeah, I’m tired of sitting here on the couch and doing nothing.",
              "zhkw": [
                "無所事事",
                "Bella"
              ],
              "enkw": [
                "sitting",
                "nothing"
              ]
            },
            {
              "id": "D",
              "number": 4,
              "zh": "Bella：而且，我好餓，但我不認為冰箱裡有任何食物。",
              "en": "Also, I’m hungry, but I don’t think there’s any food in the fridge.",
              "zhkw": [
                "任何食物",
                "Bella"
              ],
              "enkw": [
                "there’s",
                "hungry"
              ]
            },
            {
              "id": "E",
              "number": 5,
              "zh": "Nick：等等。昨天，一個朋友告訴我一款新的食物外送應用程式，Yummy Sloth。你想要試看看嗎？",
              "en": "Wait. Yesterday, a friend told me about a new food delivery app, Yummy Sloth. Do you want to try it?",
              "zhkw": [
                "應用程式",
                "試看看嗎"
              ],
              "enkw": [
                "Yesterday",
                "delivery"
              ]
            },
            {
              "id": "F",
              "number": 6,
              "zh": "Bella：當然，我一直對新事物很感興趣。我不介意給它一次機會。",
              "en": "Sure, I’ve always had an interest in new things. I don’t mind giving it a chance.",
              "zhkw": [
                "很感興趣",
                "一次機會"
              ],
              "enkw": [
                "interest",
                "always"
              ]
            },
            {
              "id": "G",
              "number": 7,
              "zh": "（Nick 正把該應用程式下載到他的智慧型手機。）",
              "en": "(Nick is downloading the app onto his smartphone.)",
              "zhkw": [
                "慧型手機",
                "Nick"
              ],
              "enkw": [
                "downloading",
                "smartphone"
              ]
            },
            {
              "id": "H",
              "number": 8,
              "zh": "Nick：你猜怎麼樣？新用戶五折耶！",
              "en": "Guess what? New users get a 50% discount!",
              "zhkw": [
                "戶五折耶",
                "猜怎麼樣"
              ],
              "enkw": [
                "discount",
                "Guess"
              ]
            }
          ],
          "order": [
            6,
            2,
            4,
            3,
            7,
            0,
            5,
            1
          ]
        },
        {
          "grade": "9",
          "lesson": "L2",
          "part": "Dialogue",
          "group": 4,
          "items": [
            {
              "id": "A",
              "number": 1,
              "zh": "Bella：真是個驚喜！我們還在等什麼啊？",
              "en": "What a surprise! What are we waiting for?",
              "zhkw": [
                "等什麼啊",
                "Bella"
              ],
              "enkw": [
                "surprise",
                "waiting"
              ]
            },
            {
              "id": "B",
              "number": 2,
              "zh": "Nick：嘿，你會愛上這個的。你最愛的速食餐廳在清單上。",
              "en": "Hey, you’re going to love this. Your favorite fast food restaurant is on the list.",
              "zhkw": [
                "在清單上",
                "上這個的"
              ],
              "enkw": [
                "restaurant",
                "favorite"
              ]
            },
            {
              "id": "C",
              "number": 3,
              "zh": "Bella：太棒了！我想要一個雞肉堡。",
              "en": "Excellent! I’d like a chicken burger.",
              "zhkw": [
                "個雞肉堡",
                "Bella"
              ],
              "enkw": [
                "Excellent",
                "chicken"
              ]
            },
            {
              "id": "D",
              "number": 4,
              "zh": "Nick：知道了。",
              "en": "Got it.",
              "zhkw": [
                "Nick",
                "知道了"
              ],
              "enkw": [
                "Got"
              ]
            },
            {
              "id": "E",
              "number": 5,
              "zh": "Bella：我們的餐點多久會送到這裡啊？",
              "en": "How long will it take for our meals to get here?",
              "zhkw": [
                "到這裡啊",
                "Bella"
              ],
              "enkw": [
                "meals",
                "long"
              ]
            },
            {
              "id": "F",
              "number": 6,
              "zh": "Nick：應用程式上顯示會花上大約三十分鐘。",
              "en": "The app shows it’ll take about 30 minutes.",
              "zhkw": [
                "三十分鐘",
                "Nick"
              ],
              "enkw": [
                "minutes",
                "shows"
              ]
            },
            {
              "id": "G",
              "number": 7,
              "zh": "Bella：沒關係。至少我們不必在雨中出門。",
              "en": "That’s fine. At least we don’t have to go out in the rain.",
              "zhkw": [
                "雨中出門",
                "Bella"
              ],
              "enkw": [
                "That’s",
                "least"
              ]
            }
          ],
          "order": [
            2,
            1,
            5,
            0,
            6,
            4,
            3
          ]
        },
        {
          "grade": "9",
          "lesson": "L2",
          "part": "Dialogue",
          "group": 5,
          "items": [
            {
              "id": "A",
              "number": 1,
              "zh": "Nick：我同意。",
              "en": "I agree.",
              "zhkw": [
                "Nick",
                "我同意"
              ],
              "enkw": [
                "agree"
              ]
            },
            {
              "id": "B",
              "number": 2,
              "zh": "（三十分鐘後）",
              "en": "(30 minutes later)",
              "zhkw": [
                "十分鐘後"
              ],
              "enkw": [
                "minutes",
                "later"
              ]
            },
            {
              "id": "C",
              "number": 3,
              "zh": "Bella：我們的餐點在哪？我很餓，如果我沒有很快吃到東西的話，我會非常生氣。",
              "en": "Where are our meals? I’m as hungry as a horse, and if I don’t eat soon, I’ll be very angry.",
              "zhkw": [
                "東西的話",
                "餐點在哪"
              ],
              "enkw": [
                "hungry",
                "meals"
              ]
            },
            {
              "id": "D",
              "number": 4,
              "zh": "Nick：讓我確認一下這個應用程式。它有地圖，會給我們看到外送員的位置。噢，不！",
              "en": "Let me check the app. It has a map and will show us the location of the delivery guy. Oh, no!",
              "zhkw": [
                "應用程式",
                "員的位置"
              ],
              "enkw": [
                "location",
                "delivery"
              ]
            },
            {
              "id": "E",
              "number": 5,
              "zh": "Bella：怎麼了？",
              "en": "What’s wrong?",
              "zhkw": [
                "Bella",
                "怎麼了"
              ],
              "enkw": [
                "What’s",
                "wrong"
              ]
            },
            {
              "id": "F",
              "number": 6,
              "zh": "Nick：我沒按下「送出訂單」的按鈕。",
              "en": "I didn’t tap on the “Place Order” button.",
              "zhkw": [
                "Nick",
                "我沒按下"
              ],
              "enkw": [
                "didn’t",
                "button"
              ]
            },
            {
              "id": "G",
              "number": 7,
              "zh": "Bella：我不敢相信你沒按。現在我們得再等另一個三十分鐘了。",
              "en": "I can’t believe you didn’t do that. Now we have to wait another 30 minutes.",
              "zhkw": [
                "十分鐘了",
                "信你沒按"
              ],
              "enkw": [
                "believe",
                "another"
              ]
            }
          ],
          "order": [
            0,
            1,
            4,
            6,
            3,
            5,
            2
          ]
        }
      ]
    },
    "L3": {
      "grade": "9",
      "lesson": "L3",
      "groups": [
        {
          "grade": "9",
          "lesson": "L3",
          "part": "Reading",
          "group": 1,
          "items": [
            {
              "id": "A",
              "number": 1,
              "zh": "關於工作的性別刻板印象",
              "en": "Gender Stereotypes About Jobs",
              "zhkw": [
                "刻板印象"
              ],
              "enkw": [
                "Stereotypes",
                "Gender"
              ]
            },
            {
              "id": "B",
              "number": 2,
              "zh": "想像一下：一位受重傷的女子被送往醫院。一位醫生和一位護理師正在治療她。",
              "en": "Picture this: a badly hurt woman is taken to a hospital. A doctor and a nurse are treating her.",
              "zhkw": [
                "在治療她",
                "送往醫院"
              ],
              "enkw": [
                "hospital",
                "treating"
              ]
            },
            {
              "id": "C",
              "number": 3,
              "zh": "你正想到醫生是位男性，不是嗎？",
              "en": "You are thinking of the doctor as a man, aren’t you?",
              "zhkw": [
                "是位男性",
                "不是嗎"
              ],
              "enkw": [
                "thinking",
                "doctor"
              ]
            },
            {
              "id": "D",
              "number": 4,
              "zh": "如果是這樣，你可能有性別刻板印象。",
              "en": "If so, it’s possible that you might have a gender stereotype.",
              "zhkw": [
                "刻板印象",
                "果是這樣"
              ],
              "enkw": [
                "stereotype",
                "possible"
              ]
            },
            {
              "id": "E",
              "number": 5,
              "zh": "從我們小時候起，我們一直被教導「有給女人的工作，也有給男人的工作」。",
              "en": "Since we were little, we have been taught “There are jobs for women and jobs for men.”",
              "zhkw": [
                "人的工作",
                "小時候起"
              ],
              "enkw": [
                "little",
                "taught"
              ]
            },
            {
              "id": "F",
              "number": 6,
              "zh": "關於工作的性別刻板印象在童年時期已經形成。",
              "en": "Gender stereotypes about jobs are formed in childhood.",
              "zhkw": [
                "已經形成"
              ],
              "enkw": [
                "stereotypes",
                "childhood"
              ]
            },
            {
              "id": "G",
              "number": 7,
              "zh": "我們從父母、親戚或媒體得知這些刻板印象。",
              "en": "We learn these stereotypes from our parents, relatives, or the media.",
              "zhkw": [
                "刻板印象",
                "們從父母"
              ],
              "enkw": [
                "stereotypes",
                "relatives"
              ]
            },
            {
              "id": "H",
              "number": 8,
              "zh": "男人通常被期待從事公共服務的工作，例如醫生或警察。",
              "en": "Men are often expected to do public service jobs, such as doctors or policemen.",
              "zhkw": [
                "務的工作",
                "生或警察"
              ],
              "enkw": [
                "policemen",
                "expected"
              ]
            },
            {
              "id": "I",
              "number": 9,
              "zh": "另一方面，女人常被認為更適合照護和教導的工作，例如護理師或教師。",
              "en": "On the other hand, women are thought to be better at caring and teaching jobs, such as nurses or teachers.",
              "zhkw": [
                "導的工作",
                "師或教師"
              ],
              "enkw": [
                "teaching",
                "teachers"
              ]
            }
          ],
          "order": [
            1,
            7,
            3,
            0,
            4,
            8,
            2,
            5,
            6
          ]
        },
        {
          "grade": "9",
          "lesson": "L3",
          "part": "Reading",
          "group": 2,
          "items": [
            {
              "id": "A",
              "number": 1,
              "zh": "如你所見，關於工作的性別刻板印象到處都有。",
              "en": "As you can see, gender stereotypes about jobs are everywhere.",
              "zhkw": [
                "到處都有",
                "如你所見"
              ],
              "enkw": [
                "stereotypes",
                "everywhere"
              ]
            },
            {
              "id": "B",
              "number": 2,
              "zh": "一間玩具公司，Mattel，正致力於打破性別刻板印象。",
              "en": "One toy company, Mattel, is trying to break gender stereotypes.",
              "zhkw": [
                "刻板印象",
                "玩具公司"
              ],
              "enkw": [
                "stereotypes",
                "company"
              ]
            },
            {
              "id": "C",
              "number": 3,
              "zh": "多年來，它大力協助讓就業市場更平等。",
              "en": "It has helped a lot to make the job market more equal over the years.",
              "zhkw": [
                "場更平等",
                "多年來"
              ],
              "enkw": [
                "helped",
                "market"
              ]
            },
            {
              "id": "D",
              "number": 4,
              "zh": "其芭比娃娃被稱為世界上最勤奮的玩具之一。",
              "en": "Its Barbie doll is known as one of the most hard-working toys in the world.",
              "zhkw": [
                "玩具之一"
              ],
              "enkw": [
                "working",
                "Barbie"
              ]
            },
            {
              "id": "E",
              "number": 5,
              "zh": "自 1959 年以來，芭比已經有超過 250 個工作，例如醫生、律師、工程師、歌手，甚至美國總統！",
              "en": "Since 1959, Barbie has had over 250 jobs, such as a doctor, a lawyer, an engineer, a singer, and even the president of the United States!",
              "zhkw": [
                "經有超過",
                "美國總統"
              ],
              "enkw": [
                "president",
                "engineer"
              ]
            },
            {
              "id": "F",
              "number": 6,
              "zh": "芭比已經說明女性可以做各種類型的工作。她是一個好榜樣，不是嗎？",
              "en": "Barbie has shown that women can do all types of jobs. She is a great role model, isn’t she?",
              "zhkw": [
                "型的工作",
                "個好榜樣"
              ],
              "enkw": [
                "Barbie",
                "shown"
              ]
            },
            {
              "id": "G",
              "number": 7,
              "zh": "芭比向孩子們展示許多不同的工作選擇。",
              "en": "Barbie shows children many different job choices.",
              "zhkw": [
                "工作選擇"
              ],
              "enkw": [
                "different",
                "children"
              ]
            },
            {
              "id": "H",
              "number": 8,
              "zh": "孩子們從小就知道，性別不能決定他們未來的工作。",
              "en": "From an early age, kids learn that their gender does not decide their future jobs.",
              "zhkw": [
                "來的工作",
                "小就知道"
              ],
              "enkw": [
                "gender",
                "decide"
              ]
            }
          ],
          "order": [
            5,
            1,
            0,
            4,
            2,
            7,
            3,
            6
          ]
        },
        {
          "grade": "9",
          "lesson": "L3",
          "part": "Dialogue",
          "group": 3,
          "items": [
            {
              "id": "A",
              "number": 1,
              "zh": "（在書店裡）",
              "en": "(In a bookstore)",
              "zhkw": [
                "在書店裡"
              ],
              "enkw": [
                "bookstore"
              ]
            },
            {
              "id": "B",
              "number": 2,
              "zh": "Nick：嘿，Mindy，看看這些書的封面。為什麼《男孩的生活》封面充滿了飛機、電腦和機器人？",
              "en": "Hey, Mindy, look at these book covers. Why is the Boys’ Life one filled with airplanes, computers, and robots?",
              "zhkw": [
                "書的封面",
                "滿了飛機"
              ],
              "enkw": [
                "airplanes",
                "computers"
              ]
            },
            {
              "id": "C",
              "number": 3,
              "zh": "Mindy：對，而《女孩的生活》封面不應該只是關於時尚跟髮型，是嗎？",
              "en": "Right, and the Girls’ Life one shouldn’t be only about fashion and hair styles, should it?",
              "zhkw": [
                "尚跟髮型",
                "Mindy"
              ],
              "enkw": [
                "shouldn’t",
                "fashion"
              ]
            },
            {
              "id": "D",
              "number": 4,
              "zh": "Nick：是，我覺得這很愚蠢。說實話，我姊姊喜歡機器人、汽車和科學玩具。為什麼那些只能給男孩玩呢？",
              "en": "Yes, I think it’s stupid. To be honest, my sister loves robots, cars, and science toys. Why should those only be for boys?",
              "zhkw": [
                "男孩玩呢",
                "歡機器人"
              ],
              "enkw": [
                "science",
                "stupid"
              ]
            },
            {
              "id": "E",
              "number": 5,
              "zh": "Mindy：我知道！我小時候想要一本蜘蛛人漫畫書，但我表哥說：「那不是給女孩的。」這讓我很生氣！",
              "en": "I know! I wanted a Spider-Man comic book when I was little, but my cousin said, “That’s not for girls.” It made me so mad!",
              "zhkw": [
                "人漫畫書",
                "給女孩的"
              ],
              "enkw": [
                "wanted",
                "Spider"
              ]
            },
            {
              "id": "F",
              "number": 6,
              "zh": "Nick：我完全了解。我曾經希望買一套烹飪玩具組，但我沒買。我怕我會被其他人嘲笑。",
              "en": "I totally understand. I hoped to buy a toy cooking set once, but I didn’t. I was afraid I would be laughed at by others.",
              "zhkw": [
                "飪玩具組",
                "他人嘲笑"
              ],
              "enkw": [
                "understand",
                "totally"
              ]
            },
            {
              "id": "G",
              "number": 7,
              "zh": "Mindy：這不對。每個人都應該被允許選擇自己的玩具。玩具沒有性別，不是嗎？",
              "en": "That’s not right. Everyone should be allowed to choose their own toys. Toys don’t have a gender, do they?",
              "zhkw": [
                "己的玩具",
                "沒有性別"
              ],
              "enkw": [
                "Everyone",
                "allowed"
              ]
            },
            {
              "id": "H",
              "number": 8,
              "zh": "Nick：很好的觀點。如果芭比可以當醫生、律師或工程師，那麼所有孩子應該自由地玩各種玩具。",
              "en": "Good point. If Barbie can be a doctor, a lawyer, or an engineer, then all kids should be free to play with all kinds of toys.",
              "zhkw": [
                "各種玩具",
                "以當醫生"
              ],
              "enkw": [
                "engineer",
                "Barbie"
              ]
            },
            {
              "id": "I",
              "number": 9,
              "zh": "Mindy：是的，我聽說英國有些家長成立了一個團體 Let Toys Be Toys。它請商店停止使用像「給男孩的玩具」或「給女孩的玩具」的字。",
              "en": "Yeah, I heard some parents in the UK started a group Let Toys Be Toys. It asked stores to stop using words like “toys for boys” or “toys for girls.”",
              "zhkw": [
                "一個團體",
                "止使用像"
              ],
              "enkw": [
                "parents",
                "started"
              ]
            },
            {
              "id": "J",
              "number": 10,
              "zh": "Nick：真是個好主意！是時候打破這些玩具「規則」了，不是嗎？",
              "en": "That’s a good idea! It’s time to break these toy “rules,” isn’t it?",
              "zhkw": [
                "這些玩具",
                "個好主意"
              ],
              "enkw": [
                "That’s",
                "break"
              ]
            }
          ],
          "order": [
            9,
            3,
            5,
            0,
            4,
            6,
            1,
            8,
            7,
            2
          ]
        }
      ]
    },
    "L4": {
      "grade": "9",
      "lesson": "L4",
      "groups": [
        {
          "grade": "9",
          "lesson": "L4",
          "part": "Reading",
          "group": 1,
          "items": [
            {
              "id": "A",
              "number": 1,
              "zh": "新字是如何被創造",
              "en": "How New Words Are Created",
              "zhkw": [
                "何被創造"
              ],
              "enkw": [
                "Created",
                "Words"
              ]
            },
            {
              "id": "B",
              "number": 2,
              "zh": "每年約有五千四百個新的英文字被創造出來，而其中約一千字會進到字典中。",
              "en": "Around 5,400 new English words are created every year, and about 1,000 of them will enter dictionaries.",
              "zhkw": [
                "創造出來",
                "到字典中"
              ],
              "enkw": [
                "dictionaries",
                "English"
              ]
            },
            {
              "id": "C",
              "number": 3,
              "zh": "你知道新字是如何創造出來的嗎？",
              "en": "Do you know how new words are created?",
              "zhkw": [
                "出來的嗎"
              ],
              "enkw": [
                "created",
                "words"
              ]
            },
            {
              "id": "D",
              "number": 4,
              "zh": "以「早午餐（brunch）」這個字為例，「早餐」和「午餐」結合而形成這個字。",
              "en": "In the case of “brunch,” “breakfast” was combined with “lunch” to form the word.",
              "zhkw": [
                "成這個字",
                "個字為例"
              ],
              "enkw": [
                "breakfast",
                "combined"
              ]
            },
            {
              "id": "E",
              "number": 5,
              "zh": "此字第一次出現於十九世紀末，並顯示出一些人如何把兩餐併為一餐。",
              "en": "It first showed up in the late 19th century and showed how some people made one meal out of two.",
              "zhkw": [
                "併為一餐",
                "九世紀末"
              ],
              "enkw": [
                "century",
                "showed"
              ]
            },
            {
              "id": "F",
              "number": 6,
              "zh": "很快地，人們發現兩餐一起吃的樂趣。",
              "en": "Soon, people found the pleasure of eating two meals at the same time.",
              "zhkw": [
                "吃的樂趣",
                "很快地"
              ],
              "enkw": [
                "pleasure",
                "people"
              ]
            },
            {
              "id": "G",
              "number": 7,
              "zh": "到了一九三○年代，許多人開始週日只吃兩餐。",
              "en": "By the 1930s, many people started having just two meals on Sundays.",
              "zhkw": [
                "只吃兩餐",
                "了一九三"
              ],
              "enkw": [
                "started",
                "Sundays"
              ]
            },
            {
              "id": "H",
              "number": 8,
              "zh": "早午餐的歷史實際上是人們如何改變他們的飲食習慣的故事。",
              "en": "The history of brunch is actually the story of how people changed their eating habits.",
              "zhkw": [
                "慣的故事"
              ],
              "enkw": [
                "actually",
                "history"
              ]
            },
            {
              "id": "I",
              "number": 9,
              "zh": "有些字是為了新事物與新點子而被創造的。",
              "en": "Some words were created for new things and ideas.",
              "zhkw": [
                "被創造的"
              ],
              "enkw": [
                "created",
                "things"
              ]
            },
            {
              "id": "J",
              "number": 10,
              "zh": "舉例來說，在飛機發明之後，第一座「機場」於一九○九年建造而成。",
              "en": "For example, the first “airport” was built in 1909 after airplanes were created.",
              "zhkw": [
                "發明之後",
                "建造而成"
              ],
              "enkw": [
                "airplanes",
                "example"
              ]
            }
          ],
          "order": [
            0,
            6,
            1,
            3,
            5,
            2,
            4,
            9,
            7,
            8
          ]
        },
        {
          "grade": "9",
          "lesson": "L4",
          "part": "Reading",
          "group": 2,
          "items": [
            {
              "id": "A",
              "number": 1,
              "zh": "像是「筆記型電腦」、「電子郵件」和「下載」這些字是在電腦與網路變得盛行之後形成。",
              "en": "Words like “notebook computer,” “e-mail,” and “download” were formed after computers and the Internet became popular.",
              "zhkw": [
                "之後形成",
                "記型電腦"
              ],
              "enkw": [
                "computers",
                "notebook"
              ]
            },
            {
              "id": "B",
              "number": 2,
              "zh": "其他字則是意外地被創造出來的。",
              "en": "Other words were made by accident.",
              "zhkw": [
                "造出來的"
              ],
              "enkw": [
                "accident",
                "Other"
              ]
            },
            {
              "id": "C",
              "number": 3,
              "zh": "二○○二年，一位澳洲男子拍了一張他自己的照片並上傳至網路。",
              "en": "In 2002, an Australian guy took a photo of himself and uploaded it to the Internet.",
              "zhkw": [
                "傳至網路",
                "二年"
              ],
              "enkw": [
                "Australian",
                "uploaded"
              ]
            },
            {
              "id": "D",
              "number": 4,
              "zh": "他這麼做是因為他傷到他的嘴唇並且想知道他是否應該去看醫生。",
              "en": "He did this because he hurt his lips and wanted to know whether he should see a doctor or not.",
              "zhkw": [
                "去看醫生"
              ],
              "enkw": [
                "whether",
                "wanted"
              ]
            },
            {
              "id": "E",
              "number": 5,
              "zh": "在他的照片旁，他寫道：「這是一張自拍（selfie）」。",
              "en": "Beside this photo, he wrote, “It was a selfie.”",
              "zhkw": [
                "的照片旁",
                "一張自拍"
              ],
              "enkw": [
                "Beside",
                "selfie"
              ]
            },
            {
              "id": "F",
              "number": 6,
              "zh": "就像這樣，一個新字誕生了。自拍這個字接著就被定義為拍攝自己的照片。",
              "en": "Just like that, a new word was born. The word selfie was then defined as taking a photo of oneself.",
              "zhkw": [
                "己的照片",
                "字誕生了"
              ],
              "enkw": [
                "defined",
                "oneself"
              ]
            },
            {
              "id": "G",
              "number": 7,
              "zh": "如今此字在世界各地被廣泛地運用著。",
              "en": "It’s now commonly used all over the world.",
              "zhkw": [
                "地運用著"
              ],
              "enkw": [
                "commonly",
                "world"
              ]
            },
            {
              "id": "H",
              "number": 8,
              "zh": "在二○一四年，有一群人拍了一張自拍，他們稱之為「usie」。",
              "en": "In 2014, a group of people took a selfie, and they called it an usie.",
              "zhkw": [
                "一張自拍",
                "們稱之為"
              ],
              "enkw": [
                "people",
                "selfie"
              ]
            },
            {
              "id": "I",
              "number": 9,
              "zh": "你能猜到並解釋 usie 是什麼意思嗎？",
              "en": "Can you guess and explain what usie means?",
              "zhkw": [
                "到並解釋",
                "麼意思嗎"
              ],
              "enkw": [
                "explain",
                "guess"
              ]
            }
          ],
          "order": [
            5,
            2,
            4,
            3,
            7,
            0,
            1,
            6,
            8
          ]
        },
        {
          "grade": "9",
          "lesson": "L4",
          "part": "Dialogue",
          "group": 3,
          "items": [
            {
              "id": "A",
              "number": 1,
              "zh": "（Carla 和她的媽媽正在手機上互相傳送訊息。）",
              "en": "(Carla and her mom are messaging each other on their phones.)",
              "zhkw": [
                "傳送訊息",
                "Carla"
              ],
              "enkw": [
                "messaging",
                "phones"
              ]
            },
            {
              "id": "B",
              "number": 2,
              "zh": "Mom：Carla，我需要你趕快回家。",
              "en": "Carla, I need you to come home ASAP.",
              "zhkw": [
                "趕快回家",
                "Carla"
              ],
              "enkw": [
                "Carla",
                "need"
              ]
            },
            {
              "id": "C",
              "number": 3,
              "zh": "Carla：我在 Maddy 家，但是我可以馬上離開。我會在晚上七點前到家。怎麼了？出了什麼事？",
              "en": "I’m at Maddy’s house, but I can leave right away. I can be home by 7 p.m. Why? What’s wrong?",
              "zhkw": [
                "點前到家",
                "馬上離開"
              ],
              "enkw": [
                "Maddy’s",
                "What’s"
              ]
            },
            {
              "id": "D",
              "number": 4,
              "zh": "Mom：Beth 阿姨在農場裡出了意外。她會沒事的，不過她現在人在醫院。",
              "en": "Aunt Beth had an accident on the farm. She’s going to be okay, but she’s in the hospital.",
              "zhkw": [
                "出了意外",
                "人在醫院"
              ],
              "enkw": [
                "accident",
                "hospital"
              ]
            },
            {
              "id": "E",
              "number": 5,
              "zh": "Carla：天呀。為什麼那樣很好笑，媽媽？",
              "en": "OMG. Why is that funny, Mom?",
              "zhkw": [
                "樣很好笑",
                "Carla"
              ],
              "enkw": [
                "funny"
              ]
            },
            {
              "id": "F",
              "number": 6,
              "zh": "Mom：這不好笑。我很難過我的妹妹受傷了！你沒看到句子最後的那個哭臉表情符號嗎？",
              "en": "It’s not funny. I’m sad that my sister is hurt! Don’t you see the crying face emoji at the end of the sentence?",
              "zhkw": [
                "情符號嗎",
                "妹受傷了"
              ],
              "enkw": [
                "sentence",
                "sister"
              ]
            },
            {
              "id": "G",
              "number": 7,
              "zh": "Carla：這是個大笑的表情符號，媽媽！剛才有那麼一瞬間，我不確定你對於意外感到高興還是難過！",
              "en": "This is the laughing emoji, Mom! For a second there, I wasn’t sure whether you were glad or unhappy about the accident!",
              "zhkw": [
                "還是難過",
                "表情符號"
              ],
              "enkw": [
                "laughing",
                "accident"
              ]
            },
            {
              "id": "H",
              "number": 8,
              "zh": "（幾天後）",
              "en": "(A few days later)",
              "zhkw": [
                "幾天後"
              ],
              "enkw": [
                "later",
                "days"
              ]
            }
          ],
          "order": [
            0,
            6,
            3,
            4,
            1,
            5,
            2,
            7
          ]
        },
        {
          "grade": "9",
          "lesson": "L4",
          "part": "Dialogue",
          "group": 4,
          "items": [
            {
              "id": "A",
              "number": 1,
              "zh": "Carla：媽媽，我買了一些蘋果給 Beth 阿姨。你知道她在醫院過得怎麼樣嗎？",
              "en": "Mom, I picked up some apples for Aunt Beth. Do you know how she’s doing in the hospital?",
              "zhkw": [
                "怎麼樣嗎",
                "些蘋果給"
              ],
              "enkw": [
                "hospital",
                "picked"
              ]
            },
            {
              "id": "B",
              "number": 2,
              "zh": "Mom：恐怕她仍無法入睡。她非常疼痛。",
              "en": "I’m afraid she’s having trouble sleeping. She’s in a lot of pain.",
              "zhkw": [
                "無法入睡",
                "非常疼痛"
              ],
              "enkw": [
                "sleeping",
                "trouble"
              ]
            },
            {
              "id": "C",
              "number": 3,
              "zh": "Carla：那聽起來很糟糕！你為什麼在慶祝？",
              "en": "That sounds terrible! Why are you celebrating?",
              "zhkw": [
                "來很糟糕",
                "麼在慶祝"
              ],
              "enkw": [
                "celebrating",
                "terrible"
              ]
            },
            {
              "id": "D",
              "number": 4,
              "zh": "Mom：我沒有在慶祝！是什麼讓你認為我在慶祝？",
              "en": "I’m not celebrating! What makes you think I’m celebrating?",
              "zhkw": [
                "我在慶祝",
                "有在慶祝"
              ],
              "enkw": [
                "celebrating",
                "makes"
              ]
            },
            {
              "id": "E",
              "number": 5,
              "zh": "Carla：這是舉手擊掌的表情符號。",
              "en": "This is the high-five emoji.",
              "zhkw": [
                "表情符號",
                "Carla"
              ],
              "enkw": [
                "emoji",
                "high"
              ]
            },
            {
              "id": "F",
              "number": 6,
              "zh": "Mom：不對，我搜尋了這個表情符號的意思。它也代表「祈禱」。我在祈禱 Beth 阿姨快快好起來。",
              "en": "No, I googled the meaning of the emoji. It also means “praying.” I’m praying that Aunt Beth will get better soon.",
              "zhkw": [
                "號的意思",
                "快好起來"
              ],
              "enkw": [
                "googled",
                "meaning"
              ]
            },
            {
              "id": "G",
              "number": 7,
              "zh": "Carla：哇！我認為我們都需要上幾堂如何使用表情符號的課。",
              "en": "Wow! I think we both need a few lessons in how to use emojis.",
              "zhkw": [
                "符號的課",
                "Carla"
              ],
              "enkw": [
                "lessons",
                "emojis"
              ]
            },
            {
              "id": "H",
              "number": 8,
              "zh": "Mom：沒錯，又或者我就停止使用它們。",
              "en": "Yeah, or maybe I’ll just stop using them.",
              "zhkw": [
                "使用它們",
                "Mom"
              ],
              "enkw": [
                "maybe",
                "using"
              ]
            }
          ],
          "order": [
            7,
            2,
            5,
            4,
            1,
            3,
            0,
            6
          ]
        }
      ]
    },
    "L5": {
      "grade": "9",
      "lesson": "L5",
      "groups": [
        {
          "grade": "9",
          "lesson": "L5",
          "part": "Reading I",
          "group": 1,
          "items": [
            {
              "id": "A",
              "number": 1,
              "zh": "Zollipops──為了一個健康的笑容！",
              "en": "Zollipops─For a Healthy Smile!",
              "zhkw": [
                "Zollipops",
                "康的笑容"
              ],
              "enkw": [
                "Zollipops",
                "Healthy"
              ]
            },
            {
              "id": "B",
              "number": 2,
              "zh": "當 Alina Morse 的名字被談論時，很可能「Zollipops」這個聽起來像外語的字也會被說到。",
              "en": "When Alina Morse’s name is brought up, it is very possible that the foreign-sounding word “Zollipops” will also be said.",
              "zhkw": [
                "會被說到",
                "Zollipops"
              ],
              "enkw": [
                "Zollipops",
                "possible"
              ]
            },
            {
              "id": "C",
              "number": 3,
              "zh": "Zollipops 是一種清潔牙齒的糖果。",
              "en": "Zollipops are a kind of candy which cleans your teeth.",
              "zhkw": [
                "齒的糖果",
                "Zollipops"
              ],
              "enkw": [
                "Zollipops",
                "cleans"
              ]
            },
            {
              "id": "D",
              "number": 4,
              "zh": "它們是不含糖的棒棒糖。",
              "en": "They are lollipops with no sugar in them.",
              "zhkw": [
                "的棒棒糖"
              ],
              "enkw": [
                "lollipops",
                "sugar"
              ]
            },
            {
              "id": "E",
              "number": 5,
              "zh": "它們受到愛吃甜食但仍在意牙齒健康的人們所喜愛。",
              "en": "They are loved by people who have a sweet tooth but still care about the health of their teeth.",
              "zhkw": [
                "們所喜愛"
              ],
              "enkw": [
                "people",
                "health"
              ]
            },
            {
              "id": "F",
              "number": 6,
              "zh": "雖然它們有粉紅色、紫色和黃色等顏色，但它們是既健康又天然的。",
              "en": "Although they come in colors like pink, purple, and yellow, they are healthy and natural.",
              "zhkw": [
                "又天然的",
                "有粉紅色"
              ],
              "enkw": [
                "Although",
                "healthy"
              ]
            },
            {
              "id": "G",
              "number": 7,
              "zh": "Zollipops 是由 Zolli Candy 製作、包裝跟販售。",
              "en": "Zollipops are made, packaged, and sold by Zolli Candy.",
              "zhkw": [
                "Zollipops",
                "Zolli"
              ],
              "enkw": [
                "Zollipops",
                "packaged"
              ]
            },
            {
              "id": "H",
              "number": 8,
              "zh": "這間公司自 2014 年起已賺了數百萬美元。",
              "en": "The company has made millions of dollars since 2014.",
              "zhkw": [
                "百萬美元",
                "間公司自"
              ],
              "enkw": [
                "millions",
                "company"
              ]
            }
          ],
          "order": [
            2,
            6,
            3,
            5,
            1,
            7,
            4,
            0
          ]
        },
        {
          "grade": "9",
          "lesson": "L5",
          "part": "Reading I",
          "group": 2,
          "items": [
            {
              "id": "A",
              "number": 1,
              "zh": "Zollipops 在美國及世界各地數千家商店裡被販售，而且這個數字仍在上升中。",
              "en": "Zollipops are sold at thousands of stores in the USA and around the world, and the number is still on the rise.",
              "zhkw": [
                "裡被販售",
                "在上升中"
              ],
              "enkw": [
                "Zollipops",
                "thousands"
              ]
            },
            {
              "id": "B",
              "number": 2,
              "zh": "Alina Morse 是這一切的中心人物。",
              "en": "Alina Morse is at the center of it all.",
              "zhkw": [
                "中心人物",
                "Alina"
              ],
              "enkw": [
                "center",
                "Alina"
              ]
            },
            {
              "id": "C",
              "number": 3,
              "zh": "她是擁有 Zolli Candy 的老闆。",
              "en": "She is the boss who owns Zolli Candy.",
              "zhkw": [
                "Zolli",
                "Candy"
              ],
              "enkw": [
                "Zolli",
                "Candy"
              ]
            },
            {
              "id": "D",
              "number": 4,
              "zh": "當她被問到告訴大家關於她的 Zollipops 時，她回答：「令人驚喜的。潔淨的。笑容。」",
              "en": "When she was asked to tell people about her Zollipops, she answered, “Amazing. Clean. Smiles.”",
              "zhkw": [
                "關於她的",
                "Zollipops"
              ],
              "enkw": [
                "Zollipops",
                "answered"
              ]
            },
            {
              "id": "E",
              "number": 5,
              "zh": "這三個字正是 Zollipops 背後的意義。",
              "en": "The three words are truly behind the meaning of Zollipops.",
              "zhkw": [
                "Zollipops",
                "個字正是"
              ],
              "enkw": [
                "Zollipops",
                "meaning"
              ]
            },
            {
              "id": "F",
              "number": 6,
              "zh": "這位老闆看起來是什麼樣子呢？",
              "en": "What does this boss look like?",
              "zhkw": [
                "麼樣子呢"
              ],
              "enkw": [
                "does",
                "boss"
              ]
            },
            {
              "id": "G",
              "number": 7,
              "zh": "如果你認為她可能是某位中年已婚婦女，那麼 Alina Morse 必定會使你驚訝。",
              "en": "If you think she might be someone who is a middle-aged married woman, then Alina Morse will surely surprise you.",
              "zhkw": [
                "已婚婦女",
                "使你驚訝"
              ],
              "enkw": [
                "surprise",
                "someone"
              ]
            }
          ],
          "order": [
            3,
            2,
            4,
            0,
            6,
            5,
            1
          ]
        },
        {
          "grade": "9",
          "lesson": "L5",
          "part": "Reading II",
          "group": 3,
          "items": [
            {
              "id": "A",
              "number": 1,
              "zh": "Zollipops：一則甜蜜的成功故事",
              "en": "Zollipops: One Sweet Success Story",
              "zhkw": [
                "Zollipops",
                "成功故事"
              ],
              "enkw": [
                "Zollipops",
                "Success"
              ]
            },
            {
              "id": "B",
              "number": 2,
              "zh": "有些孩童真地在世界上嶄露頭角。",
              "en": "Some kids are really making their mark in the world.",
              "zhkw": [
                "嶄露頭角"
              ],
              "enkw": [
                "really",
                "making"
              ]
            },
            {
              "id": "C",
              "number": 3,
              "zh": "他們把從前屬於大人的企業界變成一個給有智慧又勤勉的青少年的遊樂場。",
              "en": "They are turning a business world which used to belong to grown-ups into a playground for wise and hard-working teenagers.",
              "zhkw": [
                "的遊樂場"
              ],
              "enkw": [
                "playground",
                "teenagers"
              ]
            },
            {
              "id": "D",
              "number": 4,
              "zh": "這群年輕的領導者被稱為「青少年企業家」，而 Alina Morse 是個很好的例子。",
              "en": "These young leaders are called “kidpreneurs,” and Alina Morse is a great example.",
              "zhkw": [
                "者被稱為",
                "好的例子"
              ],
              "enkw": [
                "kidpreneurs",
                "leaders"
              ]
            },
            {
              "id": "E",
              "number": 5,
              "zh": "這一切都始於 Alina 七歲時一次單純的銀行拜訪。",
              "en": "It all started with a simple visit to a bank when Alina was seven.",
              "zhkw": [
                "銀行拜訪",
                "切都始於"
              ],
              "enkw": [
                "started",
                "simple"
              ]
            },
            {
              "id": "F",
              "number": 6,
              "zh": "一位行員給了她一枝棒棒糖，但她的父親說那對她的牙齒有害。",
              "en": "A clerk gave her a lollipop, but her dad said it was bad for her teeth.",
              "zhkw": [
                "牙齒有害",
                "枝棒棒糖"
              ],
              "enkw": [
                "lollipop",
                "clerk"
              ]
            },
            {
              "id": "G",
              "number": 7,
              "zh": "Alina 問到：「那麼為什麼，我們不製作出對我們牙齒有益的棒棒糖呢？」",
              "en": "“Then why,” asked Alina, “don’t we just make lollipops that are good for our teeth?”",
              "zhkw": [
                "棒棒糖呢",
                "Alina"
              ],
              "enkw": [
                "lollipops",
                "asked"
              ]
            },
            {
              "id": "H",
              "number": 8,
              "zh": "Alina 不斷重複這個問題，直到她的父親終於同意幫忙為止。",
              "en": "Alina kept repeating this question until her father finally agreed to help.",
              "zhkw": [
                "幫忙為止",
                "這個問題"
              ],
              "enkw": [
                "repeating",
                "question"
              ]
            },
            {
              "id": "I",
              "number": 9,
              "zh": "她接著上網蒐集資訊，並問熟知有這方面專業知識的牙醫和醫生。",
              "en": "She then looked for information on the Internet, and she also talked to dentists and doctors who had a lot of knowledge of the subject.",
              "zhkw": [
                "醫和醫生",
                "蒐集資訊"
              ],
              "enkw": [
                "information",
                "knowledge"
              ]
            }
          ],
          "order": [
            1,
            7,
            2,
            8,
            5,
            0,
            4,
            6,
            3
          ]
        },
        {
          "grade": "9",
          "lesson": "L5",
          "part": "Reading II",
          "group": 4,
          "items": [
            {
              "id": "A",
              "number": 1,
              "zh": "在那之後，她開始在家裡製作棒棒糖，並要求她的朋友們試吃。",
              "en": "After that, she started making lollipops at home and asked her friends to try them.",
              "zhkw": [
                "作棒棒糖",
                "友們試吃"
              ],
              "enkw": [
                "lollipops",
                "started"
              ]
            },
            {
              "id": "B",
              "number": 2,
              "zh": "她失敗了很多次，但她沒有放棄。",
              "en": "She failed many times, but she didn’t give up.",
              "zhkw": [
                "了很多次",
                "沒有放棄"
              ],
              "enkw": [
                "failed",
                "didn’t"
              ]
            },
            {
              "id": "C",
              "number": 3,
              "zh": "兩年後，她的 Zollipops 終於準備好了。",
              "en": "After two years, her “Zollipops” were finally ready.",
              "zhkw": [
                "Zollipops",
                "準備好了"
              ],
              "enkw": [
                "Zollipops",
                "finally"
              ]
            },
            {
              "id": "D",
              "number": 4,
              "zh": "她設立了一個糖果公司，而很快地，這些又甜又健康的零食帶來數百萬的收入！",
              "en": "She set up a candy company, and soon, these sweet and healthy treats brought in millions of dollars!",
              "zhkw": [
                "萬的收入",
                "糖果公司"
              ],
              "enkw": [
                "millions",
                "company"
              ]
            },
            {
              "id": "E",
              "number": 5,
              "zh": "然而，Alina 成功的事業只是故事的一部分。",
              "en": "Alina’s successful business, however, is just half the story.",
              "zhkw": [
                "的一部分",
                "Alina"
              ],
              "enkw": [
                "successful",
                "business"
              ]
            },
            {
              "id": "F",
              "number": 6,
              "zh": "她也正幫助全美的孩童擁有健康的笑容。",
              "en": "She is also helping kids all over America to have healthy smiles.",
              "zhkw": [
                "康的笑容"
              ],
              "enkw": [
                "helping",
                "America"
              ]
            },
            {
              "id": "G",
              "number": 7,
              "zh": "她贈送給學校數千支對牙齒有益的棒棒糖，並教導孩子們如何照顧他們的牙齒。",
              "en": "She gives thousands of her tooth-friendly lollipops to schools and teaches kids how to care for their teeth.",
              "zhkw": [
                "的棒棒糖",
                "們的牙齒"
              ],
              "enkw": [
                "thousands",
                "lollipops"
              ]
            },
            {
              "id": "H",
              "number": 8,
              "zh": "總而言之，Zollipops 是一個很棒的生意。",
              "en": "All in all, Zollipops are one sweet deal!",
              "zhkw": [
                "Zollipops",
                "棒的生意"
              ],
              "enkw": [
                "Zollipops",
                "sweet"
              ]
            }
          ],
          "order": [
            4,
            6,
            5,
            2,
            3,
            0,
            1,
            7
          ]
        }
      ]
    },
    "L6": {
      "grade": "9",
      "lesson": "L6",
      "groups": [
        {
          "grade": "9",
          "lesson": "L6",
          "part": "Reading",
          "group": 1,
          "items": [
            {
              "id": "A",
              "number": 1,
              "zh": "購物的代價",
              "en": "The Price You Pay for Shopping",
              "zhkw": [
                "物的代價"
              ],
              "enkw": [
                "Shopping",
                "Price"
              ]
            },
            {
              "id": "B",
              "number": 2,
              "zh": "想像一下你正在一家超市裡。",
              "en": "Picture you’re in a supermarket.",
              "zhkw": [
                "家超市裡"
              ],
              "enkw": [
                "supermarket",
                "Picture"
              ]
            },
            {
              "id": "C",
              "number": 3,
              "zh": "你看到一件昨天賣 20 元的商品，現在變成了 19.99 元。你會買下這件商品嗎？",
              "en": "You see an item that was $20 yesterday, but it’s $19.99 now. Will you buy the item?",
              "zhkw": [
                "件商品嗎",
                "件昨天賣"
              ],
              "enkw": [
                "yesterday",
                "item"
              ]
            },
            {
              "id": "D",
              "number": 4,
              "zh": "如果會的話，你可能落入了人們經常上當的促銷陷阱之一。",
              "en": "If yes, you might fall for one of the sales tricks that people fall for all the time.",
              "zhkw": [
                "陷阱之一",
                "果會的話"
              ],
              "enkw": [
                "tricks",
                "people"
              ]
            },
            {
              "id": "E",
              "number": 5,
              "zh": "你有沒有注意過在某些商店裡錢好容易就花掉了？",
              "en": "Have you ever noticed how easy it is to spend money in some stores?",
              "zhkw": [
                "就花掉了"
              ],
              "enkw": [
                "noticed",
                "stores"
              ]
            },
            {
              "id": "F",
              "number": 6,
              "zh": "你在這些店裡可能會比平常花費更多。這是為什麼呢？",
              "en": "You might spend much more than usual in these stores. Why is that?",
              "zhkw": [
                "花費更多",
                "為什麼呢"
              ],
              "enkw": [
                "stores",
                "might"
              ]
            },
            {
              "id": "G",
              "number": 7,
              "zh": "以下是一些聰明的店主讓你買更多的方法。",
              "en": "Below are some ways smart store owners get you to buy more.",
              "zhkw": [
                "多的方法"
              ],
              "enkw": [
                "owners",
                "Below"
              ]
            },
            {
              "id": "H",
              "number": 8,
              "zh": "你在商店裡隨處可見的大型告示牌就是一個很好的例子。",
              "en": "A good example of this is the large signs that you’ll find around the store.",
              "zhkw": [
                "好的例子"
              ],
              "enkw": [
                "example",
                "you’ll"
              ]
            },
            {
              "id": "I",
              "number": 9,
              "zh": "它們吸引你的目光並傳達一個明確的訊息：「看，你撿到便宜了！」",
              "en": "These catch your eye and send a clear message: “Look, you’re getting a great deal!”",
              "zhkw": [
                "確的訊息",
                "到便宜了"
              ],
              "enkw": [
                "message",
                "getting"
              ]
            }
          ],
          "order": [
            6,
            8,
            0,
            2,
            4,
            1,
            7,
            3,
            5
          ]
        },
        {
          "grade": "9",
          "lesson": "L6",
          "part": "Reading",
          "group": 2,
          "items": [
            {
              "id": "A",
              "number": 1,
              "zh": "價格本身也被設計成似乎比實際還要低廉許多。",
              "en": "The prices themselves are also made to appear much lower than they really are.",
              "zhkw": [
                "低廉許多"
              ],
              "enkw": [
                "themselves",
                "prices"
              ]
            },
            {
              "id": "B",
              "number": 2,
              "zh": "舉例來說，5.99 元只比 6.00 元便宜了一分錢。",
              "en": "For example, $5.99 is just one cent cheaper than $6.00.",
              "zhkw": [
                "了一分錢",
                "舉例來說"
              ],
              "enkw": [
                "example",
                "cheaper"
              ]
            },
            {
              "id": "C",
              "number": 3,
              "zh": "然而，當你看到左邊是一個大大的「5」而不是大大的「6」時，這價格感覺就便宜了許多。",
              "en": "However, when you see a big “5” on the left instead of a big “6,” the price feels much lower.",
              "zhkw": [
                "個大大的",
                "宜了許多"
              ],
              "enkw": [
                "However",
                "instead"
              ]
            },
            {
              "id": "D",
              "number": 4,
              "zh": "此外，標價牌上經常寫著「低價」或「最划算」。",
              "en": "Besides, price signs often say things like “Low Price” or “Best Deal.”",
              "zhkw": [
                "經常寫著",
                "最划算"
              ],
              "enkw": [
                "Besides",
                "things"
              ]
            },
            {
              "id": "E",
              "number": 5,
              "zh": "這些標價牌會不斷讓你覺得自己得到了好價錢。",
              "en": "These signs keep making you think that you’re getting a great deal.",
              "zhkw": [
                "了好價錢"
              ],
              "enkw": [
                "getting",
                "making"
              ]
            },
            {
              "id": "F",
              "number": 6,
              "zh": "這招很管用，因為它會誘使你花更多的錢。這幾乎就像是你被騙了一樣！",
              "en": "This works because it fools you into spending more money. It’s almost like you’re being cheated!",
              "zhkw": [
                "更多的錢",
                "騙了一樣"
              ],
              "enkw": [
                "spending",
                "cheated"
              ]
            },
            {
              "id": "G",
              "number": 7,
              "zh": "即使你不是真地需要那些商品，你會覺得買下它們讓你有省到錢。",
              "en": "Even if you don’t really need those items, you feel like you’re saving money by buying them.",
              "zhkw": [
                "有省到錢",
                "那些商品"
              ],
              "enkw": [
                "really",
                "you’re"
              ]
            },
            {
              "id": "H",
              "number": 8,
              "zh": "下次你出門購物時，一定要當心這些促銷陷阱。",
              "en": "Next time you’re out shopping, be sure to watch out for these sales tricks.",
              "zhkw": [
                "促銷陷阱",
                "門購物時"
              ],
              "enkw": [
                "shopping",
                "you’re"
              ]
            },
            {
              "id": "I",
              "number": 9,
              "zh": "如果你懂得如何避開它們，你就能成為一個不輕易浪費錢且更聰明的消費者。",
              "en": "If you know how to stay away from them, you can be a smarter shopper whose money isn’t wasted easily.",
              "zhkw": [
                "的消費者",
                "避開它們"
              ],
              "enkw": [
                "smarter",
                "shopper"
              ]
            }
          ],
          "order": [
            0,
            1,
            4,
            5,
            2,
            8,
            3,
            7,
            6
          ]
        },
        {
          "grade": "9",
          "lesson": "L6",
          "part": "Dialogue",
          "group": 3,
          "items": [
            {
              "id": "A",
              "number": 1,
              "zh": "女兒：嘿，爸。我們從超市回來了。",
              "en": "Hey, Dad. We’re back from the supermarket.",
              "zhkw": [
                "市回來了",
                "女兒"
              ],
              "enkw": [
                "supermarket",
                "We’re"
              ]
            },
            {
              "id": "B",
              "number": 2,
              "zh": "爸爸：哇！全部花了多少錢？",
              "en": "Wow! How much did all that cost?",
              "zhkw": [
                "了多少錢",
                "爸爸"
              ],
              "enkw": [
                "much",
                "cost"
              ]
            },
            {
              "id": "C",
              "number": 3,
              "zh": "女兒：總共花了三千元。",
              "en": "It cost three thousand dollars in total.",
              "zhkw": [
                "了三千元",
                "女兒"
              ],
              "enkw": [
                "thousand",
                "dollars"
              ]
            },
            {
              "id": "D",
              "number": 4,
              "zh": "爸爸：我以為你們只是去那裡買些這週需要的米。",
              "en": "I thought you were just going there to get some rice for the week.",
              "zhkw": [
                "需要的米",
                "爸爸"
              ],
              "enkw": [
                "thought",
                "going"
              ]
            },
            {
              "id": "E",
              "number": 5,
              "zh": "媽媽：我們是，但之後我們看到好多在特價的商品。",
              "en": "We were, but then we saw many products that were on sale.",
              "zhkw": [
                "價的商品",
                "我們是"
              ],
              "enkw": [
                "products",
                "then"
              ]
            },
            {
              "id": "F",
              "number": 6,
              "zh": "女兒：對啊，爸。那裡有一位店員非常熱心。她給了我們一些免費試吃品。它們好美味，不是嗎，媽？",
              "en": "Yeah, Dad. One of the clerks there was very helpful. She gave us some free samples to try. They were delicious, weren’t they, Mom?",
              "zhkw": [
                "費試吃品",
                "非常熱心"
              ],
              "enkw": [
                "delicious",
                "helpful"
              ]
            }
          ],
          "order": [
            1,
            3,
            2,
            4,
            0,
            5
          ]
        },
        {
          "grade": "9",
          "lesson": "L6",
          "part": "Dialogue",
          "group": 4,
          "items": [
            {
              "id": "A",
              "number": 1,
              "zh": "媽媽：是，它們有些很好吃。那就是為什麼我們也買了一點起司和蜂蜜。",
              "en": "Yes, some of them were good. That’s why we also bought some cheese and honey.",
              "zhkw": [
                "司和蜂蜜",
                "些很好吃"
              ],
              "enkw": [
                "That’s",
                "bought"
              ]
            },
            {
              "id": "B",
              "number": 2,
              "zh": "爸爸：嘿！我正瀏覽你們買的東西，而我沒看到任何米。",
              "en": "Hey! I’m looking through all the things you bought, and I don’t see any rice.",
              "zhkw": [
                "買的東西",
                "到任何米"
              ],
              "enkw": [
                "looking",
                "things"
              ]
            },
            {
              "id": "C",
              "number": 3,
              "zh": "媽媽：你說對了。這樣一想，我在架上沒看到任何米。",
              "en": "You’re right. Come to think of it, I didn’t see any on the shelves.",
              "zhkw": [
                "到任何米",
                "你說對了"
              ],
              "enkw": [
                "shelves",
                "You’re"
              ]
            },
            {
              "id": "D",
              "number": 4,
              "zh": "爸爸：我的猜測是你們可能沒看最下面的架子。",
              "en": "My guess is that you probably weren’t looking at the bottom ones.",
              "zhkw": [
                "面的架子",
                "爸爸"
              ],
              "enkw": [
                "probably",
                "weren’t"
              ]
            },
            {
              "id": "E",
              "number": 5,
              "zh": "媽媽：喔，不。你是說我遵守了視線高度規則嗎？",
              "en": "Oh, no. Are you saying I followed the eye level rule?",
              "zhkw": [
                "度規則嗎",
                "媽媽"
              ],
              "enkw": [
                "followed",
                "saying"
              ]
            },
            {
              "id": "F",
              "number": 6,
              "zh": "爸爸：是，下次你到一間店時，不要只讓你的雙眼決定要買什麼。務必確保每一分錢都花在刀口上。",
              "en": "Yes, next time you go to a store, don’t just let your eyes decide what to get. Make sure every cent is spent wisely.",
              "zhkw": [
                "要買什麼",
                "在刀口上"
              ],
              "enkw": [
                "decide",
                "wisely"
              ]
            }
          ],
          "order": [
            1,
            3,
            5,
            2,
            4,
            0
          ]
        },
        {
          "grade": "9",
          "lesson": "L6",
          "part": "Reading",
          "group": 5,
          "items": [
            {
              "id": "A",
              "number": 1,
              "zh": "視線高度規則",
              "en": "Eye Level Rule",
              "zhkw": [
                "高度規則"
              ],
              "enkw": [
                "Level",
                "Rule"
              ]
            },
            {
              "id": "B",
              "number": 2,
              "zh": "1. 最上層高度（高於 180 公分）",
              "en": "1. Top Level (above 180 centimeters)",
              "zhkw": [
                "上層高度",
                "高於"
              ],
              "enkw": [
                "centimeters",
                "Level"
              ]
            },
            {
              "id": "C",
              "number": 3,
              "zh": "顧客很少看這層的商品。",
              "en": "Customers seldom look at products at this level.",
              "zhkw": [
                "層的商品"
              ],
              "enkw": [
                "Customers",
                "products"
              ]
            },
            {
              "id": "D",
              "number": 4,
              "zh": "此高度使商品較難拿到，所以它們較不常被購買。",
              "en": "The height makes the products harder to reach, so they are bought less often.",
              "zhkw": [
                "較難拿到",
                "常被購買"
              ],
              "enkw": [
                "products",
                "height"
              ]
            },
            {
              "id": "E",
              "number": 5,
              "zh": "2. 視線高度（120 到 150 公分）",
              "en": "2. Eye Level (120-150 centimeters)",
              "zhkw": [
                "視線高度",
                "公分"
              ],
              "enkw": [
                "centimeters",
                "Level"
              ]
            },
            {
              "id": "F",
              "number": 6,
              "zh": "在此層的商品較容易被注意與購買。",
              "en": "Products at this level are more easily noticed and bought.",
              "zhkw": [
                "意與購買"
              ],
              "enkw": [
                "Products",
                "noticed"
              ]
            }
          ],
          "order": [
            1,
            5,
            2,
            3,
            4,
            0
          ]
        },
        {
          "grade": "9",
          "lesson": "L6",
          "part": "Reading",
          "group": 6,
          "items": [
            {
              "id": "A",
              "number": 1,
              "zh": "因此，想要賺更多錢的店主時常把熱銷的商品擺在這裡。",
              "en": "Therefore, shopkeepers who want to make more money often put products that sell well here.",
              "zhkw": [
                "擺在這裡",
                "因此"
              ],
              "enkw": [
                "shopkeepers",
                "Therefore"
              ]
            },
            {
              "id": "B",
              "number": 2,
              "zh": "3. 碰觸高度（90 到 120 公分）",
              "en": "3. Touch Level (90-120 centimeters)",
              "zhkw": [
                "碰觸高度",
                "公分"
              ],
              "enkw": [
                "centimeters",
                "Touch"
              ]
            },
            {
              "id": "C",
              "number": 3,
              "zh": "此層的商品最容易被孩童看見。",
              "en": "Products at this level are most easily seen by children.",
              "zhkw": [
                "孩童看見"
              ],
              "enkw": [
                "Products",
                "children"
              ]
            },
            {
              "id": "D",
              "number": 4,
              "zh": "所以，孩子感興趣的產品時常被擺放在這裡。",
              "en": "So, products which children are interested in are often placed here.",
              "zhkw": [
                "放在這裡",
                "所以"
              ],
              "enkw": [
                "interested",
                "products"
              ]
            },
            {
              "id": "E",
              "number": 5,
              "zh": "4. 最底層高度（低於 90 公分）",
              "en": "4. Bottom Level (below 90 centimeters)",
              "zhkw": [
                "底層高度",
                "低於"
              ],
              "enkw": [
                "centimeters",
                "Bottom"
              ]
            },
            {
              "id": "F",
              "number": 6,
              "zh": "此層較低，且對大多數顧客而言是看不到的，所以無法賺太多錢的商品時常在這裡。",
              "en": "This level is lower and out of sight for most customers, so the products that don’t make much money often go here.",
              "zhkw": [
                "常在這裡",
                "看不到的"
              ],
              "enkw": [
                "customers",
                "products"
              ]
            }
          ],
          "order": [
            2,
            1,
            5,
            0,
            3,
            4
          ]
        }
      ]
    }
  }
};
