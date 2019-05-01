import { connect } from 'react-redux';
import VotePage from '../components/common/VotePage';
import candidateAction from '../actions/candidate.actions';

const { getCandidates } = candidateAction;

const mapStateToProps = ({ candidates }) => ({ candidates });

const VotePageContainer = connect(
  mapStateToProps,
  { getCandidates }
)(VotePage);

export default VotePageContainer;
