function setAlarm(employed, vacation) {
  let res = employed - vacation;
  return res > 0;
}

setAlarm(true, false);

// const setAlarm = (employed, vacation) => employed && !vacation;
