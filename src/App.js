import React from 'react';
import { Route,Switch } from 'react-router-dom';
import './App.css';
import Home from './component/Home/Home';
import AboutUs from './component/AboutUs/AboutUs';
import Contact from './component/Contact/Contact';
import HomeSub from "./component/Home/HomeSub";
import ProductsServices from "./component/ProductsServices/ProductsServices";
import BuyerSeller from "./component/BuyerSeller/BuyerSeller";
import Weather from './component/Weather/Weather';
import Marketyard from './component/Marketyard/Marketyard';
function App() {
  return (
    <div className="App">
    <Switch>
      <Route path="/AgriTechno" component={Home}/>
      <Route path="/AgriTechno/Home" exact component={HomeSub}/>
      <Route path="/AgriTechno/ProductServices" exact component={ProductsServices}/>
      <Route path="/AgriTechno/BuyerSeller" exact component={BuyerSeller}/>
      <Route path="/AgriTechno/Contact" exact component={Contact}/>
      <Route path="/AgriTechno/ContactUs" exact component={Contact}/>
      <Route path="/AgriTechno/AboutUs" exact component={AboutUs}/>
      <Route path="/AgriTechno/Weather" exact component={Weather}/>
      <Route path="/AgriTechno/Marketyard" exact component={Marketyard}/>

    </Switch>
    </div>
  );
}

export default App;
