import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import jwt from 'jsonwebtoken';
import '../../assets/stylesheets/header.css';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      token: null,
      expired: false,
    };
  }

  getUser = () => {
    return localStorage.token;
  };

  logout = () => {
    this.setState({ token: null });
    localStorage.clear();
  };

  checkToken = () => {
    const { token } = this.state;
    if (token) {
      const data = jwt.decode(token);
      if (!data) {
        localStorage.clear();
        this.setState({ expired: true, token: null });
      }

      const currentTime = new Date().getTime() / 1000;
      if (currentTime > data.exp) {
        localStorage.clear();
        this.setState({ expired: true, token: null });
      }
    }
  };

  componentDidMount = () => {
    const token = this.getUser();
    if (!token) {
      this.setState({ token: null });
    } else {
      this.setState({ token });
    }
  };

  componentDidUpdate = () => {
    this.checkToken();
  };

  render() {
    const { token, expired } = this.state;
    return (
      <header>
        {expired && <Redirect to="/login" />}
        <nav>
          <div className="logo">
            <Link to="/">Politico</Link>
          </div>

          {token ? (
            <div className="nav-content">
              <div className="nav-item logout">
                <Link to="/" onClick={this.logout}>
                  Logout
                </Link>
              </div>
            </div>
          ) : (
            <div className="nav-content">
              <div className="nav-item hdr-vote">
                <Link to="/#howToV">Vote</Link>
              </div>
              <div className="nav-item hdr-join">
                <Link to="/#bcm-candidate">Candidate</Link>
              </div>
              <div className="nav-item signin">
                <Link to="/login">Sign In</Link>
              </div>
              <div className="nav-item signup">
                <Link to="/signup">Sign Up</Link>
              </div>
            </div>
          )}
        </nav>
        {/* {noUser && <Redirect to="login" />} */}
      </header>
    );
  }
}

export default Header;
