import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Input from './common/Input';
import Button from './common/Button';
import '../assets/stylesheets/formbox.css';

class Login extends Component {
  state = {};

  render() {
    return (
      <React.Fragment>
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
            />
            <Input
              type="password"
              id="password"
              label="Password"
              className="signLabel"
              placeholder="Password"
              required="required"
            />
            <Button value="Login" className="btn1" />
            <p className="center">
              <Link to="/signup">Dont have an account?</Link>
            </p>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Login;
