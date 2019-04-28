import actionTypes from '../constants/actionTypes';

const initialState = {
  loading: false,
  partyList: [],
};

const parties = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.BEGIN_LOADING:
      return { ...state, loading: true };
    case actionTypes.FETCH_PARTIES_SUCCESS:
      return { ...state, partyList: action.parties, loading: false };
    case actionTypes.FETCH_PARTIES_FAILURE:
      return { ...state, loading: false };
    default:
      return state;
  }
};

export default parties;
