// Object customerDrink with three properties
// var quiz = {
//     Question: "Javascript is what kind of language?",
//     options: ["Spanish","German","Object Oriented","English"],
//     correct: 2
//   };
var olEl = document.querySelector("#answerlist");
var quEl = document.querySelector("#q");
var startBtn = document.querySelector("#start");
var li1 = document.createElement("li");
var li2 = document.createElement("li");
var li3 = document.createElement("li");
var li4 = document.createElement("li");
var quiz = [
    {answers: ["Spanish","German","Object Oriented","English"],
     question: "Javascript is what kind of language?",
     correct: "Object Oriented"},
    {answers: ["Boolean","String","Number","All of the above"],
     question: "Which is a valid datatype in Javascript?",
     correct: "All of the above"},
    {answers: ["Spanish","German","Object Oriented","English"],
     question: "Javascript is what kind of language?",
     correct: "Object Oriented"}
    /* and so on... */
  ];

  console.log(quiz[0].answers[1]);
var score=0;
var secondsLeft = 60;

function setTime() {
  // Sets interval in variable
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " seconds remaining on quiz.";

    if(secondsLeft === 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      // Calls function to create and append image
      sendMessage();
    }

  }, 1000);
}

function startBtnclick() {
    
    secondsLeft = 60;
    startBtn.setAttribute("data-state", "hidden");
    loadQuiz();

  };

  function loadQuiz() {
    // console.log(olEl)
    for (let i = 0; i < quiz.length; i++) {
       quEl.textContent = quiz[0].question;
      
       olEl.appendChild(li1).textContent= quiz[0].answers[0];
       olEl.appendChild(li2).textContent = quiz[0].answers[1];
       olEl.appendChild(li3).textContent = quiz[0].answers[2];
       olEl.appendChild(li4).textContent = quiz[0].answers[3];
       olEl.addEventListener("click",checkAnswer(EventTarget));
      }
    
    

  };
  function checkAnswer(EventTarget) {
    console.log(this);
  }

  startBtn.addEventListener("click", startBtnclick);