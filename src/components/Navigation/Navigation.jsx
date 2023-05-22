import React from 'react';
import { NavLink } from 'react-router-dom';
// import { Logo } from './Navigation.styled';

const Navigation = () => {
  return (
    <nav>
      {/* <Logo to="/">Home</Logo> */}
      <NavLink to="/">Home</NavLink>
    </nav>
  );
};

export default Navigation;
