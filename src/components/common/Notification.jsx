import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Notification extends Component {
  constructor(props) {
    super(props);
    this.state = {
      closed: true,
    };
  }

  closeNotification = () => {
    this.setState({ closed: false });
  };

  render() {
    const { type, message, status } = this.props;
    const { closed } = this.state;
    return (
      status &&
      closed && (
        <div className={type}>
          <p className="msg">{message}</p>
          <button
            type="button"
            className="btn-close"
            onClick={this.closeNotification}
          >
            X
          </button>
        </div>
      )
    );
  }
}

Notification.propTypes = {
  type: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  status: PropTypes.bool.isRequired,
};

export default Notification;
