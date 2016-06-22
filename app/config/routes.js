var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var Main = require('../components/Main');
var Home = require('../components/Home');
var browserHistory = ReactRouter.browserHistory;
import { createStore,applyMiddleware } from 'redux';
import reducer from '../reducers/reducers';
import thunk from 'redux-thunk';
let initialState = {
  header: "Enter player 1:",
  player1: "",
  player2: "",
  isLoading: true
}
import { routerMiddleware } from 'react-router-redux'
const middleware = routerMiddleware(browserHistory)
let store = createStore(reducer, initialState, applyMiddleware(thunk, middleware));
import { Provider } from 'react-redux'
import PromptContainer from '../containers/PromptContainer'
import ConfirmBattleContainer from '../containers/ConfirmBattleContainer'
import ResultsContainer from '../containers/ResultsContainer'
import NotFound from '../components/NotFound'

var routes = (
<Provider store={store} >
  <Router history={browserHistory}>
    <Route path="/" component={PromptContainer} />
    <Route path="/confirm" component={ConfirmBattleContainer} />
    <Route path="/results" component={ResultsContainer} />

  </Router>
</Provider>
)

store.subscribe(() => {
  console.log(store.getState())
})

module.exports = routes;
