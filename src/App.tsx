import React from 'react';
import { Route, Routes, Outlet } from 'react-router-dom';

import { Global, ThemeProvider, css } from '@emotion/react';

import { DefaultLayout } from 'src/components/layouts';

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
        <Route
          element={
            <DefaultLayout>
              <Outlet />
            </DefaultLayout>
          }
        >
          <Route path="/" element={<MainPage />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
};
