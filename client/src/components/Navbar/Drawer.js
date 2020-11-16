import React from 'react';
import './Drawer.css';

const Drawer = (props) => {
  let drawerClasses = ['drawer'];
  if (props.show) {
    drawerClasses = ['drawer open'];
  }

  return (
    <nav className={drawerClasses}>
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
    </nav>
  );
};

export default Drawer;
