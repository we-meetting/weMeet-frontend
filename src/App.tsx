import React from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';

import { Global, ThemeProvider, css } from '@emotion/react';

import { lightTheme, globalStyle } from './styles';
import { MainPage } from './pages';

export const App: React.FC = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <Global
        styles={[
          globalStyle,
          css`
            color: ${lightTheme.default};
            background-color: ${lightTheme.background};
          `,
        ]}
      />
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </ThemeProvider>
  );
};
