import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import './artists.css';
import ArtistsHome from './artists_home';

function Artists() {
  return (
    <div className="artists-parent">
      <ArtistsHome />
    </div>
  );
}

export default Artists;
