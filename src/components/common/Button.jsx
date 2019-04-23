import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ value, className, ...rest }) => {
  return (
    <button type="button" className={className} {...rest}>
      {value}
    </button>
  );
};

Button.defaultProps = {
  onClick: () => 'clicked',
};

Button.propTypes = {
  value: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default Button;
