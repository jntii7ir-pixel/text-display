// 曜日ごとの時間割
// subject: 科目名
// place: 授業を受ける場所（教室名など）
// items: 持ち物（教科書・ノート・道具など）

window.TIMETABLE = {
  1: { // 月
    1: { subject: "保健",  place: "図書室", items: "教科書・ノート" },
    2: { subject: "英コ1",  place: "A：教室","B：221教室" items: "教科書・ノート" },
    3: { subject: "情数", place: "PC室",  items: "タブレット・筆記用具" },
    4: { subject: "数学", place: "教室A", items: "数学教科書・ノート" },
    5: { subject: "家庭", place: "家庭科室", items: "エプロン など" },
    6: { subject: "家庭", place: "家庭科室", items: "同上" },
    7: { subject: "科学", place: "理科室", items: "理科の教科書・ノート" }
  },
  2: { // 火
    1: { subject: "数学", place: "教室A", items: "数学教科書・ノート" },
    2: { subject: "体育", place: "体育館", items: "体操服・シューズ" },
    3: { subject: "プログラミング技術", place: "PC室", items: "タブレット・筆記用具" },
    4: { subject: "プログラミング技術", place: "PC室", items: "同上" },
    5: { subject: "総探", place: "教室A", items: "タブレット など" },
    6: { subject: "LH",   place: "教室A", items: "連絡帳 など" }
  },
  3: { // 水
    1: { subject: "科学", place: "理科室", items: "理科の教科書・ノート" },
    2: { subject: "地理", place: "教室A", items: "地理の教科書・ノート" },
    3: { subject: "音美", place: "音楽室/美術室", items: "指定の道具" },
    4: { subject: "音美", place: "音楽室/美術室", items: "同上" },
    5: { subject: "英コ1", place: "LL教室など", items: "英語のワーク・ノート" },
    6: { subject: "体育", place: "体育館", items: "体操服・シューズ" }
  },
  4: { // 木
    1: { subject: "英コ1",   place: "LL教室など", items: "英語のワーク・ノート" },
    2: { subject: "電回",     place: "実習室",     items: "資料・筆記用具" },
    3: { subject: "言語",     place: "教室A",     items: "教科書・ノート" },
    4: { subject: "工業技術基礎", place: "実習室", items: "作業着 など" },
    5: { subject: "工業技術基礎", place: "実習室", items: "同上" },
    6: { subject: "工業技術基礎", place: "実習室", items: "同上" }
  },
  5: { // 金
    1: { subject: "言語", place: "教室A", items: "教科書・ノート" },
    2: { subject: "電回", place: "実習室", items: "資料・筆記用具" },
    3: { subject: "地理", place: "教室A", items: "地理の教科書・ノート" },
    4: { subject: "数学", place: "教室A", items: "数学教科書・ノート" },
    5: { subject: "情数", place: "PC室",  items: "タブレット・筆記用具" },
    6: { subject: "情数", place: "PC室",  items: "同上" }
  }
};
