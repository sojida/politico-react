import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../assets/stylesheets/header.css';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <header>
        <nav>
          <div className="logo">
            <a href="./index.html">Politico</a>
          </div>

          <div className="nav-content">
            <div className="nav-item hdr-vote">
              <a href="#howToV">How To Vote</a>
            </div>
            <div className="nav-item hdr-join">
              <a href="#bcm-candidate">Become A Candidate</a>
            </div>
            <div className="nav-item signin">
              <Link to="/login">Sign In</Link>
            </div>
            <div className="nav-item signup">
              <Link to="/signup">Sign Up</Link>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;
