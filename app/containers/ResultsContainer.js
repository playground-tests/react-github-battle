var React = require('react');
var PropTypes = React.PropTypes;
var Results = require('../components/Results')
var githubHelpers = require('../utils/githubHelpers')
var ResultsContainer = React.createClass({

getInitialState: function(){
  return {
    isLoading : true,
    scores: []
  }
},
componentDidMount: function(){
  var that = this;
  githubHelpers.battle(this.props.location.state.playerInfo)
.then(function(scores){

  that.setState({
    scores: scores,
    isLoading: false
  })

})
},
  render: function() {
    return (
      <Results
      isLoading={this.state.isLoading}
      scores={this.state.scores}
      playerInfo={this.props.location.state.playerInfo}
      />
    );
  }

});
ResultsContainer.contextTypes = {
  store: PropTypes.object
}


export default ResultsContainer;
