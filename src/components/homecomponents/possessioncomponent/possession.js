import React, { useState } from "react";
import User from "../../usercomponents/user";
import Share from "./share";
import PossessionStyle from "../../../design/homestyle/possessionstyle.css";

const Possession = ({ suggestedIndustries, industries }) => {
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

  const totalShareValue = suggestedIndustries.reduce(
    (tot, share) => tot + share.shareValue,
    0
  );

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

  //sorterat efter storlek på innehav
  // const sortedSuggestedIndustries = suggestedIndustries.sort((a, b) =>
  // a.shareValue < b.shareValue ? 1 : b.shareValue < a.shareValue ? -1 : 0
  // );

  //alfabetisk ordning
  const sortedSuggestedIndustries = suggestedIndustries.sort((a, b) =>
    a.industry.localeCompare(b.industry)
  );
  const sortedIndustries = industries.sort((a, b) =>
    a.industry.localeCompare(b.industry)
  );

  const getCompanyIndustries = (e) => {
    let text = "";
    let firstCount = 0;
    let secondCount = 0;
    for (let i = 0; i < sortedIndustries.length; i++) {
      if (sortedIndustries[i].industry === e.industry) {
        firstCount++;
        if (firstCount > 2) {
          secondCount++;
        } else {
          text += `${sortedIndustries[i].company}, `;
        }
      } else {
        text = text.trim();
        text = text.replace(/,+$/, "");
        if (secondCount > 0) {
          text += ` +${secondCount}`;
        }
        secondCount = 0;
        firstCount = 0;

      }
      if (i === sortedIndustries.length - 1) {
        text = text.trim();
        text = text.replace(/,+$/, "");
        if (secondCount > 0) {
          text += ` +${secondCount}`;
        }
      }
    }

    return text;
  };

  return (
    <div className="possession">
      <div>
        <span className="possession-amount">{`${Math.round(totalShareValue)
          .toString()
          .replace(/\B(?=(\d{3})+(?!\d))/g, ",")} SEK `}</span>
        <span className="label-text">{`${getDate()}`}</span>
      </div>
      <div id="statistic-style">
        {sortedSuggestedIndustries.map((element, index) => (
          <div
            style={{
              backgroundColor: element.color,
              width: (element.shareValue / totalShareValue) * 100 + "%",
            }}
          ></div>
        ))}
      </div>
      <div>
        {industries.length > 0 ? sortedSuggestedIndustries.map((element, index) => (
          <div id="sectorStyle">
            <div
              style={{ backgroundColor: `${element.color}` }}
              className="rectangle"
            ></div>
            <div id="sectorContainer">
              <li key={index}>{element.industry}</li>
              <p style={{ opacity: "0.5" }}>{getCompanyIndustries(element)}</p>
            </div>
            <p style={{ opacity: "0.5" }}>
              {element.shareValue
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, " ")}{" "}
              SEK
            </p>
          </div>
        )): "Inget innehav tillgänglig ännu"}
      </div>
    </div>
  );
};

export default Possession;
