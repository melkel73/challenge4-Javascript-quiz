//set the variables - these are page elements
var olEl = document.querySelector("#answerlist");
var quEl = document.querySelector("#q");
var timerEl = document.getElementById('countdown');
var startBtn = document.querySelector("#start");
var memBtn = document.querySelector("#clearmemory");
var li1 = document.createElement('button');
var li2 = document.createElement('button');
var li3 = document.createElement('button');
var li4 = document.createElement('button');
// more variables
var selectedAnswer = "";
var i = 0;
//Set the quiz questions up
var quiz = [
    {answers: ["Spanish","German","Object Oriented","English"],
     question: "Javascript is what kind of language?",
     correct: "Object Oriented"},

    {answers: ["Boolean","String","Number","All of the above"],
     question: "Which is a valid datatype in Javascript?",
     correct: "All of the above"},

    {answers: ["<js>","<scripting>","<script>","<javascript>"],
     question: "Inside what HTML tag do you put Javascript Code?",
     correct: "<script>"},

     {answers: ["define x","variable x","var x","def x"],
     question: "How do you declare a JavaScript variable x?",
     correct: "var x"},

     {answers: ["null","undefined","Nothing","NaN"],
     question: "When we don't assign a value to a variable it will be?",
     correct: "undefined"},

     {answers: ["True","Nan","False","Undefined"],
     question: "Can you guess the return of the following code: Boolean(10>9)?",
     correct: "True"},

     {answers: ["14",'"77"','"347"',"77"],
     question: "What is The value of x in the equation: var x = 3 + 4 + '7'?",
     correct: "'77'"},

     {answers: ["click","onclick","hover","onhover"],
     question: "Which of the following events will you add in the addEventListener()method??",
     correct: "click"},

     {answers: ["Inside <body>","Inside <head>","Inside <head> and <body>","None of these"],
     question: "Where is the correct place to insert JavaScript on a web page",
     correct: "Inside <body>"},
     {answers: ["click","onclick","hover","onhover"],
     question: "Which of the following events will you add in the addEventListener()method??",
     correct: "click"}
  ];
var score=0;
var secondsLeft = 60;


if (localStorage.getItem("highscore") > 0) {
  var hs = localStorage.getItem("highscore");
}
else {
var hs = 0;
var initials = "No One";
}

// set the event listener for the start button and the initial text content for the h2 header. Pull in the high score and initials of highest score
// if (localStorage.getItem("initials") == null) { memBtnclick();}
startBtn.addEventListener("click", startBtnclick);
memBtn.addEventListener("click",memBtnclick);


// if (localStorage.getItem("initials") == null) { initials = "No One";}
// else { initials = localStorage.getItem("initials");}

// if (localStorage.getItem("highscore") == null) { hs = 0;}
// else {hs = localStorage.getItem("highscore");}

timerEl.textContent = "The Timer will start when you click start! The score to beat is " + localStorage.getItem("highscore") + " by " + localStorage.getItem("hsperson") + "!";

function setTime() {
  // Sets interval in variable
  var timerInterval = setInterval(function() {
    // secondsLeft--;
    timerEl.textContent = secondsLeft + ' seconds remaining';
    secondsLeft--;
    if(secondsLeft == 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      loadQuiz();
      // Calls function to create and append image
    //  startBtnclick();
    }

  }, 1000);
}

  function loadQuiz() {
    if ((i < 10 ) && (secondsLeft > 0)) {
    quEl.textContent = quiz[i].question;
    olEl.appendChild(li1).textContent= quiz[i].answers[0];
    olEl.appendChild(li2).textContent = quiz[i].answers[1];
    olEl.appendChild(li3).textContent = quiz[i].answers[2];
    olEl.appendChild(li4).textContent = quiz[i].answers[3];
    li1.style.display = "block";
    li2.style.display = "block";
    li3.style.display = "block";
    li4.style.display = "block";
    var list = document.querySelectorAll('button');
      
      if (i === 0) {
      list.forEach((item) => {
      item.addEventListener('click',function() {
      selectedAnswer = event.target.textContent;
      checkAnswer(item);                       }
                           )   
                             }
                  )
                  }
            }
    else {
      olEl.removeChild(li1);
      olEl.removeChild(li2);
      olEl.removeChild(li3);
      olEl.removeChild(li4);
      timerEl.style.display = "none";
      //if they beat the high score let them store their initials
      if (localStorage.getItem("highscore") < secondsLeft) {
       initials = prompt("You got the high score! Enter your Initials to save the High Score!");
      quEl.textContent = "Game Over! Your score is " + secondsLeft + ". You have the new High Score " + initials + "!";
      localStorage.setItem("highscore", secondsLeft); localStorage.setItem("hsperson",initials);
      }
      //else if they did not get the high score pop an alert
      else {
        alert("You did not make a high score. Try again!");
        quEl.textContent = "Game Over! Your score is " + secondsLeft + ".";
      }
      startBtn.style.display = "inline";
    
      startBtn.textContent = "Try Again!";
      memBtn.style.display = "inline";
      i = 0;
    }
  }   
   
  function checkAnswer(EventTarget,item){
    selectedAnswer = EventTarget.textContent;
    console.log(selectedAnswer ); console.log(item); console.log(event.target.textContent);
    if (selectedAnswer === quiz[i].correct) { console.log(selectedAnswer)
    }
    else {
      secondsLeft = secondsLeft - 5;
      console.log("Wrong! The correct answer was " + quiz[i].correct + "You just lost 5 seconds!");
    }
    i = i + 1;
    loadQuiz();
  }

  function startBtnclick() {
    secondsLeft = 60;
    startBtn.style.display = "none";
    memBtn.style.display = "none"
    setTime();
    loadQuiz();
  }

  function memBtnclick() {
    localStorage.clear;
    localStorage.setItem("highscore",0);
    localStorage.setItem("hsperson","No One");
     location.reload();
  }
  


