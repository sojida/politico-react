import { connect } from 'react-redux';
import partySelector from '../components/common/PartyList';

const mapStateToProps = ({ parties }) => ({ parties });

export default connect(
  mapStateToProps,
  {}
)(partySelector);
