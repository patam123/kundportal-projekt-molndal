
import React from 'react';
import Home from "./components/homecomponents/home";
import Setting from "./components/settingcomponents/setting"
import DashBoard from "./main/dashboard"
import Portfolio from "./components/portfoliocomponents/portfolio"
import User from "./components/usercomponents/user"


import './App.css';


const user = new User("Example",
"Person",
"19800505-5555",
"example.person@gmail.com",
"0700000000",
"Landsvägen 1",
"40010",
"Göteborg")

function App() {
 
  return (
    <div>
      <DashBoard/>
      <Portfolio user={user} />
      
    </div>
  );
}

export default App;
