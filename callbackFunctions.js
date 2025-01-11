//Callback Functions

function greet(wish){
    console.log(`${wish()}, welcome to Javascript course`);
}
function sayHi(){
    return "Hi!";
}
function sayHello(){
    return "Hello!";
}
function sayGoodMorning(){
    return "Good Morning!";
}

greet(sayHi);
greet(sayHello);
greet(sayGoodMorning);

