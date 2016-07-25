var React = require('react');
var ReactDOM = require('react-dom');



$(document).ready(function(){
    var randomNumber;
    var guessCounter = 0;
    newGame();

	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

    /*--- Launch New Game ---*/
    $(".new").click(function(){
        newGame();
    });

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

    $("#guessButton").on('click', function(event) {
        event.preventDefault();
        theGuess();
    })

    /*--- New Game ---*/
    function newGame() {
        randomNumber = Math.floor((Math.random() * 100) + 1);
        $("#count").text("0"); 
        $("#guessList").text("");
        $("#userGuess").val(null);
        $("#feedback").text("Make Your Guess!");
    }

    /*--- The Game ---*/
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