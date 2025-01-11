function main() {

    let userAuth = (
      function () {
        // Create an empty array to store user data.
         let registeredUsers=[];
        // Define the registerUser function.
        function  registerUser (username,password){
           
           if(checkCredentials(username,password)){
            return("The user is already registered");}
            else{
                registeredUsers.push(username);
                registeredUsers.push(password);
                return("The user have been added to the registeredUser array");
            }

        };
  
        // Define the checkCredentials function.
        function checkCredentials(username, password){
           if(registeredUsers.includes(username) && registeredUsers.includes(password))
           {
            
             return true;
           }
        };
  
      // Return the registerUser function as part of the userAuth object
      return {registerUser};
      }
    )();
  
    // Example usage
    console.log(userAuth.registerUser("user1", "password123")); 
    // Output: "The user have been added to the registeredUser array"
    console.log(userAuth.registerUser("user1", "password123")); 
    // Output: "The user is already registered"
  
    return userAuth;
  }

  let result =main();
  console.log(result);
  