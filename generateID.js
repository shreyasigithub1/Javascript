// Complete the genrateID function
//Do not alter the starter code
function generateID(_starterValue){
    //Implement Your function here
    let count=0;
    return function innerPrint(){
        
       return `A_2023_${_starterValue + count++}`;
       
    }
    }
    
    const func = generateID(99);
    console.log(func());//Output : A_2023_99
    console.log(func()); // Output: A_2023_100