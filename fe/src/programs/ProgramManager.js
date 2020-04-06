import React from 'react';

import useProgramManager from './useProgramManager';

export default function ProgramManager({ children }) {
  const { processes, runningPrograms, onStartProgram } = useProgramManager();

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
