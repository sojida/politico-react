/* eslint-disable no-dupe-keys */
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import actions from '../../src/actions/candidate.actions';
import types from '../../src/constants/actionTypes';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('candidate actions', () => {
  afterEach(() => {
    fetchMock.restore();
    fetchMock.config.fallbackToNetwork = false;
  });

  it('should create an action for interest success', async () => {
    const expectedAction = [
      {
        type: types.INTEREST_SUCCESS,
      },
    ];
    const store = mockStore({});

    store.dispatch(actions.interestSuccess());
    expect(store.getActions()).toEqual(expectedAction);
  });

  it('should create an action for interest failure', async () => {
    const expectedAction = [
      {
        type: types.INTEREST_FAILURE,
      },
    ];
    const store = mockStore({});

    store.dispatch(actions.interestFailure());
    expect(store.getActions()).toEqual(expectedAction);
  });

  it('should create an action for get candidate failure', async () => {
    const expectedAction = [
      {
        type: types.FETCH_CANDIDATE_FAILURE,
      },
    ];
    const store = mockStore({});

    store.dispatch(actions.getCandidateFailure());
    expect(store.getActions()).toEqual(expectedAction);
  });

  it('should create an action for get candidate success', async () => {
    const candidates = [];
    const expectedAction = [
      {
        type: types.FETCH_CANDIDATE_SUCCESS,
        candidates,
      },
    ];
    const store = mockStore({});

    store.dispatch(actions.getCandidateSuccess(candidates));
    expect(store.getActions()).toEqual(expectedAction);
  });

  it('should create an action for interest', async () => {
    const data = {
      office: 1,
      party: 1,
    };
    fetchMock.mock(
      '/api/v1/interest/1/register',
      {
        status: 201,
        body: data,
      },
      {
        method: 'POST',
        headers: {
          Authorization: 'faketoken',
          'Content-Type': 'application/json',
        },
      }
    );
    const expectedAction = [
      {
        type: types.INTEREST_FAILURE,
        payload: {
          scope: 'default',
        },
        type: 'loading-bar/SHOW',
      },
    ];
    const store = mockStore({});

    await fetch('/api/v1/interest/1/register', {
      method: 'POST',
      headers: {
        Authorization: 'faketoken',
        'Content-Type': 'application/json',
      },
      body: data,
    });

    store.dispatch(actions.declareInterest(data, 1)).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
    });
  });
});
