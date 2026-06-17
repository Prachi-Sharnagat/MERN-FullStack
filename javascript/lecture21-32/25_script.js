// composition in javascript

function mul(a,b){
    return a*b;
}

function add(a,b){
    return a+b;
}

function square(val){
    return val*val;
}

function addAndSquare(a,b){
    return square(add(a,b));
}

console.log(addAndSquare(7,9));

// composition is use to compose my function 

function composeTwoFunction(fun1, fun2){
    return function(a,b){
        return  fun2(fun1(a,b));
    }
}
//* es6 modern javascript
const composeTwoFunction1 = (fun1,fun2) => (a,b)=>  fun2(fun1(a,b));

const task = composeTwoFunction1(mul, square)
console.log(task(2,3))

//! if want to compose unlimited fuctions

function compose(...fun){
    return function(...values){
       return fun.reduce((a,b)=> b(a), values)
    }
}// modern js 
const composeAll = (...func) => (...values) => func.reduce((a,b)=> b(a) , values)

function multipy(...args){
    return args.reduce((a,b)=> a*b, 1);
}

const task2 = compose(mul,square, function(val){return val+1})
console.log(task2(3,4));