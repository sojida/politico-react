import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import PartyList from './PartyList';
import OfficeList from './OfficeList';
import Button from './Button';
import officeAction from '../../actions/office.actions';
import partyAction from '../../actions/party.actions';
import candidateAction from '../../actions/candidate.actions';
import handleImages from '../../helpers/handleImages';

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

  declareInterest = () => {
    const { party, office } = this.state;
    const { declareInterest } = this.props;

    const user = JSON.parse(localStorage.user);

    const data = {
      office: parseFloat(office),
      party: parseFloat(party),
    };

    declareInterest(data, user.id);
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
              <img src={handleImages(elm.logourl)} alt="Party Logo" />
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
          <h2>Choose the office you want to run for</h2>
          <OfficeList changeOfficeFunc={this.selectOffice} />
          {selectedOffice.length ? officeElement : null}

          <h2>Choose the party you want to represent</h2>
          <PartyList changePartyFunc={this.selectParty} />
          {selectedParty.length ? partyElement : null}

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
  declareInterest: PropTypes.func.isRequired,
  offices: PropTypes.shape().isRequired,
  parties: PropTypes.shape().isRequired,
};

const { getOfficeById } = officeAction;
const { getPartyById } = partyAction;
const { declareInterest } = candidateAction;

const mapStateToProps = ({ offices, parties, candidates }) => ({
  offices,
  parties,
  candidates,
});

export default connect(
  mapStateToProps,
  { getOfficeById, getPartyById, declareInterest }
)(PoliticianPage);
