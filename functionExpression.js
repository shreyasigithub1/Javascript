/** Function Declarartion */

function sum(a,b){
    return a+b;
}
const sum1= sum;
console.log(sum1(4,5));


/** Function Expression */


var sum2=function (a,b){
    return a+b;
}
console.log(sum2(4,5));

/**
 * Functions are hoisted If we call the function before declareation it will show the result
 * But the variables are also hoisted but it will result as undefined in case of var
 * and reference error on case of let and const.Because TDZ.
 * Search about hoisting in functions and variables
 */


//Arrow function

/*const prod= (num1,num2) => {
    return num1 * num2;
}
console.log(prod(4,8));*/


const prod= (num1,num2) => num1 * num2;

console.log(prod(4,8));


//IIFE(Immediately Invoked Function Expression)

(function (){
    console.log("IIFE");
})();

(function (a,b){

    console.log(a ** b);
})(4,2);

const user=(function(){  
    const userData={
        userName:'John',
        userAge:20,
    };
    function getName(){
        console.log(userData.userName);
    }
    function updateAge(age){
        console.log(userData.userAge+ age);
    }
    return {getName,updateAge};
})();
console.log(user);
console.log(user.userData);
user.getName();
user.updateAge(5);

/** User is now a object with two properties as the function returns getname and updateAge */