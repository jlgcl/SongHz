import React, { useState, useEffect } from 'react';

const SongSelector = () => {
  const [selection, setSelection] = useState([]);
  const [max, setMax] = useState(0);
  const onSelect = (e) => {
    if (max <= 3) {
      setMax((max) => max + 1);
      setSelection((selection) => selection.push(e.target.textContent));
      e.target.className = e.target.className + ' active';
    } else stopSelect();
  };
  const stopSelect = () => {};

  return (
    <div className="SongSelector-parent">
      <div className="SongSelector-header">Song Selector</div>
      <div className="SongSelections">
        <div className="Activity">
          <div id="Workout"></div>
          <div id="Dance"></div>
          <div id="Walking"></div>
          <div id="Driving"></div>
          <div id="Traveling"></div>
        </div>
        <div className="Mood">
          <div id="Cheerful"></div>
          <div id="Motivating"></div>
          <div id="Melancholy"></div>
          <div id="Inspiring"></div>
          <div id="Night-time"></div>
          <div id="Stressed"></div>
          <div id="Relaxing"></div>
        </div>
        <div className="Environment">
          <div id="Personal"></div>
          <div id="Friends"></div>
          <div id="Family"></div>
        </div>
      </div>
    </div>
  );
};

export default SongSelector;
