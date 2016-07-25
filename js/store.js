var redux = require('redux');
//creates the store 
var createStore = redux.createStore;

var reducers = require('./reducers');

var store = createStore(reducers.gameReducer);

module.exports = store;