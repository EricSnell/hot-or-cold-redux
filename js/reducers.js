var actions = require('./actions');

var initialGameState = {};

var gameReducer = function(state, action) {
	state = state || initialGameState;

	if(action.type === actions.NEW_GAME) {
		return {
			guessList: [],
			randomNum: Math.floor(Math.random() * 100 + 1),
			feedback: "Make your Guess",
		}
	}

	if(action.type === actions.GUESS_NUM) {
		var userGuess = state.guessList[guessList.length - 1];
		var distance = Math.abs(userGuess - state.randomNum);
		var feedback = '';

		if (userGuess <= 100 && userGuess >= 1) {
			if (distance === 0) {
				feedback ='You got it!'
			}
			if (distance <= 5) {
				feedback = 'Burning!'
			}
			if (distance <= 15) {
				feedback: 'Hot'
			}
			if (distance <= 25) {
				feedback = 'Warm'
			}
			if (distance <= 50) {
				feedback = 'Cold'
			}
			if (distance <= 99) {
				feedback = 'Freezing!'	
			}
		}
		// Update feedback 
		// Update counter
		// Update guess array
		


	}
};
