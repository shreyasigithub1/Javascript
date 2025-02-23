const quesJSON = [
  {
    correctAnswer: "Three ",
    options: ["Two", "Three ", "Four", "Five"],
    question: "How many pieces of bun are in a Mcdonald's Big Mac?",
  },
  {
    correctAnswer: "L. Frank Baum",
    options: [
      "Suzanne Collins",
      "James Fenimore Cooper",
      "L. Frank Baum",
      "Donna Leon",
    ],
    question: "Which author wrote 'The Wonderful Wizard of Oz'?",
  },
  {
    correctAnswer: "Atlanta United",
    options: [
      "Atlanta United",
      "Atlanta Impact",
      "Atlanta Bulls",
      "Atlanta Stars",
    ],
    question: "Which of these is a soccer team based in Atlanta?",
  },
  {
    correctAnswer: "A Nanny",
    options: ["A Sow", "A Lioness", "A Hen", "A Nanny"],
    question: "A female goat is known as what?",
  },
  {
    correctAnswer: "P. L. Travers",
    options: [
      "J. R. R. Tolkien",
      "P. L. Travers",
      "Lewis Carroll",
      "Enid Blyton",
    ],
    question: "Which author wrote 'Mary Poppins'?",
  },
];

//getting the div by 'question' id
const questionEl = document.getElementById("question");
//getting the div by 'options' id
const optionEl = document.getElementById("options");
//getting the div by 'score' id
const scoreEl = document.getElementById("score");
let score = 0;
const totalScore = quesJSON.length;

//Next button
//const btn_next = document.createElement("button");
//btn_next.id=("next");
//document.body.append(btn_next);
//btn_next.textContent = "NEXT";
btn_next = document.getElementById("next");

let currentQuestion = 0;

function showQuestion() {
  let { correctAnswer, options: answers, question } = quesJSON[currentQuestion]; //Object destructuring

  questionEl.textContent = question;
  answers = shuffleArray(answers);

  scoreEl.textContent = `score : ${score}/${totalScore}`;

  optionEl.textContent = "";//To clear the previous options

  answers.forEach((opt) => {
    const btn = document.createElement("button");
    btn.textContent = opt;
    optionEl.appendChild(btn);

    //Add evenListeners for options
    btn.addEventListener("click", function () {
      if (btn.textContent === correctAnswer) {
        score++;
        
      } else {
        score = score - 1 / 4;
      }
      scoreEl.textContent = `score : ${score}/${totalScore}`;
       currentQuestion++;
        showQuestion();
      
    });
  });
}

//Add EventListener for next button
btn_next.addEventListener("click", function () {
  if (currentQuestion === (quesJSON.length-1)) {
    questionEl.textContent = "Quiz completed!!";
    optionEl.style.display = "none";
    btn_next.style.display = "none";
  } else {
    currentQuestion++;
    showQuestion();
  }
});

//calling the function
showQuestion();



function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1)); // Pick a random index
    [array[i], array[j]] = [array[j], array[i]]; // Swap elements
  }
  return array;
}

