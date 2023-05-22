import AuthNav from 'components/AuthNav/AuthNav';
import Navigation from 'components/Navigation/Navigation';
import React from 'react';
import { AppHeader } from './AppBar.styled';

const AppBar = () => {
  return (
    <AppHeader>
      <Navigation />
      <AuthNav />
    </AppHeader>
    //  <header>
    //    <Navigation />
    //    <AuthNav />
    //  </header>
  );
};

export default AppBar;
