import React, {useEffect, useState, useRef} from "react"
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
   // Separate state variables for each sport category
   const [pageFoothball, setPageFoothball] = useState(1);
   const [pageBaskethball, setPageBaskethball] = useState(1);
   const [pageBoxing, setPageBoxing] = useState(1);
   const [pageTennis, setPageTennis] = useState(1);
   const [pageWomensFoothball, setPageWomensFoothball] = useState(1);
   const [pageCricket, setPageCricket] = useState(1);
  const [pageSize, setPageSize] = useState(3);
  const [prev, disablePrev] = useState(false);
  const [next, disableNext] =  useState(false);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref1 = useRef(null);
  const setSportState = (sport) => {
    setFoothball(sport === 'foothball');
    setBaskethball(sport === 'baskethball');
    setBoxing(sport === 'boxing');
    setWomensFoothball(sport === 'womensfoothball');
    setTennis(sport === 'tennis');
    setCricket(sport === 'cricket');
  };
  const activeLink = (value, sport) => { 
    setCurrentValue(value);
    switch (sport) {
      case "foothball":
        setPageFoothball(value);
        break;
      case "baskethball":
        setPageBaskethball(value);
        break;
      case "boxing":
        setPageBoxing(value);
        break;
      case "tennis":
        setPageTennis(value);
        break;
      case "womensfoothball":
        setPageWomensFoothball(value);
        break;
      case "cricket":
        setPageCricket(value);
        break;
      default:
        break;
    }
    setPageSize(3);
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
  const handleNextPage = (sport) => {
    if(currentValue === 8){
      return disableNext(true)
    }
    switch (sport) {
      case "foothball":
        setPageFoothball(pageFoothball + 1);
        break;
      case "baskethball":
        setPageBaskethball(pageBaskethball + 1);
        break;    
      case "boxing":
        setPageBoxing(pageBoxing + 1);
        break;
      case "tennis":
        setPageTennis(pageTennis + 1);
        break;
      case "womensfoothball":
        setPageWomensFoothball(pageWomensFoothball + 1);
        break;
      case "cricket":
        setPageCricket(pageCricket + 1);
        break;
      default:
        break;
    }
  };

  const handlePrevPage = (sport) => {
    if(currentValue === 1){
      return disablePrev(true)
    }
    switch (sport) {
      case "foothball":
        setPageFoothball(pageFoothball - 1);
        break;
      case "baskethball":
        setPageBaskethball(pageBaskethball - 1);
        break;
      case "boxing":
        setPageBoxing(pageBoxing - 1);
        break;
      case "tennis":
        setPageTennis(pageTennis - 1);
        break;
      case "womensfoothball":
        setPageWomensFoothball(pageWomensFoothball - 1);
        break;
      case "cricket":
        setPageCricket(pageCricket - 1);
        break;
      default:
        break;
    }
  };
  useEffect(() => {
    setSportState("foothball")
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
  // useEffect(() => {
  //   const options = {
  //     rootMargin : "0px 0px 700px 0px",
  //     threshold : 1
  //   }
  //   const observer = new IntersectionObserver(([entry]) => {
  //     setIsIntersecting(entry.isIntersecting);
  //   }, options);
  //   console.log(isIntersecting)
  //   observer.observe(ref1.current);
  // }, [isIntersecting]); 

  const foothballArray = hotNews.filter(item => item.competitionName === "foothball");
const baskethballArray = hotNews.filter(item => item.competitionName === 'baskethball');   
const boxingArray = hotNews.filter(item => item.competitionName === 'boxing')
const tennisArray = hotNews.filter(item => item.competitionName === 'tennis')
const womensFoothball = hotNews.filter(item => item.competitionName === 'womensfoothball')
const cricketArray = hotNews.filter(item => item.competitionName === 'cricket')
// newsArray = foothballArray, currentPage = pageFoothball, sport = "foothball"
const renderNews = (newsArray, currentPage, sport)=>{
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const paginatedArray = newsArray.slice(startIndex, endIndex);
  return   <>
  {paginatedArray.map((news) => (
    <article className="card carded slide-left" key={news.id}>
      <div className='card-background'>
        <img src={news.image} alt="background" className="newsPicture" />
      </div>
      <div className='content'>
        <h1 className="newsTitle">{news.title}</h1>
        <span className="newsDate">{news.date}</span>
        <p className="newsContent">
          {news.content.substring(0, 200)}
        </p>
      </div>
      <div className="action-bottom-bar">
        <a href="/">
          Read More
          <i className="fa-solid fa-arrow-right"></i>
        </a>
      </div>
    </article> 
  ))}
  <div className="docker-container">
    <button className={`btn1 newsBotton  ${prev ? 'disabled' : ''}`} onClick={()=>{backBtn(); handlePrevPage(sport) }}>
      <i className="fa-solid fa-chevron-left"></i>Previous
    </button>
    <ul className="newsList">
      {[1, 2, 3, 4, 5, 6, 7, 8].map((value) => (
        <li
          key={value}
          className={`link ${currentValue === value ? 'active' : ''}`}
          onClick={() => {
                  activeLink(value, sport);
                  setPageSize(3);
                }}
        >
          {value}
        </li>
      ))}
    </ul>
    <button className={`btn2 newsBotton  ${next ? 'disabled' : ''}`} onClick={()=>{nextBtn(); handleNextPage(sport) }}>
      Next<i className="fa-solid fa-chevron-right"></i>
    </button>
  </div>
</>

}
return <div className="hotnewsbackground">
<div className="hot-news-title">
<h4 onClick={() => {setSportState("foothball");setCurrentValue(1);}}>Foothball</h4>
<h4 onClick={() => {setSportState("baskethball");setCurrentValue(1);}}>Baskethball</h4>
<h4 onClick={() => {setSportState("boxing");setCurrentValue(1);}}>Boxing</h4>
<h4 onClick={() => {setSportState("womensfoothball");setCurrentValue(1);}}>Womens Foothball</h4>
<h4 onClick={() => {setSportState("tennis");setCurrentValue(1);}}>Tennis</h4>
<h4 onClick={() => {setSportState("cricket");setCurrentValue(1);}}>Cricket</h4>


</div>
<div className={`container container-container ${isIntersecting ? "animate" : ""}`}  ref={ref1}>
  {foothball && renderNews(foothballArray, pageFoothball, "foothball")}
</div>
<div  className={`container container-container ${isIntersecting ? "animate" : ""}`} >
  {baskethball && renderNews(baskethballArray, pageBaskethball, "baskethball")
  }
  </div>
  <div  className={`container container-container ${isIntersecting ? "animate" : ""}`}  >
  {boxing && renderNews(boxingArray, pageBoxing, "boxing")
  }
</div>
  <div  className={`container container-container ${isIntersecting ? "animate" : ""}`} >
  {tennis && renderNews(tennisArray, pageTennis, "tennis")
  }
</div>
  <div className={`container container-container ${isIntersecting ? "animate" : ""}`} >
  {cricket && renderNews(cricketArray, pageCricket, "cricket")
  }
</div>
  <div  className={`container container-container ${isIntersecting ? "animate" : ""}`}  >
  {womensfoothball && renderNews(womensFoothball, pageWomensFoothball, "womensfoothball")
  }


</div>

</div>


}
export default HotNews