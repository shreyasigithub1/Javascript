const divEle = document.querySelector(".card-container");
// const user_image = document.getElementById("user_image");
// const user_first_name = document.getElementById("user_first_name");
// const user_last_name = document.getElementById("user_last_name");
// const user_email = document.querySelector(".email");
// const view_profile_button = document.querySelector(".btn");

function getDetails(id) {
  //ID
  const request = new XMLHttpRequest();

  request.open("GET", `https://dummyjson.com/users/${id}`);
  request.send();

  request.addEventListener("load", function () {
    if (request.status === 404)
      return;
    console.log(request.responseText);
    //console.log(typeof request.responseText);
    let Json_data = JSON.parse(request.responseText); //Converting string to object
    //2console.log(typeof Json_data);//object
    // user_first_name.textContent = Json_data.firstName;
    // user_last_name.textContent = Json_data.lastName;
    // user_email.textContent = Json_data.email;
    // user_image.src = Json_data.image;
    displayUser(Json_data, "beforeend");

    //Previous ID
    const request2 = new XMLHttpRequest();

    request2.open("GET", `https://dummyjson.com/users/${id - 1}`);
    request2.send();

    request2.addEventListener("load", function () {
      //checking the status only after loading the request
      console.log(request2);
      console.log(request2.status); //404
      if (request2.status === 404)
        return;
      console.log(request2.responseText);
      let Json_data = JSON.parse(request2.responseText); //Converting string to object

      displayUser(Json_data, "afterbegin", "other");
    });

    //after ID

    const request3 = new XMLHttpRequest();

    request3.open("GET", `https://dummyjson.com/users/${id + 1}`);
    request3.send();

    request3.addEventListener("load", function () {
      console.log(request3.responseText);
      let Json_data = JSON.parse(request3.responseText); //Converting string to object

      displayUser(Json_data, "beforeend", "other");
    });
  });
}

function displayUser(Json_data, pos, className = "") {
  const card = `<div class="user-card  ${className}">
      <img src=${Json_data.image} alt="Profile Image" id="user_image" />
      <h3 id="user_first_name">${Json_data.firstName}</h3>
      <h3 id="user_last_name">${Json_data.lastName}</h3>
      <p class="email">${Json_data.email}</p>
      <button class="btn">View Profile</button>
      </div>`;
  divEle.insertAdjacentHTML(pos, card);
}
getDetails(2);
