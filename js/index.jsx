var React = require('react');
var ReactDOM = require('react-dom');



//old jquery---->
var theGuess = function() {
        var userNumber = $("#userGuess").val();	
        var distance = Math.abs(userNumber - randomNumber);
        

    	if (userNumber <= 100 && userNumber >= 1) {
    		if (distance === 0) {
                $("#guessList").append("<li>" + userNumber + "</li>");
                $("#feedback").text("You got it!!");
             /* var replay = confirm("Play Again?");  
                    if (replay === true) {
                        newGame();
                    }     */     
    		} else if (distance <= 5) {
                $("#guessList").append("<li>" + userNumber + "</li>");
                $("#feedback").text("Burning!");
            } else if (distance <= 15) {   
                $("#guessList").append("<li>" + userNumber + "</li>");    
                $("#feedback").text("Hot");
            } else if (distance <= 25) {
                $("#guessList").append("<li>" + userNumber + "</li>");
                $("#feedback").text("Warm");
            } else if (distance <= 50) {
                $("#guessList").append("<li>" + userNumber + "</li>");
                $("#feedback").text("Cold");
            } else if (distance <= 99) {
                $("#guessList").append("<li>" + userNumber + "</li>");
                $("#feedback").text("Freezing!!");
            }

            guessCounter++;
            $("#count").text(guessCounter);
	    }
    }
});

