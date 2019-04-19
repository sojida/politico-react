import React from 'react';
import Proptypes from 'prop-types';

const Input = ({ id, label, className, ...rest }) => (
  <div>
    <label htmlFor={id} className={className}>
      {label}
      <input {...rest} id={id} />
    </label>
  </div>
);

Input.defaultProps = {
  autoFocus: (Proptypes.defaultProps = ''),
};

Input.propTypes = {
  className: Proptypes.string.isRequired,
  type: Proptypes.string.isRequired,
  id: Proptypes.string.isRequired,
  required: Proptypes.string.isRequired,
  label: Proptypes.string.isRequired,
  autoFocus: Proptypes.string,
  value: Proptypes.string.isRequired,
  placeholder: Proptypes.string.isRequired,
  onChange: Proptypes.func.isRequired,
};

export default Input;
