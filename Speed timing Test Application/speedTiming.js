//Complete the given scaffold to implement all the functionalities mentioned in the problem Statement.
const sentences = `The quick brown fox jumps over the lazy dog.
  Sphinx of black quartz, judge my vow.
  Pack my box with five dozen liquor jugs.
  How vexingly quick daft zebras jump!`;
const start_button = document.getElementById("start-btn");
const input_field = document.getElementById("input");
const paragraph = document.getElementById("sentence");
const timer = document.getElementById("timer");
const result_div = document.getElementById("result");
const retry_button = document.getElementById("retry-btn");
const speedElement = document.getElementById("speed");
const accuracyElement = document.getElementById("accuracy");
let seconds = 30;


//changeTimer function
function changeTimer() {
  seconds--;
  timer.textContent = `00:${seconds}`;
  if (seconds == 0) {
    clearInterval(timerInterval);
    result_div.style.display = "block";
    input_field.disabled = true;
    start_button.disabled = true;
  }
}
let timerInterval;

//start button eventListner
start_button.addEventListener("click", function () {
  clearInterval(timerInterval);
  input_field.disabled = false;
  paragraph.textContent = sentences;
  start_button.disabled = true;
  timer.textContent = `00:${seconds}`;
  timerInterval = setInterval(changeTimer, 1000);
});

speedElement.textContent = "0";
accuracyElement.textContent = '0';

//input field eventlistner to check accuraccy and speed
input_field.addEventListener("input", function () {
  let userWords = input_field.value.trim().split(" ");
  let originalWords = sentences.split(" ");

  let correctCount = 0;
  let typedChars = 0;

  for (let i = 0; i < userWords.length; i++) {
    if (userWords[i] === originalWords[i]) {
      correctCount++;
      typedChars += userWords[i].length;
    } else {
      break;
    }
  }

    let speed = ((typedChars / 30) * 60).toFixed(2);
    
        speedElement.textContent = speed;
   
  let accuracy = ((correctCount / originalWords.length) * 100).toFixed(2);
  accuracyElement.textContent = accuracy;
});

//retry button eventListner
retry_button.addEventListener("click", function () {
  
  start_button.disabled = false;
  result_div.style.display = "none";
  input_field.value = "";
  input_field.disabled = false;
  seconds = 30;
  timer.textContent = `00:${seconds}`;
  
});
