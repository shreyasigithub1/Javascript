
//DO IT AGAIN


const contacts = [
    { name: "Alice", company: "ABC Inc." },
    { name: "Bob", company: "XYZ Corp." },
    { name: "Charlie", company: "ABC Inc." }
  ];
  
  function mapContactsToCompanies(contacts) {
    // The goal is to return an object where each "key" is a company name, and the "value" 
    //is an array of names of people who work at that company.
  
    // Use the reduce method to iterate through each contact in the array.
  
    // The reduce method takes two arguments:
    // 1. A callback function (with two parameters: the accumulator (obj) and the current item (contact)).
    // 2. An initial value for the accumulator (in this case, an empty object {}).
  
    // For each contact:
    // 1. Check if the company name already exists as a key in the object.
    // 2. If it doesn't exist, create a new array for that company.
    // 3. Add the contact name to the array of names for that company
    // 4. Return the object(accumulator) after processing all contacts.
  
    // Implement your function logic below and return the object as described.

    const newContacts=contacts.reduce(function callback(accumulator,currentItem){

        
       if(!Object.keys(accumulator).includes(currentItem.company)){
        let array=[];  
              array.push(currentItem.name); 
              accumulator[currentItem.company]=array;
       }else{
             
        accumulator[currentItem.company]=array.push(currentItem.name);

       }


      return accumulator;
      

    },{});

   console.log(newContacts);


  }
  
  mapContactsToCompanies(contacts);
  
  
  
  
  
  
  
  
  
  
  
  /*{
    "ABC Inc.": ["Alice","Charlie"],
    "XYZ Corp.": ["Bob"]
 }*/