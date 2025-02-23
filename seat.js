//movieList array
const moviesList = [
    { movieName: "Flash", price: 7 },
    { movieName: "Spiderman", price: 5 },
    { movieName: "Batman", price: 4 },
];
  
// Populate the dropdown menu
const select_movie_dropdown = document.getElementById("selectMovie");

moviesList.forEach((n) => {
  const new_option = document.createElement("option");
  new_option.textContent = `${n.movieName} $${n.price}`;
    new_option.value = JSON.stringify({ movieName: n.movieName, price: n.price }); //converting the value to JSON//adding value to each option
//     The value attribute of an HTML <option> element can only store a single string, not an object.
// JSON is a string representation of an object, making it easy to store complex data (like the movie's name and price) in a single value.

  select_movie_dropdown.appendChild(new_option);
});

// Initial setup
const initialMovie = moviesList[0]; //selecting the first movie object
document.getElementById("movieName").textContent = initialMovie.movieName; //putting them to moviename and movie price area
document.getElementById("moviePrice").textContent = `$${initialMovie.price}`;
let currentMoviePrice = initialMovie.price; //setting the price to initial movie price//using it later to default setup in line 73

let initialSelectedArray = []; // Array to hold selected seats

// Function to update the selected seats and related details
function updateSelectedSeats(pricePerSeat) {
    const selectedSeatsHolder = document.getElementById("selectedSeatsHolder");
    const numberOfSeat = document.getElementById("numberOfSeat");
    const totalPrice = document.getElementById("totalPrice");
  
    // Clear previous seat elements
    selectedSeatsHolder.innerHTML = "";
  
    if (initialSelectedArray.length === 0) {
      selectedSeatsHolder.textContent = "NO SEAT SELECTED";
    } else {
      // Add a new element for each selected seat
    //   initialSelectedArray.forEach((seatId) => {
    //     const seatElement = document.createElement("div"); //creating a div element
    //     seatElement.textContent = seatId; // Display seat identifier //filling the div with the value in array
        //     selectedSeatsHolder.appendChild(seatElement); //appending the div element with the selectedSeatsHolder place
        
    //});
    selectedSeatsHolder.textContent=initialSelectedArray.length;
    }
  
    numberOfSeat.textContent = initialSelectedArray.length;
    totalPrice.textContent = `$${initialSelectedArray.length * pricePerSeat}`;
}
  
// Add event listener to unoccupied seats
const seatContainer = document.getElementById("seatCont");
const unoccupiedSeats = seatContainer.querySelectorAll(".seat:not(.occupied)");

// Add unique identifiers to seats
unoccupiedSeats.forEach((seat, index) => {
  seat.setAttribute("data-seat-id", `Seat-${index}`);//creating a custom attribute for each seat in the unOccupiedSeats nodelist
});//It uniquely identifies which seat was clicked, ensuring you can track the specific seat being selected or deselected.

unoccupiedSeats.forEach((seat) => {
  seat.addEventListener("click", function () {
    const seatId = seat.getAttribute("data-seat-id");

    if (seat.classList.contains("selected")) {
      seat.classList.remove("selected");
      initialSelectedArray = initialSelectedArray.filter((id) => id !== seatId);//The seat's data-seat-id is removed from initialSelectedArray using filter.
    } else {
      seat.classList.add("selected");
      initialSelectedArray.push(seatId); //The seat's data-seat-id is added to initialSelectedArray.
    }   

      updateSelectedSeats(currentMoviePrice);
      
// After every click (whether selecting or deselecting a seat), the updateSelectedSeats function is called. This function:
// Updates the displayed number of selected seats (numberOfSeat).
// Updates the list of selected seats in the selectedSeatsHolder.
// Updates the total price of selected seats (totalPrice).
  });
});

// Update seats and price when the movie is changed
select_movie_dropdown.addEventListener("change", function () {
    const selectedMovie = JSON.parse(select_movie_dropdown.value);
  
    document.getElementById("movieName").textContent = selectedMovie.movieName;
    document.getElementById("moviePrice").textContent = `$${selectedMovie.price}`;
    currentMoviePrice = selectedMovie.price; //updating the currentMoviePrice
  
    // Reset seat selection and update seat details
    initialSelectedArray = [];
    const newUnoccupiedSeats = seatContainer.querySelectorAll(".seat:not(.occupied)");
    updateSelectedSeats(currentMoviePrice);//calling the function to update
    //Calls the updateSelectedSeats function to reset the UI:
// Sets the number of selected seats to 0.
// Updates the total price to $0.
// Updates the seat display (like selectedSeatsHolder).

    newUnoccupiedSeats.forEach((seat) => {
      seat.addEventListener("click", function () {
        const seatId = seat.getAttribute("data-seat-id");
  
        if (seat.classList.contains("selected")) {
          seat.classList.remove("selected");
          initialSelectedArray = initialSelectedArray.filter((id) => id !== seatId);
        } else {
          seat.classList.add("selected");
          initialSelectedArray.push(seatId);
        }
  
        updateSelectedSeats(currentMoviePrice);
      });
    });
  });
  
  // Continue button functionality
  document.getElementById("proceedBtn").addEventListener("click", function () {
    if (initialSelectedArray.length === 0) {
      alert("Oops no seat Selected");
      return;
    }
  
    alert("Yayy! Your Seats have been booked");
  
    // Mark selected seats as occupied
    initialSelectedArray.forEach((seatId) => {
      const seat = document.querySelector(`[data-seat-id="${seatId}"]`);
      seat.classList.remove("selected");
      seat.classList.add("occupied");
    });
  
    initialSelectedArray = [];
    updateSelectedSeats(currentMoviePrice);
  });
  
  // Cancel button functionality
  document.getElementById("cancelBtn").addEventListener("click", function () {
    // Deselect all selected seats
    initialSelectedArray.forEach((seatId) => {
      const seat = document.querySelector(`[data-seat-id="${seatId}"]`);
      seat.classList.remove("selected");
    });
  
    initialSelectedArray = [];
    updateSelectedSeats(currentMoviePrice);
  });
  