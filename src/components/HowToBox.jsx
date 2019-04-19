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
  value: PropTypes.string,
  className: PropTypes.string,
  icon: PropTypes.string,
};

HowToBox.defaultProps = {
  value: 'Button',
  className: 'btn',
  icon: 'fa',
};

export default HowToBox;
