import React from 'react';
import { useDispatch } from 'react-redux';

import * as Icons from 'components/Icon/index';
import ProgramsWrapper from 'programs/ProgramsWrapper';
import Notepad from 'programs/notepad/index';
import { content } from 'data/readme';

import { DesktopStyled } from './Desktop.styled';

export default function Desktop() {
  const dispatch = useDispatch();
  const handleOpenNotepad = () => dispatch({ type: 'OPEN_NOTEPAD', payload: { content } });

  return (
    <DesktopStyled>
      <Icons.Text name="README" onDoubleClick={handleOpenNotepad} />
      <Icons.Poker name="Poker" />
      <Icons.RecycleBin name="Recycle Bin" />

      <ProgramsWrapper>
        <Notepad />
      </ProgramsWrapper>
    </DesktopStyled>
  );
}
