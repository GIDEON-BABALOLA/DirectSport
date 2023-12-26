import React, {useEffect, useState} from "react"
import "../Styles/hotNews.css"
import axios from "axios";
function HotNews(){
  const [hotNews, setHotNews] = useState([])
  const [currentValue, setCurrentValue] = useState(1);
  const [foothball, setFoothball] = useState(false);
  const [baskethball, setBaskethball] = useState(false);
  const [boxing, setBoxing] = useState(false);
  const [tennis, setTennis] = useState(false);
  const [womensfoothball, setWomensFoothball] = useState(false);
  const [cricket, setCricket] = useState(false);
  const [currentSport, setCurrentSport] = useState()
  const [pages, setPages] = useState({
    foothball: 1,
    baskethball: 1,
    boxing: 1,
    tennis: 1,
    womensfoothball: 1,
    cricket: 1,
  });
  const setSportState = (sport) => {
    setFoothball(sport === 'foothball');
    setBaskethball(sport === 'baskethball');
    setBoxing(sport === 'boxing');
    setWomensFoothball(sport === 'womensfoothball');
    setTennis(sport === 'tennis');
    setCricket(sport === 'cricket');
  };
  const activeLink = (value) => {
    setCurrentValue(value);
  };

  const backBtn = () => {
    if (currentValue > 1) {
      setCurrentValue(currentValue - 1);
    }
    
  };

  const nextBtn = () => {
    if (currentValue < 8) {
      setCurrentValue(currentValue + 1);
    }
  };

  useEffect(() => {
    setFoothball(true)
    const getImages = async () => {
      const url = 'http://localhost:3500/hotNews/';
      try {
        const response = await axios.get(url,
          {
            headers: {
              'X-Api-Key': process.env.REACT_APP_FRONTEND_BACKEND_PADDLOCK,
              'Content-Type': 'application/json',
          }
        });
      setHotNews(response.data)
      } catch (error) {
        console.log(error);  
      }
    };

    getImages();
  }, []);

  const foothballArray = hotNews.filter(item => item.competitionName === "foothball");
const baskethballArray = hotNews.filter(item => item.competitionName === 'baskethball');   
const boxingArray = hotNews.filter(item => item.competitionName === 'boxing')
const tennisArray = hotNews.filter(item => item.competitionName === 'tennis')
const womensFoothball = hotNews.filter(item => item.competitionName === 'womensfoothball')
const cricketArray = hotNews.filter(item => item.competitionName === 'cricket')
const itemsPerPage = 3;

const renderNews = (newsArray) => {
  return newsArray.map((news) => (
<>
    <article className="card" key={news.id}>
      <div className="card-background">
        <img src={news.image} alt="background" className="newsPicture" />
      </div>
      <div className="content">
        <h1 className="newsTitle">{news.title}</h1>
        <span className="newsDate">{news.date}</span>
        <p className="newsContent">{news.content.substring(0, 200)}</p>
      </div>
      <div className="action-bottom-bar">
        <a href="/">
          Read More <i className="fa-solid fa-arrow-right"></i>
        </a>
      </div>
    </article>
    <div className="docker-container">
        <button className="btn1 newsBotton" onClick={backBtn}>
          <i className="fa-solid fa-chevron-left"></i>Previous
        </button>
        <ul className="newsList">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((value) => (
            <li
              key={value}
              className={`link ${currentValue === value ? 'active' : ''}`}
              onClick={() => activeLink(value)}
            >
              {value}
            </li>
          ))}
        </ul>
        <button className="btn2 newsBotton" onClick={nextBtn}>
          Next<i className="fa-solid fa-chevron-right"></i>
        </button>
      </div>
      </>
  ));
  
};
return <div className="hotnewsbackground">
<div className="hot-news-title">
<h4 onClick={() => setSportState("foothball")}>Foothball</h4>
<h4 onClick={() => setSportState("baskethball")}>Baskethball</h4>
<h4 onClick={() => setSportState("boxing")}>Boxing</h4>
<h4 onClick={() => setSportState("womensfoothball")}>Womens Foothball</h4>
<h4 onClick={() => setSportState("tennis")}>Tennis</h4>
<h4 onClick={() => setSportState("cricket")}>Cricket</h4>


</div>
<div className="container">
  {foothball && renderNews(foothballArray)}
</div>
<div className="container">
  {baskethball && renderNews(baskethballArray)}
  <div className="container">
  {boxing && renderNews(boxingArray)}
</div>
  <div className="container">
  {tennis && renderNews(tennisArray)}
</div>
  <div className="container"> 
  {cricket && renderNews(cricketArray)}
</div>
  <div className="container">
  {womensfoothball && renderNews(womensFoothball)}
</div>

</div>

</div>
}
export default HotNews