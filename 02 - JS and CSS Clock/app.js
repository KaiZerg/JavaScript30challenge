//selecting seconds, min, hours hand;
const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
  //grabing current date;
  const now = new Date();
  //return seconds from current local time;
  const seconds = now.getSeconds();
  //getting % value of seconds and converting to degrees, adding 90deg,
  //because we set as a default rotate(90deg) in css, in order to place arrows to 12 hours;
  const secondsDegrees = ((seconds / 60) * 360) + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
  //setting Minutes
  const minutes = now.getMinutes();
  const minutesDegrees = ((minutes / 60) * 360) + 90;
  minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
  // setting Hours
  const hours = now.getHours();
  const hoursDegrees = ((hours / 12) * 360) + 90;
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
}
//setting interval for function - every second;
setInterval(setDate, 1000);
