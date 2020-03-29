import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Draggable from 'react-draggable';
import { DraggableProgramStyled } from './DraggableProgram.styled';
import { useSelector } from 'react-redux';
import { isProcessMinimized, isProcessMaximized } from 'store/ducks/processes';

// This hook will change when the resize functionality becomes implemented
function usePosition(isMaximized, window) {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (isMaximized) setPosition({ x: 0, y: 0 });
  }, [isMaximized]);

  useEffect(() => {
    setPosition({ x: window.innerWidth / 2 - 250, y: window.innerHeight / 2 - 250 });
  }, [window]);

  const onDragStop = (_, data) => setPosition({ x: data.lastX, y: data.lastY });

  return { position, onDragStop };
}

export default function DraggableProgram({ processId, children, window }) {
  const isMinimized = useSelector(isProcessMinimized(processId));
  const isMaximized = useSelector(isProcessMaximized(processId));
  const { position, onDragStop } = usePosition(isMaximized, window);

  return (
    <Draggable handle=".header" position={position} onStop={onDragStop}>
      <DraggableProgramStyled isMinimized={isMinimized} isMaximized={isMaximized}>
        {children}
      </DraggableProgramStyled>
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
  window: PropTypes.shape({
    innerWidth: PropTypes.number,
    innerHeigth: PropTypes.number,
  }),
};

DraggableProgram.defaultProps = {
  defaultPosition: {},
  window,
};
