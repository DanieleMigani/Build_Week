// Array delle domande del quiz
const questions = [
    {
      question: "What does CPU stand for??",
      answers: [
        { text: "Central Processing Unit", correct: true },
        { text: "Central Process Unit", correct: false },
        { text: "Computer Personal Unit", correct: false },
        { text: "Central Processor Unit", correct: false },
      ]
    },
    {
      question: "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?",
      answers: [
        { text: "Static", correct: false },
        { text: "Final", correct: true },
        { text: "Private", correct: false },
        { text: "Public", correct: false },
      ]
    },
    {
        question: "The logo for Snapchat is a Bell.",
        answers: [
          { text: "True", correct: false },
          { text: "False", correct: true },
          { text: "", correct: false ,},
          { text: "", correct: false },
        ]
      }, {
        question: "Pointers were not used in the original C programming language; they were added later on in C++.",
        answers: [
          { text: "False", correct: true },
          { text: "True", correct: false },
          { text: "", correct: false },
          { text: "", correct: false },
        ]
      }, {
        question: "What is the most preferred image format used for logos in the Wikimedia database?",
        answers: [
          { text: ".gif", correct: false },
          { text: ".jpeg", correct: false },
          { text: ".svg", correct: true },
          { text: ".png", correct: false },
        ]
      }, {
        question: "In web design, what does CSS stand for?",
        answers: [
          { text: "Counter Strike: Source", correct: false },
          { text: "Cascading Style Sheet", correct: true },
          { text: "Corrective Style Sheet", correct: false },
          { text: "Computer Style Sheet", correct: false },
        ]
      }, {
        question: "What is the code name for the mobile operating system Android 7.0?",
        answers: [
          { text: "Nougat", correct: true },
          { text: "Ice Cream Sandwich", correct: false },
          { text: "Jelly Bean", correct: false },
          { text: "Marshmallow", correct: false },
        ]
      }, {
        question: "On Twitter, what is the character limit for a Tweet?",
        answers: [
          { text: "100", correct: false },
          { text: "160", correct: false },
          { text: "120", correct: false },
          { text: "140", correct: true},
        ]
      }, {
        question: "Linux was first created as an alternative to Windows XP.",
        answers: [
          { text: "False", correct: true },
          { text: "True", correct: false },
          { text: "", correct: false },
          { text: "", correct: false },
          
        ]
      }, {
        question: "Which programming language shares its name with an island in Indonesia?",
        answers: [
          { text: "Python", correct: false },
          { text: "Java", correct: true },
          { text: "C", correct: false },
          { text: "Jakarta", correct: false },
        ]
      },
  ];
  
  // Seleziona gli elementi HTML
  const questionNumber = document.getElementById("question-number");
  const questionText = document.querySelector("h1");
  const answerButtons = document.querySelectorAll(".answer");
  const score = document.getElementById("score");
  const scoreValue = document.getElementById("score-value");
  const timerValue = document.getElementById("timer-value");
  
  let currentQuestionIndex = 0;
  let correctAnswers = 0;
  let secondsLeft = 30;
  let timerInterval;
  
  // Funzione che inizia il quiz
  function startQuiz() {
    showQuestion();
    startTimer();
  }
  
  // Funzione che mostra la domanda corrente
  function showQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionNumber.innerText = `QUESTION ${currentQuestionIndex + 1} / ${questions.length}`;
    questionText.innerText = currentQuestion.question;
    answerButtons.forEach((button, index) => {
      button.innerText = currentQuestion.answers[index].text;
      button.onclick = () => {
        checkAnswer(currentQuestion.answers[index].correct);
        clearInterval(timerInterval);
        setTimeout(showNextQuestion, 1000);
      }
    });
  }
  
  // Funzione che controlla se la risposta data dall'utente è corretta
  function checkAnswer(isCorrect) {
    if (isCorrect) {
      correctAnswers++;
    }
  }
  
  // Funzione che avvia il timer per ogni domanda
  function startTimer() {
    secondsLeft = 30;
    timerValue.innerText = secondsLeft;
    timerInterval = setInterval(() => {
      secondsLeft--;
      timerValue.innerText = secondsLeft;
      if (secondsLeft === 0) {
        clearInterval(timerInterval);
        showNextQuestion();
      }
    }, 1000);
  }
  
  // Funzione che mostra la domanda successiva
  function showNextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex === questions.length) {
      showScore();
    } else {
      showQuestion();
      startTimer();
    }
  }
  
  // Funzione che mostra il risultato del quiz
  function showScore() {
    questionNumber.innerText = "";
    questionText.innerText = `Hai ottenuto ${correctAnswers} risposte corrette su ${questions.length}.`;
    answerButtons.forEach(button => {
      button.style.display = "none";
    });
    score.style.display = "block";
    scoreValue.innerText = correctAnswers;
  }
  
  // Avvia il quiz quando la pagina è completamente caricata
  window.onload = startQuiz;
  