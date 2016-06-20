var React = require('react');
var PropTypes = React.PropTypes;
var transparentBg = require('../styles').transparentBg;
function Prompt (props) {
  return (
    <div className="jumbotron col-sm-6 col-sm-offset-3 text-center" style={transparentBg}>
      <h1>{props.header}</h1>
      <div className="col-sm-12">
          <div className="form-group">
            <input
              className='form-control'
              placeholder='Github Username'
              type='text'
              id='username'
              value={props.username} />
          </div>
          <div className="form-group col-sm-4 col-sm-offset-4">
            <button
              className="btn btn-block btn-success"
               onClick={props.onSubmitUser}>
                Continue
            </button>
          </div>
      </div>
    </div>
  )
}

Prompt.propTypes = {
  onSubmitUser: PropTypes.func,
  onChange: PropTypes.func,
  store: PropTypes.object,
  header: PropTypes.string.isRequired,
}

module.exports = Prompt
