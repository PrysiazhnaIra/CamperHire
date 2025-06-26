import { NavLink } from 'react-router-dom';
import css from './Header.module.css';
import sprite from '../../img/icons.svg';
import clsx from 'clsx';

interface HeaderProps {}

interface BuildLinkClassProps {
  isActive: boolean;
}

const buildLinkClass = ({ isActive }: BuildLinkClassProps) => {
  return clsx(css.link, isActive && css.active);
};

export default function Header({}: HeaderProps) {
  return (
    <nav className={css.block}>
      <NavLink to="/" className={css.linkLogo}>
        <svg className={css.logo} width="136" height="16">
          <use href={`${sprite}#icon-logo`} />
        </svg>
      </NavLink>
      <div className={css.blockLinks}>
        <NavLink to="/" className={buildLinkClass}>
          Home
        </NavLink>
        <NavLink to="/catalog" className={buildLinkClass}>
          Catalog
        </NavLink>
      </div>
    </nav>
  );
}
