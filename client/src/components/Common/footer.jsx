import React from "react";
import axios from "axios"
import { useState } from "react";
import { useMediaQuery } from 'react-responsive';
import Newsletter from "./newsletter"
function Footer(){
    const isDesktop = useMediaQuery({minWidth : 926})
    const isPhone = useMediaQuery({ maxDeviceWidth: 480 });
    const currentYear = new Date().getFullYear()
    const footer = {
        bottom: "0px",
        backgroundColor: "#100034",
        width: "100%",
        minWidth: "300px",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
    }
    const footerWrapper = {
        display: "flex",
        flexDirection: "column",
        maxWidth: "1024px",
        width: "100%",
        padding: "16px"
    }
    const linksColor = {
        color : "white",
        position: 'relative',
        display: 'inline-block',
        textDecoration: 'none',
        paddingTop: '4%',
        paddingBottom: '4%',
    }
    const footerColumnsSection = {
        display: "flex",
        flexDirection: "column",
        flex: "1 0 160px",
        maxWidth: "160px",
    }
    const footerColumns = {
        display : "flex",
        flexWrap: "wrap",
        padding: "24px 8px 36px 8px",
    }
    const footerColumnsUl = {
        display: "flex",
        gap: "12px",
        listStyleType: "none",
        padding: "0",
        margin: "0",
        flexDirection: "column",
        fontWeight: "600",
    }
    const footerLogo = {
        paddingTop : "5%",
        color : "white",
        fontFamily: "'Ethnocentric Rg', sans-serif",
        display: "flex",
        flexDirection: "column",
        flex: "1 0 160px",
        maxWidth: "160px",
        marginRight: isDesktop ? 'auto' : '0',
        
    }
    const location = {
        display: "inline",
        color : "white"
    }
    const homeFooterLinksHeaders = {
        color: "#D0D0F7",
        marginTop: "0",
        marginBottom: "16px",
        fontSize: "1rem",
        cursor : "pointer"
    }
    const homeFooterBottom = {
        marginTop: '48px',
        display: 'flex',
        alignItems: 'end',
        width: '100%',
        gap: '16px',
        padding: '16px 0px',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        color: 'var(--text-color)',
        borderTop: '1px solid var(--border)',
    }
    const homeFeedback = {
        fontFamily: "'Clash Display', sans-serif",
        paddingTop: '10%',
    }
    const footerlinks = {
        display: "flex",
        flexDirection : "row",
        flexWrap: "wrap",
        flexGrow: "4",
        gap: "48px 16px"
        
    }
    const homeCopyright = {
        fontSize: "16px",
        margin: "0 4px",
        color : "white"
    }
    const homeFooterDescription = {
        fontFamily: "'Clash Display', sans-serif",
    
    }
    const homeSocialWrapper = {
        display: 'flex',
        width: '100%',
        padding: '10px 0px',
        justifyContent: 'center',
        marginBottom: '16px',
        alignItems: 'center',
        color: 'var(--text-color)',
    }
    const homeSocialLinks = {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        color: "white",
    }
    const homeSocialLinksUl = {
        display: 'flex',
        flexWrap: 'wrap',
        listStyleType: 'none',
        gap: isPhone ? '20px' : '70px',
    }
    const faLg = {
        color : "white"
    }
    const homeLastFooter = {
        fontFamily: "'Clash Display', sans-serif",
        fontSize: "0.7rem",
        color: "#8f8f8f"
    }
    const [country, setCountry] = useState();
    const countryName = () => {
        const locationUri = 'https://api.geoapify.com/v1/ipinfo?apiKey=dfc85fc3a4824c5b9647034d179054a4'
           axios.get(locationUri)
           .then((response)=>{
          setCountry(response.data.country.name)
           })
           .catch((error)=>{
            setCountry()
            console.log(error)
           })
    }
countryName()


return <div>
<footer style={footer}>
            <div class="footer-wrapper" style={footerWrapper}>
    
          <Newsletter />
                <div className="footer-columns" style={footerColumns}>
                    <div className="footer-links" id = "footerlinks" style={footerlinks}>
                        <div className="footer-logo" style={footerLogo}>
                           <h1 class="home-footer-logo">DS</h1>
                          <span class="home-feedback" style={homeFeedback}> Visit Feedback Center </span>
                        </div>
                        <section style={footerColumnsSection}>
                            <h3 class="home-footer-links-headers" style={homeFooterLinksHeaders}>Sports</h3>
                            <ul style={footerColumnsUl}>
                                <li>
                                    <a href="/" title="API"  class="home-footer-links" style={linksColor}>Soccer</a>
                                </li>
                                <li> 
                                    <a href="/" title="Pricing" class="home-footer-links" style={linksColor}>Foothball</a>
                                </li>
                                <li>
                                    <a href="/" title="Documentation" class="home-footer-links" style=  {linksColor}>Baskethball</a>
                                </li>
                                <li>
                                    <a href="/" title="Release Notes" class="home-footer-links" style={linksColor}>Cricket</a>
                                </li>
                                <li>
                                    <a href="/" title="Status" class="home-footer-links" style={linksColor}>Boxing</a>
                                </li>
                                <li>
                                    <a href="/" title="Status" class="home-footer-links" style={linksColor}>Tennis</a>
                                </li>
                            </ul>
                        </section>
                        <section style={footerColumnsSection}>
                            <h3 class="home-footer-links-headers" style={homeFooterLinksHeaders}>Resources</h3>
                            <ul style={footerColumnsUl} >
                                <li>
                                    <a href="/" title="Support" class="home-footer-links" style={linksColor}>Support</a>
                                </li>
                                <li>
                                    <a href="/" title="Sitemap" class="home-footer-links" style={linksColor}>Sitemap</a>
                                </li>
                                <li>
                                    <a href="/" title="Newsletter" class="home-footer-links" style={linksColor}>Newsletter</a>
                                </li>
                                <li>
                                    <a href="/" title="Help Centre" class="home-footer-links" style={linksColor}>Help Centre</a>
                                </li>
                                <li>
                                    <a href="/" title="Investor" class="home-footer-links" style={linksColor}>Investor</a>
                                </li>
                            </ul>
                        </section>
                        <section style={footerColumnsSection}>
                            <h3 class="home-footer-links-headers" style={homeFooterLinksHeaders}>Company</h3>
                            <ul style={footerColumnsUl}>
                                <li>
                                    <a href="/" title="About Us" class="home-footer-links" style={linksColor}>About Us</a>
                                </li>
                                <li>
                                    <a href="/" title="Blog" class="home-footer-links" style={linksColor}>Blog</a>
                                </li>
                                <li>
                                    <a href="/" title="Careers" class="home-footer-links" style={linksColor}>Careers</a>
                                </li>
                                <li>
                                    <a href="/" title="Press" class="home-footer-links" style={linksColor}>Press</a>
                                </li>
                                <li>
                                    <a href="/" title="Contact" class="home-footer-links" style={linksColor}>Contact</a>
                                </li>
                            </ul>
                        </section>
                        <section style={footerColumnsSection}>
                            <h3 class="home-footer-links-headers" style={homeFooterLinksHeaders}>Legal</h3>
                            <ul style={footerColumnsUl}>
                                <li>
                                    <a href="/" title="Terms and services" class="home-footer-links" style={linksColor}>
                                        Terms
                                    </a>
                                </li>
                                <li>
                                    <a href="/" title="Privacy Policy" class="home-footer-links" style={linksColor}>
                                        Privacy
                                    </a>
                                </li>
                                <li>
                                    <a href="/" title="Cookies" class="home-footer-links" style={linksColor}>
                                        Cookies
                                    </a>
                                </li>
                                <li>
                                    <a href="/" title="Licenses" class="home-footer-links" style={linksColor}>
                                        Licenses
                                    </a>
                                </li>
                                <li>
                                    <a href="/" title="Cookies" class="home-footer-links" style={linksColor}>
                                        Contact
                                    </a>
                                </li>
                            </ul>
                        </section>
                    </div>
                   
                </div>
                 <div class="home-social-wrapper" style={homeSocialWrapper}>
                    <div class='home-social-links' style={homeSocialLinks}>
                        <ul style={homeSocialLinksUl}>
                            <li>
                                <a href="/" title="Instagram">
                                    <i class="fa-brands fa-instagram fa-lg" style={faLg}></i>                  
                                </a>
                            </li>
                            <li>
                                <a href="/" title="Linkedin">
                                    <i class="fa-brands fa-linkedin fa-lg" style={faLg}></i> 
                                </a>
                            </li>
                            <li>
                                <a href="/" title="Twitter">
                                    <i class="fa-brands fa-x-twitter fa-lg" style={faLg} ></i> 
                                </a>
                            </li>
                            <li>
                                <a href="/" title="Youtube">
                                    <i class="fa-brands fa-youtube fa-lg" style={faLg} ></i> 
                                </a>
                            </li>
                            <li>
                                <a href="/" title="GitHub">
                                    <i class="fa-brands fa-square-facebook fa-lg" style={faLg}></i> 
                                </a>
                            </li>
                            <li>
                                <a href="/" title="GitHub">
                                    <i class="fa-brands fa-telegram fa-lg"style={faLg} ></i> 
                                </a>
                            </li>
                            <li>
                                <a href="/" title="GitHub">
                                    <i class="fa-brands fa-github fa-lg" style={faLg}></i> 
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="home-page-location-container" style={location}>
                <i class="fa-solid fa-location-dot home-page-location"></i> <span style={{color: "white"}}>{country}</span>
                </div>
                <div className="home-footer-bottom" style={homeFooterBottom}>
                    <div class="home-footer-description" style={homeFooterDescription}>
                        <h5 class="home-copyright" style={{color: "white"}}>Sporting Entertainment</h5>
                        <div class="home-last-footer" style={homeLastFooter}>Privacy Accessibility Terms</div>
                    </div>
                    <small class="home-copyright" style={homeCopyright}>©DirectSport <span id="year">{currentYear}</span>, All rights reserved</small>
                </div>
            </div>
        </footer>

</div>
}
export default Footer