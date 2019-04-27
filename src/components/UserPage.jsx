import React, { Component } from 'react';
import Navigation from './common/Sidenav';
import Header from './common/Header';

class UserPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Header />
        <Navigation />
      </div>
    );
  }
}

export default UserPage;
