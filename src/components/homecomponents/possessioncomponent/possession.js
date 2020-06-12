import React,{useState} from "react";
import User from "../../usercomponents/user";
import Share from "./share";
import PossessionStyle from "../../../design/homestyle/possessionstyle.css";


const Possession = () => {
  const share1 = new Share(
    "Skanska ",
    "Byggsektorn",
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
    20000,
    "A",
    150,
    "0000-0000",
    1 + "%",
    1 + "%"
  );
  const shares = [share1, share2, share3, share4, share5];
  
  let sum = shares.reduce((tot, share) => tot + share.amount, 0);
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

    return `Uppdaterad: ${year}-${month}-${day}`;
  };

  return (
    <div className="possession">
      <div>
        <span className="possession-amount">{`${sum} SEK`}</span>
        <span className="label-text">{getDate()}</span>
      </div>
      <div id="statistic-style">
        <id id="sector1"></id>
        <div id="sector2"></div>
        <div id="sector3"></div>
        <div id="sector4"></div>
        <div id="sector5"></div>
      </div>
      <div>
        {shares.map((element, index) => (
          <div id="sectorStyle">
            <div className="rectangle"></div>
            <div id="sectorContainer">
              <li key={index}>{element.industry}</li>
              <p style={{ opacity: "0.5" }}>{element.companyName}</p>
            </div>
            <p style={{ opacity: "0.5" }}>{element.amount} SEK</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Possession;
