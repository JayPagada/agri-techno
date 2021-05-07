import React from "react";
import { Button, Layout, Menu } from "antd";
// import { LogoutOutlined } from '@ant-design/icons';
import { NavLink } from "react-router-dom";
import "./Home.css";
import image from "../../assete/logo.png";
import logo0 from "../../assete/CompanyLogo/facebook.svg";
import logo1 from "../../assete/CompanyLogo/google.svg";
import logo2 from "../../assete/CompanyLogo/instagram.svg";
import logo3 from "../../assete/CompanyLogo/pinterest.svg";
import logo4 from "../../assete/CompanyLogo/twitter.svg";
import logo5 from "../../assete/CompanyLogo/youtube.svg";

const { Header } = Layout;
const Home = () => {
  return (
    <div className="container">
      <Header className="fix-topbar">
        <div className="logo">
          <img src={image} height="95px" />
        </div>
        <div className="manu">
          <Menu theme="dark" mode="horizontal">
            <Button>
              <NavLink to="/Home">Home</NavLink>
            </Button>
            <Button>
              <NavLink to="/ProductServices">Product&Services</NavLink>
            </Button>
            <Button>
              <NavLink to="/Marketyard">marketyard</NavLink>
            </Button>
            <Button>
              <NavLink to="/BuyerSeller">Buyer&Seller</NavLink>
            </Button>
            <Button>
              <NavLink to="/Weather">Weather</NavLink>
            </Button>
            <Button>
              <NavLink to="/AboutUs">AboutUs</NavLink>
            </Button>
            <Button>
              <NavLink to="/Contact">Contact</NavLink>
            </Button>
          </Menu>
        </div>
      </Header>
      <div className="caption-img">
        <div className="caption">
          <h4>
            Solutions for a Healthier,
            <br />
            Sustainable Future
          </h4>
        </div>
        <div className="main">
          <div className="content">
            <h4>Products and services</h4>
            <p>
              I'm a paragraph. Click here to add your own text and edit me. It’s
              easy. Just click “Edit Text” or double click me to add your own
              content and make changes to the font. I’m a great place for you to
              tell a story and let your users know a little more about you.
            </p>
            <div className="news">
              <h3>Latest News</h3>
            </div>
          </div>
        </div>
      </div>
      <footer>
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
        <div className="allLogos" >
        <img className="logo0" src={logo0} />
        <img className="logo1" src={logo1} />
        <img className="logo2" src={logo2} />
        <img className="logo3" src={logo3} />
        <img className="logo4" src={logo4} />
        <img className="logo5" src={logo5} />
        </div>
      </footer>
    </div>
  ); 
};

export default Home;
