import React, { useEffect, useState } from 'react';
import './App.css';
import Carousel from './components/Carousel/Carousel.js';
import Navbar from './components//Navbar/Navbar.js';
import Drawer from './components/Navbar/Drawer.js';
import Backdrop from './components/Backdrop/Backdrop';
import Footer from './components/Footer/Footer';

function App() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const drawerToggleClickHandler = () => {
    setDrawerOpen((prevState) => !prevState);
  };

  const backdropClickHandler = () => {
    setDrawerOpen(false);
  };

  let backdrop;

  if (drawerOpen) {
    backdrop = <Backdrop click={backdropClickHandler} />;
  }

  // Not executing drawerToggleClickHandler here using '()'
  return (
    <div className="App" style={{ height: '100%' }}>
      <Navbar drawerClickHandler={drawerToggleClickHandler} />
      <Drawer show={drawerOpen} />
      {backdrop}
      <main>
        <Carousel />
      </main>
      <Footer />
    </div>
  );
}

export default App;
