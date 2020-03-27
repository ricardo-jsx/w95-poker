import React from 'react';
import PropTypes from 'prop-types';

import { ActionStyled, HeaderStyled } from './DraggableProgram.styled';

import Minimize from './imgs/minimize.png';
import Maximize from './imgs/maximize.png';
import Close from './imgs/close.png';

export default function Header({ programName, programIcon }) {
  return (
    <HeaderStyled programIcon={programIcon} className="header">
      <span>{programName}</span>
      <div className="actions">
        <ActionStyled icon={Minimize} />
        <ActionStyled icon={Maximize} />
        <ActionStyled icon={Close} />
      </div>
    </HeaderStyled>
  );
}

Header.propTypes = {
  children: PropTypes.node.isRequired,
};
