import React, { useState, useEffect } from 'react';
import './selector_results.css';

const SelectorResults = (props) => {
  const fetchSongs = async () => {
    const settings = {
      method: 'POST',
      'Content-Type': 'application/json',
      body: JSON.stringify(props.selections),
    };
    const fetchRes = await fetch('http://localhost:8080/songselect', settings);
    const resJson = await fetchRes.json();
  };
  return <div>TEST</div>;
};

export default SelectorResults;
