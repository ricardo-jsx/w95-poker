const INITIAL_STATE = {
  running: [],
  maxIndex: 1,
};

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'START_PROCESS': {
      const { id, name, icon } = action.payload;
      const maxIndex = state.maxIndex + 1;

      return {
        ...state,
        maxIndex,
        running: [...state.running, { id, name, icon, maxIndex }],
      };
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
