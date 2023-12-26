import React, {useState, useEffect} from "react";
import axios from "axios";
import "../Styles/intro.css";

function Home() {
  const getStarted = (e) => {
    e.preventDefault()
  }
    const [heroes, setHeroes] = useState([]);
    useEffect(() => {
      const getImages = async () => {
        const secret = 'http://localhost:3500/competitionLogo/';
        try {
          const response = await axios.get(secret,
            {
              headers: {
                'X-Api-Key': process.env.REACT_APP_FRONTEND_BACKEND_PADDLOCK,
                'Content-Type': 'application/json',
                // Other headers as required
            }
          });
          setHeroes(response.data);
        } catch (error) {
          console.log(error);  
        }
      };
  
      getImages();
    }, []);
  
  const [showContent, setShowContent] = useState(false);
  useEffect(() => {
    // Add the 'show' class after the component has mounted
    setShowContent(true);
  }, []);

  return (
    <div className="row  intro-to-directsport">

<div className={`contentMan slide-up col-lg-6 col-md-6 col-sm-12 ${showContent ? 'show' : ''}`}>
          <h2 className="DirectSport-header">DirectSport</h2>
          <p className="DirectSport-Class">
            DirectSport is a leading online platform delivering high-quality,
            engaging, and up-to-date content about various sports, across almost all well known sport competitions across various continents of the world
          </p>
          <a href="/" className="startbutton" onClick={getStarted}>
            <span>
              Get Started <i className="fa-solid fa-arrow-right"></i>
            </span>
          </a>
        </div>
        <div className="content col-lg-6 col-md-6 col-sm-12">
        <ul className="accordion">
      <li>
        <img src={heroes[0]} alt="Foothball"/>
        <div className="content">
          <span>
            <h2>Amare Campbell</h2>
            <p>American Foothball</p>
          </span>
        </div>
      </li>
      <li>
        <img src={heroes[1]}  alt="Baskethball"/>
        <div className="content">
          <span>
            <h2>Kylian Mbappe</h2>
            <p>Soccer</p>
          </span>
        </div>
      </li>
      <li>
        <img src={heroes[5]} alt="Tennis"/>
        <div className="content">
          <span>
            <h2>Rafael Nadal</h2>
            <p>Tennis</p>
          </span>
        </div>
      </li>
      <li>
        <img src={heroes[3]} alt="Soccer"/>
        <div className="content">
          <span>
            <h2>Michael Jordan</h2>
            <p>Baskethball</p>
          </span>
        </div>
      </li>
      <li>
        <img src={heroes[4]}  alt="Boxing"/>
        <div className="content">
          <span>
            <h2>Sam Kerr</h2>
            <p>Womens Foothball</p>
          </span>
        </div>
      </li> 
    </ul>
        </div>
    </div>
  );
}

export default Home;
