import React from 'react';
import './App.css';
import { Switch, Route } from "react-router-dom";
import { Link } from 'react-router-dom'
import Navigation from './component/navigation-component/navigation-component'
import Home from './component/home-component/home-component'
import Footer from './component/footer-component/footer-component'
import About from './component/about-component/about-component'

import Setting from './component/setting/setting.component'


function App() {
  return (
    <div>
      <Navigation />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/setting" component={Setting} />

      </Switch>
      <Footer />
    </div>
  );
}

export default App;
