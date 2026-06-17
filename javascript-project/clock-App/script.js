const stopButton = document.getElementById('btn')
const timeDisplay = document.getElementById('time-clock');
const startButton = document.getElementById('start-btn')
const input = document.getElementById('input');
const buttonEnter = document.getElementById('btn-enter')
const stopWatch = document.getElementById('stop-watch')

function showTime(){
    const currenTime = new Date();
    const time = `${currenTime.getHours()}:${currenTime.getMinutes()}:${currenTime.getSeconds()}`
    timeDisplay.innerText = time;
}


// button.addEventListener('click',()=>{
//     const result = showTime();
//     timeDis.innerText = result; // no movement in time
// })
// showTime();

// setTimeout (): run particular function after some second (function, time in milisecond)
//  

// setInterval() : har baar run karte rahgea


// setTimeout(showTime, 1000); // runs after some second 5000 milisecond
const interval = setInterval(showTime, 1000); // 1 second call again

stopButton.addEventListener('click', ()=>{
    clearInterval(interval); // interval is stop
    // clearInterval(inter);
})

startButton.addEventListener('click',()=>{
    setInterval(showTime,1000);
})


function Timer(){
    const currenTime = new Date();
    const time = `${currenTime.getHours()}:${currenTime.getMinutes()}:${currenTime.getSeconds()}`
    stopWatch.innerText = time;
}

buttonEnter.addEventListener('click', ()=>{
    const limit = Number(input.value);
    let second = 0;
    const inter = setInterval(()=>{
        second++;
        // showTime()
        Timer();
        if(second >= limit){
            // clearInterval(inter);
            stopButton.click();
        }
    },1000);


})
