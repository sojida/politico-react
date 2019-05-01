import { connect } from 'react-redux';
import PartyPage from '../components/common/PartyPage';
import partyAction from '../actions/party.actions';

const { getAllParties } = partyAction;

const mapStateToProps = ({ parties }) => ({ parties });

const PartyPageContainer = connect(
  mapStateToProps,
  { getAllParties }
)(PartyPage);

export default PartyPageContainer;
