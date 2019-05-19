import React, { Component } from 'react';
import OfficeList from './OfficeList';
import '../../assets/stylesheets/admin.css';

class AdminPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div className="create-party panel">
          <h3>Create New Party</h3>
          <form
            encType="multipart/form-data"
            name="partyForm"
            id="party-form"
            onSubmit="return false"
            className="admin-form"
          >
            <label htmlFor="party">
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

            <label htmlFor="partyLogo">
              Party Logo
              <span className="important">*</span>
              <input type="file" id="logo-upload" name="logoUrl" />
            </label>

            <button type="submit" className="create-party-btn">
              Create Party
            </button>
          </form>
        </div>

        <div className="create-party panel">
          <h3>Create New Office</h3>
          <form
            encType="multipart/form-data"
            name="partyForm"
            id="party-form"
            onSubmit="return false"
            className="admin-form"
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

        <div className="inrterest-table panel">
          <h3>Interested Candidates</h3>
          <p>Select office to see candidates</p>
          <OfficeList />
        </div>
      </div>
    );
  }
}

export default AdminPage;
