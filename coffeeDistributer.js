//DO IT LATER



// Do not alter the starter code

const orders = [
    {
      orderNumber: 1,
      items: [
        { name: "Cappuccino", price: 3.5 },
        { name: "Chocolate Croissant", price: 2.5 }
      ]
    },
    {
      orderNumber: 2,
      items: [
        { name: "Latte", price: 4.0 },
        { name: "Blueberry Muffin", price: 2.75 }
      ],
      discountCode: "COFFEELOVER"
    }
  ];
  
  // Function to calculate the total value of all orders
  // Apply discounts if applicable
  function totalOrderValue(orders) {
    // Map over each order to calculate its total value
    // Use the reduce method to sum the prices of all items in the order
    // Check if a discountCode is present and apply the discount using the provided callback function
  
    // Your implementation should:
    // 1. Calculate the total value for each order
    // 2. Apply the discount (if any) using the applyDiscount callback
    // 3. Sum up the totals for all orders
    // 4. Return the final grand total rounded to 2 decimal places


    const firstOrder = orders[0];


    const items = firstOrder.items;


    const cappuccinoPrice = items[0].price;
    
    const sum=orders.reduce((total,currentElement) =>{
        num=cappuccinoPrice;
        console.log(num);
        return total + num;
    },0);

    





  }
  
  //Below is the callback function to calculate the discount
//   const applyDiscount = (discountCode, total) => {
    
    
//     if(orders.discountCode="COFFEELOVER"){
//         total=total-(total-((total*10)/100));
//     }
//     else if(orders.discountCode="TEALOVER"){
//         total=total-(total-((total*20)/100));
//     }
//     else{
//         return total;
//     }
//   };

 totalOrderValue(orders);