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
      isexact: true,
    },
    {
      path: "/portfolio",
      icon: "port-Logo",
      name: "Min Portfölj",
      isexact: false,
    },
    {
      path: "/setting",
      icon: "setting-Logo",
      name: "Inställningar",
      isexact: false,
    },
  ];

  useEffect(() => {
    fetch("http://localhost:3300/customers")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  const [myData, setData] = useState();
  console.log(myData && myData[0]);

  return (
    <Router>
      <div id="dashboard-style">
        <div id="sidebar">
          <div id="img-link-container">
            <div id="logo"></div>
            <div id="link-Container">
              {arr.map((element, index) => {
                return (
                  <Links
                    path={element.path}
                    name={element.name}
                    icon={element.icon}
                    keyId={index}
                    isExact={element.isexact}
                    inActive="inactive"
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
            <Route path="/" exact={true}>
              <Home user={myData && myData[0]} />
            </Route>
            <Route path="/portfolio">
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
