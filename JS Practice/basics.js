//"use strict";

let num = "hello";
// console.log(typeof num);//string
// console.log(num.__proto__);//object

// //console.log(a);
// const a = 10;

 const sum1 = ( (a, b) => {return this});
const sum2 = ( function (a, b) { return this });

console.log(sum1(6, 8));

console.log(sum2(6, 8));


