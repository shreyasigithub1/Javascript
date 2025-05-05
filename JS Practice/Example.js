let num = 10;
//console.log(num.__proto__);
//console.log(typeof num);
let str1 = "Javascript is woinderful    ";
let str2 = "You should learn it";
//console.log(str1.__proto__);
//console.log(typeof str1);

let b = num.toString();
//console.log(b.__proto__);
//console.log(typeof b);

// console.log(str1.charAt(1));
// console.log(str1.concat(str2));
// console.log(str1.endsWith("h"));
// console.log(str1.startsWith("J"));
// console.log(str1.includes("Z"));
// console.log(str1.indexOf("J"));
// console.log(str1.lastIndexOf("i")); //16
// console.log(str1.indexOf("i")); //7
// console.log(str1.replace("J", "K"));
// console.log(str1); //String is immutable.The value is not changing.
// console.log(str1.replaceAll("i", "v"));
// console.log(str1.replace("i", "v"));
console.log(str1.slice(-9, -4));
// console.log(str1.split("i"));
// console.log(str1.split(" "));
// console.log(str1.substring(2, 4));
console.log(str1.slice(3));
// console.log(str1.substring(-2));
// console.log(str1.toLowerCase());
// console.log(str1.toUpperCase());
// console.log(str1.trim());

// let str3 = "56";//string

// console.log(num.toString());//converted num to string
// console.log(Number(str3));//number
// console.log(parseInt("122.54d"));//only returns the int value
// console.log(parseFloat("122.54d"));//only returns the float value

// console.log(str1.length());
//array is not immutable it changes with every operation
let arr = [7, 2, 9, 4];
console.log(arr.push(6)); //returns the new length
console.log(arr);
console.log(arr.pop()); //returns the last element which is removed
console.log(arr);
console.log(arr.sort());
console.log(arr.indexOf(7));
console.log(arr.slice(1, 2)); //end point excluded//returns a new array
console.log(arr.splice(1, 2)); //remove 2 elements starting from 1

//console.log(global);

//Closure
function x() {
  let a = 3;
  function y() {
    console.log(a);
  }
  return y;
}
let z = x();
//console.log(z);
z();

//call,apply,bind
const person = {
  title: "Alice",
};

function greet(name) {
  console.log(`Hi ${name},I am ${this.title}`);
}

greet.call(person, "John");
greet.apply(person, ["John"]);
const greetUser = greet.bind(person);
greetUser("John");

const duplicateArray = [1, 2, 2, 3, 1, 3, 4, 1, 4, 5];
const uniqueArray = duplicateArray.filter((value, index) => {
  console.log(`The value is ${value} and the index is ${index}`);
  //The value is 1 and the index is 0
  //The value is 2 and the index is 1
  return duplicateArray.indexOf(value) === index;
});

console.log(uniqueArray); // Output: [1, 2, 3, 4, 5]
  //The .indexOf(value) method always returns the first occurrence index of value in the array,
//no matter where the current iteration is.
  


