import React from 'react';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      Layout
      <p>header</p>
      <Outlet></Outlet>
    </div>
  );
};

export default Layout;
