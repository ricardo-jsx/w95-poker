import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 } from 'uuid';
import { startProcess, getRunningProcesses } from 'store/ducks/processes';

export default function useProgramManager() {
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

  return { processes, runningPrograms, onStartProgram };
}
