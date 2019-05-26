import React, { Component } from 'react';
import Notifications, { notify } from 'react-notify-toast';
import { Link, Redirect } from 'react-router-dom';
import Input from './common/Input';
import Button from './common/Button';
import Loader from './common/Loader';
import authServices from '../services/auth.services';
import handleErrorMessage from '../helpers/handleErrorMessage';
import Header from '../container/header.container';
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
      redirect: false,
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
    const user = await authServices.auth('signup', signupDetatils);

    if (user.status >= 400) {
      this.setState({ loading: false });
      notify.show(handleErrorMessage(user.error), 'error');
    }

    if (user.status === 201) {
      this.setState({ loading: true });
      localStorage.setItem('token', user.data[0].token);
      localStorage.setItem('user', JSON.stringify(user.data[0].user));
      this.setState({ redirect: true });
    }
  };

  render() {
    const { signupDetatils, loading, redirect } = this.state;

    return (
      <React.Fragment>
        <Notifications />
        {loading && <Loader />}
        <Header />
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
        {redirect && <Redirect to="/user" />}
      </React.Fragment>
    );
  }
}

export default Signup;
