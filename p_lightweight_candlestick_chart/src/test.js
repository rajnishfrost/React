const timestamp = 1663061327000;

const date = new Date(timestamp);
console.log(date); // 👉️ Wed Jan 26 2022

const year = date.getFullYear();
console.log(year); // 👉️ 2022

const month = date.getMonth();
console.log(month+1); // 👉️ 0 (January = 0, February = 1, etc)

const monthName = date.toLocaleString('default', {
  month: 'long',
});
console.log(monthName); // 👉️ "January"

const day = date.getDate();
console.log(day); // 👉️ 26