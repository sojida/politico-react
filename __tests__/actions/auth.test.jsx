import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import actions from '../../src/actions/auth.actions';
import types from '../../src/constants/actionTypes';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('auth actions', () => {
  afterEach(() => {
    fetchMock.restore();
    fetchMock.config.fallbackToNetwork = false;
  });

  it('should create an action to logout', async () => {
    const expectedAction = [
      {
        type: types.LOGOUT,
      },
    ];
    const store = mockStore({});

    store.dispatch(actions.logout());
    expect(store.getActions()).toEqual(expectedAction);
  });

  it('should create an action to login', async () => {
    fetchMock.mock(
      '/api/v1/auth/login',
      {
        status: 200,
        body: [{ token: 'faketoken', user: {} }],
      },
      {
        method: 'POST',
        name: 'login',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    const userData = {
      email: 'pete@gmail.com',
      password: 'dummy',
    };

    await fetch('/api/v1/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });

    const expectedAction = [
      {
        type: types.BEGIN_LOADING,
      },
    ];

    const store = mockStore({});

    store.dispatch(actions.login()).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
    });
  });

  it('should create for login success', async () => {
    const token = 'faketoken';
    const expectedAction = [
      {
        type: types.LOGIN_SUCCESS,
        token,
      },
    ];
    const store = mockStore({});

    store.dispatch(actions.loginSuccess(token));
    expect(store.getActions()).toEqual(expectedAction);
  });

  it('should create an action for login failure', async () => {
    const expectedAction = [
      {
        type: types.LOGIN_FAILURE,
      },
    ];
    const store = mockStore({});

    store.dispatch(actions.loginFailure());
    expect(store.getActions()).toEqual(expectedAction);
  });

  it('should create an action for login admin success', async () => {
    const expectedAction = [
      {
        type: types.LOGIN_SUCCESS_ADMIN,
      },
    ];
    const store = mockStore({});

    store.dispatch(actions.loginSuccessAdmin());
    expect(store.getActions()).toEqual(expectedAction);
  });
});
