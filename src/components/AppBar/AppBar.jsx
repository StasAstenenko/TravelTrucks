import Navigation from '../Navigation/Navigation';
import css from './AppBar.module.css';

const AppBar = () => {
  return (
    <header className={css.header}>
      <h1 className={css.title}>
        Travel<span className={css.secondWord}>Trucks</span>
      </h1>
      <nav className={css.navigation}>
        <Navigation />
      </nav>
    </header>
  );
};

export default AppBar;
