import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';

import { isProcessMinimized, minimizeProcess, displayProcess } from 'store/ducks/processes';
import { ProcessStyled } from './Taskbar.styled';

export default function Process({ process }) {
  const isMinimized = useSelector(isProcessMinimized(process.id));
  const dispatch = useDispatch();

  const toggleProcess = () =>
    isMinimized ? dispatch(displayProcess(process.id)) : dispatch(minimizeProcess(process.id));

  return (
    <ProcessStyled processIcon={process.icon} onClick={toggleProcess} isMinimized={isMinimized}>
      {process.name}
    </ProcessStyled>
  );
}

Process.propTypes = {
  process: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
  }).isRequired,
};
