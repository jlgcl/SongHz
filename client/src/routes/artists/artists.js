import React, { useEffects, useState } from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import './artists.css';
import ArtistsHome from './artists_home';

function Artists() {
  return (
    <div className="artists-parent">
      <Router>
        <Route exact path="/artists">
          <ArtistsHome />
        </Route>
      </Router>
    </div>
  );
}

export default Artists;
