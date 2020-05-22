import React from 'react';
import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import { Link, withRouter } from 'react-router-dom';
import styled from 'styled-components';

const msp = state => {
  return {
    // errors: state.errors.session
  }
}

const mdp = dispatch => {
  return {
    login: user => dispatch(login(user))
  }
}


class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      errors: {}
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.currentUser === true) {
      this.props.history.push(`/${this.props.username}/boards`);
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
      password: this.state.password
    };

    this.props.login(user);
  }

  renderErrors() {
    return (
      <ul>
        {Object.keys(this.state.errors).map((error, i) => (
          <li keys={`error-${i}`}>
            {this.state.errors[error]}
          </li>
        ))}
      </ul>
    )
  }

  render() {
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <Section>
            <h3 style={{color: 'grey', textAlign: 'center'}}>Log in to Tello</h3>
            <Text 
              type="text"
              value={this.state.email}
              onChange={this.update('email')}
              placeholder="Email"
            />
            <Text 
              type="text"
              value={this.state.password}
              onChange={this.update('password')}
              placeholder="Password"
            />
            <Button>Log In</Button>
            {this.renderErrors()}
            <Link to={'/signup'} style={{textAlign: 'center', textDecoration: 'none', color: 'blue'}}>Don't have an Account? Sign Up</Link>
          </Section>
        </Form>
      </div>
    );
  }
}

const Form = styled.form `
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
const Section = styled.div `
  display: flex;
  flex-direction: column;
  margin: auto;
  line-height: 50px;
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

// import React, { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { login } from '../../actions/session_actions';

// const LoginForm = () => {
//   const errors = useSelector(state => state.errors.session);
//   const dispatch = useDispatch();
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   // const [errors] = useState({});

//     return (
//       <div>
//         <form onSubmit={this.handleSubmit}>
//           <input 
//             type="text"
//             value={email}
//             onChange={(e) => setEmail(e)}
//             placeholder="Email"
//           />
//           <input 
//             type="text"
//             value={password}
//             onChange={(e) => setPassword(e)}
//             placeholder="Password"
//           />
//           <input 
//             type="submit"
//             value="Log In"
//           />
//         </form>
//       </div>
//     );
// };

// export default LoginForm;
export default withRouter(connect(msp, mdp)(LoginForm));
