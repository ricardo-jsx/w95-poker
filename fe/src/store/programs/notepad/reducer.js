const INITIAL_STATE = {
  content: '',
  isOpen: false,
};

export default function reducer(state = INITIAL_STATE, action) {
  console.log(action);
  switch (action.type) {
    case 'OPEN_NOTEPAD': {
      return { ...state, isOpen: true, content: action.payload.content };
    }

    default:
      return state;
  }
}

export const isNotepadOpen = (state) => state.programs.notepad.isOpen;
