let time = document.querySelector('.time');
let fullDate = document.querySelector('.fullDate');
let fullTime = document.querySelector('.fullTime');
let date = new Date();

setInterval(function(){
    let date = new Date();
    let number = date.getDate();
    let month = date.getMonth() + 1;

    let year = date.getFullYear();
    if (number < 10) number = '0' + number;
    if (month < 10) month = '0' + month;
    fullDate.innerHTML = `${number}.${month}.${year}`;

    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
    if (hour < 10) hour = '0' + hour;
    if (minute < 10) minute = '0' + minute;
    if (second < 10) second = '0' + second;
    fullTime.innerHTML = `${hour}:${minute}:${second}`;
})

// -----------------Stopwatch-------------------

let scoreboard = document.querySelector('.scoreboard');
let stopWatchStart = false;
let stopWatchGo = 0;

setInterval(function(){
    if (stopWatchStart){
        stopWatchGo++;
        let hour = Math.floor(stopWatchGo / 3600);
        let minute = Math.floor((stopWatchGo % 3600) / 60);
        let second = stopWatchGo % 60;

        if (second < 10) second = '0' + second;
        if (minute < 10) minute = '0' + minute;
        if (hour < 10) hour= '0' + hour;
        scoreboard.innerHTML = `${hour}:${minute}:${second}`;
    }
},1000)

let button = document.forms['button-group'];

button.startButton.addEventListener('click',function(){
    stopWatchStart = true;
})

button.stopButton.addEventListener('click',function(){
    stopWatchStart = false;
})

let loopBlock = document.querySelector('.loop-block');

button.loopButton.addEventListener('click',function(){
    loopBlock.innerHTML += `<p>${scoreboard.innerText}</p>`;
})

button.resetButton.addEventListener('click',function(){
    stopWatchGo = 0;
    loopBlock.innerHTML = '';
    scoreboard.innerHTML = `00:00:00`;
    stopWatchStart = false;
})

// -----------------Timer-----------------

let number = document.querySelector('.number');
let startMinutes = +number.innerHTML;
let plusMinus = document.forms['plusMinus'];

plusMinus.plus.addEventListener('click',function(){
    number.innerHTML = ++startMinutes;
    plusMinus.minus.disabled = false;
})

plusMinus.minus.addEventListener('click',function(){
    number.innerHTML = --startMinutes;
    if (startMinutes <= 1) plusMinus.minus.disabled = true;
})

let timerButton = document.forms['timer-button'];
let timerDisplay = document.querySelector('.timer-display');
let timerGo = 0;
let start = false;
let timerInterval = setInterval(function () {
    if (start) {
        const timer = number.innerHTML * 60 - timerGo;
        timerGo++;
        let minutesTimer = Math.floor(timer / 60);
        let secondsTimer = timer % 60;

        if (secondsTimer < 10) secondsTimer = '0' + secondsTimer;
        if (minutesTimer < 10) minutesTimer = '0' + minutesTimer;
        timerDisplay.innerHTML = `${minutesTimer}:${secondsTimer}`;
        if (timer <= 0) clearInterval(timerInterval);
    }
}, 1000)

timerButton.startTimer.addEventListener('click',function(){
    start = true;
})

timerButton.stopTimer.addEventListener('click',function(){
    start = false; 
})

timerButton.resetTimer.addEventListener('click',function(){
    start = false;
    timerGo = 0;
    timerDisplay.innerHTML = `00:00`;
    startMinutes = 25;
    number.innerHTML = startMinutes;
})