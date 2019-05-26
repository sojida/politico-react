import { connect } from 'react-redux';
import OfficeSelector from '../components/common/OfficeList';

const mapStateToProps = ({ offices }) => ({ offices });

export default connect(
  mapStateToProps,
  {}
)(OfficeSelector);
