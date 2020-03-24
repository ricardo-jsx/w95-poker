import React from 'react';
import PropTypes from 'prop-types';

import { IconStyled } from './Icon.styled';

export default function Icon({ img, name, onDoubleClick }) {
  return (
    <IconStyled onDoubleClick={onDoubleClick}>
      <img src={img} alt="Windows Icon" />
      <span onMouseDown={(e) => e.preventDefault()}>{name}</span>
    </IconStyled>
  );
}

Icon.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onDoubleClick: PropTypes.func,
};

Icon.defaultProps = {
  onDoubleClick() {
    console.log('Default Double Click');
  },
};
