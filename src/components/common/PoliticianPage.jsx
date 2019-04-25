import React, { Component } from 'react';
import Notifications, { notify } from 'react-notify-toast';
import PartyList from './PartyList';
import OfficeList from './OfficeList';
import Button from './Button';
import Loader from './Loader';
import parties from '../../services/parties';
import offices from '../../services/offices';
import candidates from '../../services/candidates';
import handleErrorMessage from '../../helpers/handleErrorMessage';

class PoliticianPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      party: 1,
      office: 1,
      selectedParty: [],
      selectedOffice: [],
      loading: false,
    };
  }

  selectOffice = id => {
    this.setState({ office: id });
  };

  selectParty = id => {
    this.setState({ party: id });
  };

  componentDidUpdate = async (prevProp, prevState) => {
    const { party, office } = this.state;
    if (prevState.party !== party) {
      const selectedParty = await parties.getPartiesById(party);
      this.setState({ selectedParty: selectedParty.data });
    }

    if (prevState.office !== office) {
      const selectedOffice = await offices.getOfficeById(office);
      this.setState({ selectedOffice: selectedOffice.data });
    }
  };

  partylogo = logoUrl => {
    const localUrl = 'http://127.0.0.1:3000/api/v1';
    const url = `${localUrl}`;
    if (logoUrl === 'logo123') {
      return 'No logo';
    }

    return `<img src="${url}/images/${logoUrl}"></img>`;
  };

  declareInterest = async () => {
    this.setState({ loading: true });
    const { party, office } = this.state;
    const user = JSON.parse(localStorage.user);

    const data = {
      office: parseFloat(office),
      party: parseFloat(party),
    };

    const response = await candidates.declareInterest(data, user.id);

    if (response.status === 201) {
      this.setState({ loading: false });
      notify.show(handleErrorMessage(response.message), 'success');
    }

    if (response.status >= 400) {
      this.setState({ loading: false });
      notify.show(handleErrorMessage(response.error), 'error');
    }
  };

  render() {
    const { selectedParty, selectedOffice, loading } = this.state;
    const partyElement = selectedParty.map(elm => (
      <table key={elm.id}>
        <tbody>
          <tr>
            <td>{elm.name}</td>
            <td>{elm.hqaddress}</td>
            <td>{this.partylogo(elm.logourl)}</td>
          </tr>
        </tbody>
      </table>
    ));

    const officeElement = selectedOffice.map(elm => (
      <table key={elm.id}>
        <tbody>
          <tr>
            <td>{elm.name}</td>
            <td>{elm.type}</td>
          </tr>
        </tbody>
      </table>
    ));

    return (
      <div>
        {loading && <Loader />}
        <Notifications />
        <div className="center">
          <h2>Choose the party you want to represent</h2>
          <PartyList changePartyFunc={this.selectParty} />
          {selectedParty.length ? partyElement : null}

          <h2>Choose the office you want to run for</h2>
          <OfficeList changeOfficeFunc={this.selectOffice} />
          {selectedOffice.length ? officeElement : null}

          <div className="center">
            <Button
              value="Declare Interest"
              className="declare-btn"
              onClick={this.declareInterest}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default PoliticianPage;
