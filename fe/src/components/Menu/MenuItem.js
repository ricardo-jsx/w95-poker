import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledItem = styled.li`
  display: flex;
  align-items: center;
  background: ${(props) => props.theme.silver};
  cursor: default;
  position: relative;
  border-bottom: ${(props) => (props.root ? 'none' : '1px ridge #908f8f')};

  > span {
    flex: 1;
    margin: 0 4px;
    padding: 4px;
    user-select: none;
  }

  > span:hover {
    background: ${(props) => props.theme.darkBlue};
    color: ${(props) => props.theme.white};
  }

  ul {
    position: absolute;
    top: ${(props) => props.listOffset.y}px;
    left: ${(props) => props.listOffset.x}px;
    width: max-content;
  }
`;

export default function MenuItem({ root, label, open, onClick, children, parentOffset }) {
  return (
    <StyledItem role="button" root={root} listOffset={parentOffset} onClick={onClick}>
      <span>{label}</span>
      {open && <ul>{children}</ul>}
    </StyledItem>
  );
}

MenuItem.propTypes = {
  root: PropTypes.bool,
  onClick: PropTypes.func,
  parentOffset: PropTypes.shape({
    x: PropTypes.number,
    y: PropTypes.number,
  }),
};

MenuItem.defaultProps = {
  root: false,
  onClick() {},
  parentOffset: { x: 0, y: 0 },
};
