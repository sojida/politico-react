import { connect } from 'react-redux';
import authAction from '../actions/auth.actions';
import Login from '../components/LoginPage';

const { login } = authAction;

const mapStateToProps = ({ auth }) => ({ auth });

export default connect(
  mapStateToProps,
  { login }
)(Login);
