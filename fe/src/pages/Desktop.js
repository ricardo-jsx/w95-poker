import React from 'react';

import * as Icons from 'components/Icon/index';
import Notepad from 'programs/notepad/index';
import { readme } from 'data/readme';

import { DesktopStyled } from './Desktop.styled';

export default function Desktop() {
  return (
    <DesktopStyled>
      <Icons.Text name="README" renderProgram={() => <Notepad initialContent={readme.content} />} />
      <Icons.Poker name="Poker" />
      <Icons.RecycleBin name="Recycle Bin" />
    </DesktopStyled>
  );
}
