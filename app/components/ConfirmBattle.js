var React = require('react');
var PropTypes = React.PropTypes;

// good way to check props
// function puke (object) {
//   return <pre>{JSON.stringify(object, null, ' ')}</pre>
// };

function ConfirmBattle (props) {
    return (
      props.isLoading === true
      ? <p> LOADING... </p>
      : <p>Confirm Battle </p>
      // : <p>Confirm Battle: {puke(props)} </p>
    )
};

ConfirmBattle.propTypes = {
};

module.exports = ConfirmBattle;
