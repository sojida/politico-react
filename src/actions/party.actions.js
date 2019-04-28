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

const partyAction = { getAllParties };

export default partyAction;
