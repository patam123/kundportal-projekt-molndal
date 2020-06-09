import React, { useState, useEffect} from "react";
import Portfoliorow from "./portfolio-row";
import HeadTitle from "../reusedcomponents/headtitle";
import ButtonComponent from "../reusedcomponents/button";
import "../../design/portfolio.css"

const Portfolio = ({ user }) => {
  //använda localStorage.setItem för att spara undan size i useEffect.
  //localStorage.getItem för att hämta i useState.  (kanske lagra dessa värden i databas som någon slags config)
  const [size, setTableSize] = useState(1);
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
    console.log(size);
    console.log(pageIndex);
  }, [pageIndex, size]);

  //funktionalitet för att lägga till ...-knappen behövs.

  const generateButtons = () => {
    const buttonArray = [];
    if (user.shares.length / size > 1) {
      buttonArray.push(
        <ButtonComponent
        className="portfolio-button"
          cssValue="backToStart"
          key="backToStart"
          btnText="<<"
          isClicked={() => setIndex(0)}
        />
      );
      buttonArray.push(
        <ButtonComponent
        className="portfolio-button"
          cssValue="backOnePage"
          key="backOnePage"
          btnText="<"
          isClicked={() => pageIndex > 0 && setIndex(pageIndex - 1)}
        />
      );
      for (let i = 0; i < Math.ceil(user.shares.length / size); i++) {
        buttonArray.push(
          <ButtonComponent
          className="portfolio-button"
            cssValue={i + 1}
            key={i + 1}
            btnText={i + 1}
            isClicked={() => setIndex(i)}
          />
        );
      }
      buttonArray.push(
        <ButtonComponent
        className="portfolio-button"
          cssValue="forwardOnePage"
          key="forwardOnePage"
          btnText=">"
          isClicked={() =>
            pageIndex * size < user.shares.length - 1 && setIndex(pageIndex + 1)
          }
        />
      );
      buttonArray.push(
        <ButtonComponent
        className="portfolio-button"
          cssValue="forwardToEnd"
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
    <div>
      <div>
        <HeadTitle title="Min Portfölj" />
        <span className="portfolio-head">{getDate()}</span>
      </div>
    <div id="portfolio">
      <table key="portfolioTable">
        <thead key="tableheadelement">
          <tr className="portfolio-head" key="tablehead">
            <th key="tableheadCo">Företag</th>
            <th key="tableheadAmount">Innehav</th>
            <th key="tableheadType">Aktietyp</th>
            <th key="tableheadNrOfShare">Antal aktier</th>
            <th key="tableheadShareNr">Aktienummer</th>
            <th key="tableheadSharePct">Ägarandel</th>
            <th key="tableheadVotePwr">Röstvärde</th>
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
      {generateButtons()}
      <div className="portfolio-div">
      <select className="portfolio-select" onChange={(e) => setTableSize(parseInt(e.target.value))}>
        <option value="1">1</option>
        <option value="50">50</option>
        <option value="100">100</option>
      </select>
      <p>{user.shares.length > size ? size > 1 ? `Visar ${pageIndex * size + 1} - ${(pageIndex + 1) * size} av ${user.shares.length}`: `Visar ${pageIndex * size + 1} av ${user.shares.length}`  : `Visar ${user.shares.length} av ${user.shares.length}` }</p>
      </div>
      </div>
    </div>
  );
};

export default Portfolio;
