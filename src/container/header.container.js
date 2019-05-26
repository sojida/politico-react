import { connect } from 'react-redux';
import Header from '../components/common/Header';
import authAction from '../actions/auth.actions';

const { logout } = authAction;

const mapStateToProps = ({ auth }) => ({ auth });

const HeaderContainer = connect(
  mapStateToProps,
  { logout }
)(Header);

export default HeaderContainer;
