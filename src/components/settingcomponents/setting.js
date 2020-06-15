import React, { useState, useEffect } from "react";
import ProfileSetting from "./profilesetting";
import ChangePassword from "./changepassword";
import SettingPreferenser from "./settingpreferenser";
import Links from "../navigationcomponents/links";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HeadTitl from "../reusedcomponents/headtitle";
import SettingCSS from "../../design/setting.css";

const Setting = () => {
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
              <ProfileSetting />
            </Route>
            <Route path="/changepassword">
              <ChangePassword />
            </Route>
            <Route path="/settingpreferenser">
              <SettingPreferenser />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default Setting;
