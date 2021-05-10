import React from "react";
import "./HomeSub.css"
import Fertilizers from "../../assete/Fertilizers.png"
import Logistics from "../../assete/Logistics.png"
import Research from "../../assete/Research.png"
import homeAboutUs from "../../assete/homeAboutUs.jpg"
import NewsImg from "../../assete/argitechno4.jpg"
import {Button} from "antd";
import {NavLink} from "react-router-dom";
const HomeSub = () => {
return(
    <div className="containerHomeSub">
        <div className="caption-img">
            <div className="caption">
                <h4>
                    Solutions for a Healthier,
                    <br/>
                    Sustainable Future
                </h4>
            </div>
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
                <div className="ProductsServicesLogo">
                    <div className="Fertilizers">
                        <img src={Fertilizers}/>
                        <p>Fertilizers & <br/>
                            Pesticides</p>
                    </div>
                    <div className="Research">
                        <img src={Research}/>
                        <p>Research & <br/>
                            Development</p>
                    </div>
                    <div className="Logistics">
                        <img src={Logistics}/>
                        <p>Logistics & <br/>
                            Equipment</p>
                    </div>
                </div>
                <div className="line"/>
                <div className="homeAboutUs">
                    <h1>About us</h1>
                    <img src={homeAboutUs}/>
                    <p>In the Agri-techno we give the all type of information in the Agri-techno we give crop management,
                        products&all type of Services.
                        Agri-Techno is that type of web-site in this we provide a marketing yard crop prize list and other information</p>
                    <Button>
                        <NavLink to="/AgriTechno/AboutUs">
                        Read More
                        </NavLink>
                    </Button>
                </div>
            </div>
            <div className="news">
                <h3>Latest News</h3>
                <div className="news1">
                <img src={NewsImg}/>
                <h2>title</h2>
                <p>I'm a paragraph. Click here to add your own text and edit me. It’s easy.
                    Just click “Edit Text” or double click me to add your own content and make changes to the font.</p>
                <Button onClick="https://zeenews.india.com/tags/indian-agriculture.html">Read More</Button>
                </div>
                <div className="news2">
                <img src={NewsImg}/>
                <h2>title</h2>
                <p>I'm a paragraph. Click here to add your own text and edit me. It’s easy.
                    Just click “Edit Text” or double click me to add your own content and make changes to the font.</p>
                <Button onClick="https://zeenews.india.com/tags/indian-agriculture.html">Read More</Button>
                </div>
            </div>
        </div>
    </div>
)
};
export default HomeSub