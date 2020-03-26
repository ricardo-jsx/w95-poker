import React from 'react';
import PropTypes from 'prop-types';
import DraggableProgram from 'components/DraggableProgram/index';
import { NotepadStyled } from './Notepad.styled';
import useProcess from 'programs/hooks/useProcess';

export default function Notepad({ initialContent, name, iconSrc, window }) {
  const { processId } = useProcess(name, iconSrc);
  const x = window.innerWidth / 2 - 250;
  const y = window.innerHeight / 2 - 250;

  return (
    <DraggableProgram defaultPosition={{ x, y }}>
      <DraggableProgram.Title>
        <img src={iconSrc} alt={name} />
        <span>{name} - Notepad</span>
      </DraggableProgram.Title>
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
