import React, {useState, useEffect} from "react"
import axios from "axios"
import "../Styles/login.css"
import googleIcon from "../../icons/google.svg"
import facebookIcon from "../../icons/facebook.png"
import appleIcon from "../../icons/apple.png"
import eyeIcon from "../../icons/eye.svg"
import eyeOff from "../../icons/eye-off.svg"
function LoginForm(){
  const [greeting, setGreeting] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);
const [eye, setEye] = useState(false);
const [qrCodeBase64, setQRCodeBase64] = useState('');
const setPassword = () => {
  setEye(!eye)
  setPasswordVisible(!passwordVisible)
}
const getImages = async () => {
  const secret = 'http://localhost:3500/qrCodeSignUp/';
  try {
    const response = await axios.get(secret,
      {
        headers: {
          'X-Api-Key': process.env.REACT_APP_FRONTEND_BACKEND_PADDLOCK,
          'Content-Type': 'application/json',
          // Other headers as required
      }
    });
   setQRCodeBase64(response.data.qrCode);
   console.log(response.data.qrCode)
  } catch (error) {
    console.log(error);  
  }
};
  useEffect(() => {
    getImages();
    const dateTime = new Date();
    const currentTime = dateTime.getHours();
    if (currentTime < 12) {
      setGreeting('Good Morning');
    } else if (currentTime >= 12 && currentTime < 19) {
      setGreeting('Good Afternoon');
    } else {
      setGreeting('Good Evening');
    }
  }, []);
  return <div className="row container-fluid login-container" style={{  backgroundColor: "#f0f2f5"}}>
  <div className="col-lg-6 col-md-6 col-sm-12 login-first">
  <h2 className="loginHeading"><span className="loginHeadingWhite">D</span>S</h2>
  <div className="login-description">
  <h3 className="second-login-heading">DirectSport</h3>
<h4 className="login-introduction">
  DirectSport is a leading online platform for
   various sports news,and it is easily accessible
    on various platforms
  </h4>
  <nav class="nav">
      <h4 class="sm-header">Follow us on</h4>
      <div class="line"></div>
      <ul class="nav-list">
        <li class="nav-item">
          <a href="/" class="nav-link"><i class="fab fa-facebook-f"></i></a>
        </li>
        <li class="nav-item">
          <a href="/" class="nav-link"><i class="fab fa-x-twitter"></i></a>
        </li>
        <li class="nav-item">
          <a href="/" class="nav-link"><i class="fab fa-instagram"></i></a>
        </li>
        <li class="nav-item">
          <a href="/" class="nav-link"><i class="fab fa-telegram"></i></a>
        </li>
        <li class="nav-item">
          <a href="/" class="nav-link"><i class="fab fa-linkedin-in"></i></a>
        </li>
      </ul>
    </nav>
    <div className="signup-space">
    <div style={{ width: '200px', height: '200px' }}
    className="codak" dangerouslySetInnerHTML={{ __html: qrCodeBase64 }} />
    <div className="signup-content">
<span style={{color : "#ae0a53"}}>Scan Qr Code</span> To Signup
    </div>
    </div>
  </div>
  </div>
  <div className="col-lg-6 col-md-6 login-Right">
  <span className="golang-login">  <h2 className="loginHeading"><span className="loginHeadingWhite">D</span>S</h2></span>
  
<form>
<div>

</div>
<div className="loginFlex">

<h4 id="greeting">{greeting}</h4>
<div className="input-class">
<label htmlFor="email">Email:</label>
    <input  aria-label="Email"    type="email"   id="inputID" name="email" placeholder="Your Email" autoComplete="off" className="loginInput" required></input>
    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-mail"
                    width="44" height="44"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="#A7A2CB"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" />
                    <path d="M3 7l9 6l9 -6" />
                </svg>
    </div>
    <div className="input-class">
    <label htmlFor="email" class>Password:</label>
    <input  aria-label="Email"    type= {passwordVisible ?  "text" : "password"}   id="inputID" name="email" placeholder="Your Email" autoComplete="off" className="loginInput" required></input>
    <img alt="Eye Icon" title="Eye Icon"src={ eye ? eyeOff : eyeIcon} className="eyeIcon"  onClick={setPassword}/>
    </div>
    <button className="loginButton">Log In</button>
    <div className="divider divider-second">
            <div className="divider-line"></div> Or <div class="divider-line"></div>
        </div>
        <button className="google-login">
<img src={googleIcon} alt="google" className="google-login-svg"></img>
      <span>Sign in with Google</span>
    </button>
    <div class="socials-row">
            <a href="/" title="Use Facebook" className="useFacebook">
                <img src={facebookIcon} alt="Google"/>Use Facebook
            </a>
            <a href="/" title="Use Apple"  className="useApple">
                <img src={appleIcon} alt="Apple"/> Use Apple
            </a>
            
        </div> 
        <ul class="nav-list-second">
    <li className="login-power">
        <a href="/" title="Instagram">
            <i class="fa-brands fa-instagram fa-lg"></i>
        </a>
    </li>
    <li className="login-power">
        <a href="/" title="Linkedin">
            <i class="fa-brands fa-linkedin fa-lg"></i>
        </a>
    </li>
    <li className="login-power">
        <a href="/" title="Twitter">
            <i class="fa-brands fa-x-twitter fa-lg"></i>
        </a>
    </li>
    <li className="login-power">
        <a href="/" title="Youtube">
            <i class="fa-brands fa-youtube fa-lg"></i>
        </a>
    </li>
    <li className="login-power">
        <a href="/" title="GitHub">
            <i class="fa-brands fa-square-facebook fa-lg"></i>
        </a>
    </li>
    <li className="login-power">
        <a href="/" title="GitHub">
            <i class="fa-brands fa-telegram fa-lg"></i>
        </a>
    </li>
    <li className="login-power">
        <a href="/" title="GitHub">
            <i class="fa-brands fa-github fa-lg"></i>
        </a>
    </li>
</ul>


        
</div>


</form>
 
  </div>
  </div>
}
export default LoginForm