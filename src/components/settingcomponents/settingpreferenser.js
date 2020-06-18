import React from "react";
import Input from "../reusedcomponents/input";
import Button from "../reusedcomponents/button";
import PreferenceCss from "../../design/preference.css";
import ButtonCss from "../../design/buttonstyle.css";

function settingPreferenser(handleSubmit) {
  return (
    <div>
    <form onSubmit={handleSubmit}>
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
            Tips! Ifall du väljer att integrera din bank så kan vi anpassa dina
            investeringar utefter din ekonomi och preferenser.
          </p>
          <p>
            <span id="integrate-style">Integerera din bank!</span>
            <span id="message">(Detta kommer att skicka dig vidare.)</span>
          </p>
        </div>
      </div>
      <div className="bottom-style">
        <Button cssValue="btnStyle" btnText="Spara" />
      </div>
      </form>
    </div>
  );
}

export default settingPreferenser;
