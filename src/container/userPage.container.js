import { connect } from 'react-redux';
import UserPage from '../components/UserPage';
import officeAction from '../actions/office.actions';
import partyAction from '../actions/party.actions';

const { getAllOffices } = officeAction;
const { getAllParties } = partyAction;

const mapStateToProps = ({ offices, parties }) => ({ offices, parties });

const UserPageContainer = connect(
  mapStateToProps,
  { getAllOffices, getAllParties }
)(UserPage);

export default UserPageContainer;
