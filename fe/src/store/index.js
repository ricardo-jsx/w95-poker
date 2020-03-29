import { createStore, combineReducers } from 'redux';

import processes from './ducks/processes';
import programs from './programs/reducer';

const rootReducer = combineReducers({ processes, programs });

export default createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
