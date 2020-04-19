import { createStore, combineReducers, StoreEnhancer } from 'redux';

import processes from './ducks/processes';
import programs from './ducks/programs/reducer';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION__?: () => StoreEnhancer;
  }
}

const rootReducer = combineReducers({ processes, programs });

export default createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export type RootState = ReturnType<typeof rootReducer>;
