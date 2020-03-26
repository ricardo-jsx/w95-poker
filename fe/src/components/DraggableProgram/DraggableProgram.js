import React from 'react';
import PropTypes from 'prop-types';
import Draggable from 'react-draggable';
import { DraggableStyled } from './DraggableProgram.styled';

export default function DraggableProgram({ handle, children, defaultPosition }) {
  return (
    <Draggable handle={handle} defaultPosition={defaultPosition} grid={[25, 25]}>
      <DraggableStyled>{children}</DraggableStyled>
    </Draggable>
  );
}

DraggableProgram.propTypes = {
  handle: PropTypes.string,
  children: PropTypes.node.isRequired,
  defaultPosition: PropTypes.shape({
    x: PropTypes.number,
    y: PropTypes.number,
  }),
};

DraggableProgram.defaultProps = {
  handle: '.title',
  defaultPosition: {},
};
