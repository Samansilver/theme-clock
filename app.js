const hourEl = document.querySelector('.hour');
const minuteEl = document.querySelector('.minute');
const secondEl = document.querySelector('.second');
const toggleEl = document.querySelector('.toggle');
const timeEl = document.querySelector('.time');
const dateEl = document.querySelector('.date');


const days = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];
const months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

// theme

toggleEl.addEventListener('click', (e) => {
  const html = document.querySelector('html');

  if (html.classList.contains('dark')) {
    html.classList.remove('dark');
    e.target.innerText = 'Dark Mode';
  } else {
    html.classList.add('dark');
    e.target.innerText = 'Light Mode';
  }
});

function setTime() {
  const time = new Date();
  const month = time.getMonth();
  const day = time.getDay();
  const date = time.getDate();
  const hour = time.getHours();
  const hourForClock = hour % 12;
  const minute = time.getMinutes();
  const second = time.getSeconds();
  const ampm = hour >= 12 ? 'PM' : 'AM';

  hourEl.style.transform = `translate(-50%, -100%) rotate(${scale(
    hourForClock,
    0,
    11,
    0,
    360
  )}deg)`;

  minuteEl.style.transform = `translate(-50%, -100%) rotate(${scale(
    minute,
    0,
    59,
    0,
    360
  )}deg)`;

  secondEl.style.transform = `translate(-50%, -100%) rotate(${scale(
    second,
    0,
    59,
    0,
    360
  )}deg)`;

  timeEl.innerHTML = `${hourForClock}:${
    minute < 10 ? ` 0${minute}` : minute
  } ${ampm}`;

  dateEl.innerHTML = `${days[day]} , ${months[month]} <span class="circle">${date}</span>`;
}

function scale(number, inMin, inMax, outMin, outMax) {
  return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}

setTime();
setInterval(setTime, 1000);
