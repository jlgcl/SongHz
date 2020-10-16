import React, { useEffects, useState } from 'react';
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom';
import './artists.css';
import ArtistPage from './artist_page';

const ArtistsHome = () => {
  return (
    <div className="artists">
      <div className="header">
        <h1 className="artist_title">Artists</h1>
      </div>
      <div className="main">
        <Router>
          {/* <div> *** STATUS: figure out route to artist pages; may need to move router to upper level
            <Switch>
              <Route exact path="/artists/:name" component={ArtistPage} />
            </Switch>
          </div> */}
          <Link className="artist_link" to="/artists/bts">
            <div className="artist_1">
              <span className="artist_name">BTS</span>
            </div>
          </Link>
          <Link className="artist_link" to="/artists/ariana_grande">
            <div className="artist_2">
              <span className="artist_name">Ariana Grande</span>
            </div>
          </Link>
          <Link className="artist_link" to="/artists/coldplay">
            <div className="artist_3">
              <span className="artist_name">Coldplay</span>
            </div>
          </Link>
        </Router>
      </div>
    </div>
  );
};

export default ArtistsHome;
