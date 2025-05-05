//Implement your code here

const cardName = document.getElementsByClassName("name");
const cardImage = document.getElementsByClassName("img");
const cardExperience = document.getElementsByClassName("experience");
const cardAbilities = document.getElementsByClassName("abilities");

const fightButton = document.getElementById("fight");

const p1Name = document.getElementById("p1_name");
const p1Score = document.getElementById("p1_score");

const p2Name = document.getElementById("p2_name");
const p2Score = document.getElementById("p2_score");

// fetch("https://pokeapi.co/api/v2/pokemon/")
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data.results.length);
//   });

let experienceArray = [];
fightButton.addEventListener("click", function () {
  p1Name.textContent = "John";
  p2Name.textContent = "Alice";

  experienceArray = [];

  for (let i = 0; i < 2; i++) {
    const randomNumber = Math.floor(Math.random() * 20) + 1;
    assignPokemon(randomNumber, i);
  }
});

async function assignPokemon(randNum, indexNumber) {
  cardImage[indexNumber].style.backgroundImage = "none";
  cardName[indexNumber].textContent = "";

  cardExperience[indexNumber].textContent = "";
  cardAbilities[indexNumber].innerHTML = "";

  const urlData = await fetch(`https://pokeapi.co/api/v2/pokemon/${randNum}/`);

  const data = await urlData.json();

  cardImage[
    indexNumber
  ].style.backgroundImage = `url(${data.sprites.other.dream_world.front_default})`;
  cardName[indexNumber].textContent = data.name;
  cardExperience[indexNumber].textContent = data.base_experience;
  experienceArray[indexNumber] = data.base_experience;

  if (experienceArray[0] !== undefined && experienceArray[1] !== undefined) {
    compareScores();
  }

  data.abilities.forEach((n) => {
    const listItem = document.createElement("li");
    listItem.textContent = n.ability.name;
    cardAbilities[indexNumber].append(listItem);
  });
}

function compareScores() {
  if (experienceArray[0] > experienceArray[1]) {
    p1Score.textContent = Number(p1Score.textContent) + 1;
  } else if (experienceArray[0] < experienceArray[1]) {
    p2Score.textContent = Number(p2Score.textContent) + 1;
  }
}
