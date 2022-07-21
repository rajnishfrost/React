import React from "react";

export default function Timer() {
  let fDay = 21;
  let fHours = 18;
  let fMinutes = 53;
  let fSeconds = 0;
  const total = new Date();
  let days = total.getDate();
  let hours = total.getHours();
  let minutes = total.getMinutes();
  let seconds = total.getSeconds();
  if (fDay > days) {
    fDay = fDay - days;
  } else {
    fDay = 0;
  }
  if (fHours >= hours) {
    fHours = fHours - hours;
  } else {
    if (fDay - days == 0) {
      fHours = fHours - hours;
    } else {
      fHours = fHours - hours + 24;
    }
  }
  if (fMinutes > minutes) {
    fMinutes = fMinutes - minutes;
  } else {
    fMinutes = fMinutes - minutes + 60;
    if (fHours - hours == 1) {
      fHours = 0;
    }
  }
  fSeconds = fSeconds - seconds;

  console.log(fDay, fHours);
  return <div>Timer</div>;
}
