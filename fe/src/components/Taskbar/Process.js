import React from 'react';
import PropTypes from 'prop-types';

import { ProcessStyled } from './Taskbar.styled';

export default function Process({ process }) {
  return <ProcessStyled processIcon={process.icon}>{process.name}</ProcessStyled>;
}

Process.propTypes = {
  process: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
  }).isRequired,
};
