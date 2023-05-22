import AuthNav from 'components/AuthNav/AuthNav';
import Navigation from 'components/Navigation/Navigation';
import React from 'react';

const AppBar = () => {
  return (
    <header>
      <Navigation />
      <AuthNav />
    </header>
  );
};

export default AppBar;
