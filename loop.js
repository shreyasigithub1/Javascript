//for loop
//Printing even number
/*let result=0;
for( let i=1;i<=6;i++){
    if(i%2===0){
        console.log(i);
        result=result+i;
    }
    
}
    
console.log(result);*/

//Even number

/*let i=2;
for( ; i<=50;){
    console.log(i);
    i+=2;
}*/
//Factorial of a number

/*let i;
let result=1;
for(i=1;i<=6;i++){
result=result* i;
}
console.log(result);*/

//prime or not

/*let number = 7;
let isPrime=true;
for (let i = 2; i < number; i++) {
  if (number % i == 0) {
     isPrime=false;
     break;
  }
  
}

if(isPrime){
    console.log("prime");
}else{
    console.log("Not prime");
  }*/

/** While loop */

/**/

/** Do-while loop */

/*let randomNum=Math.round(Math.random() *10);
console.log(randomNum);
let guessedNum;

do{
    guessedNum=prompt("Enter the number");
    if(guessedNum== randomNum){
        console.log("Guessed correct");
    }else{
        console.log('Take another guess');
    }
}while(randomNum != guessedNum);*/

/**let principalAmount=500 , annualInterestRate =0.08, numberOfYears=5; 
    let answer;
    
   
    answer=principalAmount;
    
      let yearCount=1;
  
    
       while(yearCount <= numberOfYears){
           answer=answer + (answer * annualInterestRate );
           yearCount++;
       }
  
    
console.log(answer);*/

 let count = 0;
 let sum=0;
for (let i = 2; i <= 50; i++) {
    count=0;
  for (let j = 1; j <= i; j++) {
    
    if (i % j == 0) {
       
       count = count + 1;
    }
    
    
  }
  if(count == 2){
     //console.log("Prime - " + i);
    
    sum=sum+i;
    
    
}

}
console.log(sum);
