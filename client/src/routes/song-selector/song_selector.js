import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import './song_selector.css';
import SelectorResults from './selector_results';

const SongSelector = () => {
  // States
  const [selection, setSelection] = useState([]);
  const [max, setMax] = useState(0);
  // Refs
  const activityRef = useRef([]);
  const moodRef = useRef([]);
  const envRef = useRef([]);
  const selectRef = useRef([]);

  let activitySelectors = ['🏋 Workout', '🕺 Dance', '🚶 Walking', '🚙 Driving', '✈️ Traveling'];
  let moodSelectors = [
    '😆 Cheerful',
    '🤗 Motivating',
    '⏰ Melancholy',
    '😰 Stressed',
    '🌙 Night-time',
    '😌 Relaxing',
    '💪 Inspiring',
  ];
  let envSelectors = ['💙 Friends', '🤔 Personal', '💓 Family'];

  // on selection select - main code for this component
  const onSelect = (e) => {
    if (e.target.name !== 'checked') {
      if (max < 3) {
        selectRef.current.push(e.target); // push selected element to selection ref
        e.target.style = 'background-color: #8200FF';
        e.target.name = 'checked';
        setMax((max) => max + 1);
        let newSelection = selection.concat(e.target.id.slice(3)); // slice to remove emoji for selection states
        setSelection(newSelection);
        if (max === 2) stopSelect();
      }
    } else {
      // remove selected element from selection ref:
      selectRef.current = [
        ...selectRef.current.slice(0, selectRef.current.indexOf(e.target)),
        ...selectRef.current.slice(selectRef.current.indexOf(e.target) + 1),
      ];
      e.target.style = 'background-color: #F4F4F4';
      e.target.name = '';
      setMax((max) => max - 1);
      // remove selected selement from the selection state:
      let removeSelection = [
        ...selection.slice(0, selection.indexOf(e.target.id.slice(3))),
        ...selection.slice(selection.indexOf(e.target.id.slice(3)) + 1),
      ];
      setSelection(removeSelection);
      // reset selector BG colors based on selection status:
      activityRef.current.map((ref) => (ref.style = 'background-color: #F4F4F4'));
      moodRef.current.map((ref) => (ref.style = 'background-color: #F4F4F4'));
      envRef.current.map((ref) => (ref.style = 'background-color: #F4F4F4'));
      selectRef.current.map((ref) => (ref.style = 'background-color: #8200FF'));
    }
  };

  const stopSelect = () => {
    // use refs to change DOM/JSX styling on selection & max selections
    activityRef.current.map((ref) => (ref.style = 'background-color: #CCCCCC'));
    moodRef.current.map((ref) => (ref.style = 'background-color: #CCCCCC'));
    envRef.current.map((ref) => (ref.style = 'background-color: #CCCCCC'));
    selectRef.current.map((ref) => (ref.style = 'background-color: #8200FF'));
  };

  return (
    <Router>
      <Switch>
        <Route
          exact
          path="/song_selector"
          render={() => (
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
              <Link to="/song_selector/results">
                <button className="selection-submit">Generate Songs</button>
              </Link>
            </div>
          )}
        />
        <Route exact path="/song_selector/results">
          <SelectorResults selections={selection} />
        </Route>
      </Switch>
    </Router>
  );
};

export default SongSelector;
