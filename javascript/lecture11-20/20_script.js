// local storage in js 
// browser -> parmanent storage 
// evvent after refresh it whill still have that data

const btn = document.getElementById('clickButton')
const username = document.getElementById('username')
const user = document.getElementById('user');
btn.addEventListener('click', ()=>{
    const value = username.value;
    console.log(value);
    // local storage value store
    // localStorage.getItem('name')
    localStorage.setItem('name', value);
    user.innerText = localStorage.getItem('name');
    // location.reload is also an option
})
window.addEventListener('load', ()=>{
    const val = localStorage.getItem('name');
    user.innerText = val;
})  


