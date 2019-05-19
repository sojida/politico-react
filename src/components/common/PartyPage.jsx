import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Modal from './Modal';
import EditModal from './EditModal';
import handleImages from '../../helpers/handleImages';

class PartyPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAdmin: false,
      modalOpen: false,
      partyId: null,
      editModalOpen: false,
      partyName: { name: '' },
    };
  }

  componentDidMount = async () => {
    const { user } = localStorage;
    this.setState({ isAdmin: JSON.parse(user).isadmin });
  };

  closeModal = () => {
    this.setState({ modalOpen: false });
  };

  closeEditModal = () => {
    this.setState({ editModalOpen: false });
  };

  editModal = (partyName, partyId) => {
    this.setState({
      editModalOpen: true,
      partyName: { name: partyName },
      partyId,
    });
  };

  changePartyName = ({ target }) => {
    const { partyName } = this.state;
    partyName[target.id] = target.value;
    this.setState({ partyName });
  };

  deleteModal = partyId => {
    this.setState({ modalOpen: true, partyId });
  };

  confirmEdit = async () => {
    const { partyId, partyName } = this.state;
    const { editPartyname, getAllParties } = this.props;
    this.closeEditModal();
    await editPartyname(partyId, partyName);
    await getAllParties();
  };

  confirmDelete = async () => {
    const { deleteParty, getAllParties } = this.props;
    const { partyId } = this.state;
    this.closeModal();
    await deleteParty(partyId);
    await getAllParties();
  };

  render() {
    const { parties } = this.props;
    const { partyList } = parties;
    const { isAdmin, modalOpen, editModalOpen, partyName } = this.state;

    const listOfParties = partyList.map(party => (
      <tr key={party.id}>
        <td>{party.name}</td>
        <td>{party.hqaddress}</td>
        <td>
          <img src={handleImages(party.logourl)} alt="Party Logo" />
        </td>
        {isAdmin ? (
          <td>
            <button
              type="button"
              className="btn-edit"
              onClick={() => this.editModal(party.name, party.id)}
            >
              <i className="far fa-edit" />
            </button>
          </td>
        ) : null}
        {isAdmin ? (
          <td>
            <button
              type="button"
              className="btn-del"
              onClick={() => this.deleteModal(party.id)}
            >
              <i className="fas fa-trash" />
            </button>
          </td>
        ) : null}
      </tr>
    ));

    const noParties = (
      <div className="center">
        <h2>No Parties</h2>
      </div>
    );

    return (
      <div>
        {modalOpen && (
          <Modal
            modalState={modalOpen}
            closeModal={this.closeModal}
            confirmAction={this.confirmDelete}
            modalMessage="Are you sure you delete this party"
            modalTitle="Delete"
          />
        )}
        {editModalOpen && (
          <EditModal
            modalState={editModalOpen}
            closeModal={this.closeEditModal}
            confirmAction={this.confirmEdit}
            partyName={partyName.name}
            changePartyName={this.changePartyName}
            modalMessage="Edit party"
            modalTitle="Edit Party"
          />
        )}

        <div>
          {listOfParties.length ? (
            <table>
              <tbody>
                <tr>
                  <th>Party Name</th>
                  <th>HQ</th>
                  <th>Party Logo</th>
                  {isAdmin ? <th>Edit</th> : null}
                  {isAdmin ? <th>Delete</th> : null}
                </tr>
              </tbody>
              <tbody>{listOfParties}</tbody>
            </table>
          ) : (
            <div>{noParties}</div>
          )}
        </div>
      </div>
    );
  }
}

PartyPage.propTypes = {
  parties: PropTypes.shape().isRequired,
  deleteParty: PropTypes.func.isRequired,
  getAllParties: PropTypes.func.isRequired,
  editPartyname: PropTypes.func.isRequired,
};

export default PartyPage;
