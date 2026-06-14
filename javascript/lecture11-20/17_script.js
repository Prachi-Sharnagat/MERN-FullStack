// create elements dynamically in js
const button = document.getElementById('clickButton');
const container = document.getElementById('my-container');
let cnt = 1;
button.addEventListener("click", ()=>{
    const ele = document.createElement('h1');
        ele.innerText= 'hey prachi  ' + cnt;
        // container.innerHTML = '<h1>hey i have been created by click</h1>'
        // but i want repeated oon click it should be added
        container.appendChild(ele);
        cnt++;

})
// this is how we can add dynamically to dom

