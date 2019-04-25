import React from 'react';
import Header from './common/Header';
import pageNotFoundPic from '../assets/images/404-page.gif';

const NotFound = () => {
  return (
    <div className="construction">
      <Header />
      <img src={pageNotFoundPic} alt="Page Under Construction" />
    </div>
  );
};

export default NotFound;
