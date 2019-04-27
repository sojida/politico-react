import React, { Component } from 'react';
import Notifications, { notify } from 'react-notify-toast';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import authAction from '../actions/auth.actions';
import Input from './common/Input';
import Button from './common/Button';
import '../assets/stylesheets/formbox.css';
import Loader from './common/Loader';
import Header from './common/Header';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loginDetatils: {
        email: '',
        password: '',
      },
    };
  }

  handleChange = ({ target }) => {
    const { loginDetatils } = this.state;
    loginDetatils[target.id] = target.value;
    this.setState({ loginDetatils });
  };

  handleClick = () => {
    const { loginDetatils } = this.state;
    const { login } = this.props;
    login(loginDetatils);
  };

  render() {
    const { loginDetatils } = this.state;
    const { auth } = this.props;
    const { loading, redirect, isAdmin } = auth;

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

Login.propTypes = {
  login: PropTypes.func.isRequired,
  auth: PropTypes.shape().isRequired,
};

const { login } = authAction;

const mapStateToProps = ({ auth }) => ({ auth });
export default connect(
  mapStateToProps,
  { login }
)(Login);
