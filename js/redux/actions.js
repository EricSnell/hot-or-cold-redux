/* Constants */

const GUESS_NUM = 'GUESS_NUM'
const NEW_GAME = 'NEW_GAME'
const DISPLAY_OVERLAY = 'DISPLAY_OVERLAY'


/* Actions */

function guess(userGuess) {
  return {
      type: GUESS_NUM,
      number: userGuess
  }
}

function newGame() {
	return {
		type: NEW_GAME
	}
}

function displayOverlay() {
	return {
		type: DISPLAY_OVERLAY
	}
}


/* Exports */

exports.GUESS_NUM = GUESS_NUM;
exports.NEW_GAME = NEW_GAME;
exports.DISPLAY_OVERLAY = DISPLAY_OVERLAY;
exports.guess = guess;
exports.newGame = newGame;
exports.displayOverlay = displayOverlay
