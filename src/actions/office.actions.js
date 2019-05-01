import { notify } from 'react-notify-toast';
import actions from '../constants/actionTypes';
import officeServices from '../services/offices';
import handleErrorMessage from '../helpers/handleErrorMessage';

const contentLoading = () => {
  return {
    type: actions.BEGIN_LOADING,
  };
};

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
    dispatch(contentLoading());
    const res = await officeServices.getAllOffices();
    if (res.status >= 400) {
      dispatch(getOfficeFailure());
      notify.show(handleErrorMessage(res.error), 'error');
    }

    if (res.status === 200) {
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

const officeAction = { getAllOffices, getOfficeById };

export default officeAction;
