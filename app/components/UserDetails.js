var React = require('react');
var PropTypes = React.PropTypes;
var styles = require('../styles');


function UserDetails (props) {
    return (
			<div>
				{!!props.score && <li className="list-group-item"><h3>Score: {props.score}</h3></li>}
				<li className="list-group-item"> <img src={props.info.avatar_url} className="img-rounded img-responsive center-block"/></li>
				{props.info.name && <li className="list-group-item">Name: {props.info.name}</li>}
				<li className="list-group-item">Username: {props.info.login}</li>
				{props.info.location && <li className="list-group-item">Location: {props.info.location}</li>}
				{props.info.company && <li className="list-group-item">Company: {props.info.company}</li>}
				<li className="list-group-item">Followers: {props.info.followers}</li>
				<li className="list-group-item">Following: {props.info.following}</li>
				<li className="list-group-item">Public Repos: {props.info.public_repos}</li>
				{props.info.blog && <li className="list-group-item">Blog: <a href={props.info.blog}> {props.info.blog}</a></li>}
			</div>
    )
};

UserDetails.propTypes = {
  score: PropTypes.number,
  info: PropTypes.shape({
    avatar_url: PropTypes.string.isRequired,
    blog: PropTypes.string,
    company: PropTypes.string,
    followers: PropTypes.number.isRequired,
    following: PropTypes.number.isRequired,
    location: PropTypes.string,
    login: PropTypes.string.isRequired,
    name: PropTypes.string,
    public_repos: PropTypes.number.isRequired,
  })
};

module.exports = UserDetails;
