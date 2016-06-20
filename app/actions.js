
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
  }

}
export default actions;
