import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { v4 } from 'uuid';

import { startProcess, getRunningProcesses } from 'store/ducks/processes';

export default function ProgramManager({ children }) {
  const dispatch = useDispatch();
  const [runningPrograms, setRunningPrograms] = useState({});
  const processes = useSelector(getRunningProcesses);

  useEffect(() => {
    // If true, there's a process that was closed somewhere else
    if (processes.length < Object.keys(runningPrograms).length) {
      const programs = processes.reduce((acc, { id }) => {
        return { ...acc, [id]: runningPrograms[id] };
      }, {});

      setRunningPrograms(programs);
    }
  }, [processes, runningPrograms]);

  const onStartProgram = (Component, { name, icon, ...props }) => {
    const id = v4();
    const newProgram = { Component, props, id };

    setRunningPrograms({ ...runningPrograms, [id]: newProgram });
    dispatch(startProcess(id, name, icon));
  };

  return (
    <>
      {children(onStartProgram)}
      {processes.map((process, i) => {
        const { Component, props } = runningPrograms[process.id];
        return <Component key={process.id} process={process} index={i} {...props} />;
      })}
    </>
  );
}

ProgramManager.propTypes = {};
