import React, { useState, useEffect } from 'react';
import './song_details.css';

const SongDetails = (props) => {
  let initialState = [
    {
      artist: '',
      description: '',
      title: '',
    },
  ];
  const [songInfo, setSongInfo] = useState(initialState);

  const fetchDetails = async () => {
    const settings = {
      method: 'GET',
      'Content-Type': 'application/json',
    };
    const fetchRes = await fetch(`http://localhost:8080/songs/${props.songName}`, settings);
    const resJson = await fetchRes.json();
    setSongInfo(resJson);
  };

  useEffect(() => {
    if (props.songName !== null && props.songName !== undefined) fetchDetails();
  }, [props.songName]);

  return (
    <div className="song_details">
      <div
        className="song_details_photo"
        style={{ backgroundImage: `url(${props.songPhoto})` }}
      ></div>
      <div className="song_details_info">
        <div className="song_details_title">{songInfo[0]['title']}</div>
        <div className="song_details_artist">{songInfo[0]['artist']}</div>
        <div className="song_details_description">{songInfo[0]['description']}</div>
      </div>
    </div>
  );
};

export default SongDetails;
