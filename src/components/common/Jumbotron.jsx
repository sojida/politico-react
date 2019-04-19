import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';
import '../../assets/stylesheets/jumbotron.css';

const Jumbotron = () => {
  return (
    <div className="jumbotron">
      <div className="slogan-container">
        <p className="slogan">Politico</p>
      </div>

      <div className="register">
        <Link to="/login">
          <Button value="Sign In" className="signUp btn-margin-10" />
        </Link>
        <Link to="/signup">
          <Button value="Sign Up" className="signUp btn-margin-10" />
        </Link>
      </div>
    </div>
  );
};

export default Jumbotron;
