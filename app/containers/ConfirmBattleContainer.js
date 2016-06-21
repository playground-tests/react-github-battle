import React from 'react'
import {connect} from 'react-redux'
import ConfirmBattle from '../components/ConfirmBattle'
import {PropTypes} from 'react'
import {push} from 'react-router-redux'
import actions from '../actions'
import githubHelpers from '../utils/githubHelpers.js'

// const ConfirmBattleContainer2 = React.createClass({
//
//     componentWillMount: function() {
//         let store = this.context.store;
//         store.subscribe(() => {
//             this.forceUpdate()
//         })
//         store.dispatch({type: "START_LOADING"})
//         var currentState = this.context.store.getState();
//         githubHelpers.getPlayersInfo([currentState.player1, currentState.player2]).then(function(players) {
//             store.dispatch({
//                 type: 'LOADED_PLAYERS',
//                 playerInfo: [players[0], players[1]]
//             })
//         }.bind(this))
//     },
//     componentWillReceiveProps: function() {
//         console.log("componentWillRecieveProps")
//     },
//     //get player info from usernames
//     componentDidMount: function() {
//         //after render
//         let store = this.context.store;
//         console.log("componentDidMount")
//         store.dispatch({type: 'LOADED_CONFIRM'})
//
//     },
//
//     render: function() {
//         console.log("render")
//         return (<ConfirmBattle onInitiateBattle={this.handleInitiateBattle} playerInfo={this.context.store.getState().playerInfo} isLoading={this.context.store.getState().isLoading}/>);
//     }
// });



const mapDispatchToProps = (dispatch) => {
    return {onInitiateBattle: handleInitiateBattle, reselectPlayers: reselectPlayers}
}
const onLoad = () => {
return (dispatch, getState) => {
  let state  = getState();
  let players = [state.player1, state.player2];
  console.log("Players", players)

  dispatch(actions.fetchPlayers(players));
}
}
const handleInitiateBattle = () => {
    return (dispatch, getState) => {
        dispatch(push('/results'));
    }
}

// const getPlayerInfo = () => {
//     return (dispatch, getState) => {
//         let currentState = getState();
//         return githubHelpers.getPlayersInfo([currentState.player1, currentState.player2]).then(function(players) {
//             store.dispatch({
//                 type: 'LOADED_PLAYERS',
//                 playerInfo: [players[0], players[1]]
//             })
//             return [players[0], players[1]]
//         })
//     }
// }

const reselectPlayers = () => {
    return (dispatch, getState) => {

        dispatch({type: "RESELECT"}).then(() => {
            dispatch(push("/"))
        })
    }
}

const mapStateToProps = (state) => {
    return {isLoading: state.isLoading, playerInfo: state.playerInfo}
}


const ConfirmBattleContainer = React.createClass({
  contextTypes : {
    store: PropTypes.object
  },
componentWillMount: function(){
  let state  = this.context.store.getState();
  let players = [state.player1, state.player2];
  console.log("Players", players)
  this.context.store.dispatch(actions.fetchPlayers(players));
  console.log("abook");
},
render: function(){
  return (
    <InnerContainer />
  )
}
});

// ConfirmBattleContainer.contextTypes = {
//     store: PropTypes.object
// }
const InnerContainer = connect(mapStateToProps, mapDispatchToProps)(ConfirmBattle)

export default OuterContainer;
