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

  const handleItemClick = (itemOnClick, index) => () => {
    setOpen(open === index ? -1 : index);
    itemOnClick();
  };

  return (
    <StyledMenu>
      {React.Children.map(children, (child, i) => {
        return React.cloneElement(child, {
          root: true,
          open: i === open,
          onClick: handleItemClick(child.props.onClick, i),
        });
      })}
    </StyledMenu>
  );
}

Menu.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.element), PropTypes.element]).isRequired,
};
