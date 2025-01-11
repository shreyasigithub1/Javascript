let str="      Javascript is a dynamically typed language    ";
let count=0;
for(i=0;i<str.length;i++){
    if(str.charAt(i)=='a'){
        count++;
    }
}
console.log(count);

/*Methods in string  */

//includes()

console.log(str.includes('iS'));

//replace()
console.log(str.replaceAll('a','@'));

//replaceAll
console.log(str.replace('a','@'));

//trim()

console.log(str.trim());

//substring()

console.log(str.substring(3,12));
console.log(str.substring(-4,-12));


//slice()
console.log(str.slice(3,12));
console.log(str.slice(-4,-12));

//split()

let words=str.split(" ");
console.log(words);











