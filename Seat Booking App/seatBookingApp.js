//this is final
const moviesList = [
  { movieName: "Flash", price: 7 },
  { movieName: "Spiderman", price: 5 },
  { movieName: "Batman", price: 4 },
];

// Populate the dropdown menu
const select_movie_dropdown = document.getElementById("selectMovie");

// Populate the dropdown menu
moviesList.forEach((n) => {
  const new_option = document.createElement("option");
  new_option.textContent = `${n.movieName} $${n.price}`;
  new_option.value = JSON.stringify({ movieName: n.movieName, price: n.price });
  select_movie_dropdown.appendChild(new_option);
});

// Initial setup
const initialMovie = moviesList[0];
document.getElementById("movieName").textContent = initialMovie.movieName;
document.getElementById("moviePrice").textContent = `$${initialMovie.price}`;
let currentMoviePrice = initialMovie.price;
let initialSelectedArray = [];

// Function to update seat selection UI
function updateSelectedSeats(pricePerSeat) {
  const selectedSeatsHolder = document.getElementById("selectedSeatsHolder");
  const numberOfSeat = document.getElementById("numberOfSeat");
  const totalPrice = document.getElementById("totalPrice");

  // Clear previous seat elements
  selectedSeatsHolder.innerHTML = "";

  if (initialSelectedArray.length === 0) {
    selectedSeatsHolder.textContent = "NO SEAT SELECTED";
  } else {
    // initialSelectedArray.forEach((seatId) => {
    //   const seatElement = document.createElement("div");
    //   seatElement.textContent = seatId;
    //   selectedSeatsHolder.appendChild(seatElement);
    // });
    selectedSeatsHolder.textContent=initialSelectedArray.length;
  }

  numberOfSeat.textContent = initialSelectedArray.length;
  totalPrice.textContent = `$${initialSelectedArray.length * pricePerSeat}`;
}

const seatContainer = document.getElementById("seatCont");

// Function to reset and reinitialize seat event listeners
function initializeSeatListeners() {
  const unoccupiedSeats = seatContainer.querySelectorAll(".seat:not(.occupied)");

  unoccupiedSeats.forEach((seat, index) => {
    // Assign unique seat IDs
    seat.setAttribute("data-seat-id", `Seat-${index}`);
    seat.removeEventListener("click", seatClickHandler); // Remove previous listeners
    seat.addEventListener("click", seatClickHandler); // Add fresh listener
  });
}

// Click handler for seats
function seatClickHandler() {
  const seatId = this.getAttribute("data-seat-id");

  if (this.classList.contains("selected")) {
    this.classList.remove("selected");
    initialSelectedArray = initialSelectedArray.filter((id) => id !== seatId);
  } else {
    this.classList.add("selected");
    initialSelectedArray.push(seatId);
  }

  updateSelectedSeats(currentMoviePrice);
}

// Initial setup of seats
initializeSeatListeners();  //refresh evenListeners at first

// Update seats and price when the movie is changed
select_movie_dropdown.addEventListener("change", function () {
  const selectedMovie = JSON.parse(select_movie_dropdown.value);

  document.getElementById("movieName").textContent = selectedMovie.movieName;
  document.getElementById("moviePrice").textContent = `$${selectedMovie.price}`;
  currentMoviePrice = selectedMovie.price;

  // Reset seat selection and update seat details
  initialSelectedArray = [];
  updateSelectedSeats(currentMoviePrice);
  initializeSeatListeners(); // Reinitialize seat listeners //refresh evenListeners at last
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
  initializeSeatListeners(); // Refresh listeners to account for new "occupied" seats //refresh evenListeners at 
});

// Cancel button functionality
document.getElementById("cancelBtn").addEventListener("click", function () {
  initialSelectedArray.forEach((seatId) => {
    const seat = document.querySelector(`[data-seat-id="${seatId}"]`);
    seat.classList.remove("selected");
  });

  initialSelectedArray = [];
  updateSelectedSeats(currentMoviePrice);
});
