import React, { useState, useEffect } from "react";
import Home from "../components/homecomponents/home";
import Portfolio from "../components/portfoliocomponents/portfolio";
import Setting from "../components/settingcomponents/setting";
import Links from "../components/navigationcomponents/links";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavCss from "../components/../design/navigation.css";
import DashboardStyling from "../design/dashboard.css";
import User from "../components/usercomponents/user";
import Userdata from "../components/usercomponents/userdata";

const user = new User(
  "Example",
  "Person",
  "19800505-5555",
  "example.person@gmail.com",
  "0700000000",
  "Landsvägen 1",
  "40010",
  "Göteborg"
);



function Dashboard() {
  const arr = [
    {
      path: "/",
      icon: "home-Logo",
      name: "Home",
      style: "active",
    },
    {
      path: "/portfolio",
      icon: "port-Logo",
      name: "Min Portfölj",
      style: "inactive",
    },
    {
      path: "/setting",
      icon: "setting-Logo",
      name: "Inställningar",
      style: "inactive",
    },
  ];

  useEffect(() => {
    fetch("http://localhost:3300/customers").then(response => response.json()).then(data => setData(data));
  }, [])

  const [myData, setData] = useState();
  console.log(myData && myData[0])

  const indexobj = { index: 0 };
  let [prevIndex, setIndex] = useState(indexobj.index);

  const [items, setStyle] = useState(arr);

  function doClick(e) {
    const index = e.target.id;
    if (prevIndex !== index) {
      items[index].style = "active";
      items[prevIndex].style = "inactive";
      prevIndex = index;
    }
    setIndex(prevIndex);
    setStyle([...items]);
  }

  return (
    <Router>
      <div id="dashboard-style">
        <div id="sidebar">
          <div id="img-link-container">
            <div id="logo"></div>
            <div id="link-Container">
              {items.map((element, index) => {
                return (
                  <Links
                    path={element.path}
                    name={element.name}
                    icon={element.icon}
                    handleClick={doClick}
                    keyId={index}
                    navstyle={element.style}
                  />
                );
              })}
            </div>

            <div id="sidebarfoot">
              <div id="slash"></div>
              <button id="logout">
                <img id="logout-img" src="/logout.svg" alt="img" /> Logga ut
              </button>
            </div>
          </div>
        </div>
        
        <div id="page-style">         
          <Switch>
            <Route exact path="/">
              <Home user={myData && myData[0]} redigera={doClick} minport={doClick}/>
            </Route>
            <Route path="/portfolio" exact>
              <Portfolio user={user} />
            </Route>
            <Route path="/setting">
              <Setting />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default Dashboard;
