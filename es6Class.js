//constructor function
/*function Vehicle(name, color, wheels) {
    this.name = name;
    this.color = color;
    this.wheels = wheels;

    this.getDetails = function () {
        console.log(`
          The ${this.name} is ${this.color} in color.
          It has ${this.wheels} wheels
    `);
    };
}*/

// const car = new Vehicle('Car', 'blue', 4);
// console.log(car.hasOwnProperty('getDetails'));

// car.getDetails();

//class expressions
// const Vehicle = class{

// }

// Classes in JS.. Class declaration
class VehicleCl {
    #regNumber;
    //constructor
    constructor(name, color, wheels, number) {
        this.name = name;
        this.color = color;
        this.wheels = wheels;
        this.#regNumber=number;
    }

    //private method

    #getNumber(number){
        return number;
    }
    //methods
    getDetails() {
        console.log(`
    The ${this.name} is ${this.color} in color.
    It has ${this.wheels} wheels.
    The registration number is ${this.#getNumber(this.#regNumber)}
    `);
    }
}

const veh1 = new VehicleCl(
    'Scooter',
    'Grey',
    2,8877
);



console.log(veh1);
console.log(veh1.hasOwnProperty('name'));
veh1.getDetails();
veh1.name="car";
//veh1.#regNumber=2233;//Can not access private properties outside
veh1.getDetails();
//veh1.#getNumber();//Can not access private method outside


function Vehicle(name, color, wheels) {
    this.name = name;
    this.color = color;
    this.wheels = wheels;

    

    
}
Vehicle.prototype.getDetails = function () {
    console.log(`
      The ${this.name} is ${this.color} in color.
      It has ${this.wheels} wheels
`);
}

