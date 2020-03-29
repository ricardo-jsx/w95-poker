import React from 'react';
import PropTypes from 'prop-types';

import DraggableProgram from 'components/DraggableProgram/index';

export default function Solitaire({ process }) {
  return (
    <DraggableProgram processId={process.id}>
      <DraggableProgram.Header process={process} />
      <p>Hello from Solitaire :)</p>
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
