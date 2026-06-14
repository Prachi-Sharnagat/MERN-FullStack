// array : 
const students = ['prachi', 'shubhman', 'manu'];
console.log(students);
console.log(students.length);
students[0] == 'prachi sharnagat' // but const cannoot change
// here we cannot change full array
console.log(students[0]);

students.push('alex')
console.log(students);

// other language : array -> homogenous (same datatype value put)

// but in javascript we can put heterogenous value

const myArr = [1,'prachi',  "emoji" ]
myArr.push("sharnagat")

console.log(myArr);
console.log(myArr.indexOf('prachi')); // you can search for element

myArr.pop()

console.log(myArr);

students.reverse();
console.log(students)