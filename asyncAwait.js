const p = new Promise(function (resolve, reject) {
  resolve("The promise is resolved");
});

//Handling promise with then function
//p.then((response) => console.log(response));

//Handling promise with async await
async function getData() {
  const val = await p; //Adding await in front of the promse that has to be resolved
  console.log(val); //Putting the value of the promise in val and logging the val
}

//getData();

// function promise() {
//   new Promise(function (resolve, reject) {a
//     setTimeout(function () {
//       resolve("The promise is fulfilled");
//     }, 5000);
//   }).then((response) => console.log(response));
//   console.log("Javascript");
// }

// promise();

const p1=new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve("The promise is fulfilled");
    }, 5000);
  }).then((response) => console.log(response));

async function promise() {
    const value = await p1;
    console.log("Javascript");
  }
  
  promise();
  