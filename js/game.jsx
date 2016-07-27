var React = require('react');
var ReactDOM = require('react-dom');
var actions = require('./actions');
var connect = require('react-redux').connect;


var Game = React.createClass({
	userGuess: function(event) {
		event.preventDefault();
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
		console.log(this.props);
		// to display last item in guessList array --> state.guessList[state.guessList.length - 1];
		return (
			<div className="game-container">
				<nav>
					<ul className="clearfix">
						<li><a className="what" onClick={this.toggleOverlay} href="#">What ?</a></li>
						<li><a className="new" onClick={this.resetGame} href="#">+ New Game</a></li>
					</ul>
				</nav>
				<header>
					<h1>HOT or COLD</h1>
				</header>
				<div className="game"> 
					<h2 id="feedback">{this.props.feedback}</h2>
					<form>
						<input type="text" ref="userInput" name="userGuess" id="userGuess" className="text" maxLength="3" autoComplete="off" placeholder="Enter your Guess" required/>
		      		<button id="guessButton" className="button" value="Guess" onClick={this.userGuess}>Guess</button>
					</form>
		      	<p>Guess #<span id="count">{this.props.guessList.length}</span>!</p>
					<div id="guessList" className="guessBox clearfix">{this.props.guessList.join(", ")}</div>
				</div>
			</div>
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