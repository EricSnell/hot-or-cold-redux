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

	}
});