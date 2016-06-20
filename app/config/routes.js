var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var Main = require('../components/Main');
var Home = require('../components/Home');
var hashHistory = ReactRouter.hashHistory;
var ResultsContainer = require('../containers/ResultsContainer');
import { createStore,applyMiddleware } from 'redux';
import reducer from '../reducers/reducers';
import thunk from 'redux-thunk';
let initialState = {
  header: "Enter player 1:",
  player1: "",
  player2: "a"
}
import { routerMiddleware } from 'react-router-redux'
const middleware = routerMiddleware(hashHistory)
let store = createStore(reducer, initialState, applyMiddleware(thunk, middleware));
import { Provider } from 'react-redux'
import PromptContainer from '../containers/PromptContainer'
import ConfirmBattleContainer from '../containers/ConfirmBattleContainer'

var routes = (
<Provider store={store} >
  <Router history={hashHistory}>
    <Route path="/" component={PromptContainer} />
    <Route path="/confirm" store={store} component={ConfirmBattleContainer} />
  </Router>
</Provider>
)

store.subscribe(() => {
  console.log(store.getState())
})

module.exports = routes;
