import React from "react";
import { Layout } from "antd";
import { Route, Switch } from "react-router-dom";
import HomeSub from "../Home/HomeSub";
import ProductsServices from "../ProductsServices/ProductsServices";
import Contact from "../Contact/Contact";
import AboutUs from "../AboutUs/AboutUs";
import "./MainRouteFile.css";
import Weather from "../Weather/Weather";
import Marketyard from "../Marketyard/Marketyard";
import BuyerSeller from "../BuyerSeller/BuyerSeller";
import "./MainRouteFile.css"

const { Content } = Layout;

const mainRouteFile = () => {
  const Location = window.location.pathname;
  const title = Location.replace("/AgriTechno/", "");

  return (
    <Layout className="content-layout">
      <Content className="content-layout-section">
        {
        (title !== "Home")&&
          <div className="titleHeader">
            <h1>{title}</h1>
          </div>
        }
        <Switch>
          <Route path="/AgriTechno/Home" component={HomeSub} />
          <Route path="/AgriTechno/ContactUs" component={Contact} />
          <Route path="/AgriTechno/AboutUs" component={AboutUs} />
          <Route path="/AgriTechno/Weather" component={Weather} />
          <Route path="/AgriTechno/Marketyard" component={Marketyard}/>
          <Route path="/AgriTechno/Marketyard/Rajkot" component={Marketyard}/>
          <Route path="/AgriTechno/Marketyard/Gondal" component={Marketyard}/>
          <Route path="/AgriTechno/ProductServices" component={ProductsServices}/>
          <Route path="/AgriTechno/BuyerSeller" component={BuyerSeller}/>
        </Switch>
      </Content>
    </Layout>
  );
};

export default mainRouteFile;