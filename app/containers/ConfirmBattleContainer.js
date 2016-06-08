var React = require('react');
var PropTypes = React.PropTypes;
var ConfirmBattle = require('../components/ConfirmBattle');



var ConfirmBattleContainer = React.createClass({

contextTypes:{
  router: React.PropTypes.object.isRequired
},
getInitialState: function(){
  return{
    isLoading: true,
    playerInfo: []
  }
},
componentDidMount: function(){
  //after render
  var query = this.props.location.query;
  //get player info from usernames
},
  render: function() {
    return (
      <ConfirmBattle />
    );
  }

});

module.exports = ConfirmBattleContainer;
