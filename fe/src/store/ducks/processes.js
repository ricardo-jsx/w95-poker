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

    default:
      return state;
  }
}

export function startProcess(id, name, icon) {
  return { type: 'START_PROCESS', payload: { id, name, icon } };
}

export const getRunningProcesses = (state) => state.processes.running;
export const getRunningProcessesInOrder = (state) => state.processes.executionOrder;
