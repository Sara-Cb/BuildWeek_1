const questions = [
    {
      question: "What does CPU stand for?",
      correct_answer: "Central Processing Unit",
      incorrect_answers: [
        "Central Process Unit",
        "Computer Personal Unit",
        "Central Processor Unit",
      ],
    },
    {
      question:
        "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?",
      correct_answer: "Final",
      incorrect_answers: ["Static", "Private", "Public"],
    },
    {
      question: "The logo for Snapchat is a Bell.",
      correct_answer: "False",
      incorrect_answers: ["True"],
    },
    {
      question:
        "Pointers were not used in the original C programming language; they were added later on in C++.",
      correct_answer: "False",
      incorrect_answers: ["True"],
    },
    {
      question:
        "What is the most preferred image format used for logos in the Wikimedia database?",
      correct_answer: ".svg",
      incorrect_answers: [".png", ".jpeg", ".gif"],
    },
    {
      question: "In web design, what does CSS stand for?",
      correct_answer: "Cascading Style Sheet",
      incorrect_answers: [
        "Counter Strike: Source",
        "Corrective Style Sheet",
        "Computer Style Sheet",
      ],
    },
    {
      question:
        "What is the code name for the mobile operating system Android 7.0?",
      correct_answer: "Nougat",
      incorrect_answers: [
        "Ice Cream Sandwich",
        "Jelly Bean",
        "Marshmallow",
      ],
    },
    {
      question: "On Twitter, what is the character limit for a Tweet?",
      correct_answer: "140",
      incorrect_answers: ["120", "160", "100"],
    },
    {
      question: "Linux was first created as an alternative to Windows XP.",
      correct_answer: "False",
      incorrect_answers: ["True"],
    },
    {
      question:
        "Which programming language shares its name with an island in Indonesia?",
      correct_answer: "Java",
      incorrect_answers: ["Python", "C", "Jakarta"],
    },
  ];

  const questionTitle = document.getElementById("question"); // Titolo domanda
  // const questionExplanation = document.getElementById("questionExplanation"); //Sottotitolo domanda
  const questionAnswer = document.getElementById("answers"); // Risposta
  const nxtBtn = document.getElementById("nxtBtn"); // Bottone prossima domanda
  const questionNumber = document.getElementById("question-number"); // Numero domanda attuale
  const questionTotal = document.getElementById("total-questions"); // Numero domande totali -- RIGA 82

  let currentQuestion = 0;
  let score = 0;

  function showQuestion() {
    const currentQ = questions[currentQuestion]; // Ottieni la domanda corrente dall'array questions
    questionTitle.innerText = currentQ.question; // Mostra il testo della domanda corrente
    // questionExplanation.innerText = ""; // Resetta il testo di spiegazione
    questionAnswer.innerHTML = ""; // Resetta le risposte precedenti
  
    // Crea un pulsante per ogni risposta e aggiungilo alla pagina
    currentQ.incorrect_answers.forEach((answer) => {
      const answerBtn = document.createElement("button");
      answerBtn.innerText = answer;
      answerBtn.addEventListener("click", handleWrongAnswer);
      questionAnswer.appendChild(answerBtn);
    });
  
    // Crea il pulsante per la risposta corretta e aggiungilo alla pagina
    const correctAnswerBtn = document.createElement("button");
    correctAnswerBtn.innerText = currentQ.correct_answer;
    correctAnswerBtn.addEventListener("click", handleCorrectAnswer);
    questionAnswer.appendChild(correctAnswerBtn);
    questionNumber.innerText = currentQuestion + 1;
    questionTotal.innerText = questions.length;
  }
  
  // Funzione per gestire una risposta corretta
  function handleCorrectAnswer() {
    score++; // Aumenta il punteggio di 1
    showNextQuestion();
  }
  
  // Funzione per gestire una risposta sbagliata
  function handleWrongAnswer() {
    showNextQuestion();
  }
  
  // Funzione per mostrare la prossima domanda
  function showNextQuestion() {
    currentQuestion++; // Incrementa l'indice della domanda corrente
    if (currentQuestion >= questions.length) {
      // Se tutte le domande sono state fatte, reindirizza alla nuova pagina
      console.log('Bravo!');
    } else {
      showQuestion(); // Altrimenti mostra la prossima domanda
    }
  }
  
  // Aggiungi l'evento "click" al pulsante "nxtBtn"
  nxtBtn.addEventListener("click", showNextQuestion);
  
  // Inizia mostrando la prima domanda
  showQuestion();
