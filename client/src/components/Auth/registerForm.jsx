//Use react toastify here please
import React, {useState} from "react"
import googleIcon from "../../icons/google.svg"
import facebookIcon from "../../icons/facebook.png"
import appleIcon from "../../icons/apple.png"
import mock from "../../icons/mock.png"
import twitterIcon from "../../icons/twitter.svg"
import { ToastContainer, toast } from "react-toastify";
import { useMediaQuery } from 'react-responsive';
import "../Styles/register.css"
// import { useEffect } from "react";
import "react-toastify/dist/ReactToastify.css";
function RegisterForm(){
    const isDesktop = useMediaQuery({minWidth : 926})
// const isPhone = useMediaQuery({ maxDeviceWidth: 480 });
    const passwordPatternWarning = () => {
        toast.warning("Please enter at least 8 charatcer with number, symbol, small and capital letter.", {
            position:isDesktop ? toast.POSITION.TOP_LEFT : toast.POSITION.TOP_CENTER ,
          });
    }
    const passwordMatchWarning = () => {
        toast.error("Password Don't Match", {
            position: isDesktop ?  toast.POSITION.TOP_LEFT : toast.POSITION.TOP_CENTER,
          });
      }
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
const emailChange = (e) => {
setEmail(e.target.value)
}
const passwordChange = (e) => {
    setPassword(e.target.value)
}
const confirmPasswordChange = (e)=> {
setConfirmPassword(e.target.value)
}
const resetPassword = (e) => {
    e.preventDefault()
    setPassword("")
    setConfirmPassword("")
}
const inputSubmit = (e) => {
    e.preventDefault()
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if(!password.match(passwordPattern)){
        passwordPatternWarning()
    }
    if(password !== confirmPassword || confirmPassword === ""){
        passwordMatchWarning()
            }
    console.log("form was submitted")
}
    const boder = {
        margin: 0,
        padding: 0,
        boxSizing: "border-box",
        fontFamily: "Mulish",
        fontSize: "16px",
        backgroundColor: "#451952"
    }
return <div style={boder}>
<ToastContainer /> <div className="form-wrapper">
<div className="form-sideman">
    <a href="/" title="Logo">
    <a href="/" className="Logo-format">
<h2 className="loginHeading2"><span className="loginHeadingWhite2">D</span>S</h2>
                </a>
    </a>
    <form className="my-form" onSubmit={inputSubmit}>
        <div className="form-welcome-row">
            <h1>Create your account &#x1F44F;</h1>
        </div>
        <div className="social-container">
            <a href="/" className="social"><img src={googleIcon} alt="" width="55%" /></a>
            <a href="/" className="social"><img src={appleIcon} alt="" width="55%" /></a>
            <a href="/" className="social"><img src={facebookIcon} alt="" width="55%" /></a>
            <a href="/" className="social"><img src={twitterIcon} alt="" width="55%" /></a>
        </div>
        <div class="divider">
            <div class="divider-line"></div> Or <div class="divider-line"></div>
        </div>
        <div class="text-field">
            <label for="email">Email:      </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    autocomplete="off"
                    placeholder="Your Email"
                    required
                    onChange={emailChange}
                    value={email}
                />
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" 
                    viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" 
                    fill="none" stroke-linecap="round" stroke-linejoin="round"
                >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path>
                    <path d="M16 12v1.5a2.5 2.5 0 0 0 5 0v-1.5a9 9 0 1 0 -5.5 8.28"></path>
                </svg>
    
        </div>

        <div class="text-field">
            <label for="password">Password:        </label>
                <input
                    id="password"
                    type="password"
                    name="password"
                    placeholder="Your Password"
                    title="Minimum 6 characters at 
                        least 1 Alphabet and 1 Number"
                    // pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$"
                    required
                    onChange={passwordChange}
                    value={password}
              
                />
                
                
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" 
                    viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" 
                    fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M5 13a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-6z"></path>
                    <path d="M11 16a1 1 0 1 0 2 0a1 1 0 0 0 -2 0"></path>
                    <path d="M8 11v-4a4 4 0 1 1 8 0v4"></path>
                </svg>
     
        </div>

        <div class="text-field">
            <label for="password"> Confirm Password:     </label>
                <input
                    id="password"
                    type="password"
                    name="password"
                    placeholder="Your Password"
                    title="Minimum 6 characters at 
                        least 1 Alphabet and 1 Number"
                    // pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$"
                    required
                    onChange={confirmPasswordChange}
                    value={confirmPassword}
              
                />
                
                
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" 
                    viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" 
                    fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M5 13a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-6z"></path>
                    <path d="M11 16a1 1 0 1 0 2 0a1 1 0 0 0 -2 0"></path>
                    <path d="M8 11v-4a4 4 0 1 1 8 0v4"></path>
                </svg>
        
        </div>
        <button type="submit" class="my-form__button">
           Sign Up 
        </button>
        <div class="my-form__actions">
            <a href="/" title="Reset Password" onClick={resetPassword}>
                Reset Password
            </a>
            <a href="/" title="Create Account">
                Already have an account?
            </a>
        </div>
    </form>
</div>
<div class="info-side">
    <img src={mock} alt="Mock" class="mockup" />
</div>
</div>
</div>

}
export default RegisterForm