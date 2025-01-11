//Create the class with ES6 standard with mentioned properties and methods.
//Do not alter the starter Code
function main(){
    //Implement your class here
    class Person{
        constructor(name,age,gender){
            this.name=name;
            this.age=age;
            this.gender=gender;
        }
        speak(){
            console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`)
        }

    }
    class Student{
        constructor(person,major,gpa){
            this.person = person; 
            
            this.major=major;
            this.gpa=gpa;
        }
        study(){
            console.log(`I am studying ${this.major} and my GPA is ${this.gpa}.`)
        }
        speak(){
            console.log(`Hello,my name is ${this.person.name} and I am ${this.person.age} years old.I am also a student studying  ${this.major}.`)
        }

    }

    const person1 = new Person("John",20,"M");

    person1.speak();
    
    const stud1 = new Student(person1,"CS",9);
    
    stud1.speak();
    
    stud1.study();


    return {Person,Student};
}

main();


/*
Hello, my name is John and I am 20 years old.

Hello, my name is John and I am 20 years old. I am also a student studying CS.

I am studying CS and my GPA is 9.
*/

// class Student{
//     constructor(Person,major,gpa){
//         this.Person=Person;
//         this.major=major;
//         this.gpa=gpa;
//     }
//     study(){
//         console.log(`I am studying ${this.major} and my GPA is ${this.gpa}.`)
//     }
//     speak(){
//         console.log(`Hello, my name is ${this.Person.name} and I am ${this.Person.age} years old.I am also a student studying  ${this.major}.`)
//     }

// }