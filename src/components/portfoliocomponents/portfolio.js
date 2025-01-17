import React, { useState, useEffect } from "react";
import Portfoliorow from "./portfolio-row";
import HeadTitle from "../reusedcomponents/headtitle";
import ButtonComponent from "../reusedcomponents/button";
import "../../design/portfolio.css";

const Portfolio = ({ shares }) => {
  const savedSize = localStorage.getItem("size");
  const [size, setTableSize] = useState(savedSize ? JSON.parse(savedSize) : 10);
  const [pageIndex, setIndex] = useState(0);


  const [content, setContent] = useState(shares);
  useEffect(() => {
    setTableSize(size);
    setIndex(pageIndex);
    setContent(
      pageIndex * size < shares.length
        ? shares.slice(pageIndex * size, (pageIndex + 1) * size)
        : shares.slice(0, shares.length)
    );

    localStorage.setItem("size", JSON.stringify(size));
  }, [pageIndex, size, shares]);


  const generateButtons = () => {
    const buttonArray = [];
    if (shares.length / size > 1) {
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
      for (let i = 0; i < Math.ceil(shares.length / size); i++) {
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
            pageIndex * size < shares.length - 1 && setIndex(pageIndex + 1)
          }
        />
      );
      buttonArray.push(
        <ButtonComponent
          cssValue="backAndFoward"
          key="forwardToEnd"
          btnText=">>"
          isClicked={() => setIndex(Math.ceil(shares.length / size) - 1)}
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
              {shares.length > 0 ?content.map((share, index) => {
                return (
                  <Portfoliorow
                    key={`${index}PortfolioRow`}
                    companyName={share.companyName}
                    shareValue={share.shareValue}
                    type={share.type}
                    amount={share.amount}
                    shareNr={share.shareNumber}
                    sharePct={share.sharePct}
                    votePct={share.votePct}
                  />
                );
              }): <p id="no-portfolio-text">Inget innehav tillgängligt ännu</p>}
            </tbody>
          </table>
        </div>
        <div id="bottom-container">
          <div className="portfolio-buttons">{generateButtons()}</div>
          <div className="portfolio-select-container">
            <select
            value={size}
              className="portfolio-select"
              onChange={(e) => setTableSize(parseInt(e.target.value))}
            >
              <option value="10">
                10
              </option>
              <option value="50">
                50
              </option>
              <option value="100">
                100
              </option>
            </select>
            {shares.length > 0 && <p>
              {shares.length > size
                ? size > 1
                  ? (pageIndex +1) * size < shares.length ? `Visar ${pageIndex * size + 1} - ${
                      (pageIndex + 1) * size
                    } av ${shares.length}`: `Visar ${pageIndex * size + 1} - ${shares.length} av ${shares.length}`
                  : `Visar ${pageIndex * size + 1} av ${shares.length}`
                : `Visar ${shares.length} av ${shares.length}`}
            </p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
