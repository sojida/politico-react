import React, { Component } from 'react';
import Notifications, { notify } from 'react-notify-toast';
import { Link } from 'react-router-dom';
import Input from './common/Input';
import Button from './common/Button';
import Loader from './common/Loader';
import authServices from '../services/auth.services';
import handleErrorMessage from '../helpers/handleErrorMessage';
import '../assets/stylesheets/formbox.css';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      signupDetatils: {
        fullname: '',
        phoneNumber: '',
        confirmPassword: '',
        email: '',
        password: '',
      },
      loading: false,
    };
  }

  handleChange = ({ target }) => {
    const { signupDetatils } = this.state;
    signupDetatils[target.id] = target.value;
    this.setState({ signupDetatils });
  };

  handleClick = async () => {
    this.setState({ loading: true });
    const { signupDetatils } = this.state;
    const result = await authServices.auth('signup', signupDetatils);

    if (result.status >= 400) {
      this.setState({ loading: false });
      notify.show(handleErrorMessage(result.error), 'error');
    }
  };

  render() {
    const { signupDetatils, loading } = this.state;

    return (
      <React.Fragment>
        <Notifications />
        {loading && <Loader />}
        <div className="form-box-container">
          <div className="form-box">
            <h2>Sign Up</h2>
            <Input
              autoFocus="autoFocus"
              type="text"
              id="fullname"
              label="Fullname"
              className="signLabel"
              placeholder="John Doe"
              required="required"
              value={signupDetatils.fullname}
              onChange={this.handleChange}
            />
            <Input
              type="email"
              id="email"
              label="Email"
              className="signLabel"
              placeholder="johndeo@gmail.com"
              required="required"
              value={signupDetatils.email}
              onChange={this.handleChange}
            />
            <Input
              type="number"
              id="phoneNumber"
              label="Phone Number"
              className="signLabel"
              placeholder="09000000001"
              required="required"
              value={signupDetatils.phoneNumber}
              onChange={this.handleChange}
            />
            <Input
              type="password"
              id="password"
              label="Password"
              className="signLabel"
              placeholder="Password"
              required="required"
              value={signupDetatils.password}
              onChange={this.handleChange}
            />
            <Input
              type="password"
              id="confirmPassword"
              label="Confirm Password"
              className="signLabel"
              placeholder="Confirm Password"
              required="required"
              value={signupDetatils.confirmPassword}
              onChange={this.handleChange}
            />
            <Button
              value="Sign Up"
              className="btn1"
              onClick={this.handleClick}
            />
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
