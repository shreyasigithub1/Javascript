/** Scope */

//Global
//Functional(Local)
//Block

{
var varNum=10;
let letNum=20;
const constNum =30;
console.log(varNum,letNum,constNum);
}


function print(){
    var varLocal=10;
    let letLocal=20;
     const constLocal =30;
     
     console.log(varLocal,letLocal,constLocal);
     console.log(varNum,letNum,constNum);
}
console.log(varNum,letNum,constNum);

print();
console.log(varLocal,letLocal,constLocal);