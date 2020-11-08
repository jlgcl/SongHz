import React, { useState, useEffect, useRef } from 'react';
import './song_selector.css';

const SongSelector = () => {
  // States
  const [selection, setSelection] = useState([]);
  const [max, setMax] = useState(0);
  // Refs
  const activityRef = useRef([]);
  const moodRef = useRef([]);
  const envRef = useRef([]);
  const selectRef = useRef([]);

  let activitySelectors = ['Workout', 'Dance', 'Walking', 'Driving', 'Traveling'];
  let moodSelectors = [
    'Cheerful',
    'Motivating',
    'Melancholy',
    'Stressed',
    'Night-time',
    'Relaxing',
    'Inspiring',
  ];
  let envSelectors = ['Friends', 'Personal', 'Family'];

  const onSelect = (e) => {
    selectRef.current.push(e.target); // push selected element to selection ref
    if (max < 3) {
      e.target.style = 'background: red';
      setMax((max) => max + 1);
      let newSelection = selection.concat(e.target.id);
      setSelection(newSelection);
      if (max === 2) stopSelect();
    }
  };
  const stopSelect = () => {
    // use refs to change DOM/JSX styling on selection
    activityRef.current.map((ref) => (ref.style = 'background-color: blue'));
    moodRef.current.map((ref) => (ref.style = 'background-color: blue'));
    envRef.current.map((ref) => (ref.style = 'background-color: blue'));
    selectRef.current.map((ref) => (ref.style = 'background-color: red'));
  };

  return (
    <div className="SongSelector-parent">
      <div className="SongSelector-header">What Do You Want to Listen to Today?</div>
      <div className="SongSelector-subheader">Choose Max of 3 Selections</div>
      <div className="SongSelections">
        <div className="Activity">
          <div className="section-header">Activity</div>
          <div className="selection-content">
            {activitySelectors.map((selector, i) => {
              return (
                <div
                  key={selector}
                  className="selection"
                  id={selector}
                  ref={(node) => (activityRef.current[i] = node)}
                  onClick={onSelect}
                >
                  {selector}
                </div>
              );
            })}
          </div>
        </div>
        <div className="Mood">
          <div className="section-header">Mood</div>
          <div className="selection-content">
            {moodSelectors.map((selector, i) => {
              return (
                <div
                  key={selector}
                  className="selection"
                  id={selector}
                  ref={(node) => (moodRef.current[i] = node)}
                  onClick={onSelect}
                >
                  {selector}
                </div>
              );
            })}
          </div>
        </div>
        <div className="Environment">
          <div className="section-header">Environment</div>
          <div className="selection-content">
            {envSelectors.map((selector, i) => {
              return (
                <div
                  key={selector}
                  className="selection"
                  id={selector}
                  ref={(node) => (envRef.current[i] = node)}
                  onClick={onSelect}
                >
                  {selector}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SongSelector;
