import React from 'react';
import './navigation-componet.styles.css'
import { Link } from "react-router-dom";
import Home from '../home-component/home-component'
import BrandName from '../brand-name/brand-name.component'

const Navigation = () => (
  <div className="nav">
    <BrandName />
    <div className="options">
      <Link className="home" to="/">
        <h3>HOME</h3>
      </Link>
      <Link to="/about">
        <h3>ABOUT</h3>
      </Link>
      <Link to="/setting">
        <h3>SETTING</h3>
      </Link>

      {/* <div> <h3>HOME</h3> </div>
      <div> <h3>ABOUT</h3></div>
      <div> <h3>SETTING</h3></div> */}
    </div>
  </div>
);
  
export default Navigation;

