import React from 'react';

import { ReactComponent as Logo } from '../../../assets/logo.svg';

import './styles.css';

function NavBar() {
  return (
    <nav className="navbar_main_container">
      <header className="navbar_logo_container">
        <a href="#">
          <Logo />
        </a>
        <h1 className="navbar_logo_container_firstLast">MELANIE MALDONADO</h1>
      </header>
      <div className="navbar_menu_container">
        <ul className="navbar_menu_container_list">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Projects</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
