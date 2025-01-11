/** Function returning functions */

function greet(message){
    return function (wishes){
        console.log(`${wishes} ,${message}`);
    }
}

//One way of calling
const greeting=greet("I hope you are doing well");
greeting("Hello");

//Another way of calling

greet("Welocome to the session")("Hi");