// high order and callback
// high order function : a function that takes a function as an argument

// api call -> use 
// high order function 
function abc(a,b,callback){
let result = a+b ;
 callback(result);
}

abc(2,4, function(val){
    console.log(val);
});


abc(3,2, (val)=>{
    console.log(val);
})


function mul(a,b,cb){
    let res = a*b;
    cb(res);
    return ()=>{ console.log(res)};
}

mul(10,2,()=>{

});

// callback problem : promises use 