export default function reducer(state = [], action) {
  switch (action.type) {
    case 'START_PROCESS': {
      return [...state, action.payload];
    }

    default:
      return state;
  }
}

export function startProcess(id, name, icon) {
  return {
    type: 'START_PROCESS',
    payload: { id, name, icon },
  };
}

export const getProcesses = (state) => state.processes;
