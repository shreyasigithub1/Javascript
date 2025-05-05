const setTimeOut=setTimeout(function () {
    console.log("Callback");
}, 2000);

clearTimeout(setTimeOut);

//XMLHttpRequest

// const request = new XMLHttpRequest();

// request.open("GET", "url");
// request.send();

// request.addEventListener("load", function () {
//     console.log(request.responseText);
//     console.log(JSON.parse(request.responseText));//Converting JSON string to Javascript Object
// })


//Promise

const promiseOne = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let flag = 0;
        if (flag == 1) {
            console.log("Javascript");
            resolve("promise");
        } else {
            reject("Error occurred");
        }
    }, 1000)
    
});
// PromiseOne.then(function (message) {
//     console.log(message);
// })

async function consumePromiseOne() {
    try {
        const response = await promiseOne;
        console.log(response);  
    } catch(error) {
        console.log(error); 
    }
}

consumePromiseOne();

//promise.all

const promise1 = new Promise(resolve => setTimeout(() => resolve("Promise 1"), 1000));
const promise2 = new Promise((resolve,reject) => setTimeout(() => reject("Promise 2 failed!"), 2000));
const promise3 = new Promise(resolve => setTimeout(() => resolve("Promise 3"), 1500));

Promise.all([promise1, promise2, promise3])
  .then(results => console.log(results)) // ["Promise 1", "Promise 3", "Promise 2"]
  .catch(error => console.log("Error:", error));


//promise.race
  
const fastPromise = new Promise(resolve => setTimeout(() => resolve("Fastest Promise!"), 1000));
const slowPromise = new Promise(resolve => setTimeout(() => resolve("Slow Promise!"), 3000));

Promise.race([fastPromise, slowPromise])
  .then(result => console.log("Resolved:", result))
    .catch(error => console.log("Rejected:", error));
  
//promise.allSettled

const promise4 = new Promise(resolve => setTimeout(() => resolve("Promise 1"), 1000));
const promise5 = new Promise((_, reject) => setTimeout(() => reject("Promise 2 failed!"), 2000));
const promise6 = new Promise(resolve => setTimeout(() => resolve("Promise 3"), 1500));

Promise.allSettled([promise4, promise5, promise6])
  .then(results => console.log(results));

