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
};
const date = new Date();
let totalTime = 0;

refs.startBtn.setAttribute('disabled', true);

calendar.config.onClose.push(function (selectedDates) {
  totalTime = selectedDates[0].getTime() - date.getTime();
  console.log(totalTime);
 } )











