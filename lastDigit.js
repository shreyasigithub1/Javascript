function lastDigit(num1,num2){
    rem1 =num1 % 10;
    rem2=num2 % 10;
    if (rem1 == rem2){
        return true;
    }
    else {
        return false;
    }
}

rem=lastDigit(123,19);
console.log(rem);