import React from 'react';
import Header from '../container/header.container';
import underConstructionPic from '../assets/images/under-constr.jpg';

const UnderConstruction = () => {
  return (
    <div className="construction">
      <Header />
      <img src={underConstructionPic} alt="Page Under Construction" />
    </div>
  );
};

export default UnderConstruction;
