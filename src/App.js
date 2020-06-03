
import React from 'react';
import {} from './components/nav.js';
import {section} from './components/section.js';
import {header} from './components/header.js';
import {navigate} from './components/nav.js'
import Profile from "./components/profile";
import Home from "./components/home";

import './App.css';

function App() {

  
  return (
    <div className="App">
    <Home title="Home"/>
    {navigate("1","2","3")}
    {section}
    {section}
    <Profile />
    </div>
  );
}

export default App;
