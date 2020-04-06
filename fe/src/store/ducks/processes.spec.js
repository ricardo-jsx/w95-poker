import React from 'react';

import reducer, * as actions from './processes';

const INITIAL_STATE = {
  running: [
    { id: '123', name: 'Notepad', minimized: true },
    { id: '456', name: 'Poker' },
  ],
  executionOrder: [
    { id: '456', name: 'Poker' },
    { id: '123', name: 'Notepad' },
  ],
};

describe('store/ducks/processes', () => {
  it('should start a new process', () => {
    const state = reducer(INITIAL_STATE, actions.startProcess('789', 'Solietaire', 'base64'));
    expect(state).toMatchSnapshot();
  });

  it('should display a minimized process', () => {
    const state = reducer(INITIAL_STATE, actions.displayProcess('123'));
    expect(state).toMatchSnapshot();
  });

  it('should minimize a visible process', () => {
    const state = reducer(INITIAL_STATE, actions.minimizeProcess('456'));
    expect(state).toMatchSnapshot();
  });

  it('should maximize a visible process', () => {
    const state = reducer(INITIAL_STATE, actions.maximizeProcess('456'));
    expect(state).toMatchSnapshot();
  });

  it('should close a process', () => {
    const state = reducer(INITIAL_STATE, actions.closeProcess('123'));
    expect(state).toMatchSnapshot();
  });
});
