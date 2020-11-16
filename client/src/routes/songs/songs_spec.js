import React, { useState, useEffect } from 'react';
import './songs_spec.css';

const SongsSpec = (props) => {
  let initialState = [['', [{ Name: '' }]]];
  const [artistName, setArtistName] = useState(props.artist);
  const [songs, setSongs] = useState(initialState);

  const fetchSongs = async () => {
    let settings = {
      method: 'GET',
    };
    try {
      let fetchRes = await fetch(`/gcs/${artistName}`, settings);
      let resJson = await fetchRes.json();
      resJson = resJson.slice(1);
      setSongs(resJson);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    if (props.artist !== '' && props.artist !== null) {
      setArtistName(props.artist);
    }
  }, [props.artist]);
  useEffect(() => {
    if (props.artist !== '' && props.artist !== null && props !== undefined) {
      fetchSongs();
    }
  }, [artistName]);

  return (
    <div className="songs_spec_container">
      {songs.map((song) => (
        <div key={song[0]} className="song">
          <div
            className="song_photo"
            style={{ backgroundImage: `url(${song[0]})` }}
            onClick={() => {
              props.setSongHandler(song[1]['Name'], song[0]);
            }}
          ></div>
          {song[1]['Name']}
        </div>
      ))}
    </div>
  );
};

export default SongsSpec;
