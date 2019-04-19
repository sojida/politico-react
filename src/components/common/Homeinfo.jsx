import React from 'react';
import PropTypes from 'prop-types';
import HowToBox from './HowToBox';

const Homeinfo = ({ boxesOne, boxesTwo }) => {
  return (
    <div>
      <div className="info1" id="howToV">
        <div className="center">
          <h2>How To Vote</h2>
          <h5>Voting on this platform is so easy</h5>
        </div>
        <div className="how-box-container">
          {boxesOne.map(box => (
            <HowToBox
              key={box.id}
              value={box.value}
              className={box.className}
              icon={box.icon}
            />
          ))}
        </div>
      </div>

      <div className="info2" id="bcm-candidate">
        <div className="center">
          <h2>Become A Candidate</h2>
          <h5>Do you believe you can make a difference? Follow this steps:</h5>
        </div>
        <div className="how-box-container">
          {boxesTwo.map(box => (
            <HowToBox
              key={box.id}
              value={box.value}
              className={box.className}
              icon={box.icon}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

Homeinfo.propTypes = {
  boxesOne: PropTypes.arrayOf(PropTypes.object).isRequired,
  boxesTwo: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Homeinfo;
