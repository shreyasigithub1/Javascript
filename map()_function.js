/** JS Higher Order Functions
 */

//map() function

const inputs=[2,4,6,8,7];

const squaredArray= inputs.map(function(currentElement){
    return currentElement * currentElement;
});


const square=inputs.map(
    (num) => num * num
);

console.log(squaredArray);
console.log(square);