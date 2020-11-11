import React, { useState, useEffect } from 'react';
import './selector_results.css';

const SelectorResults = (props) => {
  let initialState = [{ title: '', count: 0 }];
  const [songs, setSongs] = useState(initialState);
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
            <div className="result_song_title">{song.title}</div>
            <div className="keyword_match_count">{song.count}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelectorResults;
