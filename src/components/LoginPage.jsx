import React, { Component } from 'react';
import Notifications, { notify } from 'react-notify-toast';
import { Link, Redirect } from 'react-router-dom';
import Input from './common/Input';
import Button from './common/Button';
import '../assets/stylesheets/formbox.css';
import Loader from './common/Loader';
import authServices from '../services/auth.services';
import handleErrorMessage from '../helpers/handleErrorMessage';
import Header from './common/Header';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loginDetatils: {
        email: '',
        password: '',
      },
      loading: false,
      redirect: false,
      isAdmin: false,
    };
  }

  handleChange = ({ target }) => {
    const { loginDetatils } = this.state;
    loginDetatils[target.id] = target.value;
    this.setState({ loginDetatils });
  };

  handleClick = async () => {
    this.setState({ loading: true });
    const { loginDetatils } = this.state;
    const user = await authServices.auth('login', loginDetatils);

    if (user.status >= 400) {
      this.setState({ loading: false });
      notify.show(handleErrorMessage(user.error), 'error');
    }

    if (user.status === 200) {
      this.setState({ loading: true });
      if (user.data[0].user.isadmin) {
        this.setState({ isAdmin: true });
      }
      localStorage.setItem('token', user.data[0].token);
      localStorage.setItem('user', JSON.stringify(user.data[0].user));
      this.setState({ redirect: true });
    }
  };

  render() {
    const { loginDetatils, loading, redirect, isAdmin } = this.state;

    return (
      <React.Fragment>
        {loading && <Loader />}
        <Notifications />
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
              value={loginDetatils.email}
              onChange={this.handleChange}
            />
            <Input
              type="password"
              id="password"
              label="Password"
              className="signLabel"
              placeholder="Password"
              required="required"
              value={loginDetatils.password}
              onChange={this.handleChange}
            />
            <Button value="Login" className="btn1" onClick={this.handleClick} />
            <p className="center">
              <Link to="/signup">Dont have an account?</Link>
            </p>
          </div>
        </div>
        {isAdmin && redirect && <Redirect to="/admin" />}
        {!isAdmin && redirect && <Redirect to="/user" />}
      </React.Fragment>
    );
  }
}

export default Login;
