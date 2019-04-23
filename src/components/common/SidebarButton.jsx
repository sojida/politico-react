import React from 'react';
import PropTypes from 'prop-types';

const SidebarButton = ({ value, className, iconClass, ...rest }) => {
  return (
    <button type="button" className={className} {...rest}>
      <span className="icon">
        <i className={iconClass} />
      </span>
      <span className="text">{value}</span>
    </button>
  );
};

SidebarButton.defaultProps = {
  onClick: () => 'clicked',
};

SidebarButton.propTypes = {
  value: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  iconClass: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default SidebarButton;
