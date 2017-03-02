import React from 'react'
import ReactDOM from 'react-dom'
import actions from '../redux/actions'
import { connect } from 'react-redux'
import Overlay from './overlay'

export class Game extends React.Component {
	constructor() {
		super()
		this.userGuess = this.userGuess.bind(this)
		this.resetGame = this.resetGame.bind(this)
		this.toggleOverlay = this.toggleOverlay.bind(this)
	}
	
	userGuess(event) {
		event.preventDefault()
		//dispatch GUESS_NUM action
		var userNumber = this.refs.userInput.value
		this.props.dispatch(actions.guess(userNumber))
	}

	resetGame() {
		//dispatch NEW_GAME action
		//onChange!
		this.refs.userInput.value = ''
		this.props.dispatch(actions.newGame())
	}

	toggleOverlay() {
		console.log(this.props, '<== Games props')
		//dispatch displayOverlay action
		this.props.dispatch(actions.displayOverlay())
	}

	render() {
		var guesses = this.props.guessList.map(function(guess, index) {
   		return <li key={index}>{guess}</li>
    })

		let container = 'game '

		switch(this.props.feedback) {
			case 'Freezing!': {
				container += 'freezing'
				break
			}
			case 'Cold': {
				container += 'cold'
				break
			}
			case 'Warm': {
				container += 'warm'
				break
			}
			case 'Hot': {
				container += 'hot'
				break
			}
			case 'So Hot Right Now': {
				container += 'burning'
				break
			}
			case 'You Got It!': {
				container += 'correct'
				break
			}
			default: {
				console.log('Something\'s broken')
				break
			}
		}


		// OLD CODE -- DELETE AFTER TESTING
		// if (this.props.feedback === 'Freezing!') {
		// 	container += 'freezing';
		// } else if (this.props.feedback === 'Cold') {
		// 	container += 'cold';
		// } else if (this.props.feedback === 'Warm') {
		// 	container += 'warm';
		// } else if (this.props.feedback === 'Hot') {
		// 	container += 'hot';
		// } else if (this.props.feedback === 'So Hot Right Now') {
		// 	container += 'burning';
		// } else if (this.props.feedback === "You Got It!") {
		// 	container += 'correct';
		// }

		return (

			<div className='game-container'>
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
				<div className={container}>
					<h2 id="feedback">{this.props.feedback}</h2>
					<form>
						<input
							type="text"
							ref="userInput"
							name="userGuess"
							id="userGuess"
							className="text"
							maxLength="3"
							autoComplete="off"
							placeholder="Enter your Guess"
							required
						/>
			     	<button
							id="guessButton"
							className="button"
							value="Guess"
							onClick={this.userGuess}
						>Guess
						</button>
					</form>
			     	<p>Guess #<span id="count">{this.props.guessList.length}</span>!</p>
         <ul id="guessList" className="guessBox clearfix">
         	{guesses}
         </ul>
				</div>
			</div>

		)
	}
}


function mapStateToProps(state) {
	return {
		feedback: state.feedback,
		guessList: state.guessList,
		showOverlay: state.showOverlay
	}
}

export default connect(mapStateToProps)(Game)

// OLD CODE -- DELETE AFTER TESTING
// var mapStateToProps = function(state, props) {
// 	return {
// 		feedback: state.feedback,
// 		guessList: state.guessList,
// 		showOverlay: state.showOverlay
// 	}
// };
//
// var Container = connect(mapStateToProps)(Game);
//
// module.exports = Container;
