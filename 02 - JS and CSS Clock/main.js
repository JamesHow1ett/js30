const secondHand = document.querySelector('.second-hand'),
      minuteHand = document.querySelector('.min-hand'),
      hourHand = document.querySelector('.hour-hand');

function setDate() {
  const now = new Date();
  const seconds = now.getSeconds(),
        mins = now.getMinutes(),
        hours = now.getHours();
  const secondDegrees = ((seconds / 60) * 360) + 90;
  const minDegrees = ((mins / 60) * 360) + 90;
  const hourDegrees = ((hours / 12) * 360) + 90;

  secondHand.style.transform = `rotate(${secondDegrees}deg)`;
  minuteHand.style.transform = `rotate(${minDegrees}deg)`;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}

setInterval(setDate, 1000)
