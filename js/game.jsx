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
		return (
			<section class="game"> 
			
				<h2 id="feedback">{this.props.feedback}</h2>

				<form>
					<input type="text" name="userGuess" id="userGuess" class="text" maxlength="3" autocomplete="off" placeholder="Enter your Guess" required/>
      			<input type="submit" id="guessButton" class="button" name="submit" value="Guess"/>
				</form>
			
      		<p>Guess #<span id="count">0</span>!</p>
			
				<ul id="guessList" class="guessBox clearfix">

				</ul>

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