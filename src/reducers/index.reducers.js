import { combineReducers } from 'redux';
import auth from './auth.reducers';
import parties from './party.reducers';
import offices from './office.reducers';

const reducers = combineReducers({ auth, parties, offices });

export default reducers;
