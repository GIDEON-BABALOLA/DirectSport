import "../Styles/login.css";
import React, {useState, useEffect} from "react"
import eyeIcon from "../../icons/eye.svg"
import googleIcon from "../../icons/google.svg"
import facebookIcon from "../../icons/facebook.png"
import appleIcon from "../../icons/apple.png"
import eyeOff from "../../icons/eye-off.svg"
import meshGradient from "../../icons/mesh-gradient.png"
import companyLogo from "../../icons/logo.png"
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const LoginForm = () => {
  const [greeting, setGreeting] = useState(false)
const [passwordVisible, setPasswordVisible] = useState(false)
const [eye, setEye] = useState(false)
const [email, setEmail] = useState("")
const [loginColor, setLoginColor] = useState(false)
  useEffect(() => {
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
const handlePasswordVisibility = () => {
  setPasswordVisible(!passwordVisible);
  setEye(!eye)
}; 
const emailChange = (e) => {
  setEmail(e.target.value)
  if(email.includes("@")){
    setLoginColor(true)
  }else{
    setLoginColor(false)
  }
}

const formSubmit = (e) => {
e.preventDefault()
console.log("Golang")
const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
const isEmailValid = emailRegex.test(email);
if(!isEmailValid){
  showCorrectEmail()
}
}

const showCorrectEmail = () =>{
  toast.error("Invalid Email !", {
      position: toast.POSITION.TOP_CENTER,
      className : "toast-message"
    });
}
const contentBody = {
  fontFamily: "'Poppins', sans-serif",
  minHeight: "100vh",
  backgroundColor: "#f5f9ff",
  display: "flex",
  justifyContent: "center"
}
const zenith = {
  width: "100%",
  height: "100%",
  display: "block"
}

 return <div style={contentBody}>
 <section className="containerLog ">
<ToastContainer />
<div className="image-section">
  <div className="image-wrapper">
    <img src={meshGradient} alt="" className="zenith"/>
  </div>

  <div className="content-container">
    <h1 className="section-heading">"Engaging all with exiting sport <span className="section-heading-span">
    content."</span></h1>
    <p className="section-paragraph">Every step forward is a step towards knowledge. Embrace the journey.</p>
  </div>
</div>
<div className="form-section">
  <div className="form-wrapper">
    <div className="logo-container">
      <a href="/" className="logo-container">
        <img src={companyLogo} alt="Logo" style={zenith}/>
      </a>
    </div>
    

    <h2 id="greeting">{greeting}</h2>
    <p className="credit">Enter your credentials to access your account.</p>

    <div className="input-container">
      <div>
        <div className="texted-field">
          <label htmlFor="email" class>Email:</label>
          <input
      
              aria-label="Email"
              type="email"
              id="inputID"
              name="email"
              placeholder="Your Email"
              autoComplete="off"
              required
              onChange={emailChange}
              value={email}
              className="loginInputClass"
             
          />
          <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-mail"
              width="44" height="44"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#A7A2CB"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
          >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" />
              <path d="M3 7l9 6l9 -6" />
          </svg>
      </div>
      </div>
      <div className="form-group" >
        <label htmlFor="password">Password</label>
        <input    type={passwordVisible ? 'text' : 'password'}
         id="inputID" className="input__field" placeholder="Your Password"
        autoComplete="off"
        required
        name="password"
        aria-label="password"
       />
        <img
        onClick={handlePasswordVisibility}
        alt="Eye Icon"
        title="Eye Icon"
        src= {eye ? eyeOff : eyeIcon}
        className="input__icon"/>
      </div>
    </div>
  

    <div className="remember-forgot">
      <div className="remember-me">
        <input type="checkbox" value="remember-me" id="remember-me" />
        <label htmlFor="remember-me">Remember me</label>
      </div>

      <a href="/" className="forgot-password">Forgot password?</a>
    </div>

    <button className="login-btn" onClick={formSubmit}
    style={{backgroundColor :  loginColor ? "#100034" :  "#72619a"}}
    >Log In</button>

    <div className="or-divider">or</div>

    <button className="google-signin">
      <object data={googleIcon} title="google"></object>
      <span>Sign in with Google</span>
    </button>
    <div className="socials-row">
      <a href="/" title="Use Google">
          <img src={facebookIcon} alt="Google" />Use Facebook
          </a>
      <a href="/" title="Use Apple" >
          <img src={appleIcon} alt="Apple" /> Use Apple
          </a>
  </div> 
  </div>
  </div>
</section>
</div>
}
export default LoginForm
