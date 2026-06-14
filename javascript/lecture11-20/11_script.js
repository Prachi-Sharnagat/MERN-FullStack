// array : 
// map, find , slice , methods

const students = ['prachi', 'shubhman', 'manu'];
console.log(students);

for(let i=0; i<students.length; i++){
    console.log(students[i]);
}

// methods 


function print(n){
    console.log(n);
}


students.forEach(print);

students.forEach((val)=> console.log(val))
// for each is a high level function which 
// high order function (arguments pass karta hai for each by default)

students.map((val)=> console.log(val));
// for each return nothing while .map returns new array 

const nums = [1,2,3,4,5,6,7,8,9];
let newArr = [];
// difference : 

nums.forEach((val)=>{
    console.log(newArr.push(val*2));
    })

console.log(newArr);

let newArr2 = nums.forEach((val)=>{
    return val*2
    })
console.log(newArr2); // undefined because for each return nothing

let mapArr = nums.map((val)=> val * 3);
console.log(mapArr) // meanwhile map return a value 


// nums.map((val)=>{
//     val *= 2;
// })

// console.log(nums);
console.log(nums);
let element = nums.find(num => num==10);
console.log(element); // undefined 10 is not in the array 
let index = nums.findIndex(num => num==3);
console.log(index);
console.log(nums[index]);

let tenExist =  nums.includes(10)  // boolean value return 
console.log(tenExist);

let newARR3 = nums.filter((num)=> num%2==0) // filter form existing alues and stored in newARR3 

console.log(newARR3);

//  slice when we wnat subpart of existing array 

let newARR5 = nums.slice(1,3); // include left side exclude right side
// we have given index

console.log(newARR5);

// splice : remove element from the existing array permannently 
// and return removed element 

let newARR6 = nums.splice(1,5); // include both
console.log(newARR6)
console.log(nums);