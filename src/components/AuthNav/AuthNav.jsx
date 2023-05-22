import React from 'react';
import { NavLink } from 'react-router-dom';

const AuthNav = () => {
  return (
    <div>
      <NavLink>Sing Up</NavLink>
      <NavLink>Sing In</NavLink>
    </div>
  );
};

export default AuthNav;
