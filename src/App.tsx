import React, { useState } from 'react';

import { Global, Theme, ThemeProvider, css } from '@emotion/react';

import { lightTheme, globalStyle } from './styles';
import { ModalProvider } from './providers';
import { Router } from './Router';

export const App: React.FC = () => {
  const [theme] = useState<Theme>(lightTheme);

  return (
    <ThemeProvider theme={theme}>
      <Global styles={[globalStyle]} />
      <ModalProvider>
        <Router />
      </ModalProvider>
    </ThemeProvider>
  );
};
