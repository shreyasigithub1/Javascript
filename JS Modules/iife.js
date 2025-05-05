const shoppingCart = (function () {
  // Private variables and functions
  let cart = [];
  let total = 0;

  function calculateTotal() {
    total = cart.reduce((acc, item) => acc + item.price, 0);
  }

  // Public methods
  return {
    addItem: function (item) {
      cart.push(item);
      calculateTotal();
    },
    getTotal: function () {
      return total;
    },
    getCartContents: function () {
      return cart;
    },
  };
})();

export default shoppingCart;

