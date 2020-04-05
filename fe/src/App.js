import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';

import Desktop from './pages/Desktop';
import Taskbar from './components/Taskbar';

import GlobalFonts from 'fonts/fonts';
import store from './store';

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
  white: '#FFF',
  teal: '#008080',
  silver: '#c0c0c0',
  darkBlue: '#0000AA',
};

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalFonts />
        <GlobalStyle />
        <main style={{ height: '100vh', width: '100vw', display: 'flex', flexDirection: 'column' }}>
          <Desktop />
          <Taskbar />
        </main>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
