import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { v4 } from 'uuid';

import { startProcess } from 'store/ducks/processes';

export default function useProcess(name, icon) {
  const dispatch = useDispatch();
  const [processId] = useState(v4());

  useEffect(() => {
    dispatch(startProcess(processId, name, icon));

    //TODO: CREATE THIS ACTION
    return () => dispatch({ type: 'STOP_PROCESS', payload: processId });
  }, [processId, name, icon, dispatch]);

  return { processId };
}
