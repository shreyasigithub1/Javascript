//Currying in JS

function add1(a,b,c){
    return a+b+c;
}
console.log(add1(2,3,4));

function add2(a){
    return function (b){
        return function (c){
            return a+b+c;
        };
    };
}
//One way of calling
 console.log(add2 (2) (3) (4));

 //Another way of calling
let ar=(add2(2));
let br=(ar(3));
let cr =(br(4));

console.log(cr);




function power(a){
    return function (b){
        return (b ** a);
    }
}

let square=power(2);

let result=square(7);
console.log(result);


let cube=power(3);

let cubeResult=cube(4);
console.log(cubeResult);
