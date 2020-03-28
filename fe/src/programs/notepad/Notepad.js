import React from 'react';
import PropTypes from 'prop-types';

import { NotepadStyled } from './Notepad.styled';
import DraggableProgram from 'components/DraggableProgram/index';

export default function Notepad({ initialContent, window, process }) {
  const x = window.innerWidth / 2 - 250;
  const y = window.innerHeight / 2 - 250;

  return (
    <DraggableProgram defaultPosition={{ x, y }} processId={process.id}>
      <DraggableProgram.Header process={process} programName={Notepad.name || 'TODO'} />
      <NotepadStyled>{initialContent}</NotepadStyled>
    </DraggableProgram>
  );
}

Notepad.propTypes = {
  initialContent: PropTypes.string,
  process: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
  }).isRequired,
  window: PropTypes.shape({
    innerWidth: PropTypes.number,
    innerHeigth: PropTypes.number,
  }),
};

Notepad.defaultProps = {
  initialContent: '',
  window,
};
