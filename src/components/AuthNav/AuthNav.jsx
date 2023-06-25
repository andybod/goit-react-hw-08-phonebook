import { NavLink } from 'react-router-dom';
import css from './AuthNav.module.css';
import Button from '@mui/material/Button';
export const AuthNav = () => {
  return (
    <div>
      <NavLink className={css.link} to="/register">
        {({ isActive }) => (
          <Button variant={isActive ? 'contained' : 'outlined'}>
            Register
          </Button>
        )}
      </NavLink>

      <NavLink className={css.link} to="/login">
        {({ isActive }) => (
          <Button variant={isActive ? 'contained' : 'outlined'}>Log In</Button>
        )}
      </NavLink>
    </div>
  );
};
