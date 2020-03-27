import { find, map, equals, prop, ifElse, pipe, assoc, identity, propOr, reject } from 'ramda';

const INITIAL_STATE = {
  running: [],
  executionOrder: [],
};

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'START_PROCESS': {
      return {
        ...state,
        running: [...state.running, action.payload],
        executionOrder: [...state.executionOrder, action.payload],
      };
    }

    case 'MINIMIZE_PROCESS': {
      const running = map(
        ifElse(pipe(prop('id'), equals(action.payload)), assoc('minimized', true), identity),
        state.running
      );

      return { ...state, running };
    }

    case 'CLOSE_PROCESS': {
      const running = reject(pipe(prop('id'), equals(action.payload)), state.running);

      return { ...state, running };
    }

    default:
      return state;
  }
}

export const startProcess = (id, name, icon) => ({ type: 'START_PROCESS', payload: { id, name, icon } });
export const minimizeProcess = (id) => ({ type: 'MINIMIZE_PROCESS', payload: id });
export const maximizeProcess = (id) => ({ type: 'MAXIMIZE_PROCESS', payload: id });
export const closeProcess = (id) => ({ type: 'CLOSE_PROCESS', payload: id });
export const focusProcess = (id) => ({ type: 'FOCUS_PROCESS', payload: id });

export const getRunningProcesses = (state) => state.processes.running;
export const getRunningProcessesInOrder = (state) => state.processes.executionOrder;
export const isProcessMinimized = (id) =>
  pipe(
    prop('processes'),
    prop('running'),
    find((process) => equals(id, process.id)),
    propOr(false, 'minimized')
  );
