export type Album = {
  year: string;
  title: string;
  mood: string;
  songs: string[];
  note: string;
  cover: string;
  font: "country" | "romance" | "editorial" | "clean" | "gothic" | "literary" | "typewriter" | "showgirl" | "bubble" | "luxury";
  background: string;
  accent: string;
  ink: string;
};

export const taylorAlbums: Album[] = [
  { year: "2006", title: "Taylor Swift", mood: "country roots", songs: ["Tim McGraw", "Teardrops on My Guitar", "Our Song"], note: "少年感、木吉他和把日记写成歌的开始。", cover: "/albums/taylor/debut.jpg", font: "country", background: "#dbe8dd", accent: "#4d7662", ink: "#1e382c" },
  { year: "2008", title: "Fearless", mood: "golden hour", songs: ["Love Story", "You Belong With Me", "Fifteen"], note: "把青春期的心动拍成一部金色、明亮的电影。", cover: "/albums/taylor/fearless.jpg", font: "romance", background: "#f0dfae", accent: "#a77726", ink: "#4d3513" },
  { year: "2010", title: "Speak Now", mood: "self-written", songs: ["Mine", "Enchanted", "Back to December"], note: "完全自写的紫色篇章，更直接，也更像一封长信。", cover: "/albums/taylor/speak-now.jpg", font: "romance", background: "#dac6e6", accent: "#7f5194", ink: "#3b2546" },
  { year: "2012", title: "Red", mood: "emotional color", songs: ["All Too Well", "22", "I Knew You Were Trouble"], note: "把爱、失去、秋天和失控都调成高饱和度。", cover: "/albums/taylor/red.jpg", font: "editorial", background: "#d9c9b9", accent: "#8c2430", ink: "#351b1d" },
  { year: "2014", title: "1989", mood: "new york pop", songs: ["Blank Space", "Style", "Wildest Dreams"], note: "合成器、霓虹灯，以及真正完整的流行时代。", cover: "/albums/taylor/1989.jpg", font: "romance", background: "#c8e3ec", accent: "#4b91a9", ink: "#173845" },
  { year: "2017", title: "reputation", mood: "snake season", songs: ["Delicate", "Getaway Car", "Call It What You Want"], note: "先把外界目光变成盔甲，再把盔甲变成情书。", cover: "/albums/taylor/reputation.jpg", font: "gothic", background: "#090909", accent: "#d4d4cf", ink: "#f4f2ed" },
  { year: "2019", title: "Lover", mood: "pastel heart", songs: ["Lover", "Cruel Summer", "Daylight"], note: "粉色天空、夏夜和带着棱角的浪漫主义。", cover: "/albums/taylor/lover.jpg", font: "romance", background: "#f4ccdd", accent: "#4f86cb", ink: "#693b61" },
  { year: "2020", title: "folklore", mood: "cabin in the woods", songs: ["cardigan", "august", "my tears ricochet"], note: "退进森林，用虚构人物讲更真实的故事。", cover: "/albums/taylor/folklore.jpg", font: "literary", background: "#d2d2cf", accent: "#5b5b57", ink: "#272724" },
  { year: "2020", title: "evermore", mood: "deep winter", songs: ["willow", "champagne problems", "evermore"], note: "更冷、更成熟，也更愿意和复杂共处。", cover: "/albums/taylor/evermore.jpg", font: "literary", background: "#c8b5a4", accent: "#774b36", ink: "#38261d" },
  { year: "2022", title: "Midnights", mood: "3am thoughts", songs: ["Anti-Hero", "Lavender Haze", "Maroon"], note: "深夜里不肯睡去的念头，终于走进聚光灯。", cover: "/albums/taylor/midnights.jpg", font: "editorial", background: "#17233d", accent: "#c3b3e7", ink: "#f4f1ec" },
  { year: "2024", title: "The Tortured Poets Department", mood: "typewriter heart", songs: ["Fortnight", "Down Bad", "I Can Do It With a Broken Heart"], note: "创作、失恋、幽默和自我拆解，被放在同一张桌上。", cover: "/albums/taylor/ttpd.jpg", font: "typewriter", background: "#d8d2c8", accent: "#5d554c", ink: "#27231f" },
  { year: "2025", title: "The Life of a Showgirl", mood: "spotlight glitter", songs: ["The Fate of Ophelia", "Opalite"], note: "更闪耀、更舞台化，也更像灯光亮起后的秘密。", cover: "/albums/taylor/showgirl.jpg", font: "showgirl", background: "#d58a56", accent: "#176b66", ink: "#2b2018" },
];

export const twiceAlbums: Album[] = [
  { year: "2015", title: "THE STORY BEGINS", mood: "first spark", songs: ["Like OOH-AHH", "Do It Again"], note: "九个人的故事从这里开始：明亮、俏皮、充满新人能量。", cover: "/albums/twice/story-begins.jpg", font: "bubble", background: "#ffd7d9", accent: "#e85278", ink: "#502633" },
  { year: "2016", title: "TWICEcoaster: LANE 1", mood: "color pop", songs: ["TT", "Jelly Jelly"], note: "撒娇、旋律和舞蹈动作，组成一套忘不掉的流行密码。", cover: "/albums/twice/twicecoaster.jpg", font: "bubble", background: "#ffe6a8", accent: "#fb567b", ink: "#55341f" },
  { year: "2017", title: "Twicetagram", mood: "social sparkle", songs: ["LIKEY", "TURTLE"], note: "更自信、更会玩，也更懂得把日常感放进流行音乐。", cover: "/albums/twice/twicetagram.jpg", font: "bubble", background: "#cce9ff", accent: "#ff6f98", ink: "#244365" },
  { year: "2018", title: "What Is Love?", mood: "movie romance", songs: ["What Is Love?", "Sweet Talker"], note: "用电影、想象和少女心，回答喜欢究竟是什么。", cover: "/albums/twice/what-is-love.jpg", font: "romance", background: "#ffe4ec", accent: "#ef638e", ink: "#6a3147" },
  { year: "2019", title: "Feel Special", mood: "golden confidence", songs: ["FANCY", "Feel Special", "Love Foolish"], note: "从闪亮的转身到互相托住彼此，是一次重要的成长。", cover: "/albums/twice/feel-special.jpg", font: "luxury", background: "#8f661d", accent: "#ffe6a3", ink: "#fff9e9" },
  { year: "2020", title: "Eyes wide open", mood: "retro night", songs: ["I CAN'T STOP ME", "Up No More"], note: "复古合成器、城市夜色和更成熟的舞台质感。", cover: "/albums/twice/eyes-wide-open.jpg", font: "luxury", background: "#151722", accent: "#e4575f", ink: "#f8eee6" },
  { year: "2021", title: "Formula of Love: O+T=<3", mood: "love laboratory", songs: ["SCIENTIST", "ICON", "CANDY"], note: "把 ONCE + TWICE 写进标题，也把爱变成自己的公式。", cover: "/albums/twice/formula-of-love.jpg", font: "clean", background: "#f3e8d0", accent: "#d84a45", ink: "#432b27" },
  { year: "2021", title: "Taste of Love", mood: "summer drink", songs: ["Alcohol-Free", "Scandal"], note: "海风、轻盈的 bossa nova 和一整个假期的味道。", cover: "/albums/twice/taste-of-love.jpg", font: "romance", background: "#f7d7be", accent: "#e74e67", ink: "#64392f" },
  { year: "2023", title: "READY TO BE", mood: "bold stage", songs: ["SET ME FREE", "MOONLIGHT SUNRISE"], note: "更大胆地走向世界，也更明确地表达做自己。", cover: "/albums/twice/ready-to-be.jpg", font: "editorial", background: "#211f23", accent: "#f13e5f", ink: "#fff3f4" },
  { year: "2024", title: "With YOU-th", mood: "friendship glow", songs: ["ONE SPARK", "I GOT YOU"], note: "把青春、友情和一起长大的时间，写成给 ONCE 的信。", cover: "/albums/twice/with-youth.jpg", font: "romance", background: "#e6d6f6", accent: "#8c5cc7", ink: "#433355" },
  { year: "2025", title: "THIS IS FOR", mood: "new chapter", songs: ["THIS IS FOR", "Strategy"], note: "十周年前后的新阶段：更大的舞台、更丰富的声音。", cover: "/albums/twice/this-is-for.jpg", font: "editorial", background: "#cfe8e7", accent: "#eb5a67", ink: "#254646" },
  { year: "2025", title: "TEN: The Story Goes On", mood: "ten together", songs: ["ME+YOU", "MEEEEEE", "DIVE IN"], note: "出道十周年特别专辑；九位成员各有一首个人曲目。", cover: "/albums/twice/ten.jpg", font: "luxury", background: "#1d2940", accent: "#e9b9c4", ink: "#fff7f4" },
];

export const twiceMembers = [
  { name: "NAYEON", hangul: "나연", birthday: "1995.09.22", keyword: "bright pop", note: "像晴天一样的中心能量，轻快、灵动。", photo: "https://d1al7qj7ydfbpt.cloudfront.net/artist/twice/814a7595f00a4c6895d0d671ca78c949-1%E1%84%82%E1%85%A1%E1%84%8B%E1%85%A7%E1%86%AB.png" },
  { name: "JEONGYEON", hangul: "정연", birthday: "1996.11.01", keyword: "warm anchor", note: "可靠又自然，是团队里温暖、稳定的锚点。", photo: "https://d1al7qj7ydfbpt.cloudfront.net/artist/twice/cec5840107e942b1beeda32b0c7064dc-2%E1%84%8C%E1%85%A5%E1%86%BC%E1%85%A7%E1%86%AB.png" },
  { name: "MOMO", hangul: "모모", birthday: "1996.11.09", keyword: "dance precision", note: "舞台动作有极强的线条感和节奏感。", photo: "https://d1al7qj7ydfbpt.cloudfront.net/artist/twice/1f63eab8fb434eb6a756c0be4eaf0d95-3%E1%84%86%E1%85%A9%E1%84%86%E1%85%A9.png" },
  { name: "SANA", hangul: "사나", birthday: "1996.12.29", keyword: "playful charm", note: "甜、亮、会和观众交流，把轻松感变成舞台语言。", photo: "https://d1al7qj7ydfbpt.cloudfront.net/artist/twice/abc9688970fd4b9793fc26b86e8f5dc4-4%E1%84%89%E1%85%A1%E1%84%82%E1%85%A1.png" },
  { name: "JIHYO", hangul: "지효", birthday: "1997.02.01", keyword: "powerhouse leader", note: "声音、眼神和体力都很有冲击力。", photo: "https://d1al7qj7ydfbpt.cloudfront.net/artist/twice/2bda6e2820454aa399d69be641da98ed-5%E1%84%8C%E1%85%B5%E1%84%92%E1%85%AD.png" },
  { name: "MINA", hangul: "미나", birthday: "1997.03.24", keyword: "quiet elegance", note: "克制、优雅，安静时也有很强的镜头存在感。", photo: "https://d1al7qj7ydfbpt.cloudfront.net/artist/twice/506c189bfa134a87a02ca6af4b07aa18-6%E1%84%86%E1%85%B5%E1%84%82%E1%85%A1.png" },
  { name: "DAHYUN", hangul: "다현", birthday: "1998.05.28", keyword: "spark + wit", note: "反应快、表达有趣，总能让画面变得有生命力。", photo: "https://d1al7qj7ydfbpt.cloudfront.net/artist/twice/caacf4fa97054bf29465ce9eef579cba-7%E1%84%83%E1%85%A1%E1%84%92%E1%85%A7%E1%86%AB.png" },
  { name: "CHAEYOUNG", hangul: "채영", birthday: "1999.04.23", keyword: "artistic edge", note: "审美和表达方式都很鲜明，率真又有灵感。", photo: "https://d1al7qj7ydfbpt.cloudfront.net/artist/twice/ea4e327ee4c8488287840951ba3e1dd7-8%E1%84%8E%E1%85%A2%E1%84%8B%E1%85%A7%E1%86%BC.png" },
  { name: "TZUYU", hangul: "쯔위", birthday: "1999.06.14", keyword: "calm glow", note: "安静、清澈、稳定，让整体画面更有呼吸。", photo: "https://d1al7qj7ydfbpt.cloudfront.net/artist/twice/c8911050462d4dec80fb785843a378c9-9%E1%84%8D%E1%85%B3%E1%85%AF.png" },
];
