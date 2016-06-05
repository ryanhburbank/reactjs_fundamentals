var React = require('react');
var ReactDOM = require('react-dom');
var routes = require('./config/routes');

/* (ensure that every component you build meets the following criteria)
  Focused
  Independent
  Reusable
  Small
  Testable
*/

ReactDOM.render(
  routes,
  document.getElementById('app')
);
