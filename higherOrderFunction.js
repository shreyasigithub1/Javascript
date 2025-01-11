/** Higher Order Functions */
// const inputs = [2, 5, 7, 8, 9, 12, 20];

// function calculate(input, operation) {
//   const output = [];
//   for (let number of input) {
//     output.push(operation(number));
//   }
//   return output;
// }

// function cubic(number) {
//   return number * number * number;
// }

// function square(number) {
//   return number * number;
// }

// const cube3 = calculate(inputs, cubic);
// console.log(cube3);
// const square2 = calculate(inputs, square);
// console.log(square2);

function main() {
  // Define the array to be processed
  const array = [2, 4, 6, 2, 7, 8];

  // Create the customMap function with two arguments
  function customMap(array, callbackFn) {
   
    const output = [];
    
    for (let n of array) {
      output.push(callbackFn(n));
    }
    console.log(output);
  }
  function double(number) {
    return number * 2;
  }

  function square(number) {
    return number * number;
  }

  customMap(array, double);  
  customMap(array, square);  

  return customMap;
}

main();
