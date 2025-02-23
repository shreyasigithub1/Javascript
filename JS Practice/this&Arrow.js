//this keyword

console.log(this);

const user={
    username:"John",
    id:1,
    welcomeUser(){
        console.log(`${this.username},Welcome to the website`);
        console.log(this);


    }
}
user.welcomeUser();

// const func = ()=> {
//     console.log("Hello"); 
//     console.log(this);
// }

// func();

function func() {
    console.log("Hello"); 
    console.log(this);
}

func();