import { Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Layout from '@components/layout/layout';
import React from 'react';

const Main = React.lazy(() => import('@pages/Main/Main'));
const PageA = React.lazy(() => import('@pages/PageA/PageA'));
const PageB = React.lazy(() => import('@pages/PageB/PageB'));
const PageC = React.lazy(() => import('@pages/PageC/PageC'));

const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Main />} />
        <Route path="/pageA" element={<PageA />} />
        <Route path="/pageB" element={<PageB />} />
        <Route path="/pageC" element={<PageC />} />
      </Route>
    </Routes>
  );
};

export default App;
