import React, { Component } from 'react';
import Notifications, { notify } from 'react-notify-toast';
import PropTypes from 'prop-types';
import OfficeList from './OfficeList';
import vote from '../../services/vote';
import Modal from './Modal';
import Loader from './Loader';
import handleErrorMessage from '../../helpers/handleErrorMessage';

class VotePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentOfficeId: 1,
      modalOpen: false,
      candidateInfo: {
        office: '',
        candidate: '',
      },
      loading: false,
      candidateName: {
        firstname: '',
        lastname: '',
      },
    };
  }

  componentDidMount = async () => {
    const { currentOfficeId } = this.state;
    const { getCandidates } = this.props;
    getCandidates(currentOfficeId);
  };

  componentDidUpdate = async (prevProps, prevState) => {
    const { currentOfficeId } = this.state;
    if (prevState.currentOfficeId !== currentOfficeId) {
      const { getCandidates } = this.props;
      getCandidates(currentOfficeId);
    }
  };

  changeOffice = officeid => {
    this.setState({ currentOfficeId: officeid });
  };

  closeModal = () => {
    this.setState({ modalOpen: false });
  };

  confirmVote = async () => {
    this.setState({ loading: false });
    const { candidateInfo } = this.state;
    const response = await vote.voteCandidate(candidateInfo);

    if (response.status >= 400) {
      this.setState({ loading: false });
      notify.show(handleErrorMessage(response.error), 'error');
    }

    if (response.status === 201) {
      this.setState({ loading: false });
      notify.show(response.message, 'success');
    }

    this.closeModal();
  };

  voteCandidate = (office, candidate, candidateName) => {
    this.setState({
      modalOpen: true,
      candidateInfo: {
        office,
        candidate,
      },
      candidateName: {
        firstname: candidateName.firstname,
        lastname: candidateName.lastname,
      },
    });
  };

  render() {
    const { modalOpen, loading, candidateName } = this.state;
    const { candidates } = this.props;
    const { voteCandidatesList } = candidates;
    const listOfCandidates = voteCandidatesList.map(info => (
      <tr className="interest-item" key={info.id}>
        <td>{info.partyname}</td>
        <td candidateid={info.candidate}>
          {info.firstname}
          &nbsp;
          {info.lastname}
        </td>
        <td candidateid={info.id} officeid={info.office}>
          <button
            type="button"
            className="btn"
            onClick={() =>
              this.voteCandidate(info.office, info.id, {
                firstname: info.firstname,
                lastname: info.lastname,
              })
            }
          >
            <i className="fas fa-user-check" />
          </button>
        </td>
      </tr>
    ));

    const noCandidates = (
      <div className="center">
        <h2>No Candidate in this office</h2>
      </div>
    );
    return (
      <div>
        {loading && <Loader />}
        <Notifications />
        {modalOpen && (
          <Modal
            modalState={modalOpen}
            closeModal={this.closeModal}
            confirmAction={this.confirmVote}
            modalMessage="Are you sure you want to vote for"
            modalTitle="Vote"
            modalDetail={candidateName}
          />
        )}
        <div className="center">
          <h2>Select the office you want to vote for</h2>
          <OfficeList changeOfficeFunc={this.changeOffice} />
        </div>

        <div>
          {listOfCandidates.length ? (
            <table>
              <tbody>{listOfCandidates}</tbody>
            </table>
          ) : (
            <div>{noCandidates}</div>
          )}
        </div>
      </div>
    );
  }
}

VotePage.propTypes = {
  candidates: PropTypes.shape().isRequired,
  getCandidates: PropTypes.func.isRequired,
};

export default VotePage;
