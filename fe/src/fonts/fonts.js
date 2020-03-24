import { createGlobalStyle } from 'styled-components';

import FSEX300 from './FSEX300.woff';

export default createGlobalStyle`
  @font-face {
      font-family: 'Fixedsys';
      src: url(${FSEX300}) format('woff');
      font-weight: 300;
      font-style: normal;
  }
`;
