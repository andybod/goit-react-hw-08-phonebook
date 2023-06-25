import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks';
import css from './Navigation.module.css';
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';
import MdPhone from '@mui/icons-material/Phone';
import Chip from '@mui/material/Chip';

function HomeIcon(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}
export const Navigation = () => {
  const { isLoggedIn } = useAuth();
  return (
    <nav style={{ display: 'flex', alignItems: 'center' }}>
      <NavLink className={css.link} to="/">
        <HomeIcon color="primary" />
      </NavLink>
      {isLoggedIn && (
        <NavLink className={css.link} to="/contacts">
          <Chip icon={<MdPhone />} label="Contacts" color="primary" />
        </NavLink>
      )}
    </nav>
  );
};
