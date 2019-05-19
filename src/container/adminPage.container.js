import { connect } from 'react-redux';
import AdminPage from '../components/common/AdminPage';
import partyAction from '../actions/party.actions';
import officeAction from '../actions/office.actions';
import candidateAction from '../actions/candidate.actions';

const { getInterestedCandidates, createCandidate } = candidateAction;
const { createParties, getAllParties } = partyAction;
const { createOffice, getAllOffices } = officeAction;

const mapStateToProps = ({ parties, offices, candidates }) => ({
  parties,
  offices,
  candidates,
});

const AdminPageContainer = connect(
  mapStateToProps,
  {
    createParties,
    createOffice,
    getAllParties,
    getAllOffices,
    getInterestedCandidates,
    createCandidate,
  }
)(AdminPage);

export default AdminPageContainer;
