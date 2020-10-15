import React, { useEffect, useState } from 'react';
import './Navbar.css';
import DrawerToggle from './DrawerToggle.js';

const Navbar = (props) => (
  <header className="navbar">
    <nav className="navbar_navigation">
      <div className="navbar_toggle-button">
        <DrawerToggle click={props.drawerClickHandler} />
      </div>
      <div className="navbar_logo">
        <a href="/">SongHz</a>
      </div>
      <div className="spacer"></div>
      <div className="navbar_navigation-items">
        <ul>
          <li>
            <a href="/artists">Artists</a>
          </li>
          <li>
            <a href="#">Songwriters</a>
          </li>
          <li>
            <a href="#">Songs</a>
          </li>
          <li>
            <a href="#">Song Selector</a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
);

export default Navbar;
