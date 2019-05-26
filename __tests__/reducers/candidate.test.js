import candidateReducer from '../../src/reducers/candidate.reducers';
import actions from '../../src/constants/actionTypes';

describe('candidate reducers', () => {
  it('should return the initial state', () => {
    expect(candidateReducer(undefined, {})).toEqual({
      voteCandidatesList: [],
      interestedCandidates: [],
    });
  });

  it('should handle INTEREST SUCCESS', () => {
    expect(
      candidateReducer([], {
        type: actions.INTEREST_SUCCESS,
      })
    ).toEqual({});
  });

  it('should handle INTEREST FAILURE', () => {
    expect(
      candidateReducer([], {
        type: actions.INTEREST_FAILURE,
      })
    ).toEqual({});
  });

  it('should handle FETCH_CANDIDATE_SUCCESS', () => {
    expect(
      candidateReducer([], {
        type: actions.FETCH_CANDIDATE_SUCCESS,
        candidates: [{ fake: 'one' }],
      })
    ).toEqual({
      voteCandidatesList: [{ fake: 'one' }],
    });
  });

  it('should handle FETCH_CANDIDATE_FAILURE', () => {
    expect(
      candidateReducer([], {
        type: actions.FETCH_CANDIDATE_FAILURE,
      })
    ).toEqual({});
  });

  it('should handle GET_INTERESTEE_SUCCESS', () => {
    expect(
      candidateReducer([], {
        type: actions.GET_INTERESTEE_SUCCESS,
        interestees: [{ fake: 'one' }],
      })
    ).toEqual({
      interestedCandidates: [{ fake: 'one' }],
    });
  });

  it('should handle GET_INTERESTEE_FAILURE', () => {
    expect(
      candidateReducer([], {
        type: actions.GET_INTERESTEE_FAILURE,
      })
    ).toEqual({});
  });
});
