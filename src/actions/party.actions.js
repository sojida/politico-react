import { notify } from 'react-notify-toast';
import { showLoading, hideLoading } from 'react-redux-loading-bar';
import actions from '../constants/actionTypes';
import partyServices from '../services/parties';
import handleErrorMessage from '../helpers/handleErrorMessage';

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
    dispatch(showLoading());
    const res = await partyServices.getAllParties();
    if (res.status >= 400) {
      dispatch(hideLoading());
      dispatch(getPartyFailure());
      notify.show(handleErrorMessage(res.error), 'error');
    }

    if (res.status === 200) {
      dispatch(hideLoading());
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

const createParties = data => {
  return async dispatch => {
    dispatch(showLoading());
    const res = await partyServices.createParty(data);

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

const deleteParty = partyId => {
  return async dispatch => {
    dispatch(showLoading());
    const res = await partyServices.deleteParty(partyId);

    if (res.status >= 400) {
      dispatch(hideLoading());
      notify.show(handleErrorMessage(res.error), 'error');
    }

    if (res.status === 200) {
      dispatch(hideLoading());
      notify.show(handleErrorMessage(res.message), 'success');
    }
  };
};

const partyAction = { getAllParties, getPartyById, createParties, deleteParty };

export default partyAction;
