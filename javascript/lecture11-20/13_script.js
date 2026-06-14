/// dom manipulation usinng query selector 
// query selector 

// selectors : tag name , .class , #id

const body = document.querySelector('body')
// body.innerHTML = '<h1>hacked</h1>' // we change inner html of the body

console.log(body.innerHTML);

const div = document.querySelector("div");
console.log(div.innerHTML);
// div.innerHTML = "<h4>my div is hacked</h4>"

// this is dom manipulatoion because we are changing dom 
// div 1 is only affected 
// means top ka div change hoga 

// querySelector -> first element ko lega and change karega 
// but querySelectorAll -> sabhi div ko change kar deta

const preChange = document.querySelector('pre');
preChange.innerHTML = ' <code>hello</code>';

const username = document.querySelector('#username');
username.innerText = 'shubhman gill'

const blockClass = document.querySelector('.block')
blockClass.innerHTML =  '<p> welcome to changed website </p>'

console.log(blockClass);
// console.log(blockClass.children);
const DivChild = document.querySelector('div')
console.log(DivChild.children)
console.log(DivChild.parentElement)
console.log(DivChild.parentElement.children)

const ele = document.querySelectorAll('.block');
console.log(ele);
ele.forEach((val)=>{
    console.log(val.innerHTML)
})


// query selector :
// tag 
// .class
// #id
