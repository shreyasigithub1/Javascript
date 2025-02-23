const coding = ["Java", "Python", "Javascript", "Ruby", "C"];

const values = coding.forEach((number) => {
  console.log(number);
});

//filter

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const val = myNums.filter((nums) => {
  return nums > 4;
});

console.log(val);
