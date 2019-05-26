import { connect } from 'react-redux';
import officeAction from '../actions/office.actions';
import partyAction from '../actions/party.actions';
import candidateAction from '../actions/candidate.actions';
import PoliticianPage from '../components/common/PoliticianPage';

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
