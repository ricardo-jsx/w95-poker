import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import DraggableProgram from 'components/DraggableProgram/index';
import { createNewGame, getGameByProcessId } from 'store/ducks/programs/solitaire';

export default function Solitaire({ process, ...programProps }: Props) {
  const dispatch = useDispatch();
  const game = useSelector(getGameByProcessId(process.id));

  useEffect(() => {
    dispatch(createNewGame(process.id));
  }, [process, dispatch]);

  console.log(game);

  return (
    <DraggableProgram name="Solitaire" process={process} {...programProps}>
      <div style={{ backgroundColor: 'red', flex: 1 }}>Hi From Solitaire</div>
    </DraggableProgram>
  );
}

interface Props {
  process: {
    id: string;
    name: string;
    icon: string;
  };
}

Solitaire.defaultProps = {
  initialContent: '',
} as Partial<Props>;
