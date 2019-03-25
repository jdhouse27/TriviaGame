$(document).ready(function() {
    //reset();  
    question1();
}); 

    //question object with answer arrays
  var questionsArrray = [
    "Who is the all-time hits leader?", 
    "Who is the all-time leader in home runs?",
    "Who is the all-time leader in stolen bases?", 
    "Who holds the record for most no-hitter games thrown?",
    "Who holds the most home runs in a single season?",
    "Who holds holds the record for the most strikeouts in a career?",
    "What team has won the most World Series championships?",
    "Who holds the record for most consecutive games played?", 
    "What number did Jackie Robison wear?" 
  ];
    
    
    var currentQuestion = "";
    var correctAnswer = 0;
    var wrongAnswer = 0;
    var correctGuess="";
    var wrongGuess="";


 // function reset() {     
 // //Change the "timer" div to "20 seconds."
 //   $(".timer").html("<p>Time Remaining: " + timeleft + "</p>");
 //   
 // }
 function questionTime (){
  var timeleft = 20;
  var timer = setInterval(function(questiontimer){
    $(".timer").html("<p>Time Remaining: " + timeleft + "</p>");
    timeleft -= 1;
    if(timeleft <= 0){
      clearInterval(timer);
      
    }
  }, 1000);
  };
//wait timer between questions

function waitTimer(){
  var waitTime = 3
  var wait =setInterval(function(waiting){
    waitTime -= 1;
    if(waitTime <= 0){
      clearInterval(wait);
    }
  }, 1000);
};

//question 1
function question1(){
  var guessOne = "Pete Rose";
  var guessTwo = "Babe Ruth";
  var guessThree = "Barry Bonds";
  var guessFour = "Hank Aaron";
        
    $(".question").text(questionsArrray[0]);
    $(".answer1").text(guessOne);
    $(".answer2").text(guessTwo);
    $(".answer3").text(guessThree);
    $(".answer4").text(guessFour);
    questionTime();

//question 1 click function
$("button").click(function(){
  var guess = $(this).text();
  console.log(guess);
  if (guess === "Pete Rose"){
    correctAnswer ++;
      waitTimer();
      question2();
      console.log("HIT");
  
    } else {
      wrongAnswer ++;
      waitTimer();
      question2();
      console.log("STRIKE");
      };
});
};

//question 2
function question2(){
  var guessOne = "Ken Griffey Jr.";
  var guessTwo = "Babe Ruth";
  var guessThree = "Barry Bonds";
  var guessFour = "Hank Aaron";
        
    $(".question").text(questionsArrray[1]);
    $(".answer1").text(guessOne);
    $(".answer2").text(guessTwo);
    $(".answer3").text(guessThree);
    $(".answer4").text(guessFour);
    questionTime();

//question 2 click function
$("button").click(function(){
  var guess = $(this).text();
    
  if (guess === "Barry Bonds"){
    correctAnswer ++;
      waitTimer();
      question3();
      console.log("HIT");
  
    } else {
      wrongAnswer ++;
      waitTimer();
      question3();
      console.log("STRIKE");
      };
});
};

//question 3
function question3(){
  var guessOne = "Otis Amos";
  var guessTwo = "Rickey Henderson";
  var guessThree = "Billy Hamilton";
  var guessFour = "Jose Altuve";
        
    $(".question").text(questionsArrray[2]);
    $(".answer1").text(guessOne);
    $(".answer2").text(guessTwo);
    $(".answer3").text(guessThree);
    $(".answer4").text(guessFour);
    questionTime();
  
//question 3 click function    
$("button").click(function(guess){
  var guess = $(this).text();
  
  if (guess === "Rickey Henderson"){
    correctAnswer ++;
      waitTimer();
      question4();
      console.log("HIT");

    } else {
      wrongAnswer ++;
      waitTimer();
      question4();
      console.log("STRIKE");
      };
});
};

//question 4
function question4(){
  var guessOne = "Nolan Ryan";
  var guessTwo = "Babe Ruth";
  var guessThree = "Randy Johnson";
  var guessFour = "Clayton Kershaw";
        
    $(".question").text(questionsArrray[3]);
    $(".answer1").text(guessOne);
    $(".answer2").text(guessTwo);
    $(".answer3").text(guessThree);
    $(".answer4").text(guessFour);
    questionTime();
     
//question 4 click function   
$("button").click(function(guess){
  var guess = $(this).text();
  if (guess === "Nolan Ryan"){
    correctAnswer ++;
      waitTimer();
      question5();
      console.log("HIT");

    } else {
      wrongAnswer ++;
      waitTimer();
      question5();
      console.log("STRIKE");
      };
  });
}; 

//question 5
function question5(){
  var guessOne = "Roger Marris";
  var guessTwo = "Babe Ruth";
  var guessThree = "Sammy Sosa";
  var guessFour = "Barry Bonds";
        
    $(".question").text(questionsArrray[4]);
    $(".answer1").text(guessOne);
    $(".answer2").text(guessTwo);
    $(".answer3").text(guessThree);
    $(".answer4").text(guessFour);
    questionTime();
   
//question 5 click function  
$("button").click(function(guess){
  var guess = $(this).text();
  if (guess === "Barry Bonds"){
    correctAnswer ++;
      waitTimer();
      question6();
      console.log("HIT");

    } else {
      wrongAnswer ++;
      waitTimer();
      question6();
      console.log("STRIKE");
      };
  });
};

//question 6
function question6(){
  var guessOne = "Brett Saberhagen";
  var guessTwo = "Ty Cobb";
  var guessThree = "Nolan Ryan";
  var guessFour = "Justin Verlander";
        
    $(".question").text(questionsArrray[5]);
    $(".answer1").text(guessOne);
    $(".answer2").text(guessTwo);
    $(".answer3").text(guessThree);
    $(".answer4").text(guessFour);
    questionTime();
  
//question 6 click function
$("button").click(function(guess){
  var guess = $(this).text();
  if (guess === "Nolan Ryan"){
    correctAnswer ++;
      waitTimer();
      question7();
      console.log("HIT");

    } else {
      wrongAnswer ++;
      waitTimer();
      question7();
      console.log("STRIKE");
      };
  });
};

//question 7 
function question7(){
  var guessOne = "New York Yankees";
  var guessTwo = "St. Louis Cardinals";
  var guessThree = "Chicago Cubs";
  var guessFour = "Kansas City Royals";
        
    $(".question").text(questionsArrray[6]);
    $(".answer1").text(guessOne);
    $(".answer2").text(guessTwo);
    $(".answer3").text(guessThree);
    $(".answer4").text(guessFour);
    questionTime();

//question 7 click function   
$("button").click(function(guess){
  var guess = $(this).text();
  if (guess === "New York Yankees"){
    correctAnswer ++;
      waitTimer();
      question8();
      console.log("HIT");

    } else {
      wrongAnswer ++;
      waitTimer();
      question8();
      console.log("STRIKE");
      };
  });
};

//question 8
function question8(){
  var guessOne = "George Brett";
  var guessTwo = "Babe Ruth";
  var guessThree = "Cal Ripken Jr";
  var guessFour = "Mickey Mantle";
        
    $(".question").text(questionsArrray[7]);
    $(".answer1").text(guessOne);
    $(".answer2").text(guessTwo);
    $(".answer3").text(guessThree);
    $(".answer4").text(guessFour);
    questionTime();

//question 8 click function  
$("button").click(function(guess){
  var guess = $(this).text();
  if (guess === "Cal Ripken Jr"){
    correctAnswer ++;
      waitTimer();
      question9();
      console.log("HIT");

    } else {
      wrongAnswer ++;
      waitTimer();
      question9();
      console.log("STRIKE");
      };
  });
};

//question 9
function question9(){
  var guessOne = "1";
  var guessTwo = "21";
  var guessThree = "42";
  var guessFour = "13";
        
    $(".question").text(questionsArrray[8]);
    $(".answer1").text(guessOne);
    $(".answer2").text(guessTwo);
    $(".answer3").text(guessThree);
    $(".answer4").text(guessFour);
    questionTime();

//question 9 click function  
$("button").click(function(guess){
  var guess = $(this).text();
  if (guess === "42"){
    correctAnswer ++;
      waitTimer();
      console.log("HIT");
  } else {
      wrongAnswer ++
      waitTimer();
      console.log("STRIKE");
      };
  });
};