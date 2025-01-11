// Instructions:
// 1. Implement the updateProfile function to update the user profile using Object.assign.
// 2. Implement the freezeProfile function to freeze the user profile using Object.freeze.

function updateProfile(user, updates) {
    // Implement the code here
    const newUser= Object.assign(user, updates); 
    return newUser;
  }
  
  function freezeProfile(user) {
    // Implement the code here
    Object.freeze(user);
    return user;
  }


  const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const returnedTarget = Object.assign(target, source);

console.log(target);
// Expected output: Object { a: 1, b: 4, c: 5 }

console.log(returnedTarget === target);
// Expected output: true



const obj = {
    prop: 42,
  };
  
  Object.freeze(obj);
  
  obj.prop = 33;
  // Throws an error in strict mode
  
  console.log(obj.prop);
  // Expected output: 42
  