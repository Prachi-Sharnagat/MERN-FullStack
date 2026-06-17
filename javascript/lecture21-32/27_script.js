// IIFE : immediately inoked function expression 
(function add(a,b){
    console.log(a+b);
})(2,3)
//! immediately called

// (function say(){
//     console.log('hey prachi');
// })();

// (()=> console.log("i am es6"))()

const res  = (function val(ans){
    return ans;
})(100)

//& IIFE is a js function that runs as soon as it is defined
// we can do  asyn call inside function 

// avoid polluting global namespace : advantage of iife 

//! execute async promises : advantage

// let data ;
// async function getData(){
//     data = await fetch();
// }


// getData();

// more clean
// use iife
// const data1 = (async ()=> await fetch() )()
// data value promise

// module pattern : 

// atm design 
const atm = function(initialBalanace){
    let balance = initialBalanace; // this is a private variable
    function withDraw(amt){
        if(amt> balance){
            console.log("are you kidding ?")
        }
        else{
            balance = balance - amt;
            return balance;
        }
    }
    return {withDraw};
};

const prachi = atm(1000);

// console.log(prachi(1300));
console.log(prachi.withDraw(10000))