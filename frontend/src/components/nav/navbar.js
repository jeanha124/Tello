import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import React from 'react';
import { Link } from 'react-router-dom';


const msp = state => ({
  loggedIn: state.session.isAuthenticated
});

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.logoutUser = this.logoutUser.bind(this);
    this.getLinks = this.getLinks.bind(this);
  }
  logoutUser(e) {
    e.preventDefault();
    this.props.logout();
  }
  getLinks() {
    if (this.props.loggedIn) {
      return (
        <div>
          <Link to={'/boards'}>Home</Link>
          <span>Boards</span>
          <Link to={'/boards'}>Tello</Link>
          <span>+</span>
          <span>!</span>
          <span>Alert</span>
          <span>Profile</span>    
        </div>
      );
    } else {
      return (
          <div>
            <button>Log In</button>
            <button>Sign Up</button>
          </div>
      );
    }
  }
  render() {
    return (
      <div>
        <h1>Tello</h1>
        {this.getLinks()}
      </div>
    );
  }
}

export default connect(msp)(NavBar);