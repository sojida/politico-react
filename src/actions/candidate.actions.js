import { notify } from 'react-notify-toast';
import { showLoading, hideLoading } from 'react-redux-loading-bar';
import actions from '../constants/actionTypes';
import candidateServices from '../services/candidates';
import handleErrorMessage from '../helpers/handleErrorMessage';

const interestSuccess = () => {
  return {
    type: actions.INTEREST_SUCCESS,
  };
};

const interestFailure = () => {
  return {
    type: actions.INTEREST_FAILURE,
  };
};

const getCandidateSuccess = candidates => {
  return {
    type: actions.FETCH_CANDIDATE_SUCCESS,
    candidates,
  };
};

const getCandidateFailure = () => {
  return {
    type: actions.FETCH_CANDIDATE_FAILURE,
  };
};

const getInterestedCandidateSuccess = interestees => {
  return {
    type: actions.GET_INTERESTEE_SUCCESS,
    interestees,
  };
};

const getInterestedCandidateFailure = () => {
  return {
    type: actions.GET_INTERESTEE_FAILURE,
  };
};

const declareInterest = (data, id) => {
  return async dispatch => {
    dispatch(showLoading());
    const res = await candidateServices.declareInterest(data, id);
    if (res.status >= 400) {
      dispatch(interestFailure());
      dispatch(hideLoading());
      notify.show(handleErrorMessage(res.error), 'error');
    }

    if (res.status === 201) {
      dispatch(interestSuccess());
      dispatch(hideLoading());
      notify.show(handleErrorMessage(res.message), 'success');
    }
  };
};

const getCandidates = office => {
  return async dispatch => {
    dispatch(showLoading());
    const res = await candidateServices.getCandidates(office);
    if (res.status >= 400) {
      dispatch(getCandidateFailure());
      dispatch(hideLoading());
      notify.show(handleErrorMessage(res.error), 'error');
    }

    if (res.status === 200) {
      dispatch(getCandidateSuccess(res.data));
      dispatch(hideLoading());
    }
  };
};

const getInterestedCandidates = office => {
  return async dispatch => {
    dispatch(showLoading());
    const res = await candidateServices.getInterestedCandidates(office);
    if (res.status >= 400) {
      dispatch(hideLoading());
      dispatch(getInterestedCandidateFailure());
      notify.show(handleErrorMessage(res.error), 'error');
    }

    if (res.status === 200) {
      dispatch(getInterestedCandidateSuccess(res.data));
      dispatch(hideLoading());
    }
  };
};

const createCandidate = (userid, data) => {
  return async dispatch => {
    dispatch(showLoading());
    const res = await candidateServices.createCandidate(userid, data);
    if (res.status >= 400) {
      dispatch(hideLoading());
      notify.show(handleErrorMessage(res.error), 'error');
    }

    if (res.status === 201) {
      dispatch(hideLoading());
      notify.show(handleErrorMessage(res.message), 'success');
    }
  };
};

const candidateAction = {
  declareInterest,
  getCandidates,
  interestSuccess,
  interestFailure,
  getCandidateSuccess,
  getCandidateFailure,
  getInterestedCandidates,
  createCandidate,
};

export default candidateAction;
