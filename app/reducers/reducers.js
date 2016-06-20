import {combineReducers} from 'redux';

let initialState = {
  header: "Enter player 1:",
  player1: "",
  player2: "a"
}

const player1 = (state = initialState, action) => {
  // if(action.type == "SAVE_P1"){
  //   return Object.assign({}, state, );
  // }
  console.log(state);
  switch (action.type) {
    case "SAVE_P1":
      return  action.username;
    default: return state;

  }
}

const header = (state = initialState, action) => {
  console.log(action.type);
  switch (action.type) {
    case "SAVE_P1":
      return "Enter player 2:";
    default: return state;

  }
}




const player2 = (state = initialState, action) => {
  console.log(action.type);
  if (action.type == "SAVE_P2")
      return  action.username;

  return state;
}

const isLoading = (state = initialState, action) => {
  if(action.type == "DONE_LOADING"){
    return Object.assign({}, state, {isLoading:false});
  }
  return state;

}


export default combineReducers({
  player1,
  player2,
  header
})
