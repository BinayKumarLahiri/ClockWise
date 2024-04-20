const second = document.querySelector(".second");
const minute = document.querySelector(".minute");
const hour = document.querySelector(".hour");
const datebox = document.querySelector(".date");
function getDayString(day, date, month, year) {
  const Day = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const Month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return `${Day[day]}, ${date} ${Month[month]} ${year}`;
}

setInterval(() => {
  const d = new Date();
  let sec = d.getSeconds();
  let min = d.getMinutes();
  let h = d.getHours();
  let secdeg = 6 * sec - 90;
  let mindeg = min * 6 + sec / 10 - 90;
  let hourdeg = h * 30 + min / 2 + sec / 120 - 90;
  second.style.transform = `rotateZ(${secdeg}deg)`;
  minute.style.transform = `rotateZ(${mindeg}deg)`;
  hour.style.transform = `rotateZ(${hourdeg}deg)`;
  let datestr = getDayString(
    d.getDay(),
    d.getDate(),
    d.getMonth(),
    d.getFullYear()
  );
  document.getElementById("date").innerText = datestr;
  document.querySelector(".time").innerText = `${h < 10 ? "0" + h : h} : ${
    min < 10 ? "0" + min : min
  } : ${sec < 10 ? "0" + sec : sec}`;
}, 1000);
