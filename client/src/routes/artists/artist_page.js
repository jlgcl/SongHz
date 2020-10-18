import React, { useEffects, useState } from 'react';
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom';
import { useParams } from 'react-router';
import './artist_page.css';

const ArtistPage = () => {
  const { name } = useParams();
  const { bio, setBio } = useState();

  let artistName;
  let imgSrc;

  switch (name) {
    case 'bts':
      artistName = 'BTS';
      imgSrc = require('../../components/assets/bts_main.png');
      break;
    case 'ariana_grande':
      artistName = 'Ariana Grande';
      imgSrc = require('../../components/assets/ag_main.jpg');
      break;
    case 'coldplay':
      artistName = 'Coldplay';
      imgSrc = require('../../components/assets/coldplay_main.jpg');
      break;
  }

  const fetchBio = async () => {
    /// STATUS: CREATE FETCH FOR BIO ///
  };

  return (
    <div className="artist_page" id={artistName}>
      <div className="artist_head" id={artistName}>
        <h1 className="artist_top_title" id={artistName}>
          {artistName}
        </h1>
      </div>
      <div className="artist_profile_portrait">
        <div className="artist_portrait">
          <img className="artist_img" src={imgSrc} />
        </div>
      </div>
      <div className="artist_info">
        <span className="artist_about_us">ABOUT</span>
        <div className="bio">placeholder</div>
      </div>
    </div>
  );
};

export default ArtistPage;
