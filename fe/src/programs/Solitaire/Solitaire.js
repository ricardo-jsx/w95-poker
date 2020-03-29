import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import DraggableProgram from 'components/DraggableProgram/index';
import { useDispatch } from 'react-redux';
import { createNewGame } from 'store/programs/solitaire';

export default function Solitaire({ process }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(createNewGame(process.id));
  }, [process, dispatch]);

  return (
    <DraggableProgram processId={process.id}>
      <DraggableProgram.Header process={process} />
    </DraggableProgram>
  );
}

Solitaire.propTypes = {
  process: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
  }).isRequired,
};

Solitaire.defaultProps = {
  initialContent: '',
};
