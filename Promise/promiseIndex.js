const promiseOne = new Promise(function (resolve, reject) {
  let flag = false;
  if (flag) {
    setTimeout(() => {
      console.log("Welcome!");
      resolve("Promise resolved");
    }, 1000);
  } else reject("Error occured");
});

console.log(promiseOne);

//the 'message' will connect with resolve
//If there is any argumnet inside resolve it will take that and directly use that
//reject is connected with catch
//finally will always be executed
promiseOne
  .then(function (message) {
    console.log(message);
  })
  .catch(function (message) {
    console.log(message);
  })
  .finally(() => console.log("The promise is either resolved or rejected"));





//async await


//   async function welcomeUser() {
//     return new Promise(resolve => {
//       setTimeout(() => {
//         console.log("Welcome User!");
//         resolve(); // ✅ Resolve the Promise after timeout
//       }, 2000);
//     });
//   }


//This is another way

const welcomeUser = new Promise((resolve) => {setTimeout(() => {
            console.log("Welcome User!");
            resolve(); 
          }, 2000); });
  
 
  

  async function run() {
    console.log("To the");
  
      // await welcomeUser(); // ✅ Now await is inside an async function
      await welcomeUser;
  
    console.log("Course");
  }
  
  run(); // Call the function
  
  
  


