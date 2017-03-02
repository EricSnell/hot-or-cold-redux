import Reacat from 'react'
import ReactDOM from 'react-dom'
import Provider from 'react-redux'
import store from './redux/store'
import Game from './components/game'

document.addEventListener('DOMContentLoaded', () => {
	ReactDOM.render(
		<Provider store={store}>
			<Game />
		</Provider>, document.getElementById('app')
	);
});
