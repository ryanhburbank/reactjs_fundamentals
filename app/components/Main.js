var React = require('react');
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');
require('../main.css');

function Main (props) {
  //keys are given to each item in a list, which is then used by React to keep track of their order
  //cloneElement allows you to take a ReactComponent and give it new props
  return (
    <div className='main-container'>
      <ReactCSSTransitionGroup
        transitionName="appear"
        transitionEnterTimeout={500}
        transitionLeaveTimeout={500}>
          {React.cloneElement(props.children, {key: props.location.pathname})}
      </ReactCSSTransitionGroup>
    </div>
  )
};

module.exports = Main;
