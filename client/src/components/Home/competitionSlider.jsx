import React, { useState } from 'react';
import "../Styles/competitionSlider.css";

const TAGS = ["premierLeague", "fifa", "laliga", "nfl", "premierLeague", "ufc", "wilson", "n", "nba", "fifa", "laliga", "nba"];
const DURATION = 20000;
const ROWS = 3;
const TAGS_PER_ROW = 9;
const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
const shuffle = (arr) => [...arr].sort(() => .5 - Math.random());

const InfiniteLoopSlider = ({ children, duration, reverse = false, }) => {
  const [isPaused, setIsPaused] = useState(false);

  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  return (
    <div
      className='loop-slider'
      style={{
        '--duration': `${duration}ms`,
        '--direction': reverse ? 'reverse' : 'normal',
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className='inner' style={{animationName : isPaused ? "": "loop"}}>
        {children}
        {children}
      </div>
    </div>
  );
};

const Tag = ({ text, color }) => (
  <div className='tag' style={{ '--color': color }}><span>#</span> {text}</div>
);

const CompetitionSlider = () => {
  const enter = ()=>{

  }
  const leave = () => {

  }
  return (
    <div className='app'>
      <header>
        <h1 className='compman'>#Competitions Covered</h1>
      </header>
      <div className='tag-list'    onMouseEnter={enter}
      onMouseLeave={leave}
    >
        {[...new Array(ROWS)].map((_, i) => (
          <InfiniteLoopSlider key={i} duration={random(DURATION - 5000, DURATION + 5000)} reverse={i % 2}>
            {shuffle(TAGS).slice(0, TAGS_PER_ROW).map((tag, index) => (
              <Tag text={tag} key={`${tag}-${index}`} />
            ))}
          </InfiniteLoopSlider>
        ))}
        <div className='fade' />
      </div>
    </div>
  );
};

export default CompetitionSlider;
