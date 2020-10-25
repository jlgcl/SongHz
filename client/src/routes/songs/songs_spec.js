import React, { useState, useEffect } from 'react';
import './songs_spec.css';

const SongsSpec = (props) => {
  const [artistName, setArtistName] = useState(props.artist);
  useEffect(() => {
    if (props.artist !== '') setArtistName(props.artist);
  }, [props]);
  return <div className="songs_spec_container"></div>;
};

export default SongsSpec;
