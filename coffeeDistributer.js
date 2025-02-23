// Do not alter the starter code

const orders = [
  {
    orderNumber: 1,
    items: [
      { name: "Cappuccino", price: 3.5 },
      { name: "Chocolate Croissant", price: 2.5 },
    ],
  },
  {
    orderNumber: 2,
    items: [
      { name: "Latte", price: 4.0 },
      { name: "Blueberry Muffin", price: 2.75 },
    ],
    discountCode: "COFFEELOVER",
  },
];

// Function to calculate the total value of all orders
// Apply discounts if applicable
function totalOrderValue(orders, applyDiscount) {
  // Map over each order to calculate its total value
  // Use the reduce method to sum the prices of all items in the order
  // Check if a discountCode is present and apply the discount using the provided callback function

  // Your implementation should:
  // 1. Calculate the total value for each order
  // 2. Apply the discount (if any) using the applyDiscount callback
  // 3. Sum up the totals for all orders
  // 4. Return the final grand total rounded to 2 decimal places

  
  // const total = orders.map(
  //   (num) => num.items.map((n) => n.price).reduce((acc, cval) => acc + cval),
  //   0
  // );
  // console.log(total);

  // const discounts=(orders.map(
  //   (num) => num.discountCode));
  // console.log(discounts);

  // const discountedTotal = orders.map((order, index) => {
  //   const subtotal = total[index];
  //   const discountCode = discounts[index];
  //   return discountCode
  //     ? applyDiscount(discountCode, subtotal)
  //     : subtotal;
  // });
  // console.log("Discounted Totals:", discountedTotal);
  
 
  const grandTotal = orders.map((order) => {
      
    const subtotal = order.items.reduce((sum, item) => sum + item.price, 0);
    
    return order.discountCode ? applyDiscount(order.discountCode, subtotal) : subtotal;
    
    
  }).reduce((acc, orderTotal) => acc + orderTotal, 0);
  
  

  
  return grandTotal.toFixed(2);



  // const grandTotal = orders.map((order) => {
      
  //   const subtotal = order.items.reduce((sum, item) => sum + item.price, 0);
    
  //   const discountedTotal= order.discountCode ? applyDiscount(order.discountCode, subtotal) : subtotal;

  //   return Math.round(discountedTotal * 100) / 100;
    
  // }).reduce((acc, orderTotal) => acc + orderTotal, 0);
  
  

  
  // return grandTotal.toFixed(2);








}

//Below is the callback function to calculate the discount
const applyDiscount = (discountCode, total) => {
  // Implement discount logic here



  if (discountCode === "COFFEELOVER") {
    return total = (total - total * 0.1);
  } else if (discountCode === "TEALOVER") {
    return total = (total - total * 0.2);
  } else {
    return total;
  }
};
console.log(totalOrderValue(orders, applyDiscount));
