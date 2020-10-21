import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom';
import { useParams } from 'react-router';
import './artist_page.css';
import Discography from '../discography/discography';

const ArtistPage = () => {
  let initialArtist = [
    { id: 0, name: '', origin: '', genres: '', years_active: '', associated_acts: '', members: [] },
  ];
  let artistName;
  let imgSrc;
  const { name } = useParams();
  const [bio, setBio] = useState();
  const [artist, setArtist] = useState(initialArtist);

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
    let settings = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    };
    let fetchRes = await fetch(`http://localhost:8080/artist/${artistName}/bio`, settings);
    let resJson = await fetchRes.json();
    setBio(resJson);
  };

  const fetchArtist = async () => {
    let settings = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    };
    let fetchRes = await fetch(`http://localhost:8080/artist/${artistName}`, settings);
    let resJson = await fetchRes.json();
    setArtist([resJson]);
  };

  useEffect(() => {
    fetchBio();
    fetchArtist();
  }, []);

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
        <div className="bio">{bio}</div>
      </div>
      <div className="artist_details">
        <div className="artist_details_head">
          <span className="artist_details_subhead">ORIGIN</span>
          <div className="artist_details_data">{artist[0].origin}</div>
        </div>
        <div className="artist_details_head">
          <span className="artist_details_subhead">GENRES</span>
          <div className="artist_details_data">{artist[0].genres}</div>
        </div>
        <div className="artist_details_head">
          <span className="artist_details_subhead">YEARS ACTIVE</span>
          <div className="artist_details_data">{artist[0].years_active}</div>
        </div>
        <div className="artist_details_head">
          <span className="artist_details_subhead">ASSOCIATED ACTS</span>
          <div className="artist_details_data">{artist[0].associated_acts}</div>
        </div>
        <div className="artist_details_head">
          <span className="artist_details_subhead">MEMBERS</span>
          <div className="artist_details_data">{artist[0].members}</div>
        </div>
      </div>
      <Discography artist={artist[0]} />
    </div>
  );
};

export default ArtistPage;
