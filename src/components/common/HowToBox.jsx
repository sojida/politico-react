import React from 'react';
import PropTypes from 'prop-types';

const HowToBox = ({ value, className, icon }) => {
  return (
    <div className={className}>
      <i className={icon} />
      <p>{value}</p>
    </div>
  );
};

HowToBox.propTypes = {
  value: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default HowToBox;
