// Switch statement
//Simulate a traffic light using switch statement

/*let color = "pink";

switch (color) {
  case "red":
    console.log("STOP ! The color is red");
    break;
  case "green":
    console.log("GO ! The color is green");
    break;
  case "yellow":
    console.log("SLOW DOWN ! The color is yelow");
    break;
  default:
    console.log("Invalid color");
}
*/


let range;


if (amount < 500) {
  range = "lessThan500";
} else if (amount >= 500 && amount < 1000) {
  range = "500to999";
} else if (amount >= 1000 && amount < 2000) {
  range = "1000to1999";
} else if (amount >= 2000 && amount < 4000) {
  range = "2000to3999";
} else if (amount >= 4000 && amount < 5000) {
  range = "4000to4999";
} else if (amount >= 5000) {
  range = "5000andAbove";
} else {
  range = "invalid";
}


switch (range) {
  case "lessThan500":
    discount = "No Discount";
    break;
  case "500to999":
    discount = "10% Discount";
    break;
  case "1000to1999":
    discount = "20% Discount";
    break;
  case "2000to3999":
    discount = "30% Discount";
    break;
  case "4000to4999":
    discount = "40% Discount";
    break;
  case "5000andAbove":
    discount = "50% Discount";
    break;
  default:
    discount = "Invalid Input";
}

// Output the discount
console.log(discount);

