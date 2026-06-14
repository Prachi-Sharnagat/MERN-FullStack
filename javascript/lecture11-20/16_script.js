function handleButtonClick(){
    console.log('button is clicked');
    alert('hey finally clicked')
}

const EleButton = document.getElementById("clickButton")
EleButton.onclick = function(){
    console.log("third way click")
    alert("third way")
}
// override latest one run 
function doSomething(){
    console.log("clicked by event listener");
    alert('hello ji add listner')
}
EleButton.addEventListener('click' , doSomething);

const changeRed = document.getElementById("color-change");

function changeColor(){
    if(this.style.background==='red'){
        this.style.background = 'blue';
    }
    else{
        this.style.background = 'red';

    }
}

changeRed.addEventListener('click', changeColor);

// remoe element jispe click kiya 

const allChildren = document.querySelector('body').children;
console.log(allChildren);

for(let i=0; i<allChildren.length; i++){
    allChildren.item(i).addEventListener('click', ()=> allChildren.item(i).remove());
}

// onclick overide hota hai 
// addEventListener overide nhi hota