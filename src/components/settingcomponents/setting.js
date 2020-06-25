import React, { useState, useEffect } from "react";
import ProfileSetting from "./profilesetting";
import ChangePassword from "./changepassword";
import SettingPreferenser from "./settingpreferenser";
import ErrorPage from "../errorpage/errorpage";
import Links from "../navigationcomponents/links";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HeadTitl from "../reusedcomponents/headtitle";
import SettingCSS from "../../design/setting.css";

const Setting = ({ userData, industryData }) => {
  const arrsetting = [
    {
      path: "/home/setting",
      name: "Profil",
      style: "active-setting",
      isexact: true,
    },
    {
      path: "/home/setting/changepassword",
      name: "Byt Lösenord",
      style: "active-setting",
      isexact: false,
    },
    {
      path: "/home/setting/preferenser",
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
                key={`${index}link`}
                path={element.path}
                name={element.name}
                keyId={`${index}setting`}
                isExact={element.isexact}
                isActive={element.style}
                inActive="inactive-setting"
              />
            ))}
          </div>
          <Switch>
            <Route exact={true} path="/home/setting">
              <ProfileSetting
                fname={userData && userData.FirstName}
                lname={userData && userData.LastName}
                perNum={userData && userData.PersonNumber}
                telNum={userData && userData.PhoneNumber}
                email={userData && userData.Email}
                address={userData && userData.Address}
                postCode={userData && userData.PostCode}
                postArea={userData && userData.PostAddress}
                photo={userData && userData.ProfilePicture}
              />
            </Route>
            <Route path="/home/setting/changepassword">
              <ChangePassword email={userData && userData.Email} hash={userData && userData.hash} />
            </Route>
            <Route path="/home/setting/preferenser">
              <SettingPreferenser industryData={industryData} />
            </Route>
            <Route>{<ErrorPage />}</Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default Setting;
