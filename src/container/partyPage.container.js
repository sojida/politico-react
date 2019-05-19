import { connect } from 'react-redux';
import PartyPage from '../components/common/PartyPage';
import partyAction from '../actions/party.actions';

const { getAllParties, deleteParty } = partyAction;

const mapStateToProps = ({ parties }) => ({ parties });

const PartyPageContainer = connect(
  mapStateToProps,
  { getAllParties, deleteParty }
)(PartyPage);

export default PartyPageContainer;
