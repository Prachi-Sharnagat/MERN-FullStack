// guess number :  

let num =  53;
let guess;

do {
    guess = parseInt(prompt("enter the number : "));
    if(guess == num) {
        alert("winner")
        break;
    }
    // prompt ->  string
}while(guess!=0);