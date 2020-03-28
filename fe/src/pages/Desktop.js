import React from 'react';

import ProgramManager from 'programs/ProgramManager';
import * as Icons from 'components/Icon/index';
import Notepad from 'programs/Notepad/index';
import { readme } from 'data/readme';

import { DesktopStyled } from './Desktop.styled';

export default function Desktop() {
  return (
    <ProgramManager>
      {(onStartProgram) => (
        <DesktopStyled>
          <Icons.Text
            name="README"
            onStartProgram={(props) => onStartProgram(Notepad, { ...props, initialContent: readme.content })}
          />
          <Icons.Poker name="Poker" />
          <Icons.RecycleBin name="Recycle Bin" />
        </DesktopStyled>
      )}
    </ProgramManager>
  );
}
