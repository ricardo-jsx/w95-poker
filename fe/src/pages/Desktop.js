import React from 'react';

import * as Icons from 'components/Icon/index';
import Notepad from 'programs/Notepad/index';
import { readme } from 'data/readme';

import { DesktopStyled } from './Desktop.styled';

export default function Desktop() {
  return (
    <DesktopStyled>
      <Icons.Text
        name="README"
        renderProgram={(iconImg) => <Notepad initialContent={readme.content} name="README" iconImg={iconImg} />}
      />
      <Icons.Poker name="Poker" />
      <Icons.RecycleBin name="Recycle Bin" />
    </DesktopStyled>
  );
}
