import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledMenu = styled.menu`
  display: flex;
  width: 100%;
  background: ${(props) => props.theme.silver};
`;

export default function Menu({ direction, children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <StyledMenu>
      <button>File</button>
      <button>Edit</button>
      <button>Search</button>
      <button>Help</button>
    </StyledMenu>
  );
}

Menu.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.element), PropTypes.element]).isRequired,
};
