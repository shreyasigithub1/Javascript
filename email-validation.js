const email = "student.1@codingninjas.com";

/*if(email.length>11 ){
    console.log("The email id is valid");
}
let secondcon=(email.length-(email.lastIndexOf(".")+1));
if(secondcon>=2 && secondcon<=3){
    console.log("The email is valid")
}

console.log(email.lastIndexOf("."));
console.log(email.indexOf("@"));

console.log(email.lastIndexOf(".")-email.indexOf("@"));*/

const emailLen = email.length;
const dotIndex = email.lastIndexOf(".");
const atIndex = email.lastIndexOf("@");
const lastIndex = email.length - 1;

if (
  emailLen < 11 ||
  lastIndex - dotIndex < 2 ||
  lastIndex - dotIndex > 3 ||
  dotIndex - atIndex < 3
) {
    console.log("Invalid email");
}
/*
if(dotIndex - atIndex >=4 && atIndex >=3 && lastIndex - dotIndex >=2 && emailLen>5 )

    if (
        atIndex >= 3 &&                        // At least 3 characters before "@"
        dotIndex > atIndex + 3 &&              // Dot is at least 4 characters after "@"
        email.length - dotIndex > 2 &&         // At least 2 characters after "."
        atIndex !== -1 &&                      // Ensure "@" exists
        dotIndex !== -1                        // Ensure "." exists
      ) */