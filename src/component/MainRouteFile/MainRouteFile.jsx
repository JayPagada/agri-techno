import React from "react";
import { Layout } from 'antd';
import {Route,Switch} from "react-router-dom"
import HomeSub from "../Home/HomeSub";
import ProductsServices from "../ProductsServices/ProductsServices";
import Contact from "../Contact/Contact";
import AboutUs from "../AboutUs/AboutUs";
import BuyerSeller from "../BuyerSeller/BuyerSeller";
import "./MainRouteFile.css"

const {  Content } = Layout;

const mainRouteFile =()=>{

    return (
        <Layout className="content-layout">
            <Content className="content-layout-section">
                <Switch>
                    <Route path="/AgriTechno/Home" component={HomeSub}/>
                    <Route path="/AgriTechno/ProductServices" component={ProductsServices}/>
                    <Route path="/AgriTechno/BuyerSeller" component={BuyerSeller}/>
                    <Route path="/AgriTechno/Contact" component={Contact}/>
                    <Route path="/AgriTechno/AboutUs" component={AboutUs}/>
                </Switch>
            </Content>
        </Layout>
    );
}

export default mainRouteFile;
