import React from 'react'
import {connect} from 'react-redux'
import ConfirmBattle from '../components/ConfirmBattle'
import {PropTypes} from 'react'
import {push} from 'react-router-redux'
import actions from '../actions'
import githubHelpers from '../utils/githubHelpers.js'


const mapDispatchToProps = (dispatch) => {
    return {onInitiateBattle: () => { dispatch(actions.initiateBattle())}, reselectPlayers: () => { dispatch(actions.reselectPlayers())}}
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
  this.context.store.dispatch(actions.fetchPlayers(players));
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

export default ConfirmBattleContainer;
