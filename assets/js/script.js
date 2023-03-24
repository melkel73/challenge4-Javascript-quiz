// Object customerDrink with three properties
// var quiz = {
//     Question: "Javascript is what kind of language?",
//     options: ["Spanish","German","Object Oriented","English"],
//     correct: 2
//   };
var olEl = document.querySelector("#answerlist");
var quEl = document.querySelector("#q");
var timerEl = document.getElementById('countdown');
var startBtn = document.querySelector("#start");
var li1 = document.createElement('li');
var li2 = document.createElement('li');
var li3 = document.createElement('li');
var li4 = document.createElement('li');
var selectedAnswer = "";
var i = 0;
var quiz = [
    {answers: ["Spanish","German","Object Oriented","English"],
     question: "Javascript is what kind of language?",
     correct: "Object Oriented"},
    {answers: ["Boolean","String","Number","All of the above"],
     question: "Which is a valid datatype in Javascript?",
     correct: "All of the above"},
    {answers: ["Hungarian","German","Object Oriented","English"],
     question: "Javascript is what kind of language?",
     correct: "Object Oriented"}
    /* and so on... */
  ];

  // console.log(quiz[0].answers[1]);
var score=0;
var secondsLeft = 60;

startBtn.addEventListener("click", startBtnclick);

function setTime() {
  // Sets interval in variable
  var timerInterval = setInterval(function() {
    // secondsLeft--;
    timerEl.textContent = secondsLeft + ' seconds remaining';
    secondsLeft--;
    if(secondsLeft === 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      // Calls function to create and append image
    //  startBtnclick();
    }

  }, 1000);
}



  function loadQuiz() {
    var wait = false;
    if (i < 10 ) {
    wait = true;
    console.log(i);
       quEl.textContent = quiz[i].question;
      //  li1.textContent = quiz[i].answers[0];
      //  li2.textContent = quiz[i].answers[1];
      //  li3.textContent = quiz[i].answers[2];
      //  li4.textContent = quiz[i].answers[3];

       olEl.appendChild(li1).textContent= quiz[i].answers[0];
       olEl.appendChild(li2).textContent = quiz[i].answers[1];
       olEl.appendChild(li3).textContent = quiz[i].answers[2];
       olEl.appendChild(li4).textContent = quiz[i].answers[3];
       
       var list = document.querySelectorAll('li');
       console.log(list + "in here" + i);
       

      list.forEach((item) => {
        item.addEventListener('click',function() {
        selectedAnswer = event.target.textContent;
        checkAnswer(item,i);
        console.log(i);
        
         })
         
      })
    
    }
    
  }   
   
  
  function checkAnswer(item,i){
    console.log(selectedAnswer ); console.log(item); console.log(event.target.textContent);
    if (selectedAnswer === quiz[i].correct) { console.log(selectedAnswer + " is Correct! Adding 5 seconds to the clock")
     secondsLeft = secondsLeft + 5;
    
     console.log(i);
    }
    else {
      secondsLeft = secondsLeft - 5;
      console.log("Wrong! The correct answer was " + quiz[i].correct + "You just lost 5 seconds!");
      i = i + 1;
      
    }
  }

  function startBtnclick() {
    
    secondsLeft = 60;
    startBtn.setAttribute("data-state", "hidden");
    setTime();
    loadQuiz();
  }

  

