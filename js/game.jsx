var React = require('react');
var ReactDOM = require('react-dom');
var actions = require('./actions');
var connect = require('react-redux').connect;

var Game = React.createClass({
	userGuess: function() {
		//dispatch GUESS_NUM action
		var userNumber = this.refs.userInput.value;
		this.props.dispatch(actions.guess(userNumber));
	},
	resetGame: function() {
		//dispatch NEW_GAME action
		this.props.dispatch(actions.newGame());
	},
	toggleOverlay: function() {
		//dispatch displayOverlay action
		//TODO
	},
	render: function() {
		// to display last item in guessList array --> state.guessList[state.guessList.length - 1];
		return (
			<nav>
				<div className="what" onClick={this.toggleOverlay}>What ?</div>
				<div className="new" onClick={this.resetGame}>+ New Game</div>
			</nav>

			<section className="game"> 
				<h2 id="feedback">{this.props.feedback}</h2>
				<form>
					<input type="text" name="userGuess" id="userGuess" className="text" maxlength="3" autocomplete="off" placeholder="Enter your Guess" required/>
      			<button id="guessButton" className="button" value="Guess" onClick={this.userGuess} />
				</form>
      		<p>Guess #<span id="count">{this.props.guessList.length}</span>!</p>
				<div id="guessList" className="guessBox clearfix">{this.props.guessList[props.guessList.length - 1]}</div>
			</section>
		)
	}
});

var mapStateToProps = function(state, props) {
	return {
		feedback: state.feedback,
		guessList: state.guessList
	}
};

var Container = connect(mapStateToProps)(Game);

module.exports = Container;