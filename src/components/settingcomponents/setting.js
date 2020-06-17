import React, { useState, useEffect } from "react";
import ProfileSetting from "./profilesetting";
import ChangePassword from "./changepassword";
import SettingPreferenser from "./settingpreferenser";
import ErrorPage from "../errorpage/errorpage";
import Links from "../navigationcomponents/links";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HeadTitl from "../reusedcomponents/headtitle";
import SettingCSS from "../../design/setting.css";

const Setting = ({ userData }) => {
  const arrsetting = [
    {
      path: "/setting",
      name: "Profil",
      style: "active-setting",
      isexact: true,
    },
    {
      path: "/changepassword",
      name: "Byt Lösenord",
      style: "active-setting",
      isexact: false,
    },
    {
      path: "/settingpreferenser",
      name: "Preferenser",
      style: "active-setting",
      isexact: false,
    },
  ];

  return (
    <Router>
      <div id="setting-container">
        <HeadTitl title="Inställningar" />
        <div id="settingStyle">
          <div id="container">
            {arrsetting.map((element, index) => (
              <Links
                path={element.path}
                name={element.name}
                keyId={index}
                isExact={element.isexact}
                isActive={element.style}
                inActive="inactive-setting"
              />
            ))}
          </div>
          <Switch>
            <Route exact={true} path="/setting">
              <ProfileSetting
                fname={userData && userData.FirstName}
                lname={userData && userData.LastName}
                perNum={userData && userData.PersonNumber}
                telNum={userData && userData.PhoneNumber}
                email={userData && userData.Email}
                address={userData && userData.Address}
                postCode={userData && userData.PostCode}
                postArea={userData && userData.PostAddress}
              />
            </Route>
            <Route path="/changepassword">
              <ChangePassword />
            </Route>
            <Route path="/settingpreferenser">
              <SettingPreferenser />
            </Route>
            <Route>{<ErrorPage />}</Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default Setting;
