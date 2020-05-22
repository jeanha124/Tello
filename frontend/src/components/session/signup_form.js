import React from 'react';
import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const msp = state => {
  return {
    signedIn: state.session.isSignedIn,
    // errors: state.errors.session
  };
};

const mdp = dispatch => {
  return {
    signup: user => dispatch(signup(user))
  };
};



class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      name: '',
      password: '',
      password2: '',
      errors: {}
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearedErrors = false;
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.signedIn === true) {
      this.props.history.push('/login');
    }

    this.setState({ errors: nextProps.errors });
  }
  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }
  handleSubmit(e) {
    e.preventDefault();
    let user = {
      email: this.state.email,
      name: this.state.name,
      password: this.state.password,
      password2: this.state.password2,
    };
    this.props.signup(user, this.props.history);
  }
  renderErrors() {
    return (
      <ul>
        {Object.keys(this.state.errors).map((error, i) => (
          <li key={`error-${i}`}>
            {this.state.errors[error]}
          </li>
        ))}
      </ul>
    );
  }
  render() {
    return (
      <div className="signup-form-container">
        <Form onSubmit={this.handleSubmit}>
          <Section className="signup-form">
            <h3 style={{color: "grey", textAlign: "center"}}>Sign up for your account</h3>
            <Text 
              type="text"
              value={this.state.email}
              onChange={this.update('email')}
              placeholder="Email"
            />
            <Text 
              type="text"
              value={this.state.name}
              onChange={this.update('name')}
              placeholder="Name"
            />
            <Text 
              type="text"
              value={this.state.password}
              onChange={this.update('password')}
              placeholder="Password"
            />
            <Text 
              type="text"
              value={this.state.password2}
              onChange={this.update('password2')}
              placeholder="Confirm Password"
            />
            <Button>Register</Button>
            {this.renderErrors()}
            <Link to={'/login'} style={{color: 'blue', textDecoration: 'none', alignSelf: 'center'}}>Already have an account? Log In</Link>
          </Section>
        </Form>
      </div>
    );
  }
}

export default withRouter(connect(msp, mdp)(SignupForm));

const Form = styled.form`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 500px;
  height: 350px;
  max-width: 90%;
  max-height: 80%;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
`
const Section = styled.section`
  display: flex;
  flex-direction: column;
  margin: auto;
  width: 300px;
`

const Text = styled.input `
  width: 280px;
  border-radius: 4px;
  font-size: 20px;
  margin-top: 10px;
`

const Button = styled.button `
  background-color: #61bd4f;
  border-radius: 4px;
  height: 40px;
  width: 280px;
  color: white;
  font-size: 25px;
  margin-top: 20px;
`