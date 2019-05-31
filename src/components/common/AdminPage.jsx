import React, { Component } from 'react';
import PropTypes from 'prop-types';
import OfficeList from '../../container/officelist.container';
import '../../assets/stylesheets/admin.css';

class AdminPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount = () => {
    const { getInterestedCandidates } = this.props;
    getInterestedCandidates(1);
  };

  createParty = async e => {
    e.preventDefault();
    const { createParties, getAllParties } = this.props;
    const data = new FormData(e.target);
    await createParties(data);
    await getAllParties();
  };

  createOffice = async e => {
    e.preventDefault();
    const { createOffice, getAllOffices } = this.props;
    const data = new FormData(e.target);
    await createOffice(data);
    await getAllOffices();
  };

  changeOffice = id => {
    const { getInterestedCandidates } = this.props;
    getInterestedCandidates(id);
  };

  render() {
    const { candidates, createCandidate } = this.props;
    const { interestedCandidates } = candidates;

    const listOfInterestee = interestedCandidates.map(info => (
      <tr className="interest-item" key={info.id}>
        <td partyid={info.party}>{info.partyname}</td>
        <td officeid={info.office}>{info.officename}</td>
        <td candidateid={info.candidate}>
          {info.firstname}
          &nbsp;
          {info.lastname}
        </td>
        <td>
          <button
            type="button"
            className="btn"
            onClick={() =>
              createCandidate(info.candidate, {
                office: parseFloat(info.office),
                party: parseFloat(info.party),
              })
            }
          >
            Accept
          </button>
        </td>
      </tr>
    ));

    const noInterestee = (
      <div className="center">
        <h2>No Interested Candidate for this office</h2>
      </div>
    );

    return (
      <div className="admin-grid">
        <div className="create-party panel admin-form">
          <h3>Create New Party</h3>
          <form
            encType="multipart/form-data"
            name="partyForm"
            id="party-form"
            onSubmit={e => this.createParty(e)}
            className="ad-form"
          >
            <label htmlFor="name">
              Party Name
              <span className="important">*</span>
              <input
                type="text"
                name="name"
                placeholder="Party Name"
                required
              />
            </label>

            <label htmlFor="hqAddress">
              HQ Address
              <span className="important">*</span>
              <input
                type="text"
                name="hqAddress"
                placeholder="Hq Address"
                required
              />
            </label>

            <label htmlFor="logoUrl">
              Party Logo
              <span className="important">*</span>
              <input type="file" id="logoUrl" name="logoUrl" accept="image/*" />
            </label>

            <button type="submit" className="create-party-btn">
              Create Party
            </button>
          </form>
        </div>

        <div className="create-party panel admin-form">
          <h3>Create New Office</h3>
          <form
            encType="multipart/form-data"
            name="partyForm"
            id="party-form"
            onSubmit={e => this.createOffice(e)}
            className="ad-form2"
          >
            <label htmlFor="party">
              Office Name
              <span className="important">*</span>
              <input
                type="text"
                name="name"
                placeholder="Office Name"
                required
              />
            </label>

            <div>
              Government Type:
              <span className="important">*</span>
              <select name="type" id="type" required>
                <option value="Federal">Federal</option>
                <option value="State">State</option>
                <option value="Local">Local</option>
                <option value="Legislative">Legislative</option>
              </select>
            </div>

            <button type="submit" className="create-party-btn">
              Create Office
            </button>
          </form>
        </div>

        <div className="inrterest-table panel admin-form">
          <h3>Interested Candidates</h3>
          <p>Select office to see candidates</p>
          <OfficeList changeOfficeFunc={this.changeOffice} />
          <div>
            {listOfInterestee.length ? (
              <table>
                <tbody>{listOfInterestee}</tbody>
              </table>
            ) : (
              <div>{noInterestee}</div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

AdminPage.propTypes = {
  createParties: PropTypes.func.isRequired,
  createOffice: PropTypes.func.isRequired,
  getAllParties: PropTypes.func.isRequired,
  getAllOffices: PropTypes.func.isRequired,
  getInterestedCandidates: PropTypes.func.isRequired,
  candidates: PropTypes.shape().isRequired,
  createCandidate: PropTypes.func.isRequired,
};

export default AdminPage;
