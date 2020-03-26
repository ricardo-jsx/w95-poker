import { createStore, combineReducers } from 'redux';

import processes from './ducks/processes';

const rootReducer = combineReducers({ processes });

export default createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
