import React, {useEffect} from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import './App.css';
import {useDispatch,useSelector} from "react-redux";
import Home from './component/Home/Home';
import AboutUs from './component/AboutUs/AboutUs';
import Contact from './component/Contact/Contact';
import HomeSub from "./component/Home/HomeSub";
import ProductsServices from "./component/ProductsServices/ProductsServices";
import BuyerSeller from "./component/BuyerSeller/BuyerSeller";
import Weather from './component/Weather/Weather';
import Marketyard from './component/Marketyard/Marketyard';
import Login from './component/Login/Login';
import Register from './component/Login/Register';
import * as actions from "./Redux/Auth";
function App() {
    const dispatch = useDispatch()
    const authCheck = useSelector(state => state.auth);

    useEffect(()=>{
        dispatch(actions?.authCheckState());
    },[dispatch])
  let routes = (
        <Switch>
          <Route path="/Login" exact component={Login}/>,
          <Route path="/Register" exact component={Register}/>,
          <Redirect to="/Login"/>
        </Switch>
  );

  if (authCheck?.token) {
    routes = (
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
            <Redirect to="/AgriTechno/Home" />
          </Switch>
    );
  }
  return (
    <div className="App">
      {routes}
    </div>
  );
}

export default App;
