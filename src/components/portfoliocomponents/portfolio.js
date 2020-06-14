import React, { useState, useEffect } from "react";
import Portfoliorow from "./portfolio-row";
import HeadTitle from "../reusedcomponents/headtitle";
import ButtonComponent from "../reusedcomponents/button";
import "../../design/portfolio.css";

const Portfolio = ({ user }) => {
  //använda localStorage.setItem för att spara undan size i useEffect.
  //localStorage.getItem för att hämta i useState.  (kanske lagra dessa värden i databas som någon slags config)
  const savedSize = localStorage.getItem("size");
  const [size, setTableSize] = useState(savedSize ? JSON.parse(savedSize) : 1);
  const [pageIndex, setIndex] = useState(0);

  const [content, setContent] = useState(user.shares);
  useEffect(() => {
    //setTableSize funkar enligt loggen.
    setTableSize(size);
    setIndex(pageIndex);
    setContent(
      pageIndex * size < user.shares.length
        ? user.shares.slice(pageIndex, (pageIndex + 1) * size)
        : user.shares.slice(pageIndex - 1, (pageIndex + 1) * size)
    );

    localStorage.setItem("size", JSON.stringify(size));
  }, [pageIndex, size]);

  //funktionalitet för att lägga till ...-knappen behövs.

  const generateButtons = () => {
    const buttonArray = [];
    if (user.shares.length / size > 1) {
      buttonArray.push(
        <ButtonComponent
          cssValue="backAndFoward"
          key="backToStart"
          btnText="<<"
          isClicked={() => setIndex(0)}
        />
      );
      buttonArray.push(
        <ButtonComponent
          cssValue="backAndFoward"
          key="backOnePage"
          btnText="<"
          isClicked={() => pageIndex > 0 && setIndex(pageIndex - 1)}
        />
      );
      for (let i = 0; i < Math.ceil(user.shares.length / size); i++) {
        buttonArray.push(
          <ButtonComponent
            cssValue={
              pageIndex === i ? "portfolio-button-active" : "portfolio-button"
            }
            key={i + 1}
            btnText={i + 1}
            isClicked={() => setIndex(i)}
          />
        );
      }
      buttonArray.push(
        <ButtonComponent
          cssValue="backAndFoward"
          key="forwardOnePage"
          btnText=">"
          isClicked={() =>
            pageIndex * size < user.shares.length - 1 && setIndex(pageIndex + 1)
          }
        />
      );
      buttonArray.push(
        <ButtonComponent
          cssValue="backAndFoward"
          key="forwardToEnd"
          btnText=">>"
          isClicked={() => setIndex(Math.ceil(user.shares.length / size) - 1)}
        />
      );
    }
    return buttonArray;
  };

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

    return `| Senast uppdaterat: ${year}-${month}-${day}`;
  };

  return (
    <div id="portfolio-container">
      <div className="headrow">
        <HeadTitle title={`Min Portfölj`} />
        <p className="portfolio-head">{getDate()}</p>
      </div>
      <div id="main-div">
        <div id="portfolio">
          <table key="portfolioTable">
            <thead key="tableheadelement">
              <tr className="portfolio-tablehead" key="tablehead">
                <td className="td-title" key="tableheadCo">Företag</td>
                <td className="td-title" key="tableheadAmount">Innehav</td>
                <td className="td-title" key="tableheadType">Aktietyp</td>
                <td className="td-title" key="tableheadNrOfShare">Antal aktier</td>
                <td className="td-title" key="tableheadShareNr">Aktienummer</td>
                <td className="td-title" key="tableheadSharePct">Ägarandel</td>
                <td className="td-title" key="tableheadVotePwr">Röstvärde</td>
              </tr>
            </thead>
            <tbody key="tablebody">
              {content.map((share) => {
                return (
                  <Portfoliorow
                    key={`${share.companyName}PortfolioRow`}
                    companyName={share.companyName}
                    amount={share.amount}
                    type={share.type}
                    nrOfShares={share.nrOfShares}
                    shareNr={share.shareNr}
                    sharePct={share.sharePct}
                    votePwr={share.votePwr}
                  />
                );
              })}
            </tbody>
          </table>
        </div>
        <div id="bottom-container">
          <div className="portfolio-buttons">{generateButtons()}</div>
          <div className="portfolio-div">
            <select
              className="portfolio-select"
              onChange={(e) => setTableSize(parseInt(e.target.value))}
            >
              <option value="1" selected={size === 1}>
                1
              </option>
              <option value="50" selected={size === 50}>
                50
              </option>
              <option value="100" selected={size === 100}>
                100
              </option>
            </select>
            <p>
              {user.shares.length > size
                ? size > 1
                  ? `Visar ${pageIndex * size + 1} - ${
                      (pageIndex + 1) * size
                    } av ${user.shares.length}`
                  : `Visar ${pageIndex * size + 1} av ${user.shares.length}`
                : `Visar ${user.shares.length} av ${user.shares.length}`}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
