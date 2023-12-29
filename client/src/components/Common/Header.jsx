
import { React, useState } from "react"
import "../Styles/header.css"
import Headroom from "react-headroom"
import Hamburger from 'hamburger-react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PersonIcon from '@mui/icons-material/Person';
function Header(){
  const [isOpen, setOpen] = useState(false)
  const [menu, setMenu] = useState(false)
  const menuSelector = ()=> {
    setMenu(!menu)
  }
  
  const login = true
  const currentYear = new Date().getFullYear()
return <div>
<Headroom>
    <nav id="myNav" className="navbar navbar-header navbar-expand-lg">

  <div className="container-fluid">
   <a className="navbar-brand" href="/">  <h2 className="navHeading"><span className="navHeadingWhite">D</span>S</h2></a>


    
    <div className={`navbar-toggler ${menu ? "clicked": ""}`} 
    onClick={menuSelector}  data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
<Hamburger toggled={isOpen} toggle={setOpen} />
</div>
    <div className={`collapse navbar-collapse ${menu ? "show" : ""}`} id="navbarNav">
<ul className="header-list">
    <li className={`header-list-content  ${menu ? "show": ""}`} style={  { transitionDelay: "0.15s"}}>
    <a href="/" className="ones">  ScoreFeed </a>
    </li>
    <li  className={`header-list-content ${menu ? "show": ""}`}  style={  { transitionDelay: "0.3s"}}>
      <a href="/" className="twos">  SportNews </a>
        </li>
        <li  className={`header-list-content ${menu ? "show": ""}`}  style={  { transitionDelay: "0.3s"}}>
      <a href="/" className="twos">
      Blog </a>
        </li>
        <li  className={`header-list-content ${menu ? "show": ""}`}  style={  { transitionDelay: "0.45s"}}>
        <a href="/" className="threes">  Latest </a>
        </li>
        <li  className={`header-list-content ${menu ? "show": ""}`} style={  { transitionDelay: "0.6s"}}>
        <a href="/" className="fours">  Fixtures </a>
        </li>
        <li className={`header-list-content  ${menu ? "show": ""}`} style={  { transitionDelay: "0.75s"}}>
        <a href="/" className="fives"> Foothball </a>
        </li>
        <li className={`header-list-content  ${menu ? "show": ""}`} style={  { transitionDelay: "0.9s"}}>
        <a href="/" className="sixs">  Baskethball </a>
        </li>
        <li className={`header-list-content  ${menu ? "show": ""}`} style={  { transitionDelay: "0.95s"}}>
        <a href="/" className="sevens">  Soccer </a>
        </li>
        <li className={`header-list-content  ${menu ? "show": ""}`} style={  { transitionDelay: "0.95s"}}>
        <a href="/" className="sevens">  Boxing </a>
        </li>
        <li className={`header-list-content  ${menu ? "show": ""}`} style={  { transitionDelay: "0.95s"}}>
        <a href="/" className="sevens">  Fitness </a>
        </li>

        <li  className=" header-list-awesome" ><i className="fa-solid fa-magnifying-glass " ></i></li>

       <li  className="header-list-awesome">{login ? <AccountCircleIcon style={{color : 'black'}}/>: <PersonIcon /> }</li> 
 

        
        <div className="underline"></div>
        <div className={`descriptionabout ${menu ?  "about" : ""}`}>
    <p>©DirectSport <span id="year">{currentYear}</span>, All rights reserved</p>
  </div>
</ul>
<div className="social-take">
<a href="/" title="Instagram" className="take-two">
            <i className="fa-brands  fa-instagram fa-xl"></i>
        </a>
        <a href="/" title="Linkedin" className="take-two">
            <i className="fa-brands fa-linkedin fa-xl"></i>
        </a>
  </div>
  <ul className="submapper">
  <div className="sub-stubborn">
    <li ><a href="#0" className="submapper-a">FAQ &amp; Shipping</a></li>
    <li ><a href="#0" className="submapper-a">Terms &amp; Conditions</a></li>
    </div>
  </ul>
    </div>
  </div>
</nav>
</Headroom>
</div>
}
export default Header