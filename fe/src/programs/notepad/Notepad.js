import React from 'react';
import PropTypes from 'prop-types';
import DraggableProgram from 'components/DraggableProgram/index';
import { NotepadStyled } from './Notepad.styled';

export default function Notepad({ initialContent, name, iconImg, window }) {
  const x = window.innerWidth / 2 - 250;
  const y = window.innerHeight / 2 - 250;

  return (
    <DraggableProgram defaultPosition={{ x, y }}>
      <DraggableProgram.Title>
        {iconImg} <span>{name} - Notepad</span>
      </DraggableProgram.Title>
      <NotepadStyled>{initialContent}</NotepadStyled>
    </DraggableProgram>
  );
}

Notepad.propTypes = {
  initialContent: PropTypes.string,
  name: PropTypes.string.isRequired,
  iconImg: PropTypes.node,
  window: PropTypes.shape({
    innerWidth: PropTypes.number,
    innerHeigth: PropTypes.number,
  }),
};

Notepad.defaultProps = {
  initialContent: '',
  iconImg: null,
  window,
};
