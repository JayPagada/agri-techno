import React from "react";
import logo0 from "../../assete/CompanyLogo/facebook.svg";
import logo1 from "../../assete/CompanyLogo/google.svg";
import logo2 from "../../assete/CompanyLogo/instagram.svg";
import logo3 from "../../assete/CompanyLogo/pinterest.svg";
import logo4 from "../../assete/CompanyLogo/twitter.svg";
import logo5 from "../../assete/CompanyLogo/youtube.svg";
import "./Footer.css"
const Footer = () => {
    return(
    <footer className="Footer">
        <div className="creatorname">
            <h6>created by:</h6>
            <ul className="sub">
                <li>jay pagada</li>
                <li>movanik movaliya</li>
                <li>harsh manvar</li>
            </ul>
        </div>
        <div className="copyright">
            <h5>© 2019 by AgriTechno. </h5>
        </div>
        <div className="allLogos">
            <img className="logo0" src={logo0}/>
            <img className="logo1" src={logo1}/>
            <img className="logo2" src={logo2}/>
            <img className="logo3" src={logo3}/>
            <img className="logo4" src={logo4}/>
            <img className="logo5" src={logo5}/>
        </div>
    </footer>)
}
export default Footer