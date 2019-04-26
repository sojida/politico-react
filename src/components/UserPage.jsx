import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import jwt from 'jsonwebtoken';
import Navigation from './common/Sidenav';
import Header from './common/Header';

class UserPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // expired: false,
      // noUser: false,
    };
  }

  // checkExpire = () => {
  //   const data = jwt.decode(localStorage.token);
  //   const currentTime = new Date().getTime() / 1000;
  //   if (currentTime > data.exp) {
  //     this.setState({ expired: true });
  //   }
  //   localStorage.clear();
  // };

  // checkToken = () => {
  //   if (!localStorage.token) {
  //     this.setState({ noUser: true });
  //   }
  // };

  // componentDidMount = () => {
  //   this.checkToken();
  //   this.checkExpire();
  // }

  render() {
    // const { expired, noUser } = this.state;
    return (
      <div>
        <Header />
        <Navigation />
        {/* {noUser && <Redirect to="login" />}
        {expired && <Redirect to="login" />} */}
      </div>
    );
  }
}

export default UserPage;
