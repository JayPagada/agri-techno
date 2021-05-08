import React from 'react';
import { Route,Switch } from 'react-router-dom';
import './App.css';
import Home from './component/Home/Home';
import AboutUs from './component/AboutUs/AboutUs';
import Contact from './component/Contact/Contact';
function App() {
  return (
    <div className="App">
    <Switch>
      <Route path="/" exact component={Home}/>,
      <Route path="/aboutus" component={AboutUs}/>,
      <Route path="/contactus" component={Contact}/>,
    </Switch>
    </div>
  );
}

export default App;
