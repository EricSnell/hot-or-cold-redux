var React = require('react');
var ReactDOM = require('react-dom');
var Provider = require('react-redux').Provider;
var store = require('./redux/store');
var Game = require('./game');

document.addEventListener('DOMContentLoaded', function() {
	ReactDOM.render(
		<Provider store={store}>
			<Game />
		</Provider>, document.getElementById('app')
	);
});
