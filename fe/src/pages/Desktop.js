import React from 'react';

import * as Icons from '../components/Icon';
import { DesktopStyled } from './Desktop.styled';

export default function Desktop() {
  return (
    <DesktopStyled>
      <Icons.Text name="README" />
      <Icons.Poker name="Poker" />
      <Icons.RecycleBin name="Recycle Bin" />
    </DesktopStyled>
  );
}
