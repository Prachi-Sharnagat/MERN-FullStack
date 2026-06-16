// promises 
let a = 10;
let b = 20;
// synchronous -> gives instant result 
// asynchrounous -> wait for some time and then gives a result

// fetch karte hai api se data then it may take time to display results which are coming from apis
// this types of task know as asynchronous task + return a promise

// url fetch 
let resultFromServer = fetch("https://jsonplaceholder.typicode.com/posts");

console.log(resultFromServer); // ressult pending: it results a asychonous task
// promise return 
// Promise(<pending>) and then go ahead to execute further code

// await use in function + function should be async

// await is used to wait for a Promise to finish before moving to the next line of code.
let c = 10, d= 20;
// prefer this code + await use 
async function getData(){
    let res = await fetch("https://jsonplaceholder.typicode.com/posts");
    console.log(res);
    console.log(await res.json());
}

getData(); // call 

console.log(d+c); // first execute 

//  one more way if fetch run proper not run :

fetch("https://jsonplaceholder.typicode.com/posts")
.then((data)=>{console.log(data)}) // correctly run
.catch((error)=>{ console.log(error)})  // throws error 


// finally run every condition