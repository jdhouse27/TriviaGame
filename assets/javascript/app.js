$(document).ready(function() {
    reset();
    start();  
}); 

    //question object with answer arrays
  var questions = {
    Who is the all-time hits leader? : [],
    Who is the all-time leader in home runs? : [],
    Who holds the record for most single season steals? : [],
    Who holds the record for most wins in a single season? : [],
    Who holds the record for the most strikeouts in a career? : [],
    Who was the MVP of the 2015 World Series? : [],
    What team has won the most World Series championships? : [],
    Who holds the record for most strikeouts in a single season? : [],
    Who holds the most home runs in a single season? : [],
    What number did Jackie Robison wear? : [],
}


  function reset() {     
  //Change the "timer" div to "20 seconds."
    $(".timer").text("20");
    $()
  }

  function start() {
   //Use setInterval to start the count here and set the clock to running.
     setTimeout(timesUp, 1000 * 20);
     timesUp.text(".timer");
     console.log(".timer");
  }
      
    



    