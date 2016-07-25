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
	};


}
