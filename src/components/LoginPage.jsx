import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import Input from './common/Input';
import Button from './common/Button';
import '../assets/stylesheets/formbox.css';
import Loader from './common/Loader';
import Header from '../container/header.container';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loginDetails: {
        email: '',
        password: '',
      },
    };
  }

  handleChange = ({ target }) => {
    const { loginDetails } = this.state;
    loginDetails[target.id] = target.value;
    this.setState({ loginDetails });
  };

  handleClick = () => {
    const { loginDetails } = this.state;
    const { login } = this.props;
    login(loginDetails);
  };

  render() {
    const { loginDetails } = this.state;
    const { auth } = this.props;
    const { loading, redirect, isAdmin } = auth;

    return (
      <React.Fragment>
        {loading && <Loader />}
        <Header />
        <div className="form-box-container">
          <div className="form-box">
            <h2>Sign In</h2>
            <Input
              autoFocus="autoFocus"
              type="text"
              id="email"
              label="Email"
              className="signLabel"
              placeholder="johndeo@gmail.com"
              required="required"
              value={loginDetails.email}
              onChange={this.handleChange}
            />
            <Input
              type="password"
              id="password"
              label="Password"
              className="signLabel"
              placeholder="Password"
              required="required"
              value={loginDetails.password}
              onChange={this.handleChange}
            />
            <Button value="Login" className="btn1" onClick={this.handleClick} />
            <p className="center">
              <Link to="/signup">Dont have an account?</Link>
            </p>
          </div>
        </div>
        {isAdmin && redirect && <Redirect to="/user" />}
        {!isAdmin && redirect && <Redirect to="/user" />}
      </React.Fragment>
    );
  }
}

Login.propTypes = {
  login: PropTypes.func.isRequired,
  auth: PropTypes.shape().isRequired,
};

export default Login;
