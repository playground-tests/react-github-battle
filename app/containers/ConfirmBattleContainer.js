import React from 'react'
import {
    connect
} from 'react-redux'
import ConfirmBattle from '../components/ConfirmBattle'
import actions from '../actions'
import githubHelpers from '../utils/githubHelpers.js'
  const ConfirmBattleContainer = React.createClass({

contextTypes:{
  router: React.PropTypes.object.isRequired
},
getInitialState: function(){
  console.log("getInitialState")
  return{
    isLoading: true,
    playerInfo: []
  }
},
componentWillMount: function(){
  console.log("componentWillMount")
},
componentWillReceiveProps: function(){
  console.log("componentWillRecieveProps")
},
componentDidMount: function(){
  //after render
  console.log("componentDidMount")
  var query = this.props.location.query;
  githubHelpers.getPlayersInfo([query.playerOne, query.playerTwo])
  .then(function(players){
    this.setState({
      isLoading: false,
      playerInfo: [players[0], players[1]]
    })
  }.bind(this))
  //get player info from usernames
},
handleInitiateBattle: function() {
  this.context.router.push({
    pathname: '/results',
    state: {
      playerInfo: this.state.playerInfo
    }
  })
},
  render: function() {
    console.log("render")

    return (
      <ConfirmBattle
        onInitiateBattle = {this.handleInitiateBattle}
        playerInfo={this.state.playerInfo}
        isLoading={this.state.isLoading} />
    );
  }

});

export default ConfirmBattleContainer;
