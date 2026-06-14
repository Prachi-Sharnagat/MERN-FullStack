// query selector is a way to select tag .class and #id 
// second method is getElementById. write direectly id name

const idGet = document.getElementById('username')
console.log(idGet) // span 
console.log(idGet.innerText);
idGet.innerText = 'Shubhman gill'

idGet.classList.add('red-color','underline') // inject class add ho gya span me 
idGet.classList.remove('red-color'); // remoe class 
// inline styling add using js
idGet.style.textDecoration = 'underline';
idGet.style.color = 'red';

idGet.parentElement.style.backgroundColor = 'gray';
// propertise explore

console.log(idGet.id);
idGet.setAttribute('aria', '123')
// we can set attribute   <span aria = '123'>hey world</span>
idGet.remove(); // whole element gonna remove

