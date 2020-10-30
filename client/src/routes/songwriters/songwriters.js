import React, { useState, useEffect } from 'react';
import './songwriters.css';

const Songwriters = () => {
  let initialState = [['', [{ Name: '' }]]];
  const [songwriter, setSongwriter] = useState(initialState);

  const fetchSongwiter = async () => {
    try {
      let fetchRes = await fetch('http://localhost:8080/gcs/songwriters', {
        method: 'GET',
        'Content-Type': 'application/json',
      });
      let resJson = await fetchRes.json();
      let response = resJson.slice(1);
      setSongwriter(response);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    fetchSongwiter();
  }, []);

  return (
    <div className="sw-container">
      <div className="sw-header">Songwriters</div>
      <div className="sw-list">
        {songwriter.map((sw) => (
          <div className="sw-profile" key={sw[1]['Name']}>
            <div className="sw-photo" style={{ backgroundImage: `url(${sw[0]})` }}></div>
            <div className="sw-name">{sw[1]['Name']}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Songwriters;
