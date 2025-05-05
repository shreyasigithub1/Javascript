const promiseOne = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let flag = true;
        if (!flag) {
            console.log("setTimeout function");
            resolve("resolve");
        }
        else {
            reject("ERROR");
        }
    }, 1000);
})

promiseOne.then(function (message) {
    console.log(message);
}).catch(function (err) {
    console.log(err);
})