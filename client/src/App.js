import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import Carousel from './components/Carousel/Carousel.js';
import Navbar from './components//Navbar/Navbar.js';
import Drawer from './components/Navbar/Drawer.js';
import Backdrop from './components/Backdrop/Backdrop';
import Footer from './components/Footer/Footer';
import Artists from './routes/artists/artists';
import Songs from './routes/songs/songs';
import Songwriters from './routes/songwriters/songwriters';

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
        <Router>
          <Switch>
            <Route exact path="/">
              <Carousel />
            </Route>
            <Route path="/artists">
              <Artists />
            </Route>
            <Route path="/songwriters">
              <Songwriters />
            </Route>
            <Route path="/songs">
              <Songs />
            </Route>
            <Route path="/song_selector"></Route>
          </Switch>
        </Router>
      </main>
      <Footer />
    </div>
  );
}

export default App;
