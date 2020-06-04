
import React from 'react';
// import {header} from './components/header.js';

import Home from "./components/homecomponents/home";
import Portfolio from "./components/portfoliocomponents/portfolio"
import User from "./components/usercomponents/user"


import './App.css';

function App() {
  const user1 = new User(
    "Example",
    "Person",
    "19800505-5555",
    "example.person@gmail.com",
    "0700000000",
    "Landsvägen 1",
    "40010",
    "Göteborg"
  );
 
  return (
    <div className="App">
    <div id="nav-style"></div>
    <Home title="Home"/>
    <Portfolio user={user1}/>
    </div>
  );
}

export default App;
