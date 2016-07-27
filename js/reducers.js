var actions = require('./actions');

var initialGameState = {
			guessList: [],
			randomNum: Math.floor(Math.random() * 100 + 1),
			feedback: "Make your Guess"
};

var gameReducer = function(state, action) {
	state = state || initialGameState;

	if(action.type === actions.NEW_GAME) {
		// The guess counter can be assigned to the length of the guessList array
		return initialGameState;
	}

	if(action.type === actions.GUESS_NUM) {
		// var userGuess = state.guessList[state.guessList.length - 1];
		// new copy of the guessList array adding the user's guess
		var newGuessList = state.guessList.concat(action.number);
		// the difference between the correct answer and the user's guess
		var distance = Math.abs(action.number - state.randomNum);
		var feedback = '';

		if (action.number <= 100 && action.number >= 1) {
			if (distance === 0) {
				feedback ='You got it!';
			}
			else if (distance <= 5) {
				feedback = 'Burning!';
			}
			else if (distance <= 15) {
				feedback = 'Hot';
			}
			else if (distance <= 25) {
				feedback = 'Warm';
			}
			else if (distance <= 50) {
				feedback = 'Cold';
			}
			else if (distance <= 99) {
				feedback = 'Freezing!';
			}
			// Create new object that updates state, setting the guessList to the updated array, the feedback to the updated feedback, and the counter to the length of the new array
			var newState = Object.assign({}, state, {guessList: newGuessList, feedback: feedback});

			return newState;
		}
	}
	return state;
};

exports.gameReducer = gameReducer;