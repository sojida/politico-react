import React, { Component } from 'react';
import Notifications, { notify } from 'react-notify-toast';
import { Link } from 'react-router-dom';
import Input from './common/Input';
import Button from './common/Button';
import '../assets/stylesheets/formbox.css';
import Loader from './common/Loader';
import authServices from '../services/auth.services';
import handleErrorMessage from '../helpers/handleErrorMessage';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loginDetatils: {
        email: '',
        password: '',
      },
      loading: false,
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
    const result = await authServices.auth('login', loginDetatils);

    if (result.status >= 400) {
      this.setState({ loading: false });
      notify.show(handleErrorMessage(result.error), 'error');
    }
  };

  render() {
    const { loginDetatils, loading } = this.state;

    return (
      <React.Fragment>
        {loading && <Loader />}
        <Notifications />
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
      </React.Fragment>
    );
  }
}

export default Login;
