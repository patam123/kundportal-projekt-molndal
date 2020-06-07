import React, { useState } from "react";
import Home from "../components/homecomponents/home";
import Portfolio from "../components/portfoliocomponents/portfolio";
import Setting from "../components/settingcomponents/setting";
import Navigation from "../components/navigationcomponents/nav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavCss from "../components/../design/navigation.css";
import DashboardStyling from "../design/dashboard.css";
import RoutePath from "../components/navigationcomponents/routepath";

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
                  <Navigation
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
                <button id="logout"><img src="/logout.svg" alt="img"/> Logga ut</button>           
            </div>  
          </div>
        </div>
        <div id="page-style">
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/portfolio" exact>
              <Portfolio />
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
