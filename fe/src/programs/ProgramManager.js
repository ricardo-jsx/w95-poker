import React, { useState, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { v4 } from 'uuid';

import { getRunningProcessesId, startProcess, getRunningProcesses } from 'store/ducks/processes';
import { reject, not, includes, pipe, prop, values, __, map } from 'ramda';

export default function ProgramManager({ children }) {
  const processes = useSelector(getRunningProcesses);
  const processesId = useSelector(getRunningProcessesId);
  const [runningPrograms, setRunningPrograms] = useState({});
  const dispatch = useDispatch();

  const onStartProgram = (Component, { name, icon, ...props }) => {
    const id = v4();
    const newProgram = { Component, props, id };

    setRunningPrograms({ ...runningPrograms, [id]: newProgram });
    dispatch(startProcess(id, name, icon));
  };

  const programs = useMemo(() => {
    const removeDeadProcesses = reject(pipe(prop('id'), pipe(includes(__, processesId), not)));

    const addProcessProps = map((obj) => {
      const process = processes.find((p) => p.id === obj.id);
      return { ...obj, process };
    });

    return pipe(values, removeDeadProcesses, addProcessProps)(runningPrograms);
  }, [processesId, runningPrograms, processes]);

  console.log(programs);

  return (
    <>
      {children(onStartProgram)}
      {programs.map(({ Component, props, process }) => (
        <Component {...props} process={process} />
      ))}
    </>
  );
}

ProgramManager.propTypes = {};
