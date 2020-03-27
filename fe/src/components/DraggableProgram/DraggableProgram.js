import React from 'react';
import PropTypes from 'prop-types';
import Draggable from 'react-draggable';
import { DraggableProgramStyled } from './DraggableProgram.styled';
import { useSelector } from 'react-redux';
import { isProcessMinimized } from 'store/ducks/processes';

export default function DraggableProgram({ processId, children, defaultPosition }) {
  const isMinimized = useSelector(isProcessMinimized(processId));

  return (
    <Draggable handle=".header" defaultPosition={defaultPosition} grid={[25, 25]} bounds={{ top: 0 }}>
      <DraggableProgramStyled isMinimized={isMinimized}>{children}</DraggableProgramStyled>
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
  defaultPosition: {},
};
