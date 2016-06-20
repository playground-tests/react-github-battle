import React from 'react'
import {
    connect
} from 'react-redux'
import ConfirmBattle from '../components/ConfirmBattle'
import {PropTypes} from 'react'
import {push} from 'react-router-redux'
import actions from '../actions'
import githubHelpers from '../utils/githubHelpers.js'


const ConfirmBattleContainer = React.createClass({

componentWillMount: function(){
  let store = this.props.route.store;
  store.subscribe(()=> {
    this.forceUpdate()
  })
  store.dispatch({type:"START_LOADING"})
  var currentState = this.props.route.store.getState();
  githubHelpers.getPlayersInfo([currentState.player1, currentState.player2])
  .then(function(players){
    store.dispatch({type:'LOADED_PLAYERS', playerInfo: [players[0], players[1]]})
  }.bind(this))
},
componentWillReceiveProps: function(){
  console.log("componentWillRecieveProps")
},
//get player info from usernames
componentDidMount: function(){
  //after render
  let store = this.props.route.store;
  console.log("componentDidMount")
  store.dispatch({type:'LOADED_CONFIRM'})

},
handleInitiateBattle: function() {
  let store = this.props.route.store;
  store.dispatch(push('/results'));
},
  render: function() {
    console.log("render")
    return (
      <ConfirmBattle
        onInitiateBattle = {this.handleInitiateBattle}
        playerInfo={this.props.route.store.getState().playerInfo}
        isLoading={this.props.route.store.getState().isLoading} />
    );
  }




});
ConfirmBattleContainer.propTypes = {
  store: PropTypes.object
}

export default ConfirmBattleContainer;
