function main(){

    const userProfile = {
    name: "John Doe",
    email: "john.doe@example.com",
    address: {
      city: "New York",
      street: "123 Main St",
      zipCode: "10001"
    }
  };
  const userProfile2 = {
    name: "Marry Jane",
    email: "marry.jane@example.com",
    address: {
      city: "L.A",
      street: "154, washington road",
      block: '0101',
      zipCode: "10011"
    }
  };
  
  function getUserDetail(profile, keys) {
    // Implement your function here

    let current = profile;
        for (let key of keys) {
            if (current.hasOwnProperty(key)) {
                current = current[key]; 
            } else {
                return "Not available"; 
            }
        }
        return current; 
    }

    


  
  
  
  console.log(getUserDetail(userProfile, ["address", "city"]));
  console.log(getUserDetail(userProfile, ["address", "block"]));
  console.log(getUserDetail(userProfile, ["name"]));



  // Usage: should return "New York"
  //do not modify the return statement
return getUserDetail;
}

main();