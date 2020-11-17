import React, { useEffect, useState } from 'react';
import './Navbar.css';
import DrawerToggle from './DrawerToggle.js';

const Navbar = (props) => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = () => {
    // find current y-position
    const currentScrollPos = window.pageYOffset;

    // set state based on location info
    setVisible(
      (prevScrollPos > currentScrollPos && prevScrollPos - currentScrollPos > 70) ||
        currentScrollPos < 10
    );

    // set state to new scroll position
    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos, visible]);

  return (
    <div className="navbar" style={{ top: visible ? '0' : '-60px' }}>
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
              <a href="/songwriters">Songwriters</a>
            </li>
            <li>
              <a href="/song">Songs</a>
            </li>
            <li>
              <a href="/song_selector">Song Selector</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
