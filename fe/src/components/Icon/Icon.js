import React from 'react';
import PropTypes from 'prop-types';

import { IconStyled } from './Icon.styled';

export default function Icon({ img, name }) {
  return (
    <IconStyled>
      <img src={img} />
      <span>{name}</span>
    </IconStyled>
  );
}

Icon.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
