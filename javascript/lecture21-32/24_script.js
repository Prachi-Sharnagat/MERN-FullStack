// javascript curry 
function add(a,b,c){
    return a+b+c;
}
console.log(add(2,4,7));
const add1 = (a) => (b) => (c) => a+b+c;
// curring eg :
// getting all from different paraameters if even one missing it will not return 
 function adding(a){
    return function(b){
        return function(c){
            return a+b+c;
        }
    }
 }

const res = adding(2)(3)(9);
console.log(res);

function sendAutoEmail(to){
    return function(subject){
        return function(body){
            console.log(`sending email to ${to}, with subject ${subject}: ${body} `)
        };
    };
};

// modern js 
const sendAutoEmail1 = (to) => (subject) => (body)=>`sending email to ${to}, with subject ${subject}: ${body} `

/// function curry has been used
let step1 = sendAutoEmail('24sharnagat');
let step2 = step1("new order arrived");
let step3 = step2("your parcelhaas been arrived please confirm by calling in given num")