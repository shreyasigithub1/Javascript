const car = {
  getDetails(name) {
    console.log(`Your car is ${name}`);
  },
};

const car1 = Object.create(car);//Only linking the prototype of car to car1 not copying the method it cn only access the method present in car
console.log(car1.__proto__);
car1.getDetails('Audi');

//Object.assign


let parent={name:"parent",children:[]};
let child1=Object.create(parent);
child1.name="child1";
child1.children.push(child1.name);
console.log(child1);
console.log(parent.children[0]);