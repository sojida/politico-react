import React from 'react';
import pageNotFoundPic from '../assets/images/404-page.gif';

const NotFound = () => {
  return (
    <div className="construction">
      <img src={pageNotFoundPic} alt="Page Under Construction" />
    </div>
  );
};

export default NotFound;
