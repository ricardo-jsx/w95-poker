import { createStore, combineReducers } from 'redux';

import programs from './programs/reducer';

const rootReducer = combineReducers({ programs });

export default createStore(rootReducer);
