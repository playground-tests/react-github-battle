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
  switch (action.type) {
    case "SAVE_P1":
      return  action.username;
    default: return state;

  }
}

const header = (state = initialState, action) => {
  switch (action.type) {
    case "SAVE_P1":
      return "Enter player 2:";
    default: return state;

  }
}




const player2 = (state = initialState, action) => {
  if (action.type == "SAVE_P2")
      return  action.username;

  return state;
}


const playerInfo = (state = initialState, action) => {
  if (action.type == "RECEIVED_PLAYERS")
      return action.playerInfo;

  return state;
}

const isLoading = (state = initialState, action) => {
  if(action.type == "RECEIVED_PLAYERS")
    return false;


  if(action.type == "WAITING_FOR_PLAYERS")
      return true;
  return state;

}


export default combineReducers({
  player1,
  player2,
  playerInfo,
  header,
  isLoading
})
