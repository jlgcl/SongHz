import React, { useState, useEffect } from 'react';
import Songwriters from './songwriters';
import './songwriter_detail.css';

const SongwriterDetail = (props) => {
  let info_initialState = [
    { id: '', name: '', years_active: '', company: '', associated_acts: [] },
  ];
  let bio_initialState = [{ id: '', name: '', bio: [] }];
  const [songwriter, setSongwriter] = useState(null);
  const [swInfo, setSwInfo] = useState(info_initialState);
  const [swBio, setSwBio] = useState(bio_initialState);
  const [swUrl, setSwUrl] = useState(null);

  const fetchInfo = async () => {
    const settings = { method: 'GET', 'Content-Type': 'application/json' };
    const fetchRes = await fetch(`http://localhost:8080/songwriter/${songwriter}`, settings);
    const resJson = await fetchRes.json();
    setSwInfo(resJson);
  };

  const fetchBio = async () => {
    const settings = { method: 'GET', 'Content-Type': 'application/json' };
    const fetchRes = await fetch(`http://localhost:8080/songwriter/${songwriter}/bio`, settings);
    const resJson = await fetchRes.json();
    setSwBio(resJson);
  };

  useEffect(() => {
    setSongwriter(props.sw);
    if (props.swUrl !== null) setSwUrl(props.swUrl);
  }, [props]);

  useEffect(() => {
    if (songwriter !== null) {
      fetchInfo();
      fetchBio();
    }
  }, [songwriter]);

  return (
    <div className="sw-detail-content">
      <div className="sw-detail-photo" style={{ backgroundImage: `url(${swUrl})` }}></div>
      <div className="sw-info">
        <div className="sw-detail-profile">
          <div className="sw-detail-name">{swInfo[0]['name']}</div>
          <div className="sw-years_active">Years Active: {swInfo[0]['years_active']}</div>
          <div className="sw-company">Company: {swInfo[0]['company']}</div>
          <div className="sw-associated_acts">Associated Acts: {swInfo[0]['associated_acts']}</div>
        </div>
        <div className="sw-detail-bio">{swBio[0]['bio']}</div>
      </div>
    </div>
  );
};

export default SongwriterDetail;
