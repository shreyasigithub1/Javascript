console.log("Hello");

let x=10;
console.log(x);
x=20;
console.log(x);


let num=10;
let str="Hello";
let bool=true;
let bigNum=10n;

console.log(num.__proto__);
console.log(str.__proto__);
console.log(bool.__proto__);
console.log(bigNum.__proto__);

let birthYear=19;
let rightToVote=birthYear >= 18;
console.log(rightToVote);

let grade=60;
let scholarship =70;
let eligible=(grade>60) && (scholarship>70);
console.log(eligible);

let m1=70;
let m2=55;
let result=(m1>60) || (m2>70);
console.log(result);

let right=false;
console.log(!right);


// Type Coersion

console.log(5+5);

let n1="5" +5; //converting to string
console.log(n1);

let n2="6" -2; //converting to number
console.log(n2);

let n3="6" * 3; //converting to number
console.log(n3);

//Type Conversion

//convert to string
console.log(String(190));
console.log(String(true));
console.log(String(null));
console.log(String(undefined));

//using toString()

console.log((200).toString());
console.log((true).toString());
//Null or undefined values can not be converted to string using toString() method


// Convert to Number

//Number();

console.log(Number('10'));
console.log(Number('Value'));

console.log(Number(true));

//Unary opearator that converts string into a number

let a='123';
console.log(+a);

//parseInt()
console.log(parseInt("133.75d"));
//parseFloat()
console.log(parseFloat("133.75d"));

//Boolean

console.log(Boolean(125));
console.log(Boolean(false));