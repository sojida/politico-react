import { combineReducers } from 'redux';
import { loadingBarReducer } from 'react-redux-loading-bar';
import auth from './auth.reducers';
import parties from './party.reducers';
import offices from './office.reducers';
import candidates from './candidate.reducers';

const reducers = combineReducers({
  auth,
  parties,
  offices,
  candidates,
  loadingBar: loadingBarReducer,
});

export default reducers;
