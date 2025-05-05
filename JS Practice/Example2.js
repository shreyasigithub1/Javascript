//Execution context
//let and const is block scoped and will be under "script" in browser
//var is function scoped and will be under "Global" in browser
let num = 4;
function square(n) {
    return n * n;
}
let square1 = square(num);
console.log(square1);

//Hoisting

console.log(a);//undefined //this happens in memory creation phase when all the variables are assigned "undefined"
console.log(print);//this happens in memory creation phase when all the functions are assigned the whole function
console.log(b);//reference error//can not access b before initialization
console.log(c);//reference error//can not access b before initialization

// print();//functions are hoisted

// var a = 12;
// let b = 2;
// const c = 3;

// function print() {
//     console.log("Javascript");
// }

//Lexical Environment and scope chain

// function b() {
//     console.log(a);
// }
// let a = 10;
// b();

//Block scope

// {
//     var a = 2;
//     let b = 3;
//     let c = 4;
// }
// console.log(a,b,c)

//closure

// function x() {
//   let a = 2;
//   function y() {
//     console.log(a);
//   }

//   return y; //the function and the lexical scope of the parent was returned
// }
// let z = x();
// console.log(z);
// z();

//function statement
function a() {
  console.log("Javascript");
}

//function expression

let b = function () {
  return "Javascript";
};
console.log(b());

//function declaration
function a() {
  console.log("Javascript");
}

//anonymous function
let c = function () {
  return "Javascript";
};

//Named function expression
let d = function xyz() {
  return "Javascript";
};
console.log(d());

//console.log(xyz());//It is not allowed

//arrow function

const add = (a, b) => console.log(a + b);

add(2, 3);

//IIFE

(function (a, b) {
  console.log(a + b);
})(7, 3);

((a, b) => console.log(a + b))(1, 8);

const user = (function () {
  let obj = { name: "User", id: 1 };
  function getname() {
    console.log(obj.name);
  }
  function getid() {
    console.log(obj.id);
  }
  return { getname, getid };
})();
user.getname();

//Callback functions

function greeting(wish) {
  console.log(`${wish()} Good Morning`);
}
function Hi() {
  return "Hi,";
}
greeting(Hi);

//Higher order function

function x() {
  console.log("Callback function");
}

function y(x) {
  //higher order function//takes a function as an argument and also retuns a function
  x();
}
y(x);

//Currying

function sum1(a, b, c) {
  console.log(a + b + c);
}
sum1(3, 6, 4);

function sum2(a) {
  //This is currying
  return function (b) {
    return function (c) {
      console.log(a + b + c);
    };
  };
}

sum2(3)(6)(4);

function pow(a, b) {
  return a ** b;
}
console.log(pow(2, 2));
console.log(pow(3, 2));

function power(a) {
  return function (b) {
    return b ** a;
  };
}


const cube = power(3);
console.log(cube(2));

const square = power(2);
console.log(square(5)); // 25
console.log(square(3)); // 9

//ForEach function

const books = [
  "The Hobbit",
  "To Kill a Mockingbird",
  "The Great Gatsby",
  "Pride and Prejudice",
];
books.forEach((n) => console.log(n));

let booksNamearray = [];

const booksName = books.map((n) => {
    console.log(n);
  booksNamearray.push(n);
});
//console.log(booksNamearray);

let arr = [1, 2, 6, 3, 9];

arr.forEach((n) => {return (n)});
//Map
const added = arr.map((n) => { return (n + 10) });
console.log(added);//Automatically retuns an array
//Filter
const filterNumbers = arr.filter((n) => n > 5);
console.log(filterNumbers);//Automatically returns an array
//Reduce
const addReduce = arr.reduce(((acc, num) => acc + num), 0);//0 is current Value which will be assigned to accumulator
console.log(addReduce);

//find and findIndex

const find1 = arr.find((n) => n > 5);
console.log(find1);//returns only one element//whereas filter retuns an array

const find2 = arr.findIndex((num) => num > 5);
console.log(find2);//give the index of the number greater than 5