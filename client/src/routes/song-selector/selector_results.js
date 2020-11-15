import React, { useState, useEffect } from 'react';
import './selector_results.css';

const SelectorResults = (props) => {
  let initialState = [{ title: '', count: 0, artist: '' }];
  const [songs, setSongs] = useState(initialState);
  const [songInfo, setSongInfo] = useState(null);

  // Fetch songs based on the user selection (passed as prop)
  const fetchSongs = async () => {
    const settings = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(props.selections),
    };
    const fetchRes = await fetch('http://localhost:8080/songselect', settings);
    const resJson = await fetchRes.json();
    setSongs(resJson);
    fetchInfo();
  };

  // Fetch info from GCS through Backend - set songInfo state array
  const fetchInfo = async () => {
    const settings = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    };
    let totalRes = [];
    const fetchBTSRes = await fetch(`http://localhost:8080/gcs/BTS`, settings);
    const fetchAGRes = await fetch(`http://localhost:8080/gcs/Ariana Grande`, settings);
    const fetchCPRes = await fetch(`http://localhost:8080/gcs/Coldplay`, settings);
    const BTSRes = await fetchBTSRes.json();
    const AGRes = await fetchAGRes.json();
    const CPRes = await fetchCPRes.json();
    totalRes = totalRes.concat(BTSRes).concat(AGRes).concat(CPRes);
    setSongInfo(totalRes);
  };

  // Render count bar (W3 library addition)
  const countRender = (count) => {
    switch (count) {
      case '3':
        return (
          <div className="w3-light-grey w3-round">
            <div className="w3-container w3-blue w3-round" style={{ width: '100%' }}>
              3/3
            </div>
          </div>
        );
      case '2':
        return (
          <div className="w3-light-grey w3-round">
            <div className="w3-container w3-orange w3-round" style={{ width: '66%' }}>
              2/3
            </div>
          </div>
        );
      case '1':
        return (
          <div className="w3-light-grey w3-round">
            <div className="w3-container w3-yellow w3-round" style={{ width: '25%' }}>
              1/3
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  // Find photo by matching song name from the songInfo state array
  const findPhoto = (Name) => {
    let songNames = songInfo.map((song) => song[1]);
    let songMatch = songNames.find((song) => {
      if (song !== null) {
        return song['Name'] === Name;
      }
    });
    let index = songNames.indexOf(songMatch);
    return songInfo[index][0];
  };

  useEffect(() => {
    if (props.selections !== null && props.selections !== []) fetchSongs();
  }, [props]);

  return (
    <div className="selector_results">
      <div className="selector_results_header">
        Based on your selections, we recomend the following songs:
      </div>
      <div className="selector_results_list">
        {songs.map((song) => (
          <div className="song_result_list">
            {songInfo !== null ? (
              <div
                className="result_song_photo"
                style={{ backgroundImage: `url(${findPhoto(song.title)})` }}
              ></div>
            ) : null}
            <div className="result_song_title">{song.title}</div>
            <div className="result_song_artist">{song.artist}</div>
            <div className="keyword_match_count">{countRender(song.count)}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelectorResults;
