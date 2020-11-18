import React, { useState, useRef, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import './songs.css';
import SongsSpec from './songs_spec';
import SongDetails from './song_details';

const Songs = () => {
  const activeEl_1 = useRef(null);
  const activeEl_2 = useRef(null);
  const activeEl_3 = useRef(null);

  const [activeArtist, setActiveArtist] = useState(null);
  const [selectedSong, setSelectedSong] = useState(null);
  const [songPhoto, setSongPhoto] = useState(null);
  const [renderDetails, setRenderDetails] = useState(false);

  const setSongCallback = (songName, songPhoto) => {
    setSelectedSong(songName);
    setSongPhoto(songPhoto);
  };

  const detailHandler = () => {
    if (selectedSong !== null) setRenderDetails(true);
  };
  const viewDetailHandler = (e) => {
    if (
      renderDetails &&
      e.target.className !== 'song_details' &&
      e.target.className !== 'song_details_photo' &&
      e.target.className !== 'song_details_info' &&
      e.target.className !== 'song_details_title' &&
      e.target.className !== 'song_details_artist' &&
      e.target.className !== 'song_details_description'
    ) {
      setRenderDetails(false);
      setSelectedSong(null);
    }
  };

  const onArtistClick = (e) => {
    if (
      activeEl_1.current.className === 'songs_artist active' &&
      activeEl_1.current.id !== 'initial'
    ) {
      activeEl_1.current.className = 'songs_artist';
    }
    if (activeEl_2.current.className === 'songs_artist active') {
      activeEl_2.current.className = 'songs_artist';
    }
    if (activeEl_3.current.className === 'songs_artist active') {
      activeEl_3.current.className = 'songs_artist';
    }
    if (e !== undefined) {
      if (e.target.className === 'songs_artist') {
        e.target.className = 'songs_artist active';
        setActiveArtist(e.target.textContent);
      }
      if (activeEl_1.current.id === 'initial') {
        e.target.id = '';
        activeEl_1.current.className = 'songs_artist';
      }
    }
  };

  useEffect(() => {
    onArtistClick();
    setActiveArtist(activeEl_1.current.textContent);
  }, []);
  useEffect(() => {
    detailHandler();
  }, [selectedSong]);

  return (
    <div className="songs_parent" onClick={viewDetailHandler}>
      <div className="songs_header">Songs</div>
      <div className="artist_selection">
        <div className="songs_artist active" id="initial" ref={activeEl_1} onClick={onArtistClick}>
          BTS
        </div>
        <div className="songs_artist" ref={activeEl_2} onClick={onArtistClick}>
          Ariana Grande
        </div>
        <div className="songs_artist" ref={activeEl_3} onClick={onArtistClick}>
          Coldplay
        </div>
      </div>
      <SongsSpec artist={activeArtist} setSongHandler={setSongCallback} />
      {renderDetails ? <SongDetails songName={selectedSong} songPhoto={songPhoto} /> : null}
    </div>
  );
};

export default Songs;
