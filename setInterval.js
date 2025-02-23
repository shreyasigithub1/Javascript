const textElement=document.querySelector('#text');
let seconds=0;

textElement.textContent = `${seconds}`;


const timer = setInterval(()=>{
    seconds++;
    textElement.textContent = `${seconds}`;
    
   
},1000)

if(seconds>=5){
    clearInterval(timer);
}