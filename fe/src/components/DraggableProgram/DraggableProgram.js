import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Rnd } from 'react-rnd';

import { DraggableProgramStyled } from './DraggableProgram.styled';

import { isProcessMinimized, isProcessMaximized } from 'store/ducks/processes';
import useRnd from './useRnd';

export default function DraggableProgram({ processId, children, window }) {
  const isMinimized = useSelector(isProcessMinimized(processId));
  const isMaximized = useSelector(isProcessMaximized(processId));
  const rnd = useRnd(window, isMaximized);

  return (
    <Rnd {...rnd} dragHandleClassName="header">
      <DraggableProgramStyled isMinimized={isMinimized} isMaximized={isMaximized}>
        {children}
      </DraggableProgramStyled>
    </Rnd>
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
