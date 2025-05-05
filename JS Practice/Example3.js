const movieDetail = {
  title: "SpiderMan",
  Duration: "60 min",
};

const Movie = {
  movieDetails: {
    title: "The Avengers",
    Duration: "60 min",
  },
  getDetails: function () {
    console.log(this.movieDetails.title);
  },
};
Movie.getDetails();
//JavaScript does not automatically assume that a function inside an object will
//access properties of that object unless we explicitly use this.
//If we don’t use this, JavaScript will look for movieDetails inside the function scope
//instead of inside Movie.

//To create more than one object with the same features constructor function is needed

//Factory function
function createObject(title, year) {
  const movieObject = {
    title: title,
    year: year,
    getDetails: function () {
      console.log(this.title);
      console.log(this.year);
    },
  };
  return movieObject;
}
createObject("The avengers", 2020).getDetails();

//constructor function

function MovieCons(title, year) {
    this.title = title;
    this.year = year;
    this.getDetails = function () {
        console.log(`title:${this.title}`);//'this' is for the new object
        console.log(`year:${this.year}`);
    }
    
};
const md = new MovieCons("Hero", 2000);//object
md.getDetails();
console.log(md.__proto__);
console.log(md.__proto__.__proto__);
console.log(MovieCons.prototype);