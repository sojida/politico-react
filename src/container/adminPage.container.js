import { connect } from 'react-redux';
import AdminPage from '../components/common/AdminPage';
import partyAction from '../actions/party.actions';

const { createParties } = partyAction;

const mapStateToProps = ({ parties }) => ({ parties });

const AdminPageContainer = connect(
  mapStateToProps,
  { createParties }
)(AdminPage);

export default AdminPageContainer;
