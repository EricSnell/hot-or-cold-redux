var GUESS_NUM = 'GUESS_NUM';
var guess = function(userGuess) {
    return {
        type: GUESS_NUM,
        number: userGuess
    }
};

var NEW_GAME = 'NEW_GAME';
var newGame = function() {
	return {
		type: NEW_GAME
	}
};

var DISPLAY_OVERLAY = 'DISPLAY_OVERLAY';
var displayOverlay = function() {
	return {
		type: DISPLAY_OVERLAY
	}
};

exports.GUESS_NUM = GUESS_NUM;
exports.NEW_GAME = NEW_GAME;
exports.DISPLAY_OVERLAY = DISPLAY_OVERLAY;
exports.guess = guess;
exports.newGame = newGame;
exports.displayOverlay = displayOverlay;