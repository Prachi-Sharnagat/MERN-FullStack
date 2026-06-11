// datatype : 
// number 
// strings 
// booleans
// null
// undefined 
// objects

// + - * /
let num = 3.14;
let num2 =  10;

console.log(num + num2);

let firstName = "prachu";
const lastName = "sharnagat";

console.log(firstName + lastName);

// booleans
let isLoggedIn = true;
console.log(isLoggedIn)
console.log(isLoggedIn + 10); // outpuft : 11 
// isLoggedIn is true (1)

// NULL -> any vallue nhi hai tuarant  
let lastLoginDate = null;

// undefined -> hai hi nhi  ye define hi nhi hai 
let val = undefined;

// objects : key value pair  
const  person = {
    name :'prachi',
    lastName : 'sharnagat',
    age : 21,
    isLoggedIn: true,
    lastLoginDate : null,
}

console.log(person.age);
// js -> 1 : true , 0: false
// string '1' + '1' - sstring
// string + number - string
// string * num = num
console.log('1' + '1') // 11 
console.log('1' + 1); // 11
console.log('123'*2) // 246

// typeof operator 
console.log(typeof lastLoginDate)
console.log(typeof person)
console.log(typeof ('123'*2) )
