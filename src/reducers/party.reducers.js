import actionTypes from '../constants/actionTypes';

const initialState = {
  loading: false,
  partyList: [],
  selectedParty: [],
};

const parties = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.BEGIN_LOADING:
      return { ...state, loading: true };
    case actionTypes.FETCH_PARTIES_SUCCESS:
      return { ...state, partyList: action.parties, loading: false };
    case actionTypes.FETCH_PARTIES_FAILURE:
      return { ...state, loading: false };
    case actionTypes.FETCH_PARTY_SUCCESS:
      return { ...state, selectedParty: action.party, loading: false };
    case actionTypes.FETCH_PARTY_FAILURE:
      return { ...state, loading: false };
    case actionTypes.CREATE_PARTY_SUCCESS:
      return { ...state, loading: false };
    case actionTypes.CREATE_PARTY_FAILURE:
      return { ...state, loading: false };
    default:
      return state;
  }
};

export default parties;
