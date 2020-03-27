import React from 'react';
import PropTypes from 'prop-types';

import { ActionStyled, HeaderStyled } from './DraggableProgram.styled';

import Minimize from './imgs/minimize.png';
import Maximize from './imgs/maximize.png';
import Close from './imgs/close.png';

export default function Header({ processName, processIcon }) {
  return (
    <HeaderStyled processIcon={processIcon} className="header">
      <span>{processName}</span>
      <div className="actions">
        <ActionStyled icon={Minimize} />
        <ActionStyled icon={Maximize} />
        <ActionStyled icon={Close} />
      </div>
    </HeaderStyled>
  );
}

Header.propTypes = {
  processName: PropTypes.string.isRequired,
  processIcon: PropTypes.string.isRequired,
};
