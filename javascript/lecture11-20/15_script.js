// dom selector : 
// clss select 

const ele = document.getElementsByClassName('block') // it select multiple class 

for(let i=0; i<ele.length; i++){
    // console.log(ele.item(i));  // .item[i] is a  method
    ele.item(i).style.background = 'blue';
}
// const removeclass = document.getElementsByClassName('removeClass');


// for(let i=0; i<removeclass.length; i++){
//     // console.log(ele.item(i));  // .item[i] is a  method
//     removeclass.item(i).classList.remove('removeClass');
// }

const removeclass = document.getElementsByClassName('removeClass');

// Start from the last index and go down to 0
for(let i = removeclass.length - 1; i >= 0; i--){
    removeclass.item(i).classList.remove('removeClass');
}
// query selector me foreach can be use 
//but not in getElementsByClassName 

console.log(removeclass.classList)
/// text remoe 