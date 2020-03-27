import React from 'react';
import PropTypes from 'prop-types';

import { ActionStyled, HeaderStyled } from './DraggableProgram.styled';
import useProgramActions from 'hooks/useProcessActions';

import Minimize from './imgs/minimize.png';
import Maximize from './imgs/maximize.png';
import Close from './imgs/close.png';

export default function Header({ processId, processName, processIcon }) {
  const { minimize, maximize, close } = useProgramActions(processId);

  return (
    <HeaderStyled processIcon={processIcon} className="header">
      <span>{processName}</span>
      <div className="actions">
        <ActionStyled icon={Minimize} onClick={minimize} />
        <ActionStyled icon={Maximize} onClick={maximize} />
        <ActionStyled icon={Close} onClick={close} />
      </div>
    </HeaderStyled>
  );
}

Header.propTypes = {
  processId: PropTypes.string.isRequired,
  processName: PropTypes.string.isRequired,
  processIcon: PropTypes.string.isRequired,
};
