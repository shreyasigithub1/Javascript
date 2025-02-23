//For Array
//Usually for-of loop is used for Array 

const myArray=[2,4,5,1,7];

for(let n of myArray){
    console.log(n);
}

//For Objects
//Usually for-in loop is used for Objects 

const myobj={
    username:"John",
    userId:75,
    Address:"Kolkata"

}
for(let n in myobj){
console.log(`${n} : ${myobj[n]}`);
}

//forEach loop 
/**
 * It is not a loop
 * It is a method on array
 */

myArray.forEach((a) => console.log(a));