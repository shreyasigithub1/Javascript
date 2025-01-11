const fruits = [
  'Apple',
  'Mango',
  'Kiwi',
  'Berry',
  'banana',
  'lichi',
];

//Binding Pattern
//const [a,m]=fruits;
//console.log(a,m);

 //const [a, , , k] = fruits;
 //console.log(a, k);


 //const [a,m,...f]=fruits;
//console.log(f);
const [a, m, ...[, be, ba]] = fruits;
console.log(ba);


let x=10;
let y=20;

[x,y]=[y,x];
console.log(x,y);
