import React from 'react';
import { useSelector } from 'react-redux';
import { getProcesses } from 'store/ducks/processes';

import Process from './Process';
import { TaskbarStyled } from './Taskbar.styled';

export default function Taskbar() {
  const processes = useSelector(getProcesses);

  return (
    <TaskbarStyled>
      {processes.map((process) => (
        <Process process={process} key={process.id} />
      ))}
    </TaskbarStyled>
  );
}
