import React from 'react';
import { Route,Switch } from 'react-router-dom';
import './App.css';
import Home from './component/Home/Home';
import AboutUs from './component/AboutUs/AboutUs';
import Contact from './component/Contact/Contact';
import HomeSub from "./component/Home/HomeSub";
function App() {
  return (
    <div className="App">
    <Switch>
      <Route path="/AgriTechno" component={Home}/>
      <Route path="/AgriTechno/Home" exact component={HomeSub}/>
      <Route path="/AgriTechno/Contact" exact component={Contact}/>
      <Route path="/AgriTechno/AboutUs" exact component={AboutUs}/>
    </Switch>
    </div>
  );
}

export default App;
