import React from 'react';
// import premierLeague from "../../icons/Premier_League_logo_PNG_(2).png"
// import fifa from "../../icons/FIFA_(6).png"
// import laliga from "../../icons/laliga.png"
// import nfl from "../../icons/NFL (1).png"
// import wilson from "../../icons/wilson.png"
// import ufc from "../../icons/ufc.png"
// import nba from "../../icons/nba.png"
import "../Styles/competitionSlider.css"
const TAGS = ["premierLeague", "fifa", "laliga", "nfl", "premierLeague", "ufc", "wilson", "n", "nba", "fifa", "laliga", "nba"];
const DURATION = 20000;
const ROWS = 3;
const TAGS_PER_ROW = 9;
const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
const shuffle = (arr) => [...arr].sort( () => .5 - Math.random() );
const InfiniteLoopSlider = ({children, duration, reverse = false}) => {
  return (
    <div className='loop-slider' style={{
        '--duration': `${duration}ms`,
        '--direction': reverse ? 'reverse' : 'normal'
      }}>
      <div className='inner'>
        {children}
        {children}
      </div>
    </div>
  );
};

const Tag = ({text, color}) => (
  <div className='tag' style={{ '--color': color}}><span>#</span> {text}</div>
  // <img className='tag' src={text} alt="competitions" style={{ '--color': color}} width="10%"/>
  
);

const CompetitionSlider = () => {
  return   <div className='app'>
  <header>
    <h1 className='compman'>#Competitions Covered</h1>
  </header>
  <div className='tag-list'>
    {[...new Array(ROWS)].map((_, i) => (
      <InfiniteLoopSlider key={i} duration={random(DURATION - 5000, DURATION + 5000)} reverse={i % 2}>
      {shuffle(TAGS).slice(0, TAGS_PER_ROW).map((tag, index) => (
  <Tag text={tag} key={`${tag}-${index}`} />
))}

      </InfiniteLoopSlider>
    ))}
    <div className='fade'/>
  </div>
</div>


          };
export default CompetitionSlider