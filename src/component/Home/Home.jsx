import React from 'react';
import {NavLink} from "react-router-dom";
import style from "./Home.module.scss"
const Home = () => {
    return (
        <div>
        
            <div className={style.logo}> </div>
            <div>
            <NavLink to="/Home" >Home</NavLink>
            <NavLink to="/ProductServices" >Product&Services</NavLink>
            <NavLink to="/Marketyard" >marketyard</NavLink>
            <NavLink to="/BuyerSeller" >Buyer&Seller</NavLink>
            <NavLink to="/Weather" >Weather</NavLink>
            <NavLink to="/AboutUs" >AboutUs</NavLink>
            <NavLink to="/Contact" >Contact</NavLink>
            </div>
        </div>
    );
};

export default Home;