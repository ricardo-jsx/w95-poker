import React from 'react';
import PropTypes from 'prop-types';

import { IconStyled } from './Icon.styled';

export default function Icon({ img, name, onStartProgram }) {
  const iconImg = <img src={img} alt="Windows Icon" />;

  return (
    <IconStyled onDoubleClick={() => onStartProgram({ icon: img, name })}>
      {iconImg}
      <span onMouseDown={(e) => e.preventDefault()}>{name}</span>
    </IconStyled>
  );
}

Icon.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onStartProgram: PropTypes.func.isRequired,
};
