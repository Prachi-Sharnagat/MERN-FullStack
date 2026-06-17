const stopButton = document.getElementById('btn');
const timeDisplay = document.getElementById('time-clock');
const startButton = document.getElementById('start-btn');
const input = document.getElementById('input');
const buttonEnter = document.getElementById('btn-enter');
const stopWatch = document.getElementById('stop-watch');

let clockInterval;
let timerInterval;

// Digital Clock
function showTime() {
    const currentTime = new Date();
    const time = currentTime.toLocaleTimeString();
    timeDisplay.innerText = time;
}

// Start Clock
startButton.addEventListener('click', () => {
    clearInterval(clockInterval);
    showTime();
    clockInterval = setInterval(showTime, 1000);
});

// Stop Clock
stopButton.addEventListener('click', () => {
    clearInterval(clockInterval);
    clearInterval(timerInterval);
});

// Countdown Timer
buttonEnter.addEventListener('click', () => {
    let timeLeft = Number(input.value);

    if (isNaN(timeLeft) || timeLeft <= 0) {
        alert("Enter a valid number");
        return;
    }

    clearInterval(timerInterval);

    stopWatch.innerText = timeLeft;

    timerInterval = setInterval(() => {
        timeLeft--;
        stopWatch.innerText = timeLeft;

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            stopWatch.innerText = "Time's Up!";
        }
    }, 1000);
});