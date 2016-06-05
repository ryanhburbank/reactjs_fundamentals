var React = require('react');
var PropTypes = React.PropTypes;

function ConfirmBattle (props) {
    return (
      props.isLoading === true
      ? <p> LOADING... </p>
      : <p>Confirm Battle </p>
    )
};

ConfirmBattle.propTypes = {
};

module.exports = ConfirmBattle;
