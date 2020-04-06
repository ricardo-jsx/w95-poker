import { find, map, equals, prop, ifElse, pipe, identity, propOr, reject, merge, __ } from 'ramda';

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

    case 'DISPLAY_PROCESS': {
      const hasSameId = pipe(prop('id'), equals(action.payload));

      const process = find(hasSameId, state.running);
      const otherProcesses = reject(hasSameId, state.running);
      const running = [...otherProcesses, { ...process, minimized: false }];

      return { ...state, running };
    }

    case 'MINIMIZE_PROCESS': {
      const hasSameId = pipe(prop('id'), equals(action.payload));

      const process = find(hasSameId, state.running);
      const otherProcesses = reject(hasSameId, state.running);
      const running = [{ ...process, minimized: true }, ...otherProcesses];

      return { ...state, running };
    }

    case 'MAXIMIZE_PROCESS': {
      const running = map(
        ifElse(pipe(prop('id'), equals(action.payload)), merge(__, { maximized: true, minimized: false }), identity),
        state.running
      );

      return { ...state, running };
    }

    case 'CLOSE_PROCESS': {
      const rejectById = reject(pipe(prop('id'), equals(action.payload)));

      const running = rejectById(state.running);
      const executionOrder = rejectById(state.executionOrder);

      return { ...state, running, executionOrder };
    }

    default:
      return state;
  }
}

export const startProcess = (id, name, icon) => ({ type: 'START_PROCESS', payload: { id, name, icon } });
export const displayProcess = (id) => ({ type: 'DISPLAY_PROCESS', payload: id });
export const minimizeProcess = (id) => ({ type: 'MINIMIZE_PROCESS', payload: id });
export const maximizeProcess = (id) => ({ type: 'MAXIMIZE_PROCESS', payload: id });
export const closeProcess = (id) => ({ type: 'CLOSE_PROCESS', payload: id });
export const focusProcess = (id) => ({ type: 'FOCUS_PROCESS', payload: id });

export const getRunningProcesses = (state) => state.processes.running;
export const getRunningProcessesInOrder = (state) => state.processes.executionOrder;
export const isProcessMinimized = getProcessProperty('minimized', false);
export const isProcessMaximized = getProcessProperty('maximized', false);

function getProcessProperty(property, or) {
  return (processId) =>
    pipe(
      prop('processes'),
      prop('running'),
      find((process) => equals(processId, process.id)),
      propOr(or, property)
    );
}
