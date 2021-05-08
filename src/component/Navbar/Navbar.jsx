import React from "react";
import { Layout, Menu,Button } from 'antd';
import "./Navbar.css"
import {NavLink} from "react-router-dom";
import image from "../../assete/logo.png";
const { Header } = Layout;
const Navbar = ()=>{
    return (
        <Header className="fix-topbar">
            <div className="logo">
                <img src={image} height="100px" />
            </div>
            <Menu theme="dark" mode="horizontal" className="menuItem">
                    <Menu.Item key="Home">
                        <NavLink to="/AgriTechno/Home" >
                            Home
                        </NavLink>
                    </Menu.Item>

                    <Menu.Item key="ProductServices">
                        <NavLink to="/AgriTechno/ProductServices" >
                        Product&Services
                        </NavLink>
                    </Menu.Item>
                    
                    <Menu.Item key="Marketyard">
                        <NavLink to="/AgriTechno/Marketyard" >
                        Marketyard
                        </NavLink>

                    </Menu.Item>

                    <Menu.Item key="BuyerSeller">
                        <NavLink to="/AgriTechno/BuyerSeller" >
                        Buyer&Seller
                        </NavLink>
                    </Menu.Item>

                    <Menu.Item key="Weather">
                        <NavLink to="/AgriTechno/Weather" >
                        Weather
                        </NavLink>
                    </Menu.Item>

                    <Menu.Item key="AboutUs">
                        <NavLink to="/AgriTechno/AboutUs" >
                        AboutUs
                        </NavLink>
                    </Menu.Item>

                    <Menu.Item key="Contact">
                        <NavLink to="/AgriTechno/ContactUs" >
                        Contact Us
                        </NavLink>
                    </Menu.Item>

            </Menu>
        </Header>
    );
}

export default Navbar;

