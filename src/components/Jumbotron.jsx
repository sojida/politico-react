import React from 'react';
import Button from './Button';
import '../assets/stylesheets/jumbotron.css';

const Jumbotron = () => {
  return (
    <div className="jumbotron">
      <div className="slogan-container">
        <p className="slogan">Politico</p>
      </div>

      <div className="register">
        <a href="signin.html">
          <Button value="Sign In" className="signUp btn-margin-10" />
        </a>
        <a href="signup.html">
          <Button value="Sign Up" className="signUp btn-margin-10" />
        </a>
      </div>
    </div>
  );
};

export default Jumbotron;
