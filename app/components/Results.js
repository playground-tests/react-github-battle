var React = require('react');
var PropTypes = React.PropTypes;
var styles = require('../styles')
var UserDetails = require('./UserDetails');
var UserDetailsWrapper = require('./UserDetailsWrapper');
var Link = require('react-router').Link;



var StartOver = function(props){
  return(
    <div className="col-sm-12" style={styles.space}>
    <button type="button" onClick={props.startOver} className="btn btn-lg btn-danger">Start Over</button>
    </div>
)
}

var Results = React.createClass({
  render: function() {
    if(this.props.isLoading){
      return(
        <div className="jumbotron col-sm-12 text-center" style={styles.transparentBg}>
        <h1>Loading</h1>
        </div>
      )

    }
    if(this.props.scores[0] == this.props.scores[1]){
      return(
        <div className="jumbotron col-sm-12 text-center" style={styles.transparentBg}>
        <h1>"It's a Tie"</h1>
          <StartOver startOver={this.props.startOver} />
        </div>
      )
    }
    var winningIndex = this.props.scores[0] > this.props.scores[1] ? 0: 1;
    var losingIndex = this.props.scores[0] > this.props.scores[1] ? 1: 0;
    return (
      <div className="jumbotron col-sm-12 text-center" style={styles.transparentBg}>
        <h1>Results</h1>
        <div className="col-sm-8 col-sm-offset-2">
          <UserDetailsWrapper playerNo="Winner">
            <UserDetails score={this.props.scores[winningIndex]} info={this.props.playerInfo[winningIndex]} />
          </UserDetailsWrapper>

          <UserDetailsWrapper playerNo="Loser">
            <UserDetails score={this.props.scores[losingIndex]} info={this.props.playerInfo[losingIndex]} />
          </UserDetailsWrapper>
        </div>

        <StartOver startOver={this.props.startOver} />
      </div>
    );
  }

});

Results.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  startOver: PropTypes.func.isRequired,
  playerInfo: PropTypes.array.isRequired,
  scores: PropTypes.array.isRequired
}
module.exports = Results;
