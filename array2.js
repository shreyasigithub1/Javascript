const student =[
    "Tina",
    "Raj",
    "Bobby",
    "Seema",
    "Alex",
    "Sita"
]

slength=student.length;
//Using for loop
/*for(let i=0;i<slength;i++){
console.log( `Roll no- ${i+1} : ${student[i]}`);
}*/

//for -in loop
for(let i in student){
    console.log( `Roll no- ${Number(i)+1} : ${student[i]}`);  
}

//for..of loop
for(let students of student){
    console.log(students);  
}