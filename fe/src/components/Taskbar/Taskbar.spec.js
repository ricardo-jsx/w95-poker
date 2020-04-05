import React from 'react';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';

import processes from 'store/ducks/processes';

import Taskbar from './Taskbar';

function renderWithRedux(ui, initialState) {
  const reducer = combineReducers({ processes });
  const store = createStore(reducer, initialState);

  return { ...render(<Provider store={store}>{ui}</Provider>), store };
}

describe('components/Taskbar', () => {
  it('should render all processes in order', () => {
    const pA = { id: '123', name: 'Process A', minimized: true };
    const pB = { id: '456', name: 'Process B', minimized: false };

    const INITIAL_STATE = {
      processes: {
        executionOrder: [pA, pB],
        running: [pB, pA],
      },
    };

    const { getAllByRole } = renderWithRedux(<Taskbar />, INITIAL_STATE);
    expect(getAllByRole('button')).toHaveLength(2);
    expect(getAllByRole('button')[0]).toHaveTextContent('Process A');
    expect(getAllByRole('button')[1]).toHaveTextContent('Process B');
  });
});
