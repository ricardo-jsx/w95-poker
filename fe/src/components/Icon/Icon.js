import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledIcon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0.5rem;
  width: 80px;

  img {
    width: 32px;
    height: 32px;
    margin-bottom: 4px;
  }

  span {
    color: white;
    cursor: default;
  }
`;

export default function Icon({ img, name, onStartProgram }) {
  const iconImg = <img src={img} alt={`${name} icon`} />;

  return (
    <StyledIcon role="button" onDoubleClick={() => onStartProgram({ icon: img, name })}>
      {iconImg}
      <span onMouseDown={(e) => e.preventDefault()}>{name}</span>
    </StyledIcon>
  );
}

Icon.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onStartProgram: PropTypes.func.isRequired,
};
