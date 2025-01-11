const inputs=[4,10,2,-3,-2,5,9,-1];

const positives=inputs.filter(noNegative);

function noNegative(num){
    return num > 0;
}
console.log(positives);


const negatives=inputs.filter((num) => num<0);

// function noPositive(num){
//     return num < 0;
// }
console.log(negatives);