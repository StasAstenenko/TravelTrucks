import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';
import clsx from 'clsx';

const isActive = ({ isActive }) => {
  return clsx(css.navLink, isActive && css.active);
};

const Navigation = () => {
  return (
    <>
      <NavLink to='/' className={isActive}>
        Home
      </NavLink>
      <NavLink to='/catalog' className={isActive}>
        Catalog
      </NavLink>
    </>
  );
};

export default Navigation;
