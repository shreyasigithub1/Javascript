function Movie(title){
    this.title=title;
}
const movie1=new Movie("The Avengers");//new object created
console.log(movie1);

movie1.year=2015; //adding new properties to movie1 object
console.log(movie1); //again printing movie1 object
console.log(movie1.__proto__);


const movie2=new Movie("Avatar");//Another object created
console.log(movie2);

console.log(movie2.__proto__.__proto__); //protype is also an object

//Prototypal inheritence
console.log(Object.__proto__);