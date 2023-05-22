import HomePage from 'pages/HomePage';
import React from 'react';

const Layout = () => {
  return (
    <>
      <HomePage />
      <Layout />
    </>
  );
};

export default Layout;
