import React from 'react';
import PropTypes from 'prop-types';
import Draggable from 'react-draggable';
import { DraggableProgramStyled } from './DraggableProgram.styled';

export default function DraggableProgram({ handle, children, defaultPosition }) {
  return (
    <Draggable handle={handle} defaultPosition={defaultPosition} grid={[25, 25]}>
      <DraggableProgramStyled>{children}</DraggableProgramStyled>
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
  handle: '.header',
  defaultPosition: {},
};
