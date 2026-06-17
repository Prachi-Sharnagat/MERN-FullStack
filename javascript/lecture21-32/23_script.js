// closures + practical use case 
// mozilla docs read

function main(){
    const myname = "prachi"; // lexical enironment
    function Display(){ // this is a closure
        console.log(myname); 
    }
    return Display;
}

// closure is a combination of a functiion bundled together(enclosed) with references to its surrounding state (the lexical enironment).
// closures gives you access to an functions scope from an innner function

  let prachi = main('prachi');
prachi();
prachi();

function Adder(num){
    function add(b){
        console.log(num+b);
    }
    return add;
}

const addition = Adder(5);
addition(5);
addition(6);

const myName = document.getElementById('my-name');
const btn = document.getElementById('btn');

function makeTextSizer(size){

    function changeSize(){
        myName.style.fontSize = `${size}px`
    }

    return changeSize;
}
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// const change1 = makeTextSizer(12);
// const change2 = makeTextSizer(100);
// const change3 = makeTextSizer(50);

btn.addEventListener('click', ()=>{
//     const randomNumber = Math.floor(Math.random() * 100) + 1;
// console.log(randomNumber);
   const changes = makeTextSizer(getRandomNumber(1,100));
   changes();
})

function makeCounter(){
    let count = 0;

    function increment(){
        count = count + 1;
        document.getElementById('cnt-show').innerText = count;
        // console.log(++count);
    }

    function decrement(){
         count = count - 1;
        document.getElementById('cnt-show').innerText = count;
    }

    document.getElementById("btn-increment").onclick= increment;

    document.getElementById("btn-decrement").onclick= decrement;
}

makeCounter();
