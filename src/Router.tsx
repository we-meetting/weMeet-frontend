import React from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';

import { DefaultLayout } from './components';
import { MainPage, RecommendPage } from './pages';

export const Router: React.FC = () => {
  return (
    <Routes>
      <Route
        element={
          <DefaultLayout>
            <Outlet />
          </DefaultLayout>
        }
      >
        <Route path="/" element={<MainPage />} />
        <Route path="/recommend" element={<RecommendPage />} />
      </Route>
    </Routes>
  );
};
