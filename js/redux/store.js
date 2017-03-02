import redux, { createStore } from 'redux'
import reducers from './reducers'

const store = createStore(reducers.gameReducer)

module.exports = store
