// dom manupilation : 

// document object model 

const myName = prompt('what is your name ?' , "prachi");
console.log(myName);

console.log(window);
// console exists in browser and browser exist iin window
window.console.log(myName);
// by defaullt it takes from window object 
window.alert("hey there")
// internally it takes from window 

console.log(window.document);

console.log(document.title);
doocument.title = "dom manipulation"
console.log(document.title);


console,log(document.body) // code ki body 

document.write("this is hacked") // on browser we can wwrite on screen 

const myName = prompt("whats your name ? ");;
document.write("hello " + myName);
