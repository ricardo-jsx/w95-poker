import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

import Desktop from './pages/Desktop';
import Taskbar from './components/Taskbar';

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  *, *:before, *:after {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
  }
`;

const theme = {
  teal: '#008080',
  silver: '#c0c0c0',
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <main style={{ height: '100vh', width: '100vw', display: 'flex', flexDirection: 'column' }}>
        <Desktop />
        <Taskbar />
      </main>
    </ThemeProvider>
  );
}

export default App;
