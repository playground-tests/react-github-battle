var React = require('react');
var PropTypes = React.PropTypes;

var UserDetailsWrapper = React.createClass({

  render: function() {
    return (
      <div className='col-sm-6'>
        <p className='lead'>
        {this.props.playerNo}
        </p>
          {this.props.children}
      </div>

    );
  }

});

module.exports = UserDetailsWrapper;
