//Function declaration or function statements

function multiplication(num1,num2){
return num1 * num2;
}

const result=multiplication(4,2);
console.log(result);

//Function expression

const sum=function(num1,num2){ //it is also an anonymous function
    return num1+num2;
}
console.log(sum(6,8));

//named  function expression

const subtract=function xyz (num1,num2){
    return num1-num2;
}
//console.log(xyz(6,2));
console.log(subtract(90,80));

//First class functions and first class citizens

//1.Function can act as a value
const b=function(){

}

//2.function can act as a argument

const c=function(param1){
    console.log("Function is passed as an argument");
    console.log(param1);
    
}
function a(num1,num2 ){
    return num1 *num2;
}
c(a(5,6)) ;//passing the value here //Immediately invoking the function a and passing the value  
c(a); //Only passing the function here 

//3.Function can be returned from another function
const d=function(param1){

    return function a(num1,num2 ){
        return num1 *num2;
    }  
    
}

console.log(d(2)(3,4));
