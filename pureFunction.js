//Pure Function

function divide (num1,num2){
    return (num1/num2);
}
console.log(divide(4,2));


//Impure function

discount=25;

function calculatePrice(price){
    return (price-discount);
     
}

console.log( calculatePrice(40));

/**
 * This is called an impure function because it has involvement of the outside parameter 'discount'
 */