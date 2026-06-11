// arrow function 
// 1. syntax
const sayHello = ()=>{ // arrow function 
    console.log("helllw");
}

sayHello();
const add = (a,b) => {
    return a+b;
}
// or directly return as : 
const addNum = (a1 , b1) => a1+b1; 
// when only one line is there then you can use 

console.log(addNum(2,8));
let result = add(10,12)
console.log(result);

// 2. 'aruguments' keywords 
function add1(){
console.log(arguments);
}
add1(10,21,4,5); 
// arguments keyword is only defined in normal function not in arrow function 

// use spread operator in arrow function 
const spreadOp = (...arg) =>{
    let total = 0 ;
    for(let num of arg){
        total += num;
    }
    return total;
}
 console.log(spreadOp(1,2,3,4,5,6,7));

//3 . hoisting

sayHey()

function sayHey(){
    console.log("say hey")
}

// function : we can call function and we can declare 

// but in arrow function we have to declare and then call



// 4. this keyword
// this.name refers to the instance variable of the current object.

const obj = {
    value : 20, // refer into this only
    myFunction : function(){
        console.log(this.value);
    }
}

obj.myFunction();


const obj2 = {
    value : 20,
    myFunction2 : ()=>{
        console.log(this.value); //undefined
    }
}

// arrow function is work on globall levek
// this refer to global window refer 

obj.myFunction2();