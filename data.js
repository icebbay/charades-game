// 词库数据
const defaultCategories = {
    "动物": {
        "zh": [
            // 简单
            "狗", "猫", "兔子", "熊猫", "老虎", "狮子", "大象", "猴子", "猪", "鸡", 
            "鸭", "鹅", "马", "鱼", "羊", "蛇", "乌龟", "企鹅", "袋鼠", "考拉",
            // 中等
            "长颈鹿", "骆驼", "孔雀", "狐狸", "松鼠", "刺猬", "狼", "鲨鱼", "鲸鱼", "蜥蜴",
            "蝴蝶", "鹦鹉", "天鹅", "斑马", "河马", "海豚", "蟑螂", "海马", "蝙蝠",
            // 高难
            "变色龙", "犀牛", "蜂鸟", "豪猪", "螃蟹", "水母", "树懒", "穿山甲", "帝王蟹", "恐龙",
            "章鱼", "貂", "蚂蚁", "猩猩", "袋獾", "蟒蛇", "鳄鱼", "蜜蜂", "龙虾", "鹤"
        ],
        "en": [
            // Simple
            "Dog", "Cat", "Rabbit", "Panda", "Tiger", "Lion", "Elephant", "Monkey", "Pig", "Chicken",
            "Duck", "Goose", "Horse", "Fish", "Sheep", "Snake", "Turtle", "Penguin", "Kangaroo", "Koala",
            // Medium
            "Giraffe", "Camel", "Peacock", "Fox", "Squirrel", "Hedgehog", "Wolf", "Shark", "Whale", "Lizard",
            "Butterfly", "Parrot", "Swan", "Zebra", "Hippopotamus", "Dolphin", "Cockroach", "Seahorse", "Bat",
            // Hard
            "Chameleon", "Rhinoceros", "Hummingbird", "Porcupine", "Crab", "Jellyfish", "Sloth", "Pangolin", "King Crab", "Dinosaur",
            "Octopus", "Mink", "Ant", "Gorilla", "Badger", "Python", "Crocodile", "Bee", "Lobster", "Crane"
        ]
    },
    "食物": {
        "zh": [
            // 简单
            "米饭", "面条", "饺子", "包子", "馒头", "火锅", "汉堡", "披萨", "蛋糕", "寿司",
            "面包", "炒饭", "薯条", "冰淇淋", "热狗", "粽子", "豆腐", "汤圆", "鸡蛋", "炒面",
            // 中等
            "沙拉", "春卷", "烧烤", "煎饼果子", "甜甜圈", "炸鸡翅", "黄焖鸡", "麻辣烫", "豆花", "酸辣粉",
            "章鱼烧", "蛋挞", "小龙虾", "椰子鸡", "煲仔饭", "涮羊肉", "煎饺", "螺蛳粉", "羊肉串", "红烧鱼",
            // 高难
            "佛跳墙", "牛油果", "珍珠奶茶", "奶酪焗饭", "羊蝎子", "拉面", "毛血旺", "越南春卷", "青木瓜沙拉", "烤鹅",
            "鲍鱼", "法式焗蜗牛", "黑松露", "火鸡腿", "龙虾汤", "糖葫芦", "红烧狮子头", "锅包肉", "咸蛋黄鸡翅", "松茸"
        ],
        "en": [
            // Simple
            "Rice", "Noodles", "Dumplings", "Steamed Bun", "Mantou", "Hot Pot", "Hamburger", "Pizza", "Cake", "Sushi",
            "Bread", "Fried Rice", "French Fries", "Ice Cream", "Hot Dog", "Zongzi", "Tofu", "Tang Yuan", "Egg", "Fried Noodles",
            // Medium
            "Salad", "Spring Roll", "BBQ", "Jianbing", "Donut", "Fried Chicken Wings", "Braised Chicken", "Malatang", "Tofu Pudding", "Sour Spicy Noodles",
            "Takoyaki", "Egg Tart", "Crayfish", "Coconut Chicken", "Claypot Rice", "Hot Pot Lamb", "Pan Fried Dumplings", "Snail Noodles", "Lamb Skewers", "Braised Fish",
            // Hard
            "Buddha Jumps Over the Wall", "Avocado", "Bubble Tea", "Cheese Baked Rice", "Lamb Spine Hot Pot", "Ramen", "Blood Curd", "Vietnamese Spring Roll", "Papaya Salad", "Roast Goose",
            "Abalone", "Escargot", "Black Truffle", "Turkey Leg", "Lobster Soup", "Candied Haws", "Lion's Head Meatball", "Sweet and Sour Pork", "Salted Egg Yolk Chicken Wings", "Matsutake"
        ]
    },
    "运动": {
        "zh": [
            // 简单
            "跑步", "跳绳", "游泳", "自行车", "足球", "篮球", "羽毛球", "滑冰", "攀岩", "瑜伽",
            "拳击", "排球", "体操", "拉力赛", "网球", "射箭", "爬山", "滑板", "保龄球", "撑杆跳",
            // 中等
            "击剑", "划船", "滑雪", "跳远", "马术", "冲浪", "赛马", "射击", "潜水", "轮滑",
            "柔道", "跆拳道", "滑翔伞", "乒乓球", "举重", "蹦床", "徒步", "高尔夫", "气功", "踢毽子",
            // 高难
            "极限单车", "躲避球", "冰壶", "普拉提", "自由搏击", "跳皮筋", "街舞", "钓鱼", "马拉松", "飞盘",
            "滑沙", "空手道", "曲棍球", "蹦极", "皮划艇", "卡丁车", "飞镖", "桌球", "壁球", "水上芭蕾"
        ],
        "en": [
            // Simple
            "Running", "Jump Rope", "Swimming", "Cycling", "Football", "Basketball", "Badminton", "Ice Skating", "Rock Climbing", "Yoga",
            "Boxing", "Volleyball", "Gymnastics", "Rally Racing", "Tennis", "Archery", "Hiking", "Skateboarding", "Bowling", "Pole Vault",
            // Medium
            "Fencing", "Rowing", "Skiing", "Long Jump", "Horseback Riding", "Surfing", "Horse Racing", "Shooting", "Diving", "Roller Skating",
            "Judo", "Taekwondo", "Paragliding", "Table Tennis", "Weightlifting", "Trampoline", "Trekking", "Golf", "Qigong", "Shuttlecock",
            // Hard
            "BMX", "Dodgeball", "Curling", "Pilates", "Free Fighting", "Rubber Band Jumping", "Street Dance", "Fishing", "Marathon", "Frisbee",
            "Sand Sliding", "Karate", "Hockey", "Bungee Jumping", "Kayaking", "Go-Karting", "Darts", "Snooker", "Squash", "Water Ballet"
        ]
    },
    "职业": {
        "zh": [
            // 简单
            "医生", "护士", "老师", "警察", "厨师", "演员", "司机", "歌手", "画家", "作家",
            "运动员", "农民", "工人", "秘书", "服务员", "售票员", "导游", "保安", "理发师", "快递员",
            // 中等
            "建筑师", "程序员", "律师", "会计", "飞行员", "记者", "化妆师", "模特", "导演", "设计师",
            "翻译", "兽医", "心理咨询师", "自媒体博主", "编辑", "调酒师", "园艺师", "主播", "摄影师", "企业家",
            // 高难
            "法官", "电商", "生物学家", "天文学家", "考古学家", "密码学家", "无人机驾驶员", "网络安全专家", "电竞选手", "占卜师",
            "倾诉师", "摆摊", "气象学家", "健身教练", "人工智能工程师", "催眠师", "旅游规划师", "剧本杀主持人", "驻唱歌手", "量子科学家"
        ],
        "en": [
            // Simple
            "Doctor", "Nurse", "Teacher", "Police Officer", "Chef", "Actor", "Driver", "Singer", "Painter", "Writer",
            "Athlete", "Farmer", "Worker", "Secretary", "Waiter", "Ticket Seller", "Tour Guide", "Security Guard", "Barber", "Courier",
            // Medium
            "Architect", "Programmer", "Lawyer", "Accountant", "Pilot", "Journalist", "Makeup Artist", "Model", "Director", "Designer",
            "Translator", "Veterinarian", "Psychologist", "Social Media Influencer", "Editor", "Bartender", "Gardener", "Streamer", "Photographer", "Entrepreneur",
            // Hard
            "Judge", "E-commerce Merchant", "Biologist", "Astronomer", "Archaeologist", "Cryptographer", "Drone Pilot", "Cybersecurity Expert", "E-sports Player", "Fortune Teller",
            "Counselor", "Street Vendor", "Meteorologist", "Fitness Trainer", "AI Engineer", "Hypnotist", "Travel Planner", "Murder Mystery Host", "Resident Singer", "Quantum Scientist"
        ]
    },
    "影视娱乐": {
        "zh": [
            // 简单
            "周杰伦", "成龙", "刘德华", "杨幂", "西游记", "阿凡达", "功夫熊猫", "甄嬛传", "哪吒", "泰坦尼克号",
            "唐人街探案", "疯狂动物城", "冰雪奇缘", "超人", "蜘蛛侠", "花木兰", "狮子王", "星球大战", "指环王", "蝙蝠侠",
            // 中等
            "梁朝伟", "张艺谋", "斯皮尔伯格", "宫崎骏", "流浪地球", "速度与激情", "权力的游戏", "海贼王", "盗梦空间", "千与千寻",
            "天空之城", "指环王", "复仇者联盟", "哈利波特", "沉睡魔咒", "奇幻森林", "绿野仙踪", "飞屋环游记", "加勒比海盗", "黑豹",
            // 高难
            "库布里克", "小丑", "肖申克的救赎", "黑客帝国", "卡萨布兰卡", "机器人总动员", "奇迹男孩", "燃情岁月", "银翼杀手", "黑天鹅",
            "爱乐之城", "钢铁侠", "变形金刚", "星际穿越", "安妮霍尔", "诺丁山", "怪物史莱克", "铁血战士", "神秘巨星", "楚门的世界"
        ],
        "en": [
            // Simple
            "Jay Chou", "Jackie Chan", "Andy Lau", "Yang Mi", "Journey to the West", "Avatar", "Kung Fu Panda", "Empresses in the Palace", "Nezha", "Titanic",
            "Detective Chinatown", "Zootopia", "Frozen", "Superman", "Spider-Man", "Mulan", "The Lion King", "Star Wars", "The Lord of the Rings", "Batman",
            // Medium
            "Tony Leung", "Zhang Yimou", "Spielberg", "Miyazaki", "The Wandering Earth", "Fast and Furious", "Game of Thrones", "One Piece", "Inception", "Spirited Away",
            "Castle in the Sky", "The Lord of the Rings", "Avengers", "Harry Potter", "Maleficent", "The Jungle Book", "The Wizard of Oz", "Up", "Pirates of the Caribbean", "Black Panther",
            // Hard
            "Kubrick", "Joker", "The Shawshank Redemption", "The Matrix", "Casablanca", "WALL-E", "Wonder", "Legends of the Fall", "Blade Runner", "Black Swan",
            "La La Land", "Iron Man", "Transformers", "Interstellar", "Annie Hall", "Notting Hill", "Shrek", "Predator", "Secret Superstar", "The Truman Show"
        ]
    },
    "表演": {
        "zh": [
            // 简单
            "捧腹大笑", "哈哈大笑", "摇头晃脑", "愁眉苦脸", "东倒西歪", "蹑手蹑脚", "挤眉弄眼", "手舞足蹈", "目瞪口呆", "左顾右盼",
            "打哈欠", "拍手鼓掌", "挠头", "比心", "做鬼脸", "打喷嚏", "跳跃", "跺脚", "鞠躬", "招手",
            // 中等
            "垂头丧气", "昂首挺胸", "自言自语", "狼吞虎咽", "撒腿就跑", "张牙舞爪", "从容不迫", "快马加鞭", "废寝忘食", "心花怒放",
            "流泪", "指手画脚", "装睡", "挤进人群", "假装打电话", "伸懒腰", "假装骑马", "装哭", "假装找东西", "跳舞",
            // 高难
            "惊弓之鸟", "含情脉脉", "怒火冲天", "举手投足", "一瘸一拐", "踮脚尖看", "坐井观天", "画蛇添足", "杯弓蛇影", "心猿意马",
            "装生病", "爬楼梯", "假装写字", "骑自行车", "摆造型", "装害怕", "挖鼻孔", "假装弹琴", "装傻", "假装看书"
        ],
        "en": [
            // Simple
            "Laugh Out Loud", "Giggle", "Head Shake", "Frown", "Stumble", "Tiptoe", "Wink", "Dance", "Jaw Drop", "Look Around",
            "Yawn", "Clap", "Scratch Head", "Heart Sign", "Make Faces", "Sneeze", "Jump", "Stomp", "Bow", "Wave",
            // Medium
            "Feel Down", "Stand Tall", "Talk to Self", "Eat Fast", "Run Away", "Act Fierce", "Stay Calm", "Rush", "Stay Up Late", "Feel Happy",
            "Cry", "Point and Talk", "Pretend Sleep", "Push Through Crowd", "Fake Phone Call", "Stretch", "Ride Horse", "Fake Cry", "Search Something", "Dance",
            // Hard
            "Startled Bird", "Look Lovingly", "Rage", "Gesture", "Limp", "Tiptoe Look", "Limited View", "Overdo It", "Paranoid", "Distracted",
            "Fake Sick", "Climb Stairs", "Pretend Write", "Ride Bike", "Strike Pose", "Act Scared", "Pick Nose", "Play Piano", "Act Silly", "Pretend Read"
        ]
    },
    "趣味搞笑": {
        "zh": [
            // 简单
            "滑稽表情", "哈哈镜", "逗比", "沙雕", "猪猪侠", "尬笑", "搞笑猫咪", "翻白眼", "抓狂", "搞笑狗狗",
            "真香", "牛马", "摸鱼", "快乐星球", "秀儿", "猛男落泪", "社恐", "吃瓜群众", "尬舞", "秃头青年",
            // 中等
            "表情包", "杠精", "打工人", "晚安猪", "喝水笑喷", "好尴尬", "秃头青年", "柠檬树下", "吃土青年", "加班狗",
            "尾款人", "凡学大师", "妈见打", "内耗", "土味情话", "city walk", "绝绝子", "神回复", "破防", "社交尴尬",
            // 高难
            "颜艺高手", "凡尔赛", "网络喷子", "尬舞高手", "吃鸡大神", "弹幕狂人", "网络钓鱼", "冷笑话达人", "盲盒玩家", "手工吐槽师",
            "吃货", "工具人", "空巢青年", "社交牛逼症", "智商税", "斜杠青年", "特种兵", "梗王", "精神股东", "段子手"
        ],
        "en": [
            // Simple
            "Funny Face", "Fun Mirror", "Silly", "Goofy", "Pig Hero", "Awkward Laugh", "Funny Cat", "Eye Roll", "Go Crazy", "Funny Dog",
            "So True", "Work Horse", "Slack Off", "Happy Planet", "Show Off", "Tough Guy Cry", "Social Anxiety", "Gossip", "Cringe Dance", "Bald Youth",
            // Medium
            "Meme", "Contrarian", "Worker", "Good Night Pig", "Spit Take", "So Awkward", "Balding", "Sour Grapes", "Broke", "Overtime Dog",
            "Shopping Debt", "Know-it-all", "Mom's Anger", "Self-sabotage", "Cheesy Lines", "City Walk", "Perfect", "Epic Reply", "Triggered", "Social Awkward",
            // Hard
            "Expression King", "Humble Brag", "Internet Troll", "Dance Master", "PUBG Pro", "Comment Spammer", "Phishing", "Joke Master", "Blind Box Fan", "DIY Critic",
            "Foodie", "Yes Man", "Empty Nester", "Social Butterfly", "IQ Tax", "Slash Youth", "Special Forces", "Meme Lord", "Virtual Shareholder", "Comedian"
        ]
    },
    "地理与旅行": {
        "zh": [
            // 简单
            "长城", "北京", "西湖", "泰山", "上海", "黄山", "巴黎", "东京", "纽约", "伦敦",
            "广州", "深圳", "南京", "成都", "杭州", "重庆", "西安", "武汉", "青岛", "哈尔滨",
            // 中等
            "普吉岛", "拉萨", "乌鲁木齐", "京都", "悉尼", "迪拜", "撒哈拉沙漠", "华盛顿", "马尔代夫", "巴厘岛",
            "普罗旺斯", "维也纳", "哥本哈根", "布拉格", "开罗", "曼谷", "吉隆坡", "胡志明市", "伊斯坦布尔", "墨尔本",
            // 高难
            "波多黎各", "马丘比丘", "圣托里尼", "富士山", "格陵兰岛", "庞贝古城", "北极光", "亚马逊雨林", "伊瓜苏瀑布", "巴塔哥尼亚",
            "复活节岛", "加拉帕戈斯群岛", "尼亚加拉大瀑布", "撒哈拉绿洲", "安第斯山脉", "乞力马扎罗山", "科莫多岛", "乍得湖", "巴布亚新几内亚", "霍巴特"
        ],
        "en": [
            // Simple
            "Great Wall", "Beijing", "West Lake", "Mount Tai", "Shanghai", "Huangshan", "Paris", "Tokyo", "New York", "London",
            "Guangzhou", "Shenzhen", "Nanjing", "Chengdu", "Hangzhou", "Chongqing", "Xi'an", "Wuhan", "Qingdao", "Harbin",
            // Medium
            "Phuket", "Lhasa", "Urumqi", "Kyoto", "Sydney", "Dubai", "Sahara Desert", "Washington", "Maldives", "Bali",
            "Provence", "Vienna", "Copenhagen", "Prague", "Cairo", "Bangkok", "Kuala Lumpur", "Ho Chi Minh City", "Istanbul", "Melbourne",
            // Hard
            "Puerto Rico", "Machu Picchu", "Santorini", "Mount Fuji", "Greenland", "Pompeii", "Northern Lights", "Amazon Rainforest", "Iguazu Falls", "Patagonia",
            "Easter Island", "Galapagos Islands", "Niagara Falls", "Sahara Oasis", "Andes Mountains", "Kilimanjaro", "Komodo Island", "Lake Chad", "Papua New Guinea", "Hobart"
        ]
    },
    "音乐与艺术": {
        "zh": [
            // 简单
            "钢琴", "吉他", "小提琴", "鼓", "画画", "跳舞", "京剧", "书法", "唱歌", "摄影",
            "卡拉OK", "非洲鼓", "钢鼓", "吉他弹唱", "电子琴", "长号", "萨克斯", "合唱", "竹笛", "口琴",
            // 中等
            "芭蕾舞", "油画", "水彩画", "素描", "舞台剧", "剪纸", "雕塑", "歌剧", "长笛", "行为艺术",
            "爵士乐", "摇滚乐", "民歌", "流行歌曲", "歌剧咏叹调", "室内乐", "古典舞蹈", "编曲家", "作词人", "音乐剧",
            // 高难
            "现代舞", "抽象派", "印象派", "嘻哈", "超现实主义", "浮雕", "铜雕", "水墨画", "交响乐", "涂鸦",
            "先锋艺术", "装置艺术", "新古典主义", "后现代主义", "超现实画派", "视觉艺术", "原生态音乐", "哲学艺术", "概念雕塑", "行为主义画派"
        ],
        "en": [
            // Simple
            "Piano", "Guitar", "Violin", "Drums", "Painting", "Dancing", "Peking Opera", "Calligraphy", "Singing", "Photography",
            "Karaoke", "African Drums", "Steel Drums", "Guitar Singing", "Electronic Keyboard", "Trombone", "Saxophone", "Chorus", "Bamboo Flute", "Harmonica",
            // Medium
            "Ballet", "Oil Painting", "Watercolor", "Sketch", "Stage Play", "Paper Cutting", "Sculpture", "Opera", "Flute", "Performance Art",
            "Jazz", "Rock Music", "Folk Song", "Pop Song", "Opera Aria", "Chamber Music", "Classical Dance", "Arranger", "Lyricist", "Musical",
            // Hard
            "Modern Dance", "Abstract Art", "Impressionism", "Hip Hop", "Surrealism", "Relief", "Bronze Sculpture", "Ink Painting", "Symphony", "Graffiti",
            "Avant-garde Art", "Installation Art", "Neoclassicism", "Postmodernism", "Surrealist Art", "Visual Art", "World Music", "Philosophical Art", "Conceptual Sculpture", "Behaviorist Painting"
        ]
    },
    "成语": {
        "zh": [
            // 简单
            "画龙点睛", "刻舟求剑", "井底之蛙", "掩耳盗铃", "叶公好龙", "亡羊补牢", "愚公移山", "滥竽充数", "对牛弹琴", "守株待兔",
            "小题大做", "半途而废", "得意洋洋", "目瞪口呆", "惊弓之鸟", "心旷神怡", "举一反三", "四海为家", "小心翼翼", "心急如焚",
            // 中等
            "买椟还珠", "望梅止渴", "草木皆兵", "孤注一掷", "鹤立鸡群", "指鹿为马", "杯弓蛇影", "投桃报李", "闭门造车", "四面楚歌",
            "独占鳌头", "半斤八两", "旗鼓相当", "唇亡齿寒", "趁火打劫", "杯水车薪", "打草惊蛇", "画地为牢", "鞭长莫及", "狼心狗肺",
            // 高难
            "囊萤映雪", "卧薪尝胆", "闻鸡起舞", "退避三舍", "兵不厌诈", "暗度陈仓", "日久天长", "画蛇添足", "三顾茅庐", "守望相助",
            "掷地有声", "风雨飘摇", "万马奔腾", "百尺竿头", "更进一步", "百闻不如一见", "十年树木", "百年树人", "青梅竹马", "卧薪尝胆"
        ],
        "en": [
            // Simple
            "Draw Dragon Eyes", "Mark Boat Find Sword", "Frog in Well", "Cover Ears Steal Bell", "Lord Ye Loves Dragon", "Mend Fold After Sheep Lost", "Yu Gong Moves Mountain", "Play Fake Yu", "Play Lute to Cow", "Guard Tree Wait Rabbit",
            "Make Big Deal", "Give Up Halfway", "Very Proud", "Dumbfounded", "Startled Bird", "Happy Mood", "Infer Others", "Home Everywhere", "Very Careful", "Anxious",
            // Medium
            "Return Pearl Keep Box", "Think Plum Stop Thirst", "See Soldiers in Trees", "Last Stake", "Crane Among Chickens", "Call Deer Horse", "Cup Shadow Snake", "Return Favor", "Make Cart Behind Door", "Chu Songs All Around",
            "Top Scholar", "Equal Weight", "Equal Match", "Lips Gone Teeth Cold", "Rob During Fire", "Drop in Ocean", "Scare Snake in Grass", "Draw Prison", "Whip Too Short", "Wolf Heart Dog Lung",
            // Hard
            "Study by Firefly Snow", "Endure Hardship", "Rise at Rooster", "Retreat Three Sets", "War Uses Tricks", "Secret Transfer", "Long Time", "Add Feet to Snake", "Three Visits", "Help Each Other",
            "Powerful Words", "Unstable", "Horses Running", "Bamboo Top", "One Step Further", "Seeing is Believing", "Ten Years Tree", "Hundred Years People", "Childhood Friends", "Endure for Revenge"
        ]
    },
    "自定义": {
        "zh": [],
        "en": []
    }
};

// 语言配置
const i18n = {
    zh: {
        title: "你演我猜",
        selectCategory: "选择类别:",
        selectTime: "选择时长（秒）:",
        customTime: "自定义时长:",
        seconds: "秒",
        startGame: "开始游戏",
        timeLeft: "剩余时间",
        score: "得分",
        home: "回主页",
        tapLeftSkip: "点击左侧跳过",
        tapRightCorrect: "点击右侧正确",
        tapToStart: "点击任意区域开始游戏",
        playAgain: "再玩一次",
        confirmReturn: "确定要返回主页吗？当前游戏进度将丢失。",
        finalScore: "最终得分：{score}分",
        wordsExhausted: "（词汇已用完）",
        invalidDuration: "请选择10-300秒之间的时间",
        noCustomWords: "请输入至少一个词",
        customWordsPlaceholder: "请输入自定义词语，每行一个词",
        confirmWords: "确认词库并开始游戏",
        customWordsTitle: "自定义词库",
        back: "返回",
        nextStep: "下一步",
        selectCategoryFirst: "请先选择一个类别",
        categories: {
            "自定义": "自定义词库",
            "动物": "动物",
            "食物": "食物",
            "运动": "运动",
            "职业": "职业",
            "影视娱乐": "影视娱乐",
            "表演": "表演",
            "趣味搞笑": "趣味搞笑",
            "地理与旅行": "地理与旅行",
            "音乐与艺术": "音乐与艺术",
            "成语": "成语"
        }
    },
    en: {
        title: "Charades",
        selectCategory: "Select Category:",
        selectTime: "Select Duration (seconds):",
        customTime: "Custom Duration:",
        seconds: "s",
        startGame: "Start Game",
        timeLeft: "Time Left",
        score: "Score",
        home: "Home",
        tapLeftSkip: "Tap Left to Skip",
        tapRightCorrect: "Tap Right if Correct",
        tapToStart: "Tap Anywhere to Start",
        playAgain: "Play Again",
        confirmReturn: "Return to home? Current progress will be lost.",
        finalScore: "Final Score: {score}",
        wordsExhausted: "(Words Exhausted)",
        noCustomWords: "Please enter at least one word",
        customWordsPlaceholder: "Enter custom words, one per line",
        confirmWords: "Confirm Words and Start Game",
        customWordsTitle: "Custom Words",
        back: "Back",
        nextStep: "Next",
        selectCategoryFirst: "Please select a category first",
        categories: {
            "自定义": "Custom Words",
            "动物": "Animals",
            "食物": "Food",
            "运动": "Sports",
            "职业": "Professions",
            "影视娱乐": "Entertainment",
            "表演": "Performance",
            "趣味搞笑": "Fun & Humor",
            "地理与旅行": "Geography & Travel",
            "音乐与艺术": "Music & Art",
            "成语": "Chinese Idioms"
        }
    }
};

// 将变量添加到全局作用域
window.i18n = i18n;

