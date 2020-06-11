import React from "react";
import Input from "../reusedcomponents/input";
import Button from "../reusedcomponents/button";
import PreferenceCss from "../../design/preference.css";
import profileCss from "../../design/settingprofileStyle.css";

function settingPreferenser() {
  return (
    <div>
      <div id="profilesettingStyle">
        <div id="input-Container-Style">
          <div className="checkBox-style">
            <Input
              inputtype="checkbox"
              container="divContainer"
              inputStyle="checkBoxStyle"
              labelTwo="Bygg"
            />
            <Input
              inputtype="checkbox"
              container="divContainer"
              inputStyle="checkBoxStyle"
              labelTwo="Industrix"
            />
          </div>
        </div>
        <div className="checkBox-style">
          <Input
            inputtype="checkbox"
            container="divContainer"
            inputStyle="checkBoxStyle"
            labelTwo="Industrix"
          />
          <Input
            inputtype="checkbox"
            container="divContainer"
            inputStyle="checkBoxStyle"
            labelTwo="Industrix"
          />
        </div>
        <div className="checkBox-style">
          <Input
            inputtype="checkbox"
            container="divContainer"
            inputStyle="checkBoxStyle"
            labelTwo="Industrix"
          />
          <Input
            inputtype="checkbox"
            container="divContainer"
            inputStyle="checkBoxStyle"
            labelTwo="Industrix"
          />
        </div>
        <div className="checkBox-style">
          <Input
            inputtype="checkbox"
            container="divContainer"
            inputStyle="checkBoxStyle"
            labelTwo="Industrix"
          />
          <Input
            inputtype="checkbox"
            container="divContainer"
            inputStyle="checkBoxStyle"
            labelTwo="Industrix"
          />
        </div>
        <div id="text-style">
          <p id="tips-style">
            Tips! ifall du väljer integerera din bank så kan vi anpassa dina
            investeringar utefter din ekonomi och preferenser
          </p>
          <p>
            <span id="integrate-style">Integerera din bank!</span>
            <span id="message">(Detta kommer att skicka dig vidare.)</span>
          </p>
        </div>
      </div>
      <div className="bottom-style">
        <Button cssValue="btnSettingStyle" btnText="Spara" />
      </div>
    </div>
  );
}

export default settingPreferenser;
