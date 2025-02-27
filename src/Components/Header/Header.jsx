import { NavLink } from 'react-router-dom';
import { ThemeSwitch } from '../../Components';
import { useSelector } from 'react-redux';

import logo from '../../Assets/img/Cloud9-x1000.png';

import styles from './Header.module.scss';

function Header() {
  const theme = useSelector((state) => state.theme);

  return (
    <nav className={styles[`${theme}-theme`]}>
      <div className={styles.container}>
        <ul className={styles['nav-items']}>
          <ThemeSwitch />
          <li>
            <NavLink to="/" exact={true} activeClassName={styles.active}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" activeClassName={styles.active}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/favourites" activeClassName={styles.active}>
              Locations
            </NavLink>
          </li>
          <li>
            <NavLink to="/feedback" activeClassName={styles.active}>
              Feedback
            </NavLink>
          </li>
          <NavLink to="/" exact={true}>
            <img src={logo} width="90" height="90" alt="Cloud9 logo" className={styles.logo} />
          </NavLink>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
