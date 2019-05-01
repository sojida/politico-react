import actionTypes from '../constants/actionTypes';

const initialState = {
  voteCandidatesList: [],
};

const candidate = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INTEREST_SUCCESS:
      return { ...state };
    case actionTypes.INTEREST_FAILURE:
      return { ...state };
    case actionTypes.FETCH_CANDIDATE_SUCCESS:
      return { ...state, voteCandidatesList: action.candidates };
    case actionTypes.FETCH_CANDIDATE_FAILURE:
      return { ...state };
    default:
      return state;
  }
};

export default candidate;
