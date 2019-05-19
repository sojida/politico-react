import { notify } from 'react-notify-toast';
import { showLoading, hideLoading } from 'react-redux-loading-bar';
import actions from '../constants/actionTypes';
import officeServices from '../services/offices';
import handleErrorMessage from '../helpers/handleErrorMessage';

const getOfficeSuccess = offices => {
  return {
    type: actions.FETCH_OFFICES_SUCCESS,
    offices,
  };
};

const getOfficeFailure = () => {
  return {
    type: actions.FETCH_OFFICES_FAILURE,
  };
};

const getOneOfficeSuccess = office => {
  return {
    type: actions.FETCH_OFFICE_SUCCESS,
    office,
  };
};

const getOneOfficeFailure = () => {
  return {
    type: actions.FETCH_OFFICE_FAILURE,
  };
};

const getAllOffices = () => {
  return async dispatch => {
    dispatch(showLoading());
    const res = await officeServices.getAllOffices();
    if (res.status >= 400) {
      dispatch(hideLoading());
      dispatch(getOfficeFailure());
      notify.show(handleErrorMessage(res.error), 'error');
    }

    if (res.status === 200) {
      dispatch(hideLoading());
      dispatch(getOfficeSuccess(res.data));
    }
  };
};

const getOfficeById = id => {
  return async dispatch => {
    const res = await officeServices.getOfficeById(id);
    if (res.status >= 400) {
      dispatch(getOneOfficeFailure());
      notify.show(handleErrorMessage(res.error), 'error');
    }

    if (res.status === 200) {
      dispatch(getOneOfficeSuccess(res.data));
    }
  };
};

const createOffice = data => {
  return async dispatch => {
    dispatch(showLoading());
    const res = await officeServices.createOffices(data);

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

const officeAction = { getAllOffices, getOfficeById, createOffice };

export default officeAction;
