arr1 = [1, 2, 4, 5, 7];
arr2 = [3, 4, 6, 7, 9, 0];
let duplicateArray = [];
function mergeArray(arr1, arr2) {
  //Implemet your function here
  const mergedArray = [...arr1, ...arr2];

  let mlength = mergedArray.length;

  //console.log( mergedArray);

  for(let i=0;i<mlength;i++){
    for(let j=i+1;j<mlength;j++){
        if(mergedArray[i]===mergedArray[j]){
            mergedArray.splice(j,1);
            j--;
            mlength--;
        }
    }
  }
  return mergedArray;
}

console.log(mergeArray(arr1, arr2));
//Output : [1,2,4,5,7,3,6,9,0]
