import React from 'react';

import ProgramManager from 'programs/ProgramManager';
import * as Icons from 'components/Icon/index';
import Notepad from 'programs/Notepad/index';
import Solitaire from 'programs/Solitaire/index';
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
          <Icons.Solitaire name="Solitaire" onStartProgram={(props) => onStartProgram(Solitaire, props)} />
          <Icons.RecycleBin name="Recycle Bin" onStartProgram={() => console.log('Starting Recycle Bin')} />
        </DesktopStyled>
      )}
    </ProgramManager>
  );
}
