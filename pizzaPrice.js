// Function to calculate the price of a pizza based on size, toppings, and quantity
function pizzaPricing(size) {
  
    // Create an object to store the base prices for each pizza size
    let prices={
        small: 8.00,
        medium: 10.00,
        large: 12.00
    };
    
    // Return a function(curried function) that takes the selected toppings as a parameter
    return function(toppingsArray){
        let toppings=toppingsArray.length;
        return function(quantity){
            return ((prices[size] + (toppings * 1.5)) * quantity).toFixed(2);
        }

    }
  
      // Return another function inside the curried function that takes the quantity as a parameter
      
  }

  console.log(pizzaPricing('large')(['bacon', 'cheese'])(1));
  
  