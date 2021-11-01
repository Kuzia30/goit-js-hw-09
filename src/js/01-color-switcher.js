const startEl = document.querySelector('button[data-start]');
const stopEl = document.querySelector('button[data-stop]');
const bodyEl = startEl.parentNode;


startEl.addEventListener('click', onStartChangeColor)
let changeColorId = 0;
stopEl.setAttribute('disabled', true);

function onStartChangeColor(evt) {
    if (!changeColorId) {
        changeColorId = setInterval(onChangeColor, 1000);
        startEl.setAttribute('disabled', true);
        stopEl.removeAttribute('disabled');
 }   
};

stopEl.addEventListener('click', onStopChangeColor);

function onStopChangeColor() {
    if (changeColorId) {
        clearInterval(changeColorId);
        changeColorId = 0;
        startEl.removeAttribute('disabled');
        stopEl.setAttribute('disabled', true);
 }   
}

function onChangeColor() {
    bodyEl.style.backgroundColor = getRandomHexColor();
}
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}