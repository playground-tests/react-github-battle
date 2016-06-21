import {combineReducers} from 'redux';

let initialState = {
  header: "Enter player 1:",
  player1: "",
  player2: "a",
  playerInfo: [],
  isLoading: true
}

const player1 = (state = initialState, action) => {
  // if(action.type == "SAVE_P1"){
  //   return Object.assign({}, state, );
  // }
  if (action.type == "SAVE_P1")
      return  action.username;
  if (action.type == "RESELECT")
      return  "";

  return state;
}

const header = (state = initialState, action) => {
  if (action.type == "SAVE_P1")
      return  "Enter player 2";
  if (action.type == "RESELECT")
      return  "Enter player 1";

  return state;
}




const player2 = (state = initialState, action) => {
  if (action.type == "SAVE_P2")
      return  action.username;
  if (action.type == "RESELECT")
      return  "";

  return state;
}


const playerInfo = (state = initialState, action) => {
  if (action.type == "RECEIVED_PLAYERS")
      return action.playerInfo;

  return state;
}

const scores = (state = initialState, action) => {
  if(action.type == "RECEIVED_SCORES")
    return action.scores;

  return state;
}

const isLoading = (state = initialState, action) => {
  if(action.type == "RECEIVED_PLAYERS" || action.type == "RECEIVED_SCORES")
    return false;


  if(action.type == "WAITING_FOR_PLAYERS" || action.type == "WAITING_FOR_RESULTS")
  {
    console.log("waiting abi");
    return true;
  }
  return state;

}


export default combineReducers({
  player1,
  player2,
  playerInfo,
  header,
  scores,
  isLoading
})
