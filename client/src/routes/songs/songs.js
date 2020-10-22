import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import './songs.css';

const Songs = () => {
  return (
    <div className="songs_parent">
      <div className="songs_header">Songs</div>
      <div className="artist_selection">
        <div className="songs_artist">BTS</div>
        <div className="songs_artist">Ariana Grande</div>
        <div className="songs_artist">Coldplay</div>
      </div>
    </div>
  );
};

export default Songs;
