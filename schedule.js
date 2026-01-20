// 現在の時刻から「何曜日の何限か」を判定して、対応する科目を表示する

(function () {
  const now    = new Date();
  const day    = now.getDay();     // 0=日,1=月,2=火,3=水,4=木,5=金,6=土
  const hour   = now.getHours();
  const minute = now.getMinutes();

  const total = hour * 60 + minute;  // 0:00 からの経過分

  // 昼休み判定（曜日ごとに違う）
  let isLunchBreak = false;

  // 月曜日：4限終わり 12:25 → 昼休み 12:25〜13:10
  if (day === 1) {
    if (total >= (12 * 60 + 25) && total < (13 * 60 + 10)) {
      isLunchBreak = true;
    }
  }

  // 火〜金：4限終わり 12:45 → 昼休み 12:45〜13:30
  if (day >= 2 && day <= 5) {
    if (total >= (12 * 60 + 45) && total < (13 * 60 + 30)) {
      isLunchBreak = true;
    }
  }

  // 何限か（1〜7）
  let period = null;

  /*
    月曜日（45分授業＋休み10分）
    1限  8:55〜 9:40
    2限  9:50〜10:35
    3限 10:45〜11:30
    4限 11:40〜12:25
    昼休み 12:25〜13:10
    5限 13:10〜13:55
    6限 14:05〜14:50
    7限 15:00〜15:45
  */
  if (day === 1) {
    if      (total >= (8*60 + 55) && total < (9*60 + 40))  period = 1;
    else if (total >= (9*60 + 50) && total < (10*60 + 35)) period = 2;
    else if (total >= (10*60 + 45) && total < (11*60 + 30)) period = 3;
    else if (total >= (11*60 + 40) && total < (12*60 + 25)) period = 4;
    // 12:25〜13:10 は isLunchBreak
    else if (total >= (13*60 + 10) && total < (13*60 + 55)) period = 5;
    else if (total >= (14*60 + 5)  && total < (14*60 + 50)) period = 6;
    else if (total >= (15*60 + 0)  && total < (15*60 + 45)) period = 7;
  }

  /*
    火〜金（50分授業＋休み10分）
    1限  8:55〜 9:45
    2限  9:55〜10:45
    3限 10:55〜11:45
    4限 11:55〜12:45
    昼休み 12:45〜13:30
    5限 13:30〜14:20
    6限 14:30〜15:20
    7限 15:30〜16:20
  */
  if (day >= 2 && day <= 5) {
    if      (total >= (8*60 + 55) && total < (9*60 + 45))  period = 1;
    else if (total >= (9*60 + 55) && total < (10*60 + 45)) period = 2;
    else if (total >= (10*60 + 55) && total < (11*60 + 45)) period = 3;
    else if (total >= (11*60 + 55) && total < (12*60 + 45)) period = 4;
    // 12:45〜13:30 は isLunchBreak
    else if (total >= (13*60 + 30) && total < (14*60 + 20)) period = 5;
    else if (total >= (14*60 + 30) && total < (15*60 + 20)) period = 6;
    else if (total >= (15*60 + 30) && total < (16*60 + 20)) period = 7;
  }

  // timetable.js で定義したデータを取得
  const table = window.TIMETABLE || {};
  let message = "";

  if (isLunchBreak) {
    message = "昼休みです";
  } else if (table[day] && period && table[day][period]) {
    message = table[day][period];
  } else {
    message = "今は授業時間外です";
  }

  document.getElementById("view").textContent = message;
  const debug =
  "day=" + day + " hour=" + hour + " min=" + minute + "<br>" +
  "total=" + total + "<br>" +
  "period=" + period + "<br>" +
  "lunch=" + isLunchBreak;

document.getElementById("view").innerHTML = message + "<br><br><small>" + debug + "</small>";
})();
