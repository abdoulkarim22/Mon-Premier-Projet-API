const quizData = [
    {
      question: `${"``"}`+ `${"Quel est le sport Roi au Niger"}`+ `${"``"}`,
      options: ["Football", "Athlétisme", "Basket-ball", "Lutte traditionnelle","Cyclisme","Boxe",],
      correctAnswer: "Lutte traditionnelle"
    },
    {
      question: "Qui fut le vainqueur de la lutte traditionnelle en 1975 au Niger ?",
      options: ["Balla Kado", "Kantou", "Salma Dan Rani ", " Issaka Issaka","Badamassi Alassane"],
      correctAnswer: "Kantou"
    },
    {
      question: "Qui est le meilleur lutteur du Niger ?",
      options: ["Zakirou", "Yacouba Adamou", " Issaka Issaka", " Yahaya Kaka","Oumarou Bindigaou"],
      correctAnswer: "Issaka Issaka"
    },
    {
        question: "En quelle année a eu lieu la première édition du Sabre national de lutte traditionnelle ?",
        options: [" Tahoua", "Dosso", "Maradi", "Zinder","Niamey"],
        correctAnswer: "Tahoua"
      },
      {
        question: "Quelle est la date de la première édition du Sabre national de lutte traditionnelle ?",
        options: ["1977", "2000", " 1975", "1990","1980","1976","1955"],
        correctAnswer: "1975"
      },
      {
        question: "Quelle est la région la plus titrée ?",
        options: ["Niamey", "Agadez", "Dosso" ,"Maradi", "Zinder","Tillaberi"],
        correctAnswer: "Maradi"
      },
      {
        question: "Où s'est déroulée la 42e édition du Sabre national ?",
        options: ["Tahoua", "Diffa", "Dosso" ,"Tillaberi","Niamey"],
        correctAnswer: "Niamey"
      },
    // Add more questions as needed
  ];

  let currentQuestion = 0;
  let score = 0;
  let chexk = null

  const quizContainer = document.getElementById('quiz-container');
  const resultContainer = document.getElementById('result-container');
  const questionElement = document.getElementById('question');
  const optionsContainer = document.getElementById('options');
  const submitButton = document.getElementById('submit-btn');
  const scoreElement = document.getElementById('score');

  function loadQuestion() {
    const currentQuizData = quizData[currentQuestion];
    questionElement.innerText = currentQuizData.question;

     optionsContainer.innerHTML = "";
     currentQuizData.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.style.width = "200px"
        button.innerText = option;
        button.addEventListener('click', () => checkAnswer(option));
       optionsContainer.appendChild(button);
     });
  }

  function checkAnswer(selectedOption) {
    const currentQuizData = quizData[currentQuestion];

    if (selectedOption === currentQuizData.correctAnswer) {
      score++;
    }

    currentQuestion++;

    if (currentQuestion < quizData.length) {
      loadQuestion();
    } else {
      showResult();
      btn_retourner.classList.add("feedback");
    }
  }

  function showResult() {
    quizContainer.style.display = 'none';
    resultContainer.style.display = 'block';
    scoreElement.innerHTML = `${"Votre score "}` + score;
  }

  loadQuestion();
   const btn_retourner = document.getElementById("btn-retourner")
//   submitButton.addEventListener('click',function () {
//     if (score === 0) {
//         alert("Veuillez choisir please");
//     }else{
//         showResult();
//     }
//   });
  btn_retourner.addEventListener('click',function () {
    window.location = "index.html"
  });

