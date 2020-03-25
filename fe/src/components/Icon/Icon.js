import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { IconStyled } from './Icon.styled';

export default function Icon({ img, name, renderProgram }) {
  const [isProgramOpen, setIsProgramOpen] = useState(false);

  return (
    <IconStyled onDoubleClick={() => setIsProgramOpen(true)}>
      <img src={img} alt="Windows Icon" />
      <span onMouseDown={(e) => e.preventDefault()}>{name}</span>

      {isProgramOpen && renderProgram()}
    </IconStyled>
  );
}

Icon.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  renderProgram: PropTypes.func.isRequired,
};
