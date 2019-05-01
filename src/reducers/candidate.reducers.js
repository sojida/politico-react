import actionTypes from '../constants/actionTypes';

const initialState = {
  loading: false,
};

const candidate = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.BEGIN_LOADING:
      return { ...state, loading: true };
    case actionTypes.STOP_LOADING:
      return { ...state, loading: false };
    case actionTypes.INTEREST_SUCCESS:
      return { ...state, loading: false };
    case actionTypes.INTEREST_FAILURE:
      return { ...state, loading: false };
    default:
      return state;
  }
};

export default candidate;
