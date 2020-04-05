import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledMenu = styled.ul`
  display: flex;
  width: 100%;
  background: ${(props) => props.theme.silver};
`;

export default function Menu({ direction, children }) {
  const [open, setOpen] = useState(-1);

  return (
    <StyledMenu>
      {React.Children.map(children, (child, i) => {
        return React.cloneElement(child, {
          root: true,
          parentOffset: { x: 0, y: 26 },
          open: i === open,
          onClick() {
            setOpen(i);
          },
        });
      })}
    </StyledMenu>
  );
}

Menu.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.element), PropTypes.element]).isRequired,
};
