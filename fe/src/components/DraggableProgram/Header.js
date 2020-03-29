import React from 'react';
import PropTypes from 'prop-types';

import { ActionStyled, HeaderStyled } from './DraggableProgram.styled';
import useProgramActions from 'hooks/useProcessActions';

import Minimize from './imgs/minimize.png';
import Maximize from './imgs/maximize.png';
import Close from './imgs/close.png';

export default function Header({ process, programName }) {
  const { minimize, maximize, close } = useProgramActions(process.id);

  return (
    <HeaderStyled processIcon={process.icon} className="header">
      <span>
        {process.name} {programName && `- ${programName}`}
      </span>
      <div className="actions">
        <ActionStyled icon={Minimize} onClick={minimize} />
        <ActionStyled icon={Maximize} onClick={maximize} />
        <ActionStyled icon={Close} onClick={close} />
      </div>
    </HeaderStyled>
  );
}

Header.propTypes = {
  programName: PropTypes.string,
};
