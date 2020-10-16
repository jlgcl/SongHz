import React, { useEffects, useState } from 'react';
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom';
import { useParams } from 'react-router';
import './artists.css';

const ArtistPage = () => {
  const { name } = useParams();
  return <div>Hello World {name}</div>;
};

export default ArtistPage;
