import React from 'react'
import ReactDOM from 'react-dom'
import actions from '../redux/actions'
import Store from '../redux/store'
import { connect } from 'react-redux'


export class Overlay extends React.Component {
	render() {

		let classes = 'overlay ';

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
}

function mapStateToProps(state) {
	console.log(state, "<== overlay state")
	return {
		showOverlay: state.showOverlay
	}
}

export default connect(mapStateToProps)(Overlay)

// OLD CODE -- DELETE AFTER TESTING
// var mapStateToProps = function(state, props) {
// 	console.log(state, '<== mapstate');
// 	return {
// 		showOverlay: state.showOverlay
// 	}
// };
//
// var Container = connect(mapStateToProps)(Overlay);
//
// module.exports = Container;


// Comment out for running on server, leave for testing
// module.exports = Overlay;

// exports.Overlay = Overlay;
// exports.Container = Container;
// require('the file').Container;
