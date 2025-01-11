let arr = [4, 2, 34, 4, 1, 12, 1, 4];
function findDuplicate(arr) {
  let duplicateArray = [];
  //let count = 0;
  //let i = 0;
  alength = arr.length;
  //console.log(alength);

  /*for(i=0;i<alength;i++){
   if(arr.includes(arr[i])){
    count=count+1;
   }
   if(count==1){
    duplicateArray=arr[i];
    console.log(duplicateArray);
   }
   count=0;
   
}*/
  for (let i = 0; i < alength; i++) {
    for (let j = i+1; j < alength; j++) {
       if(arr[i]==arr[j] && !duplicateArray.includes(arr[i]))
       {
        duplicateArray.push(arr[i]);
        
       }
       
    }
  }

  return duplicateArray;
}
console.log(findDuplicate(arr));
