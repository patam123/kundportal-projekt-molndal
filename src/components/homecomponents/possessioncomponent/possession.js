import React,{useState} from "react";
import User from "../../usercomponents/user";
import Share from "./share";
import PossessionStyle from "../../../design/homestyle/possessionstyle.css";


const Possession = ({suggestedIndustries, industries}) => {
  const share1 = new Share(
    "Skanska ",
    "Byggsektorn",
    "#5B74FF",
    12500,
    "B",
    100,
    "00001-111",
    1 + "%",
    1 + "%"
  );
  const share2 = new Share(
    "Volvo",
    "Medtech",
    "#FD397A",
    30000,
    "A",
    150,
    "0000-0000",
    1 + "%",
    1 + "%"
  );
  const share3 = new Share(
    "Tesla ",
    "Fintech",
    "#34BFA3",
    15000,
    "B",
    100,
    "00001-111",
    1 + "%",
    1 + "%"
  );
  const share4 = new Share(
    "AAK",
    "Industri X",
    "#363636",
    30000,
    "A",
    150,
    "0000-0000",
    1 + "%",
    1 + "%"
  );
  const share5 = new Share(
    "H&M",
    "Övrigt",
    "#EDEFF3",
    20000,
    "A",
    150,
    "0000-0000",
    1 + "%",
    1 + "%"
  );
  const shares = [share1, share2, share3, share4, share5];

  const totalShareValue = suggestedIndustries.reduce((tot, share) =>
  tot + share.shareValue, 0);
  
  const getDate = () => {
    const date = new Date();

    const year = date.getFullYear();
    let month = date.getMonth() + 1;
    if (month < 9) {
      month = "0" + month;
    }
    let day = date.getDate();
    if (day < 10) {
      day = "0" + day;
    }

    return `Uppdaterat: ${year}-${month}-${day}`;
  };

  const array = [{industry: "hej"}];

  const index = array.map((e) => e.industry ).indexOf("hej");
  console.log(index);

  return (
    <div className="possession">
      <div>
        <span className="possession-amount">{`${Math.round(totalShareValue).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} SEK `}</span>
        <span className="label-text">{`${getDate()}`}</span>
      </div>
      <div id="statistic-style">
      
        {suggestedIndustries.map((element, index) => (
          <div style={{backgroundColor:"#363636", width: ((element.shareValue / totalShareValue) * 100) + '%'}}></div>
          ))}
        
      </div>
      <div>
        {suggestedIndustries.map((element, index) => (
          <div id="sectorStyle">
            <div style={{backgroundColor:"#363636"}} className="rectangle"></div>
            <div id="sectorContainer">
              <li key={index}>{element.industry}</li>
              <p style={{ opacity: "0.5" }}>{industries.map(e => (
                 `${e.industry === element.industry ? ` ${e.company},` : ""}`
              ))}</p>
            </div>
            <p style={{ opacity: "0.5" }}>{element.shareValue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")} SEK</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Possession;
