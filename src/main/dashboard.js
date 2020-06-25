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
import { useHistory } from "react-router-dom";

function Dashboard() {
  const arr = [
    {
      path: "/home",
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
  const user = JSON.parse(sessionStorage.getItem("userData"));
  useEffect(() => {

    fetch("http://localhost:3300/customers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: user[0].Email,
      }),
    })
      .then((response) => response.json())
      .then((data) => setUserData(data));

    fetch("http://localhost:3300/shares", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: user[0].Email,
      }),
    })
      .then((response) => response.json())
      .then((data) => setShareData(data));

    fetch("http://localhost:3300/industries", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: user[0].Email,
      }),
    })
      .then((response) => response.json())
      .then((data) => setIndustryData(data));

    fetch("http://localhost:3300/suggestedindustries", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: user[0].Email,
      }),
    })
      .then((response) => response.json())
      .then((data) => setSuggestedIndustries(data));
    fetch("http://localhost:3300/allindustries")
      .then((response) => response.json())
      .then((data) => setAllIndustries(data));
  }, []);
  const [userData, setUserData] = useState();
  const [shareData, setShareData] = useState();
  const [industryData, setIndustryData] = useState();
  const [suggestedIndustries, setSuggestedIndustries] = useState();
  const [allindustries, setAllIndustries] = useState();

  const history = useHistory();
  const handleLogout=()=>{
    sessionStorage.clear()
    history.push("/")
  }
  
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
                    key={`link${index}`}
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
              <button onClick={handleLogout} id="logout">
                <img id="logout-img" src="/logout.svg" alt="img" /> Logga ut
              </button>
            </div>
          </div>
        </div>

        <div id="page-style">
          <Switch>
            <Route path="/home">
              {userData && shareData && industryData && suggestedIndustries && (
                <Home
                  user={userData && userData[0]}
                  shares={shareData && shareData}
                  industries={industryData && industryData}
                  suggestedIndustries={
                    suggestedIndustries && suggestedIndustries
                  }
                />
              )}
            </Route>
            <Route path="/portfolio">
              {shareData && <Portfolio shares={shareData && shareData} />}
            </Route>
            <Route path="/setting">
              {user && allindustries && (
                <Setting
                  userData={userData && userData[0]}
                  industryData={allindustries}
                />
              )}
            </Route>
            <Route>{<ErrorPage />}</Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default Dashboard;
