var React = require('react');
var PropTypes = React.PropTypes;
var Results = require('../components/Results')
var githubHelpers = require('../utils/githubHelpers')
import {connect} from 'react-redux'
import actions from '../actions'
const ResultsContainer = React.createClass({
contextTypes: {
  store: PropTypes.object
},
componentDidMount: function(){
  let state  = this.context.store.getState();
  let playerInfo = state.playerInfo;
  this.context.store.dispatch(actions.calculateScores(playerInfo));

},
  render: function() {
    return (
      <InnerContainer />
    );
  }

});

const mapStateToProps = (state) => {
  return{
    isLoading: state.isLoading,
    scores: state.scores,
    playerInfo: state.playerInfo
  }
}


const mapDispatchToProps = (dispatch) => {
  return{
    startOver: () => {
      dispatch(actions.reselectPlayers())
    }
  }
}

const InnerContainer = connect(mapStateToProps, mapDispatchToProps)(Results);


export default ResultsContainer;
