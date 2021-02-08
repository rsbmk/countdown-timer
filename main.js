const getRemainTime = (deadline) => {
  let now = new Date(),
    remainTime = (new Date(deadline) - now + 1000) / 1000,
    remainSeconds = ("0" + Math.floor(remainTime % 60)).slice(-2),
    remainMinutes = ("0" + Math.floor((remainTime / 60) % 60)).slice(-2),
    remainHours = ("0" + Math.floor((remainTime / 3600) % 24)).slice(-2),
    remainDays = ("0" + Math.floor(remainTime / (3600 * 24))).slice(-2);

  return {
    remainTime,
    remainSeconds,
    remainMinutes,
    remainHours,
    remainDays,
  };
};

const countDown = (deadline) => {
  const timerUpdate = setInterval((_) => {
    let time = getRemainTime(deadline);

    days.innerHTML = `${time.remainDays}`;
    hours.innerHTML = `${time.remainHours}`;
    minutes.innerHTML = `${time.remainMinutes}`;
    seconds.innerHTML = `${time.remainSeconds}`;

    if (time.remainTime <= 1) clearInterval(timerUpdate);
  }, 1000);
};

const restardDate = (date, days) => {
  date.setDate(date.getDate() + days);
  return date;
};
countDown(restardDate(new Date(), 10));
