import React from 'react';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { render, fireEvent } from '@testing-library/react';

import processes from 'store/ducks/processes';

import Process from './Process';

function renderWithRedux(ui, initialState) {
  const reducer = combineReducers({ processes });
  const store = createStore(reducer, initialState);

  return { ...render(<Provider store={store}>{ui}</Provider>), store };
}

describe('components/Taskbar/Process', () => {
  const process = { id: '123', name: 'Notepad', icon: 'base64...' };

  it('should display a minimized process', () => {
    const INITIAL_STATE = {
      processes: {
        running: [{ id: '123', minimized: true }],
      },
    };

    const displayProcess = jest.fn();
    const minimizeProcess = jest.fn();
    const { getByRole } = renderWithRedux(
      <Process process={process} displayProcess={displayProcess} minimizeProcess={minimizeProcess} />,
      INITIAL_STATE
    );

    fireEvent.click(getByRole('button'));
    expect(displayProcess).toHaveBeenCalled();
    expect(minimizeProcess).not.toHaveBeenCalled();
  });

  it('should minimize a process', () => {
    const INITIAL_STATE = {
      processes: {
        running: [{ id: '123', minimized: false }],
      },
    };

    const displayProcess = jest.fn();
    const minimizeProcess = jest.fn();
    const { getByRole } = renderWithRedux(
      <Process process={process} displayProcess={displayProcess} minimizeProcess={minimizeProcess} />,
      INITIAL_STATE
    );

    fireEvent.click(getByRole('button'));
    expect(displayProcess).not.toHaveBeenCalled();
    expect(minimizeProcess).toHaveBeenCalled();
  });
});
