function Movie(title) {
    this.title = title;

  }
  
Movie.prototype.getDetails = function () {
     
    console.log(`Title: ${this.title}`);
  };
  
  Movie.prototype.year = 2012;
  
const movie1 = new Movie('The Avengers');
console.log(movie1);

movie1.getDetails();

const movie2 = new Movie('Movie 2');
console.log(movie2);

movie2.getDetails();
  
  