import shoppingCart from "./iife.js";

shoppingCart.addItem({ id: 1, pName: "Product1", price: 10 });
shoppingCart.addItem({ id: 2, pName: "Product2", price: 20 });
shoppingCart.addItem({ id: 3, pName: "Product3", price: 30 });

//get the cart container
const cartItems = document.getElementById("cart-items");

//Display the cart items
const cartContent = shoppingCart.getCartContents();
console.log(cartContent);
cartContent.forEach((item) => {
  const listItem = document.createElement("li");
  listItem.textContent = `${item.pName} - $${item.price}`;
  cartItems.appendChild(listItem);
});

// Get the total price element
const totalPriceElement = document.getElementById("total-price");
// Display the total price
totalPriceElement.textContent = `Total: $${shoppingCart.getTotal()}`;
