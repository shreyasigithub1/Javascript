//Implement your code here to make it a functional shopping website

const allProducts = document.getElementsByClassName("products");
const cart = document.getElementById("cart");
const cartButton = document.getElementById("cartBtn");
let cartElementsArray = [];
const mainTag = document.getElementsByTagName("main")[0];
let quantity = 0;
const checkOutButton = document.getElementById("checkoutBtn");
let totalQuantity = 0;
let orderTotal = 0;
const eCommerceWebsite = document.getElementById("eCommerceWebsite");
checkOutButton.style.display = "none";

fetch("https://dummyjson.com/products")
  .then((response) => response.json())
  .then((data) => {
    for (let i = 0; i < data.products.length; i++) {
      const productDetailsDiv = document.createElement("div");
      productDetailsDiv.className = "productDetailsDiv";

      const newProductDiv = document.createElement("div");
      newProductDiv.classList.add("product");

      const productImage = document.createElement("img");
      productImage.className = "img_con";
      let currentIndex = 0;
      productImage.src = data.products[i].images[currentIndex];
      const arrowButtonLeft = document.createElement("button");
      arrowButtonLeft.className = "arrowButton";
      arrowButtonLeft.innerHTML =
        '<span class="material-symbols-outlined">keyboard_double_arrow_left</span>';

      const arrowButtonRight = document.createElement("button");
      arrowButtonRight.className = "arrowButton";
      arrowButtonRight.innerHTML =
        '<span class="material-symbols-outlined">keyboard_double_arrow_right</span>';

      const productName = document.createElement("p");
      productName.textContent = data.products[i].title;
      const productPrice = document.createElement("p");
      productPrice.textContent = `$${data.products[i].price}`;
      const addToCart = document.createElement("button");
      addToCart.id = "cartBtn";
      addToCart.textContent = "Add to Cart";

      newProductDiv.append(arrowButtonLeft, productImage, arrowButtonRight);
      productDetailsDiv.append(
        newProductDiv,
        productName,
        productPrice,
        addToCart
      );

      allProducts[0].append(productDetailsDiv);

      arrowButtonRight.addEventListener("click", function () {
        if (data.products[i].images.length > 1) {
          currentIndex++;
          if (currentIndex < data.products[i].images.length) {
            productImage.src = data.products[i].images[currentIndex];

            newProductDiv.append(
              arrowButtonLeft,
              productImage,
              arrowButtonRight
            );
          }
        }
      });

      arrowButtonLeft.addEventListener("click", function () {
        if (data.products[i].images.length > 1 && currentIndex > 0) {
          currentIndex--;
          if (currentIndex < data.products[i].images.length) {
            productImage.src = data.products[i].images[currentIndex];

            newProductDiv.append(
              arrowButtonLeft,
              productImage,
              arrowButtonRight
            );
          }
        }
      });

      addToCart.addEventListener("click", function () {
        console.log(`Added to cart ${data.products[i].title}`);

        let existingProduct = cartElementsArray.find(
          (item) =>
            item.name === data.products[i].title &&
            item.price === data.products[i].price
        );

        if (existingProduct) {
          existingProduct.quantity++; // Increase quantity if product exists
        } else {
          cartElementsArray.push({
            name: data.products[i].title,
            price: data.products[i].price,
            quantity: 1, // Start with quantity 1 for new product
          });
        }

        console.log(cartElementsArray);

        cartElementsArray.forEach((n) => {
          totalQuantity = n.quantity;
          console.log(`${n.name}-${totalQuantity}`);
        });
      });
    }
  });

cartButton.addEventListener("click", function () {
  allProducts[0].style.display = "none";
  checkOutButton.style.display = "block";
  console.log(cartElementsArray);
  cartElementsArray.forEach((n) => {
    const newCartDiv = document.createElement("div");
    newCartDiv.className = "cart_item";
    newCartDiv.innerHTML = `<span>Product Name: ${n.name}</span> <span>Price: ${n.price}</span> <span> Quantity:${n.quantity}</span>`;

    const quantityDetails = document.createElement("span");
    quantityDetails.className = "quantityDetails";
    const quantityNumber = document.createElement("p");
    quantityNumber.textContent = n.quantity;
    const trashSign = document.createElement("button");
    trashSign.className = "plusMinusButton";
    trashSign.innerHTML = `<span class="material-symbols-outlined">delete</span>`;
    const plusSign = document.createElement("button");
    plusSign.className = "plusMinusButton";
    plusSign.innerHTML = '<span class="material-symbols-outlined">add</span>';
    const minusSign = document.createElement("button");
    minusSign.className = "plusMinusButton";
    minusSign.innerHTML =
      '<span class="material-symbols-outlined">remove</span>';
    console.log(n.quantity);
    if (n.quantity > 1) {
      quantityDetails.append(minusSign, quantityNumber, plusSign);
    } else {
      quantityDetails.append(trashSign, quantityNumber, plusSign);
    }
    trashSign.addEventListener("click", function () {
      let index = cartElementsArray.findIndex(
        (item) => item.name === n.name && item.price === n.price
      );

      if (index !== -1) {
        cartElementsArray.splice(index, 1); // Remove the item from the array
        newCartDiv.remove();
      }

      console.log(cartElementsArray); // Check updated cart
    });

    minusSign.addEventListener("click", function () {
      if (n.quantity > 1) {
        n.quantity--; // Decrease quantity
        //totalQuantity--;
      }

      console.log(n.quantity);

      newCartDiv.innerHTML = `<span>Product Name: ${n.name}</span> <span>Price: ${n.price}</span> <span> Quantity:${n.quantity}</span>`;

      quantityNumber.textContent = n.quantity;

      // Clear existing buttons before re-adding
      quantityDetails.innerHTML = "";

      if (n.quantity > 1) {
        quantityDetails.append(minusSign, quantityNumber, plusSign);
      } else {
        quantityDetails.append(trashSign, quantityNumber, plusSign);
      }

      newCartDiv.append(quantityDetails);
      console.log(cartElementsArray);
    });
    plusSign.addEventListener("click", function () {
      if (n.quantity >= 1) {
        n.quantity++; // Decrease quantity
      }

      console.log(n.quantity);

      newCartDiv.innerHTML = `<span>Product Name: ${n.name}</span> <span>Price: ${n.price}</span> <span> Quantity:${n.quantity}</span>`;

      quantityNumber.textContent = n.quantity;

      // Clear existing buttons before re-adding
      quantityDetails.innerHTML = "";

      if (n.quantity > 1) {
        quantityDetails.append(minusSign, quantityNumber, plusSign);
      } else {
        quantityDetails.append(trashSign, quantityNumber, plusSign);
      }

      newCartDiv.append(quantityDetails);
      console.log(cartElementsArray);
    });

    newCartDiv.append(quantityDetails);

    cart.append(newCartDiv);
    cart.style.display = "block";
    //console.log(`Total quantity of ${n.name} is ${n.quantity}`);
  });
});

checkOutButton.addEventListener("click", function () {
  orderTotal = 0;
  console.log(cartElementsArray);
  cartElementsArray.forEach((n) => {
    let itemTotal = n.price * n.quantity;
    console.log(`${n.price} * ${n.quantity} = ${itemTotal}`);

    orderTotal += itemTotal;
  });

  alert(`Total Order Amount: $${orderTotal.toFixed(2)}`);
});

eCommerceWebsite.addEventListener("click", function () {
  allProducts[0].style.display = "flex";
  allProducts[0].style.flexWrap = "wrap";
  allProducts[0].style.justifyContent = "space-between";

  cart.style.display = "none";
  cart.innerHTML = "";
});
