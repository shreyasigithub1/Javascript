//Arrays in JS  are dynamic

const cities = ["Delhi", "Calcutta", "Chennai", "Mumbai", "Jaipur"];
console.log(cities.length);

cities[1]="Kolkata"
console.log(cities);

//Method in array
//Adding elements in array

//push()

const teams=["KKR","LSG","MI",'CSK']
const pushArray=teams.push("RCB");
console.log(teams);
console.log(pushArray);
//unshift
teams.unshift("DD");
console.log(teams);
//Removing elements fron an array
//pop
teams.pop();
console.log(teams);
//shift
teams.shift();
console.log(teams);
//Check the element is present or not
//indexOf
const kkrIndex=teams.indexOf("KKR");
console.log(kkrIndex);
const ddIndex=teams.indexOf("DD");
console.log(ddIndex);
//includes()
const kkrIncludes=teams.includes("KKR");
console.log(kkrIncludes);
const ddIncludes=teams.includes("DD");
console.log(ddIncludes);
//slice nad splice(indexNo,Number of elements you want to delete,whatever you want to insert)
 console.log(teams.slice(2));
 console.log(teams);
 
//concat()
const teams2=["India","New Zealand"]
const mergedTeams=teams.concat(teams2);
console.log(mergedTeams);


//arrays are not primitive data types they are objects.we can change the value of objects even if 
//they are const.We can't change the value of primitive data type if they are const.