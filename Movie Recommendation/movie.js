//Implement all your function here to make it a working application.

const request = new XMLHttpRequest();

request.open(
  "GET",
  `https://api.themoviedb.org/3/genre/movie/list?api_key=b02c61b16a1b2220501730cd81f04e98`
);
request.send();

const selectElement = document.getElementById("genres");
const movie_poster = document.getElementById("moviePoster");
const movie_text = document.getElementById("movieText");

//responseText always returns a string
request.addEventListener("load", function () {
  const data = JSON.parse(request.responseText); //converting string to object

  for (let i = 0; i < data.genres.length; i++) {
    const newOption = document.createElement("option");
    newOption.textContent = data.genres[i].name;
      selectElement.append(newOption);
      
  }

    console.log(data.genres.length);
    
});


//console.log(data.genres[i].id);

const request1 = new XMLHttpRequest();
request1.open(
  "GET",
  "https://api.themoviedb.org/3/discover/movie?api_key=b02c61b16a1b2220501730cd81f04e98&with_genres=28"
);
request1.send();

request1.addEventListener("load", function () {
    const movie_data = JSON.parse(request1.responseText);
    
    
    console.log(movie_data.genre_ids);
    // console.log(movie_data);
    // console.log(movie_data.poster_path);
    // const movie_image = document.createElement("img");
    // movie_image.src = "https://image.tmdb.org/t/p/w500" + movie_data.poster_path;

    // movie_image.alt = "Movie Poster";
    // movie_poster.append(movie_image);
});
