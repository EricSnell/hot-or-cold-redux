var React = require('react');
var ReactDOM = require('react-dom');
var actions = require('./actions');
var connect = require('react-redux').connect;
var Overlay = require('./overlay');

var Game = React.createClass({
	userGuess: function(event) {
		event.preventDefault();
		//dispatch GUESS_NUM action
		var userNumber = this.refs.userInput.value;
		this.props.dispatch(actions.guess(userNumber));
	},
	resetGame: function() {
		//dispatch NEW_GAME action
		//onChange!
		this.refs.userInput.value = '';
		this.props.dispatch(actions.newGame());
	},
	toggleOverlay: function() {
		console.log(this.props, '<== Games props');
		//dispatch displayOverlay action
		this.props.dispatch(actions.displayOverlay());
	},

	render: function() {
		var guesses = this.props.guessList.map(function(guess, index) {
   		return <li key={index}>{guess}</li>
    });
    
		return (

			<div className="game-container">
			<Overlay closeOverlay={this.toggleOverlay}/>
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
         <ul id="guessList" className="guessBox clearfix">
         	{guesses}
         </ul>      
				</div>
			</div>
			
		)
	}
});


var mapStateToProps = function(state, props) {
	return {
		feedback: state.feedback,
		guessList: state.guessList,
		showOverlay: state.showOverlay
	}
};

var Container = connect(mapStateToProps)(Game);

module.exports = Container;