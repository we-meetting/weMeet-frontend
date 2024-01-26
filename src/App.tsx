import React, { useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ToastContainer, toast } from 'react-toastify';

import { Global, Theme, ThemeProvider } from '@emotion/react';

import { lightTheme, globalStyle } from './styles';
import { ModalProvider } from './providers';
import { Router } from './Router';

import 'react-toastify/dist/ReactToastify.css';

const client = new QueryClient();

export const App: React.FC = () => {
  const [theme] = useState<Theme>(lightTheme);

  return (
    <QueryClientProvider client={client}>
      <ThemeProvider theme={theme}>
        <Global styles={[globalStyle]} />
        <ToastContainer position="top-right" theme="light" autoClose={3000} closeButton={false} />
        <ModalProvider>
          <Router />
        </ModalProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
};
