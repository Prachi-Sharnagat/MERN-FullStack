const button = document.getElementById('btn')
const timeDis = document.getElementById('time-clock');

function showTime(){
    const currenTime = new Date();
    const time = `${currenTime.getHours()}:${currenTime.getMinutes()}:${currenTime.getSeconds()}`
    timeDis.innerText = time;
}

// button.addEventListener('click',()=>{
//     const result = showTime();
//     timeDis.innerText = result; // no movement in time
// })


// setTimeout ()
// setInterval()

setTimeout(()=>{
    showTime, 1000
}); // runs after some second 5000 milisecond