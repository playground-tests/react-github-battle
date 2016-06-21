import githubHelpers from './utils/githubHelpers.js'

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
  }

}
export default actions;
