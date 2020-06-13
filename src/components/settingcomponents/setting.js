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
    },
    {
      path: "/changepassword",
      name: "Byt Lösenord",
      style: "inactive-setting",
    },
    {
      path: "/settingpreferenser",
      name: "Preferenser",
      style: "inactive-setting",
    },
  ];

  const indexobj = { index: 0 };
  let [prevIndex, setIndex] = useState(indexobj.index);
  const [obj, setStyle] = useState(arrsetting);

  function makeClick(e) {
    const index = e.target.id;
    if (prevIndex !== index) {
      obj[index].style = "active-setting";
      obj[prevIndex].style = "inactive-setting";
      prevIndex = index;
    }
    setIndex(prevIndex);
    setStyle([...obj]);
  }
  return (
    <Router>
      <div id="setting-container">
        <HeadTitl title="Inställningar" />
        <div id="settingStyle">
          <div id="container">
            {obj.map((element, index) => (
              <Links
                path={element.path}
                name={element.name}
                navstyle={element.style}
                handleClick={makeClick}
                keyId={index}
              />
            ))}
          </div>
          <Switch>
            <Route exact path="/setting">
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
