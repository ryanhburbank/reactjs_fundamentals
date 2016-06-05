var React = require('react');
var PropTypes = React.PropTypes;
var Link = require('react-router').Link;
var styles = require('../styles');

var UserDetails = require('./UserDetails');
var UserDetailsWrapper = require('./UserDetailsWrapper');
var MainContainer = require('./MainContainer');
var Loading = require('./Loading');

function getWinningIndex(scores) {
  return (scores[0] > scores[1] ? 0 : 1);
};

function getLosingIndex(winningIndex) {
  return (winningIndex === 0 ? 1 : 0);
};

function isTie(scores) {
  return (scores[0] === scores[1]);
};

function StartOver () {
  return (
    <div classname='col-sm-12' style={styles.space}>
      <Link to='/playerOne'>
        <button type='button' className='btn btn-lg btn-danger'>
          Play Again
        </button>
      </Link>
    </div>
  )
};

function Results (props) {
  if (props.isLoading) {
    return (
      <Loading />
    )
  }

  if (isTie(props.scores)) {
    return (
      <MainContainer>
        <h1>It's a tie!</h1>
        <StartOver />
      </MainContainer>
    )
  } else {
  var winningIndex = getWinningIndex(props.scores);
  var losingIndex = getLosingIndex(winningIndex);
    return (
      <MainContainer>
        <h1>Results</h1>
        <div className="col-sm-8 col-sm-offset-2">
          <UserDetailsWrapper header='Winner'>
            <UserDetails score={props.scores[winningIndex]} info={props.playersInfo[winningIndex]} />
          </UserDetailsWrapper>
          <UserDetailsWrapper header='Loser'>
            <UserDetails score={props.scores[losingIndex]} info={props.playersInfo[losingIndex]} />
          </UserDetailsWrapper>
        </div>
        <StartOver />
      </MainContainer>
    )
  }
};

Results.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  playersInfo: PropTypes.array.isRequired,
  scores: PropTypes.array.isRequired
};

module.exports = Results;
