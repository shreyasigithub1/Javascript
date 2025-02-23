const songs = [
  {
    id: 1,
    name: "Shape Of You",
    artist: "Ed Sheeran",
    img: "../Music Player/Multimedia/Shape Of You.jpg", 
    genre: "Pop",
    source: "../Music Player/Multimedia/Shape-Of-You(PagalNew.Com.Se).mp3", 
  },
  {
    id: 2,
    name: "All Of Me",
    artist: "Adele",
    img: "../Music Player/Multimedia/All of Me.jpg", 
    genre: "Pop",
    source: "../Music Player/Multimedia/all_of_me.mp3", 
  },
  {
    id: 3,
    name: "Someone Like You",
    artist: "Adele",
    img: "../Music Player/Multimedia/Someone Like You.jpg", 
    genre: "Pop",
    source: "../Music Player/Multimedia/someone_like_you.mp3", 
  },
  {
    id: 4,
    name: "Wonderwall",
    artist: "Oasis",
    img: "../Music Player/Multimedia/Wonderfall.jpg", 
    genre: "Rock",
    source: "../Music Player/Multimedia/wonderwall.mp3", 
  },
  {
    id: 5,
    name: "Sugar",
    artist: "Maroon 5",
    img: "../Music Player/Multimedia/Sugar by Maroon 5.jpg", 
    genre: "HipHop",
    source: "../Music Player/Multimedia/maroon_5_sugar.mp3", 
  },
  {
    id: 6,
    name: "Locked Away",
    artist: "R. City",
    img: "../Music Player/Multimedia/Locked away.jpg", 
    genre: "HipHop",
    source: "../Music Player/Multimedia/locked_away.mp3", 
  },
];

//All-songs section

const songs_dropdown = document.getElementById("songs");
const name_of_the_song_div = document.querySelector(".name_of_the_song_div");



function showSongs(songs) {
  // Clear previous results
  name_of_the_song_div.textContent = "";

  // Filter songs based on the selected genre
  const filteredSongs = songs.filter(
    (s) => songs_dropdown.value === "all" || s.genre === songs_dropdown.value
  );

  // Display filtered songs
  filteredSongs.forEach((s) => {
    const songElement = document.createElement("p");
    songElement.className = "name_of_the_song";
    songElement.textContent = `${s.name} - ${s.artist}`;
    name_of_the_song_div.appendChild(songElement);
  });
}

songs_dropdown.addEventListener("change", function () {
  showSongs(songs);
});

//Song cards section

let song_image = document.getElementById("song_image");
let song_name = document.getElementById("song_name");
let song_singer = document.getElementById("song_singer");
let song_audio = document.querySelector(".audio_element"); // Select the <audio> element
let song_audio_source = song_audio.querySelector("source"); // Select the <source> inside <audio>

let currentSongIndex = 0;

function renderCurrentSong(song) {
  song_image.src = song.img;
  song_name.textContent = song.name;
  song_singer.textContent = song.artist;

  // Update the audio source
  song_audio_source.src = song.source;

  // Reload and play the updated song
  song_audio.load();
  
}

const songSearchInput = document.getElementById("song_search");
// Function to search songs
songSearchInput.addEventListener("input", function () {
  let searchQuery = songSearchInput.value.toLowerCase().trim();
  let songElements = document.querySelectorAll(".name_of_the_song");

  songElements.forEach((songElement) => {
    let songText = songElement.textContent.toLowerCase();
    songElement.style.display = songText.includes(searchQuery)
      ? "block"
      : "none";
  });

  if (!searchQuery) {
    songElements.forEach(
      (songElement) => (songElement.style.display = "block")
    );
  }
});

// Click event to play song from list
name_of_the_song_div.addEventListener("click", function (event) {
  if (event.target.classList.contains("name_of_the_song")) {
    const clickedSong = songs.find(
      (s) => event.target.textContent === `${s.name} - ${s.artist}`
    );

    if (clickedSong) {
      renderCurrentSong(clickedSong);
    }
  }
});

function showNextSong() {
  currentSongIndex = (currentSongIndex + 1) % songs.length; // Loop back to the first song if at the end
  renderCurrentSong(songs[currentSongIndex]);
}

// Function to show the previous song (left arrow)
function showPreviousSong() {
  currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length; // Loop to the last song if at the beginning
  renderCurrentSong(songs[currentSongIndex]);
}

// Event listeners for the left and right arrows
document
  .querySelector(".fa-arrow-rotate-left")
  .addEventListener("click", function () {
    showPreviousSong(); // Go to the previous song when the left arrow is clicked
  });

document
  .querySelector(".fa-arrow-rotate-right")
  .addEventListener("click", function () {
    showNextSong(); // Go to the next song when the right arrow is clicked
  });

// Initially render the first song
renderCurrentSong(songs[currentSongIndex]);

/**
 * Playlist
 */
//for create playlist input
let playlist_create_input = document.getElementById("playlist_create");

//for create playlist label
let create_playlist_label = document.getElementById("create_playlist_label");

//for All Playlist tab
let all_playlist = document.getElementById("all_playlist");

//for current playlist tab
let current_playlist = document.getElementById("current_playlist");

//for add to playlist tab
let add_to_playlist = document.getElementById("add_to_playlist");

//for storing the newly crerated playlist
let all_playlist_array = [];

let all_playlists = {}; // Store playlists
let current_selected_playlist = null; // Track the currently selected playlist
let current_selected_song = null; // Track the currently selected song

// Function to create a playlist and add it to the 'all_playlists' object
create_playlist_label.addEventListener("click", function () {
  let playlistName = playlist_create_input.value;

  if (playlistName && !all_playlists[playlistName]) {
    all_playlists[playlistName] = []; // Initialize an empty playlist

    // Create a 'p' tag for the newly created playlist
    let newly_added_playlist = document.createElement("p");
    newly_added_playlist.textContent = playlistName;
    

    // Append the newly added playlist to the all-playlist section
    all_playlist.append(newly_added_playlist);

    // If it's the first playlist, automatically select it
    if (!current_selected_playlist) {
      selectPlaylist(playlistName);
    }

    // Add event listener to select the playlist when clicked
    newly_added_playlist.addEventListener("click", function () {
      selectPlaylist(playlistName);
    });
  }
});

function selectPlaylist(playlistName) {
  // Remove previous selection
  let selectedPlaylistElement = document.querySelector(".selected-playlist");
  if (selectedPlaylistElement) {
    selectedPlaylistElement.classList.remove("selected-playlist");
  }

  // Find the playlist element, ensuring trimmed and case-insensitive comparison
  const selectedPlaylist = Array.from(all_playlist.children).find(
    (playlist) =>
      playlist.textContent.trim().toLowerCase() ===
      playlistName.trim().toLowerCase()
  );

  if (selectedPlaylist) {
    selectedPlaylist.classList.add("selected-playlist");

    // Update the currently selected playlist globally
    current_selected_playlist = playlistName;

    // Display songs in the selected playlist
    displaySongsInPlaylist(playlistName);
  } else {
    console.error(`Playlist "${playlistName}" not found!`);
  }
}

// Function to select a song when clicked
name_of_the_song_div.addEventListener("click", function (event) {
  if (event.target.classList.contains("name_of_the_song")) {
    current_selected_song = event.target.textContent; // Store the clicked song

    // Update UI to indicate the selected song
    const selectedSongElement = document.querySelector(".selected-song");
    if (selectedSongElement) {
      selectedSongElement.classList.remove("selected-song");
    }
    event.target.classList.add("selected-song");
  }
});

// Function to display songs in a selected playlist
function displaySongsInPlaylist(playlistName) {
  const songsInPlaylist = all_playlists[playlistName];

  // Find or create the song list container
  let songList = current_playlist.querySelector(".song-list");
  if (!songList) {
    songList = document.createElement("div");
    songList.classList.add("song-list");
    current_playlist.append(songList);
  }

  // Clear previous songs but keep the heading
  songList.innerHTML = "";

  // Display songs in the selected playlist with delete icons
  songsInPlaylist.forEach((song, index) => {
    let songElement = document.createElement("div");
    songElement.classList.add("song-item");

    // Create a span element for the song name
    let songText = document.createElement("span");
    songText.textContent = song;
    songText.classList.add("song-name");

    // Create delete icon
    let deleteIcon = document.createElement("i");
    deleteIcon.className = "fa-solid fa-trash-can delete-icon";
    //deleteIcon.style.color = "#ffffff";

    // Add event listener to remove song on click
    deleteIcon.addEventListener("click", function () {
      removeSongFromPlaylist(playlistName, index);
    });

    // Append song text and delete icon to songElement
    songElement.appendChild(songText);
    songElement.appendChild(deleteIcon);

    // Append song item to song list
    songList.appendChild(songElement);
  });
}

// Function to remove a song from the playlist
function removeSongFromPlaylist(playlistName, songIndex) {
  all_playlists[playlistName].splice(songIndex, 1); // Remove song from array
  displaySongsInPlaylist(playlistName); // Refresh playlist display
}

// Function to add the selected song to the currently selected playlist
add_to_playlist.addEventListener("click", function () {
  if (current_selected_playlist) {
    // Use the selected song or default to the first song if none is selected
    let songToAdd =
      current_selected_song || `${songs[0].name} - ${songs[0].artist}`;

    // Check if the song is already in the playlist
    if (!all_playlists[current_selected_playlist].includes(songToAdd)) {
      all_playlists[current_selected_playlist].push(songToAdd);
      //alert("Song added to the playlist!");

      // Refresh the playlist display
      displaySongsInPlaylist(current_selected_playlist);
    } else {
      alert("This song is already in the playlist!");
    }
  } else {
    alert("No playlist available! Please create a playlist first.");
  }
});

// Automatically select the first song when the page loads (but do not add it yet)
document.addEventListener("DOMContentLoaded", function () {
  if (songs.length > 0) {
    current_selected_song = `${songs[0].name} - ${songs[0].artist}`;

    // Visually highlight the first song
    const firstSongElement =
      name_of_the_song_div.querySelector(".name_of_the_song");
    if (firstSongElement) {
      firstSongElement.classList.add("selected-song");
    }
  }
});

// Add event listener for when clicking on the 'Search for playlist' label

document
  .querySelector("#search_playlist_label")
  .addEventListener("click", function () {
    let searchQuery = document
      .querySelector("#playlist_search")
      .value.toLowerCase()
      .trim(); // Get search query
    if (!searchQuery) return; // Exit if the search query is empty

    console.log("Search Query:", searchQuery); // Debugging log

    let playlists = document.querySelectorAll("#all_playlist p"); // Select all playlist elements
    console.log(
      "All Playlists:",
      Array.from(playlists).map((p) => p.textContent.trim())
    ); 

    let firstMatch = null;

    playlists.forEach((playlist) => {
      let playlistName = playlist.textContent.toLowerCase().trim();

      // Check if the playlist matches the search
      if (playlistName.includes(searchQuery)) {
        if (!firstMatch) {
          firstMatch = playlist; // Store the first matching playlist
        }
      }
    });

    // Auto-select the first matching playlist and display its songs
    if (firstMatch) {
      let playlistName = firstMatch.textContent.trim();
      console.log("Selecting Playlist:", playlistName); // Debugging log

      // Select and highlight the found playlist
      selectPlaylist(playlistName);

      // Remove previous selection styles from all playlists
      playlists.forEach((playlist) =>
        playlist.classList.remove("selected-playlist")
      );

      // Apply background color to highlight the selected playlist
      firstMatch.classList.add("selected-playlist");
    } else {
      console.error(`Playlist matching "${searchQuery}" not found!`);
    }
  });





  const toggle = document.getElementById("toggle");

// Function to switch between light and dark modes
toggle.addEventListener("change", function () {
  if (toggle.checked) {
    // Light mode colors
    document.documentElement.style.setProperty("--text-100", "#436578");
    document.documentElement.style.setProperty("--bg-100", "#fffefb");
    document.documentElement.style.setProperty("--bg-200", "#f5f4f1");
    document.documentElement.style.setProperty("--bg-300", "#b6ccd8");
  } else {
    // Dark mode colors
    document.documentElement.style.setProperty("--text-100", "#ffffff");
    document.documentElement.style.setProperty("--bg-100", "#0f1c2e");
    document.documentElement.style.setProperty("--bg-200", "#1f2b3e");
    document.documentElement.style.setProperty("--bg-300", "#374357");
  }
});


