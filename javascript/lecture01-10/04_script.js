// conditional statement 
const age = 22;
if(age>=18){
    console.log("yes you can vote")
}
else if(age > 15){
    console.log("you can make vote id")
}
else{
    console.log("no");
}

const myAge = 80;
// ternary operator

age>=18 ? console.log("yes"): console.log("no");


// switch case

let a = 30;
let operator = '+'
let b = 40

switch(opt){
    case '+' : console.log(a+b);
    break;
    case '-' : console.log(a-b);
    break;
    case '*' : console.log(a*b);
    break;
    default : console.log("idk")
}