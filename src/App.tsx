import React, { useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

import { Global, Theme, ThemeProvider } from '@emotion/react';

import { lightTheme, globalStyle } from './styles';
import { ModalProvider } from './providers';
import { Router } from './Router';

const client = new QueryClient();

export const App: React.FC = () => {
  const [theme] = useState<Theme>(lightTheme);

  return (
    <QueryClientProvider client={client}>
      <ThemeProvider theme={theme}>
        <Global styles={[globalStyle]} />
        <ModalProvider>
          <Router />
        </ModalProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
};
