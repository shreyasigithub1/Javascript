const radiusArray=[2,4,6,8];

function calculateArea(number){
    return (Math.PI * number * number) ;
}

function calculateCircumference(number){
    return ( 2 * Math.PI * number) ;
}

function calculatedDiameter(number){
    return (2 *  number) ;
}

function calculate(array,fn){
    const newArray=[];
    for(let i of radiusArray){
      newArray.push(fn(i));
    }
    return newArray;
}

console.log(calculate(radiusArray,calculateArea));
console.log(calculate(radiusArray,calculateCircumference));
console.log(calculate(radiusArray,calculatedDiameter));