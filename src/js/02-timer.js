import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
};
const calendar = new flatpickr("#datetime-picker", options);


const refs = {
  startBtn: document.querySelector('button[data-start]'),
  days: document.querySelector('.value[data-days]'),
  hours: document.querySelector('.value[data-hours]'),
  minutes: document.querySelector('.value[data-minutes]'),
  seconds: document.querySelector('.value[data-seconds]')
};

let selectedDate = 0;
let timeLeft = 0;

refs.startBtn.setAttribute('disabled', true);
refs.startBtn.addEventListener('click', onStartTime);


calendar.config.onClose.push(function (selectedDates) {
  if (selectedDates[0].getTime() <= Date.now()) {
    refs.startBtn.setAttribute('disabled', true);
    return window.alert("Please choose a date in the future");
  }
  refs.startBtn.removeAttribute('disabled');
  selectedDate = selectedDates[0].getTime();
});

function subtractTime() {
  timeLeft = selectedDate -  Date.now();
  console.log( timeLeft);
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function onStartTime() {
  subtractTime();
  const timeLeftObf = convertMs(timeLeft);
  refs.days.textContent = timeLeftObf.days;
  refs.hours.textContent = timeLeftObf.hours;
  refs.minutes.textContent = timeLeftObf.minutes;
  refs.seconds.textContent = timeLeftObf.seconds;
  
}











