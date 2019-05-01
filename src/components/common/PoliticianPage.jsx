import React, { Component } from 'react';
import { connect } from 'react-redux';
import { notify } from 'react-notify-toast';
import PropTypes from 'prop-types';
import PartyList from './PartyList';
import OfficeList from './OfficeList';
import Button from './Button';
import Loader from './Loader';
import candidates from '../../services/candidates';
import handleErrorMessage from '../../helpers/handleErrorMessage';
import avatar from '../../assets/images/avatar.png';
import officeAction from '../../actions/office.actions';
import partyAction from '../../actions/party.actions';

class PoliticianPage extends Component {
  constructor(props) {
    super(props);
    const { parties, offices } = this.props;
    const { partyList } = parties;
    const { officeList } = offices;
    this.state = {
      party: partyList[0].id,
      office: officeList[0].id,
    };
  }

  selectOffice = id => {
    this.setState({ office: id });
  };

  selectParty = id => {
    this.setState({ party: id });
  };

  componentDidMount = () => {
    const { party, office } = this.state;
    const { getOfficeById, getPartyById } = this.props;
    getOfficeById(office);
    getPartyById(party);
  };

  componentDidUpdate = (prevProp, prevState) => {
    const { party, office } = this.state;
    const { getOfficeById, getPartyById } = this.props;

    if (prevState.party !== party) {
      getPartyById(party);
    }

    if (prevState.office !== office) {
      getOfficeById(office);
    }
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

  declareInterest = async () => {
    const { party, office } = this.state;
    const user = JSON.parse(localStorage.user);

    const data = {
      office: parseFloat(office),
      party: parseFloat(party),
    };

    const response = await candidates.declareInterest(data, user.id);

    if (response.status === 201) {
      notify.show(handleErrorMessage(response.message), 'success');
    }

    if (response.status >= 400) {
      notify.show(handleErrorMessage(response.error), 'error');
    }
  };

  render() {
    const { parties, offices } = this.props;
    const { selectedParty } = parties;
    const { selectedOffice } = offices;

    const partyElement = selectedParty.map(elm => (
      <table key={elm.id}>
        <tbody>
          <tr>
            <td>{elm.name}</td>
            <td>{elm.hqaddress}</td>
            <td>
              <img src={this.partylogo(elm.logourl)} alt="Party Logo" />
            </td>
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

PoliticianPage.propTypes = {
  getOfficeById: PropTypes.func.isRequired,
  getPartyById: PropTypes.func.isRequired,
  offices: PropTypes.shape().isRequired,
  parties: PropTypes.shape().isRequired,
};

const { getOfficeById } = officeAction;
const { getPartyById } = partyAction;

const mapStateToProps = ({ offices, parties }) => ({ offices, parties });

export default connect(
  mapStateToProps,
  { getOfficeById, getPartyById }
)(PoliticianPage);
