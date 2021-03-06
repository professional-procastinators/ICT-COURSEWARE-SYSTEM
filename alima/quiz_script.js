var questionIndex =
  localStorage.getItem("questionIndex") !== null
    ? parseInt(localStorage.getItem("questionIndex"))
    : 0;
var questionNumber =
  localStorage.getItem("questionNumber") !== null
    ? parseInt(localStorage.getItem("questionNumber"))
    : 1;
var score =
  localStorage.getItem("score") !== null
    ? parseInt(localStorage.getItem("score"))
    : 0;
console.log(`-----FROM quiz_script-----`);
console.log("score: " + score);
console.log("questionIndex " + questionIndex);
console.log("questionNumber " + questionNumber);
var container = document.getElementById("quizContainer");
var questionEl = document.getElementById("question");
var opt1 = document.getElementById("opt1");
var opt2 = document.getElementById("opt2");
var opt3 = document.getElementById("opt3");
var opt4 = document.getElementById("opt4");
var nextButton = document.getElementById("nextButton");
var resultCont = document.getElementById("result");

function loadQuestion(qIndex, questionsArray) {
  var q = questionsArray[qIndex];
  questionEl.textContent = questionNumber + ". " + q.question;
  opt1.textContent = q.option1;
  opt2.textContent = q.option2;
  opt3.textContent = q.option3;
  opt4.textContent = q.option4;
}
function loadNextQuestion(questionsArray) {
  var selectedOption = document.querySelector("input[type = radio]:checked");
  if (!selectedOption)
    swal({
      type: "error",
      title: "Please select your answer!"
    });

  var answer = selectedOption.value;
  if (questionsArray[questionIndex].answer == answer) {
    score++;
  }
  selectedOption.checked = false;
  questionNumber++;
  questionIndex++;
  if (questionNumber == 10) {
    nextButton.textContent = "Finish";
  }
  if (questionNumber == 11) {
    if (score < 8) {
      //initialise hastakenretake object
      let hTR = { input: false, output: false, storage: false };

      //checks if htr already exists and then copy it
      if (localStorage.getItem("hasAlreadyTakenRetake") !== null)
        hTR = JSON.parse(localStorage.getItem("hasAlreadyTakenRetake"));
      if (
        (!hTR.input && getUrlParameter("quiz") === "inputQuiz") ||
        (!hTR.output && getUrlParameter("quiz") === "outputQuiz") ||
        (!hTR.storage && getUrlParameter("quiz") === "storageQuiz")
      ) {
        //updates the htr to true
        switch (getUrlParameter("quiz")) {
          case "inputQuiz":
            hTR.input = true;
            break;
          case "outputQuiz":
            hTR.output = true;
            break;
          case "storageQuiz":
            hTR.storage = true;
            break;
        }
        //updates hTR
        localStorage.setItem("hasAlreadyTakenRetake", JSON.stringify(hTR));
        //sweet alert retake test prompt
        Swal.fire({
          title: "Retake Test",
          text:
            "Failed! Your score is " +
            score +
            "\n\nWould you like to retake the test?",
          type: "warning",
          showCancelButton: true,
          cancelButtonText: "No",
          confirmButtonText: `Yes, I'll retake the test`
        }).then(result => {
          //if statement executes if user clicked on yes
          if (result.value) {
            currentQuestion = 0;
            questionsDone = [];
            doneCounter = 0;
            questionNumber = 1;
            score = 0;
            nextButton.textContent = "Next";
            localStorage.setItem("questionNumber", 1);
            localStorage.setItem("score", 0);
            loadQuestion(questionIndex, questionsArray);
          } else {
            localStorage.removeItem("questionIndex");
            localStorage.removeItem("questionNumber");
            localStorage.removeItem("score");
            localStorage.removeItem("currentQuiz");
            window.location.href = "../main.html";
            localStorage.setItem("isTakingQuiz", false);
          }
        });
      } else {
        Swal.fire({
          title: "Failed",
          text: `You failed your quiz exam, here's your score: ${score}`,
          type: "confirm"
        }).then(() => {
          localStorage.setItem("isTakingQuiz", false);
          switch (getUrlParameter("quiz")) {
            case "inputQuiz":
              localStorage.setItem("completedInputQuiz", true);
              break;
            case "outputQuiz":
              localStorage.setItem("completedOutputQuiz", true);
              break;
            case "storageQuiz":
              localStorage.setItem("completedStorageQuiz", true);
              break;
          }
          window.location.href = "../main.html";
        });
        localStorage.removeItem("questionIndex");
        localStorage.removeItem("questionNumber");
        localStorage.removeItem("score");
        localStorage.removeItem("currentQuiz");
      }
    } else {
      Swal.fire({
        title: "Passed",
        text: "Congratulations, you passed the Quiz! your score is " + score,
        type: "confirm"
      }).then(() => {
        localStorage.setItem("questionIndex", 0);
        localStorage.setItem("questionNumber", 1);
        localStorage.setItem("score", 0);
        localStorage.setItem("isTakingQuiz", false);
        switch (getUrlParameter("quiz")) {
          case "inputQuiz":
            localStorage.setItem("completedInputQuiz", true);
            break;
          case "outputQuiz":
            localStorage.setItem("completedOutputQuiz", true);
            break;
          case "storageQuiz":
            localStorage.setItem("completedStorageQuiz", true);
            break;
        }
        localStorage.removeItem("currentQuiz");
        window.location.href = "../main.html";
      });
    }
    return;
  }
  localStorage.setItem("questionIndex", questionIndex.toString());
  localStorage.setItem("questionNumber", questionNumber.toString());
  localStorage.setItem("score", score.toString());
  localStorage.setItem("shuffledQuestions", null);
  loadQuestion(questionIndex, questionsArray);
}
function shuffle(questions) {
  // do randomIndex = Math.floor(Math.random() * questions.length);
  // while (checkIfDone(randomIndex))
  // currentQuestion = randomIndex;
  // return currentQuestion;
  var currentIndex = questions.length;
  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = questions[currentIndex];
    questions[currentIndex] = questions[randomIndex];
    questions[randomIndex] = temporaryValue;
  }
  return questions;
}

function loadBackQuestion(shuffledQuestion){
  questionIndex--;
  score--;
  questionNumber--;
  loadQuestion(questionIndex,shuffledQuestions);
}