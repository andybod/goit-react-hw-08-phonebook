import AppBar from 'components/AppBar/AppBar';
// import HomePage from 'pages/HomePage';
import React from 'react';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <AppBar />
      <Outlet />
    </>
  );
};

export default Layout;
