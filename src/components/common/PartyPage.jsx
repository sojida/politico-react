import React, { Component } from 'react';
import partyService from '../../services/parties';
import avatar from '../../assets/images/avatar.png';

class PartyPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      parties: [],
    };
  }

  componentDidMount = async () => {
    const allParties = await partyService.getAllParties();
    this.setState({ parties: allParties.data });
  };

  partylogo = logoUrl => {
    const localUrl = 'http://127.0.0.1:3000/api/v1';
    const herokuUrl = ' https://shielded-headland-63958.herokuapp.com/api/v1';
    const url = `${herokuUrl}`;
    if (logoUrl === 'logo123') {
      return avatar;
    }

    return `${url}/images/${logoUrl}`;
  };

  render() {
    const { parties } = this.state;
    const listOfParties = parties.map(party => (
      <tr key={party.id}>
        <td>{party.name}</td>
        <td>{party.hqaddress}</td>
        <td>
          <img src={this.partylogo(party.logourl)} alt="Party Logo" />
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

export default PartyPage;
