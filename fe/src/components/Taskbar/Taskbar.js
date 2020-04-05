import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { getRunningProcessesInOrder, displayProcess, minimizeProcess } from 'store/ducks/processes';

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
  const processes = useSelector(getRunningProcessesInOrder);
  const dispatch = useDispatch();

  const onDisplayProcess = (processId) => dispatch(displayProcess(processId));
  const onMinimizeProcess = (processId) => dispatch(minimizeProcess(processId));

  return (
    <StyledTaskbar>
      {processes.map((process) => (
        <Process
          key={process.id}
          process={process}
          displayProcess={onDisplayProcess}
          minimizeProcess={onMinimizeProcess}
        />
      ))}
    </StyledTaskbar>
  );
}
