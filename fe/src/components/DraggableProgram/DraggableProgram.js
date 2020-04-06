import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { Rnd } from 'react-rnd';
import { isProcessMinimized, isProcessMaximized, displayProcess } from 'store/ducks/processes';

import { DraggableProgramStyled } from './DraggableProgram.styled';
import Header from './Header';
import useRnd from './useRnd';

export default function DraggableProgram({ process, name, children, window, index }) {
  const isMinimized = useSelector(isProcessMinimized(process.id));
  const isMaximized = useSelector(isProcessMaximized(process.id));
  const dispatch = useDispatch();
  const rndProps = useRnd(window, isMaximized);

  const onFocusProcess = () => dispatch(displayProcess(process.id));

  return (
    <Rnd
      {...rndProps}
      onDragStart={onFocusProcess}
      style={{ zIndex: index }}
      dragHandleClassName="header"
      minWidth="300"
      minHeight="300"
    >
      <DraggableProgramStyled isMinimized={isMinimized} isMaximized={isMaximized}>
        <Header process={process} programName={name} />
        <div onClick={onFocusProcess} style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
          {children}
        </div>
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
