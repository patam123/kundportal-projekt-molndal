import React, { useState, useEffect } from "react";
import Home from "../components/homecomponents/home";
import Portfolio from "../components/portfoliocomponents/portfolio";
import Setting from "../components/settingcomponents/setting";
import ErrorPage from "../components/errorpage/errorpage";
import Links from "../components/navigationcomponents/links";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavCss from "../components/../design/navigation.css";
import DashboardStyling from "../design/dashboard.css";
import User from "../components/usercomponents/user";
import Userdata from "../components/usercomponents/userdata";
import errorPage from "../components/errorpage/errorpage";

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
    fetch("http://localhost:3300/shares")
      .then((response) => response.json())
      .then((data) => setShareData(data));
    fetch("http://localhost:3300/industries")
      .then((response) => response.json())
      .then((data) => setIndustryData(data));
    fetch("http://localhost:3300/suggestedindustries")
      .then((response) => response.json())
      .then((data) => setSuggestedIndustries(data));
  }, []);

  const [userData, setData] = useState();
  const [shareData, setShareData] = useState();
  const [industryData, setIndustryData] = useState();
  const [suggestedIndustries, setSuggestedIndustries] = useState();

  console.log(suggestedIndustries);

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
            <Route exact={true} path="/">
              {(userData && shareData && industryData && suggestedIndustries) && <Home
                user={userData && userData[0]}
                shares={shareData && shareData}
                industries={industryData && industryData}
                suggestedIndustries={suggestedIndustries && suggestedIndustries}
              />}
            </Route>
            <Route path="/portfolio">
              {shareData && <Portfolio shares={shareData && shareData} />}
            </Route>
            <Route path="/setting">
              {userData && <Setting userData={userData && userData[0]} />}
            </Route>
            <Route>{<ErrorPage />}</Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default Dashboard;
