// functions  : a blosk of code that performs a particular task

function sayHello(name){
    console.log("hey " + name);
}


// parnethesis are must 
sayHello("prachi");
sayHello("manohar");
sayHello("shubhman");

function addTwoNum(a,b){
// argument : a and b 
return a + b;
}

let result = addTwoNum(8,9); /// parameters : 8 and 9 
console.log(result);

// write a function who accept unlimited argument and give result 

// unlimited arguments accept 
// spread operation is being used 
function sum(...arg){
    let total = 0;
    console.log(arguments) // agruments -> objects with index number and length 
    for(let i=0; i<arg.length; i++){
        total += arg[i];
    }

    return total;
}

let sum1 = sum(10,200,310);
let sum2 = sum(12,3)
let sum3 = sum(1,2,3)

console.log(sum1);
console.log(sum2);
console.log(sum3);



