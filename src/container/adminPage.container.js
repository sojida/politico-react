import { connect } from 'react-redux';
import AdminPage from '../components/common/AdminPage';
import partyAction from '../actions/party.actions';
import officeAction from '../actions/office.actions';

const { createParties, getAllParties } = partyAction;
const { createOffice, getAllOffices } = officeAction;

const mapStateToProps = ({ parties }) => ({ parties });

const AdminPageContainer = connect(
  mapStateToProps,
  { createParties, createOffice, getAllParties, getAllOffices }
)(AdminPage);

export default AdminPageContainer;
