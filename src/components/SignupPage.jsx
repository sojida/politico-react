import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Input from './common/Input';
import Button from './common/Button';
import '../assets/stylesheets/formbox.css';

class Signup extends Component {
  state = {};

  render() {
    return (
      <React.Fragment>
        <div className="form-box-container">
          <div className="form-box">
            <h2>Sign Up</h2>
            <Input
              autoFocus="autoFocus"
              type="text"
              id="Fullname"
              label="Fullname"
              className="signLabel"
              placeholder="John Doe"
              required="required"
            />
            <Input
              type="email"
              id="email"
              label="Email"
              className="signLabel"
              placeholder="johndeo@gmail.com"
              required="required"
            />
            <Input
              type="number"
              id="phone-number"
              label="Phone Number"
              className="signLabel"
              placeholder="09000000001"
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
            <Input
              type="password"
              id="confirm-password"
              label="Confirm Password"
              className="signLabel"
              placeholder="Confirm Password"
              required="required"
            />
            <Button value="Sign Up" className="btn1" />
            <p className="center">
              <Link to="/login">Already have an account?</Link>
            </p>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Signup;
