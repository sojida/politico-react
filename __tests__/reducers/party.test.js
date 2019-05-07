import partyReducer from '../../src/reducers/party.reducers';
import actions from '../../src/constants/actionTypes';

describe('party reducers', () => {
  it('should return the initial state', () => {
    expect(partyReducer(undefined, {})).toEqual({
      loading: false,
      partyList: [],
      selectedParty: [],
    });
  });

  it('should handle BEGIN_LOADING', () => {
    expect(
      partyReducer([], {
        type: actions.BEGIN_LOADING,
      })
    ).toEqual({
      loading: true,
    });
  });

  it('should handle FETCH_PARTIES_SUCCESS', () => {
    expect(
      partyReducer([], {
        type: actions.FETCH_PARTIES_SUCCESS,
        parties: [{ party: 'PDP' }],
      })
    ).toEqual({
      loading: false,
      partyList: [{ party: 'PDP' }],
    });
  });

  it('should handle FETCH_PARTIES_FAILURE', () => {
    expect(
      partyReducer([], {
        type: actions.FETCH_PARTIES_FAILURE,
      })
    ).toEqual({
      loading: false,
    });
  });

  it('should handle FETCH_PARTY_SUCCESS', () => {
    expect(
      partyReducer([], {
        type: actions.FETCH_PARTY_SUCCESS,
        party: [{ office: 'PDP' }],
      })
    ).toEqual({
      loading: false,
      selectedParty: [{ office: 'PDP' }],
    });
  });

  it('should handle FETCH_PARTY_FAILURE', () => {
    expect(
      partyReducer([], {
        type: actions.FETCH_PARTY_FAILURE,
      })
    ).toEqual({
      loading: false,
    });
  });
});
