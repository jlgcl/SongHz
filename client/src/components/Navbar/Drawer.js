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
          <a href="#">Artists</a>
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
    </nav>
  );
};

export default Drawer;
