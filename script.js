let timer;
let minutes = 25;
let seconds = 0;
let isRunning = false;

const timerDisplay = document.getElementById("timer");
const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const resetBtn = document.getElementById("reset");

function updateDisplay() {
  let min = String(minutes).padStart(2, '0');
  let sec = String(seconds).padStart(2, '0');
  timerDisplay.textContent = `${min} : ${sec}`;
}

function countdown() {
  if (minutes === 0 && seconds === 0) {
    clearInterval(timer);
    isRunning = false;
    return;
  }
  if (seconds === 0) {
    minutes--;
    seconds = 59;
  } else {
    seconds--;
  }
  updateDisplay();
}

startBtn.addEventListener("click", () => {
  if (!isRunning) {
    timer = setInterval(countdown, 1000);
    isRunning = true;
  }
});

stopBtn.addEventListener("click", () => {
  clearInterval(timer);
  isRunning = false;
});

resetBtn.addEventListener("click", () => {
  clearInterval(timer);
  minutes = 25;
  seconds = 0;
  updateDisplay();
  isRunning = false;
});

updateDisplay();
