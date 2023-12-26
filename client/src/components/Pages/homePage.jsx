import React, {useEffect, useState} from "react"
import Intro from "../Home/intro"
import CompetitionSlider from "../Home/competitionSlider"
import Footer from "../Common/footer"
import Header from "../Common/Header"
import Loader from "../Common/loader"
import HotNews from "../Home/hotNews"
import Faq from "../Common/faq"
import "../Styles/special.css"
function HomePage(){
    const [loading, setLoading] = useState(true);
    // Simulate API request
    useEffect(() => {
      // Make your API requests here
      // Once the API requests are complete, set loading to false
      setTimeout(() => {
        setLoading(false);
      }, 3000); // Simulating a 2-second delay, replace with your actual API calls
    }, []);
return <div>
 {loading ? 
        <Loader />  : 
<div>
<Header />
<div style={{backgroundColor : "#100034", marginTop : "2%"}}>
<Intro />
</div>
<div>
<HotNews />
</div>
<CompetitionSlider />
<div style={{marginBottom : "2%"}}>
<Faq />
</div>
<Footer />
</div>
 }
</div>
}
export default HomePage