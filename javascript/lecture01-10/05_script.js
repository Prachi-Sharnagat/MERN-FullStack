// logical operators
// AND

const age =  21
const  gender = 'male';

if(age >=18 && gender=='male'){
   console.log("adult male")
}
if(age <18 || gender == 'male'){
    console.log('he is male but not adult')
}

if(gender!='female'){
    console.log("gender : male");
}

const num = 5;

if(!(num%2==0)){
    console.log("odd");
}