import React, { useEffect } from 'react';

import DraggableProgram from 'components/DraggableProgram/index';
import { useDispatch } from 'react-redux';
import { createNewGame } from 'store/ducks/programs/solitaire';

export default function Solitaire({ process, ...programProps }: Props) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(createNewGame(process.id));
  }, [process, dispatch]);

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
  index: number;
}

Solitaire.defaultProps = {
  initialContent: '',
} as Partial<Props>;
