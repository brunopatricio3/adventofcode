import React, { useState } from 'react';
import Home from './subpages/Home'
import Tales from './subpages/Tales'
import About from './subpages/About'
import '../styles/main.scss';


function Application() {
  const [selectedPage, setSelectedPage] = useState("Tales");

  return (
    <div className="appWrapper">
      <div className="mainWrapper">
        <h1>Advent of Code - 2021 Challenge</h1>
        <div className="nav margin-bottom-m">
          <a onClick={()=> setSelectedPage("Home")} className="nav-item">[Home]</a>
          <a onClick={()=> setSelectedPage("Tales")} className="nav-item">[Submarine Adventure]</a>
          {/* <a onClick={()=> setSelectedPage("About")} className="nav-item">[About]</a> */}
          <a target="_blank" href="https://adventofcode.com/" className="nav-item">[Visit Advent of Code]</a>
        </div>
        {
          selectedPage === "Home" ?
          <Home /> : 
          selectedPage === "Tales" ?
          <Tales /> : 
          selectedPage === "About" ?
          <About /> : 
          <div></div>
        }
      </div>
    </div>
  );
}

export default Application;
