import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import * as R from 'ramda';
import {
  getRunningProcessesInOrder,
  getRunningProcesses,
  displayProcess,
  minimizeProcess,
} from 'store/ducks/processes';

import Process from './Process';

const StyledTaskbar = styled.footer`
  display: flex;
  align-items: center;
  background-color: ${(props) => props.theme.silver};
  height: 30px;
  width: 100vw;
  padding: 0 2px;
  border-top: ridge 4px white;
  z-index: 999;
  padding-left: 80px;
`;

export default function Taskbar() {
  const dispatch = useDispatch();
  const processes = useSelector(getRunningProcessesInOrder);
  const focusedProcessId = R.pipe(useSelector, R.last, R.prop('id'))(getRunningProcesses);

  const onDisplayProcess = (processId) => dispatch(displayProcess(processId));
  const onMinimizeProcess = (processId) => dispatch(minimizeProcess(processId));

  return (
    <StyledTaskbar>
      {processes.map((process) => (
        <Process
          key={process.id}
          process={process}
          isFocused={process.id === focusedProcessId}
          displayProcess={onDisplayProcess}
          minimizeProcess={onMinimizeProcess}
        />
      ))}
    </StyledTaskbar>
  );
}
