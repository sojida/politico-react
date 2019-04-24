import React, { Component } from 'react';
import partyService from '../../services/parties';

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
    const url = `${localUrl}`;
    if (logoUrl === 'logo123') {
      return 'No logo';
    }

    return `<img src="${url}/images/${logoUrl}"></img>`;
  };

  render() {
    const { parties } = this.state;
    const listOfParties = parties.map(party => (
      <tr key={party.id}>
        <td>{party.name}</td>
        <td>{party.hqaddress}</td>
        <td>{this.partylogo(party.logourl)}</td>
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
