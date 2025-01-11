// Complete the filterSongs function
// Do not alter the starter code.

const songs = [
  { title: "All of Me", artist: "John Legend", genre: "Pop", duration: 248 },
  { title: "Despacito", artist: "Luis Fonsi", genre: "Pop", duration: 279 },
  { title: "Someone Like You", artist: "Adele", genre: "Pop", duration: 285 },
  { title: "Thriller", artist: "Michael Jackson", genre: "Pop", duration: 357 },
  { title: "Bohemian Rhapsody", artist: "Queen", genre: "Rock", duration: 354 },
  {
    title: "Stairway to Heaven",
    artist: "Led Zeppelin",
    genre: "Rock",
    duration: 480,
  },
  {
    title: "Sweet Child O' Mine",
    artist: "Guns N' Roses",
    genre: "Rock",
    duration: 355,
  },
  {
    title: "Smells Like Teen Spirit",
    artist: "Nirvana",
    genre: "Rock",
    duration: 302,
  },
  { title: "Hotel California", artist: "Eagles", genre: "Rock", duration: 390 },
  {
    title: "Thrash Unreal",
    artist: "Against Me!",
    genre: "Punk",
    duration: 292,
  },
  {
    title: "London Calling",
    artist: "The Clash",
    genre: "Punk",
    duration: 189,
  },
];




// Filter object with the following properties:
// - genre: string  // Desired genre to filter songs by
// - duration: number  // Minimum duration of songs to include in the result
const filters = { genre: "Rock", duration: 350 };






// Implement the filterSongs function
function filterSongs(songs, filters) {
  // Extract genre and duration from the filters object
  // Filter the songs array
  // - Include songs where the genre matches and duration is greater than or equal to the 
  //specified duration and then return the desired array of objects

    
    const filteredSong= songs.filter(function(currentSong) {
        
        if( currentSong.genre === filters.genre && currentSong.duration >= filters.duration){
            return currentSong;
        }
    });
    
    return filteredSong;
  
}
const newSongArray=filterSongs(songs,filters);
console.log(newSongArray);