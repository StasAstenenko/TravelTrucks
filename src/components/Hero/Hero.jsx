import { NavLink } from 'react-router-dom';
import css from './Hero.module.css';

const Hero = () => {
  return (
    <>
      <h2 className={css.title}>Campers of your dreams</h2>
      <p className={css.desc}>
        You can find everything you want in our catalog
      </p>
      <NavLink to='/catalog' className={css.nav}>
        View Now
      </NavLink>
    </>
  );
};

export default Hero;
