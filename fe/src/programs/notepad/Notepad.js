import React from 'react';
import PropTypes from 'prop-types';

import { NotepadStyled } from './Notepad.styled';
import DraggableProgram from 'components/DraggableProgram/index';

export default function Notepad({ initialContent, process }) {
  return (
    <DraggableProgram processId={process.id}>
      <DraggableProgram.Header process={process} programName={Notepad.name} />
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
};

Notepad.defaultProps = {
  initialContent: '',
};
