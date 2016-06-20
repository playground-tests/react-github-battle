var React = require('react');
//var ReactRouter = require('react-router');
//var Router = ReactRouter.Router;
//var Route = ReactRouter.Route;
//var IndexRoute = ReactRouter.IndexRoute;
var Main = require('../components/Main');
var Home = require('../components/Home');
//var hashHistory = ReactRouter.hashHistory;
var ConfirmBattleContainer = require('../containers/ConfirmBattleContainer');
var ResultsContainer = require('../containers/ResultsContainer');
import { createStore,applyMiddleware } from 'redux';
import reducer from '../reducers/reducers';
import thunk from 'redux-thunk';
let initialState = {
  header: "Enter player 1:",
  player1: "",
  player2: ""
}
let store = createStore(reducer, initialState, applyMiddleware(thunk));
import { Provider } from 'react-redux'
import PromptContainer from '../containers/PromptContainer'

var routes = (
<Provider store={store}>
  <PromptContainer />
</Provider>
)

store.subscribe(() => {
  console.log(store.getState())
})

module.exports = routes;
