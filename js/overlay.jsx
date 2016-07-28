var React = require('react');
var ReactDOM = require('react-dom');
var actions = require('./actions');
var Store = require('./store');
var connect = require('react-redux').connect;

var Overlay = React.createClass({
	render: function() {
		var classes = 'overlay ';

		if (!this.props.showOverlay) {
			classes += 'hidden';
		}
		return (
			<div className={classes} id="modal">
				<div className="content">
					<h3>What do I do?</h3>
					<div>
						<p>This is a Hot or Cold Number Guessing Game. The game goes like this: </p>
						<ul>
							<li>1. I pick a <strong>random secret number</strong> between 1 to 100 and keep it hidden.</li>
							<li>2. You need to <strong>guess</strong> until you can find the hidden secret number.</li>
							<li>3. You will <strong>get feedback</strong> on how close ("hot") or far ("cold") your guess is.</li>
						</ul>
						<p>So, Are you ready?</p>
						<a className="close" onClick={this.props.closeOverlay} href="#">Got It!</a>
					</div>
				</div>
			</div>
		)
	}
});

var mapStateToProps = function(state, props) {
	console.log(state, '<== mapstate');
	return {
		showOverlay: state.showOverlay
	}
};

var Container = connect(mapStateToProps)(Overlay);

module.exports = Container;  
// Comment out for running on server, leave for testing
module.exports = Overlay;		

// exports.Overlay = Overlay;
// exports.Container = Container;
// require('the file').Container;