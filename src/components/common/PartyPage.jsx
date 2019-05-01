import React, { Component } from 'react';
import PropTypes from 'prop-types';
import handleImages from '../../helpers/handleImages';

class PartyPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { parties } = this.props;
    const { partyList } = parties;

    const listOfParties = partyList.map(party => (
      <tr key={party.id}>
        <td>{party.name}</td>
        <td>{party.hqaddress}</td>
        <td>
          <img src={handleImages(party.logourl)} alt="Party Logo" />
        </td>
      </tr>
    ));

    const noParties = (
      <div className="center">
        <h2>No Parties</h2>
      </div>
    );

    return (
      <div>
        <div>
          {listOfParties.length ? (
            <table>
              <tbody>
                <tr>
                  <th>Party Name</th>
                  <th>HQ</th>
                  <th>Party Logo</th>
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
};

export default PartyPage;
