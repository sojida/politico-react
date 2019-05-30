import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../../assets/stylesheets/modal.css';

class EditModal extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      modalState,
      closeModal,
      modalTitle,
      modalMessage,
      partyName,
      confirmAction,
      changePartyName,
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
            <form className="edit-party-form">
              <input
                type="text"
                value={`${partyName}`}
                id="name"
                onChange={e => changePartyName(e)}
              />
            </form>
            <button
              type="submit"
              className="yes"
              onClick={() => confirmAction()}
            >
              Edit
            </button>
            <button type="button" className="no" onClick={() => closeModal()}>
              Cancel
            </button>
          </div>
          <div className="modal-footer" />
        </div>
      </div>
    );
  }
}

EditModal.propTypes = {
  modalState: PropTypes.bool.isRequired,
  confirmAction: PropTypes.func.isRequired,
  modalMessage: PropTypes.string.isRequired,
  modalTitle: PropTypes.string.isRequired,
  partyName: PropTypes.string.isRequired,
  closeModal: PropTypes.func.isRequired,
  changePartyName: PropTypes.func.isRequired,
};

export default EditModal;
