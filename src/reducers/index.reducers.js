import { combineReducers } from 'redux';
import auth from './auth.reducers';
import parties from './party.reducers';

const reducers = combineReducers({ auth, parties });

export default reducers;
