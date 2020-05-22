import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

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
          <Links>
            <Link to={'/login'}><LoginBtn>Log In</LoginBtn></Link>
            <Link to={'/signup'}><Button>Sign Up</Button></Link>
          </Links>
      );
    }
  }
  render() {
    return (
      <Nav>
        <Center>Tello</Center>
        {this.getLinks()}
      </Nav>
    );
  }
}
const Nav = styled.div`
  display: flex;
  position: fixed;
  width: 100%;
  height: 80px;
  color: white;
  background: linear-gradient(135deg, #0079bf, #5067c5);
  line-height: 80px;
  box-sizing: border-box;
  z-index: 10;
  justify-content: space-between;
`

const Center = styled.h1`
  position: relative;
  left: 25px;
  line-height: 40px;
`

const Links = styled.div`
  position: relative;
  right: 25px;
`

const LoginBtn = styled.span`
  padding: 15px;
  font-weight: 700;
  font-size: 16px;
  color: white;
`

const Button = styled.button`
  height: 40px;
  width: 80px;
  background-color: white;
  color: #0079bf;
  padding: 2px;
  border-radius: 4px;
  font-weight: 700;
  font-size: 16px;
`

export default connect(msp)(NavBar);
