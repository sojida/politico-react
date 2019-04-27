import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../reducers/index.reducers';

export default createStore(reducers, compose(applyMiddleware(thunk)));
