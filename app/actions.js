import githubHelpers from './utils/githubHelpers.js'
import {push} from 'react-router-redux'
const actions =  {
  savePlayerOne: (text) => {
    return {
   type: "SAVE_P1",
   username: text
   }
 },

  savePlayerTwo: (text) => {
    return {
   type: "SAVE_P2",
   username: text
   }
 },

  fetchPlayers: (players) => {
    return function(dispatch){
      console.log("dispatch")
      dispatch({type:"WAITING_FOR_PLAYERS"})


      return githubHelpers.getPlayersInfo(players).then(
        (data) => {
          console.log(data)
          dispatch({type:"RECEIVED_PLAYERS", playerInfo: data})
        }
      )
    }
  },

  reselectPlayers: () => {
    return function(dispatch){
      dispatch({type: "RESELECT"});
      dispatch(push("/"))
    }
  },

  initiateBattle: () => {
    return function(dispatch){
      dispatch(push("/results"))
    }
  },
  calculateScores: (playerInfo) => {
    return function(dispatch){
      dispatch({type: "WAITING_FOR_RESULTS"})
      githubHelpers.battle(playerInfo).then(
        (scores) => {
          dispatch({type: "RECEIVED_SCORES", scores: scores})
        }
      )

    }
  }

}
export default actions;
