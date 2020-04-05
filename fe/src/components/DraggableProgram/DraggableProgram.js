import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Rnd } from 'react-rnd';
import { isProcessMinimized, isProcessMaximized } from 'store/ducks/processes';

import { DraggableProgramStyled } from './DraggableProgram.styled';
import Header from './Header';
import useRnd from './useRnd';

export default function DraggableProgram({ process, name, children, window }) {
  const isMinimized = useSelector(isProcessMinimized(process.id));
  const isMaximized = useSelector(isProcessMaximized(process.id));
  const rnd = useRnd(window, isMaximized);

  return (
    <Rnd {...rnd} dragHandleClassName="header" minWidth="300" minHeight="300">
      <DraggableProgramStyled isMinimized={isMinimized} isMaximized={isMaximized}>
        <Header process={process} programName={name} />
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
