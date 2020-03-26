import { useDispatch } from 'react-redux';
import { minimizeProcess, closeProcess, maximizeProcess, focusProcess } from 'store/ducks/processes';

export default function useProgramActions(processId) {
  const dispatch = useDispatch();

  const minimize = () => dispatch(minimizeProcess(processId));
  const maximize = () => dispatch(maximizeProcess(processId));
  const close = () => dispatch(closeProcess(processId));
  const focus = () => dispatch(focusProcess(processId));

  return {
    minimize,
    maximize,
    close,
    focus,
  };
}
