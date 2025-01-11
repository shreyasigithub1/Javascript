let count1=0,count2=0;
let m1=0,m2=0;

function commonDigits(num1,num2){
    while(num1>0)    
        {    
        m1=num1%10;    
        count1=count1+1;    
        num1 = Math.floor(num1 / 10);    
        }  
        let n1=count1;  
        while(num2>0)    
            {    
            m2=num2%10;    
            count2=count2+1;    
            num2= Math.floor(num2 / 10);    
            }  
           let n2=count2; 
           if(n1==n2){
            return true;
           } else{
            return false;
           }
}
let a=commonDigits(123,345);
console.log(a);