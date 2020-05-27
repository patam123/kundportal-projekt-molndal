
import React from 'react';
import {} from './nav.js';
import {section} from './section.js';
import {head} from './header.js';
import {nav} from './nav.js'

import './App.css';

function App() {

  console.log("Hello");
  return (
    <div className="App">
    {head("hello")}
    {nav("1","2","3")}
    {section}
    {section}

    </div>
  );
}

export default App;
