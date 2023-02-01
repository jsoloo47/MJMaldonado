import React from 'react';

import { ReactComponent as Logo } from '../../../assets/logo.svg';
import MobileNav from '../MobileNav/MobileNav';

import './styles.css';

function NavBar() {
  return (
    <nav className="navbar_main_container">
      <header className="navbar_logo">
        <a href="/" className="navbar_logo_container">
          <Logo />
          <h1 className="navbar_logo_name">MELANIE MALDONADO</h1>
        </a>
      </header>
      <MobileNav />
      <div className="navbar_menu_container">
        <ul className="navbar_menu_container_list">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/#project-list">Projects</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
