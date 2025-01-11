const productList = [
  { id: "p1", name: "Apples", category: "Fruits", price: 2.5, inStock: true },
  {
    id: "p2",
    name: "Oranges",
    category: "Fruits",
    price: 1.99,
    inStock: false,
  },
  {
    id: "p3",
    name: "Blueberries",
    category: "Fruits",
    price: 4.99,
    inStock: true,
  },
  {
    id: "p4",
    name: "Carrots",
    category: "Vegetables",
    price: 1.0,
    inStock: true,
  },
  {
    id: "p5",
    name: "Tomatoes",
    category: "Vegetables",
    price: 1.5,
    inStock: true,
  },
];

//give two parameters to the given function
function searchAndBuyProduct(productList, productName) {
  // Step 1: Find the product object with the matching name using the find method
  // Step 2: Check if the product was found and if it's in stock
//    productList.find(function (currentProduct){
//     if(currentProduct.name == productName){
        
//         if(currentProduct.inStock== true){
//             currentProduct.inStock=false;
//             return true;
//         }
//         else{
            
//             return false;
//         }
//     }
//     else{
        
//         return false;
//     }
//   });
const product = productList.find((currentProduct) => currentProduct.name === productName);

  
  if (product) {
    
    if (product.inStock) {
      
      product.inStock = false;
      return true;
    } else {
      
      return false;
    }
  }

  
  return false;

}
searchAndBuyProduct(productList, "Tomatoes");
searchAndBuyProduct(productList, "Oranges");
console.log(productList);

/*
  1. Use the find method to search for the product object whose name matches the productName parameter.
  2. Check if the product is in stock.
  3. If the product is in stock: 

    - Set the inStock property of the product object to false .

    - Return true indicating that purchase has been made.
  4. If the product is not in stock:
    - Return false.
  a5. If the product is not found in the list:
    - Return false.

  */
/*
productList.find(function (currentProduct){
    if(currentProduct.name == productName){
        
        if(currentProduct.inStock== true){
            currentProduct.inStock=false;
            return true;
        }else{
            
            return false;
        }
    }
    else{
        return false;
    }
  });
*/