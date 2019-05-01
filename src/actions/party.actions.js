import { notify } from 'react-notify-toast';
import actions from '../constants/actionTypes';
import partyServices from '../services/parties';
import handleErrorMessage from '../helpers/handleErrorMessage';

const contentLoading = () => {
  return {
    type: actions.BEGIN_LOADING,
  };
};

const getPartySuccess = parties => {
  return {
    type: actions.FETCH_PARTIES_SUCCESS,
    parties,
  };
};

const getPartyFailure = () => {
  return {
    type: actions.FETCH_PARTIES_FAILURE,
  };
};

const getOnePartySuccess = party => {
  return {
    type: actions.FETCH_PARTY_SUCCESS,
    party,
  };
};

const getOnePartyFailure = () => {
  return {
    type: actions.FETCH_PARTY_FAILURE,
  };
};

const getAllParties = () => {
  return async dispatch => {
    dispatch(contentLoading());
    const res = await partyServices.getAllParties();
    if (res.status >= 400) {
      dispatch(getPartyFailure());
      notify.show(handleErrorMessage(res.error), 'error');
    }

    if (res.status === 200) {
      dispatch(getPartySuccess(res.data));
    }
  };
};

const getPartyById = id => {
  return async dispatch => {
    const res = await partyServices.getPartiesById(id);
    if (res.status >= 400) {
      dispatch(getOnePartyFailure());
      notify.show(handleErrorMessage(res.error), 'error');
    }

    if (res.status === 200) {
      dispatch(getOnePartySuccess(res.data));
    }
  };
};

const partyAction = { getAllParties, getPartyById };

export default partyAction;
