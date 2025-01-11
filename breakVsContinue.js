const inputs=[12,13,10,34,48,39,26,45]
const evenNumbers=[];

for(let i of inputs){
    if(i % 2 != 0){
        continue;
    }
    evenNumbers.push(i);
    
    if(evenNumbers.length===5){
        break;
    }
    console.log(evenNumbers);
}
console.log(evenNumbers);