const aprilBatch=["Tina" ,"Madhur"];
const mayBatch=["Ritik","Deepak","Shalini"];
const juneBatch=["Saba","Shivani"];
const julyBatch=[];

/*function addStudent(batch,student){

batch.push(student);
console.log(batch);
}
addStudent(aprilBatch,"Ritu");*/

//Rest...

function addStudent(batch,...students){ 
    for(let i of students){
        batch.push(i);
    }
    console.log(batch);
}

addStudent(aprilBatch,'sunny','Ritu','Seema');


 //spread...

const newBatch=[...mayBatch];
console.log(mayBatch);
console.log(newBatch);

mayBatch.push("new Student");
console.log(mayBatch);
console.log(newBatch);

//Concatenate

const mergedBatch=[...mayBatch,...juneBatch];
console.log(mergedBatch);



for (let i = 0; i < mlength; i++) {
    if (mergedArray[i] === element) {
      count++;
    }
  }
  
    return nonDuplicateArray;