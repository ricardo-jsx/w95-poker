import React from 'react';
import PropTypes from 'prop-types';

import { NotepadStyled } from './Notepad.styled';
import DraggableProgram from 'components/DraggableProgram/index';
import useProcess from 'programs/hooks/useProcess';

export default function Notepad({ initialContent, name, iconSrc, window }) {
  const processName = `${name} - Notepad`;
  const x = window.innerWidth / 2 - 250;
  const y = window.innerHeight / 2 - 250;

  const { processId } = useProcess(processName, iconSrc);

  return (
    <DraggableProgram defaultPosition={{ x, y }} processId={processId}>
      <DraggableProgram.Header processName={processName} processIcon={iconSrc} processId={processId} />
      <NotepadStyled>{initialContent}</NotepadStyled>
    </DraggableProgram>
  );
}

Notepad.propTypes = {
  initialContent: PropTypes.string,
  name: PropTypes.string.isRequired,
  iconSrc: PropTypes.string,
  window: PropTypes.shape({
    innerWidth: PropTypes.number,
    innerHeigth: PropTypes.number,
  }),
};

Notepad.defaultProps = {
  initialContent: '',
  iconSrc: '',
  window,
};
