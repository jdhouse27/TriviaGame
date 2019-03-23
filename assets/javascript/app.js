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
  var timeleft = 20;
  var timer = setInterval(function(questiontimer){
    $(".timer").html("<p>Time Remaining: " + timeleft + "</p>");
    timeleft -= 1;
    if(timeleft <= 0){
      clearInterval(timer);
      
    }
  }, 1000);

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
   
    $("button").click(function(guess){
      if (answer = guessOne){
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
     
    $("button").click(function(guess){
      if (answer = guessThree){ 
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
   
    
    $("button").click(function(guess){
      if (answer = guessTwo){ 
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

}

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
      
    $("button").click(function(guess){
      if (answer = guessOne){ 
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
}

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
   
    
    $("button").click(function(guess){
      if (answer = guessFour){ 
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

}

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
   
    $("button").click(function(guess){
      if (answer = guessThree){ 
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

}

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
   
    $("button").click(function(guess){
      if (answer = guessOne){ 
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
}

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
   
    $("button").click(function(guess){
      if (answer = guessThree){ 
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
}

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
   
    $("button").click(function(guess){
      if (answer = guessThree){ 
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