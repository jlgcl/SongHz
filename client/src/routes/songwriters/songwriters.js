import React, { useState, useEffect, useRef } from 'react';
import './songwriters.css';
import SongwriterDetail from './songwriter_detail';

const Songwriters = () => {
  let initialState = [['', [{ Name: '' }]]];
  const [songwriter, setSongwriter] = useState(initialState);
  const [selectedSw, setSelectedSw] = useState(null);
  const [swUrl, setSwUrl] = useState(null);
  const detail_overlay = useRef(null);

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

  const selectSw = (e, sw) => {
    setSelectedSw(e.target.parentNode.childNodes[1].textContent);
    detail_overlay.current.style.height = '100%';
    setSwUrl(sw);
  };

  const displayHandler = () => {
    detail_overlay.current.style.height = '0%';
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
            <div
              className="sw-photo"
              onClick={(e) => selectSw(e, sw[0])}
              style={{ backgroundImage: `url(${sw[0]})` }}
            ></div>
            <div className="sw-name">{sw[1]['Name']}</div>
          </div>
        ))}
      </div>
      <div className="sw-detail-parent" ref={detail_overlay}>
        <SongwriterDetail sw={selectedSw} swUrl={swUrl} />
        <a className="sw-closebtn" onClick={displayHandler}>
          &times;
        </a>
      </div>
    </div>
  );
};

export default Songwriters;
