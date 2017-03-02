import redux, { createStore } from 'redux'
import reducers from './reducers'

const store = createStore(reducers.gameReducer)

module.exports = store


// OLD CODE -- DELETE WHEN WORKING
// var redux = require('redux');
// //creates the store
// var createStore = redux.createStore;
//
// var reducers = require('./reducers');
//
// var store = createStore(reducers.gameReducer);
//
// module.exports = store;
