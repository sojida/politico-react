import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../../assets/stylesheets/modal.css';

class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      modalState,
      closeModal,
      confirmAction,
      modalDetail,
      modalTitle,
      modalMessage,
    } = this.props;
    return (
      <div className={modalState ? 'modal' : 'none'}>
        <div className="modal-content">
          <div className="modal-header">
            <span
              className="close"
              onClick={() => closeModal()}
              onKeyDown={() => closeModal()}
              role="button"
              tabIndex={0}
            >
              &times;
            </span>
            <h2>{modalTitle}</h2>
          </div>
          <div className="modal-body">
            <h4>{modalMessage}</h4>
            {Object.keys(modalDetail).length ? (
              <h2 id="candidate-dets">
                {modalDetail.firstname}
                &nbsp;
                {modalDetail.lastname}
              </h2>
            ) : null}
            <button
              type="button"
              className="yes"
              onClick={() => confirmAction()}
            >
              Yes
            </button>
            <button type="button" className="no" onClick={() => closeModal()}>
              No
            </button>
          </div>
          <div className="modal-footer" />
        </div>
      </div>
    );
  }
}

Modal.defaultProps = {
  modalDetail: {},
};

Modal.propTypes = {
  modalState: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  confirmAction: PropTypes.func.isRequired,
  modalMessage: PropTypes.string.isRequired,
  modalTitle: PropTypes.string.isRequired,
  modalDetail: PropTypes.objectOf(PropTypes.string),
};

export default Modal;
