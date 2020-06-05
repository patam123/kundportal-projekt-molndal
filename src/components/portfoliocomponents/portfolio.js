import React, {useState} from "react";
import Portfoliorow from "./portfolio-row";
import HeadTitle from "../reusedcomponents/headtitle";
import ButtonComponent from "../reusedcomponents/button";

const Portfolio = ({ user }) => {
  const portfolioButtons = [];

  


  const portfolioContent = user.shares.map((share) => {
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
  });
  const [content, setContent] = useState(portfolioContent);
  const [size, setTableSize] = useState(0);

  //nedan funkar som är tänkt
  const changeSize = (value) =>{
      setTableSize(parseInt(value));
      console.log(size);
  }

  const tableSize = (value) =>{
    //0 ska ersättas med ett startvärde som också ska hämtas från ett state och slutvärdet i slicen ska vara startvärdet + size.
    // i if-satsen ska portfolioContent.length > startvärde + size
    const size = parseInt(value)

      if(portfolioContent.length > size ){
        setContent(portfolioContent.slice(0, size));
      } else{
          //else if(portfolioContent.length > size && portfolioContent.length < startvärde+size)
              //portfolioContent.slice((portfolioContent.length - 1) - size, portfolioContent.length - 1)
          setContent(portfolioContent);
      }
        // if(portfolioContent.length < size){
        //  setContent(portfolioContent)
        //}

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
        <span>{getDate()}</span>
      </div>

      <table key="portfolioTable">
        <thead key="tablebody">
          <tr key="tablehead">
            <th key="tableheadCo">Företag</th>
            <th key="tableheadAmount">Innehav</th>
            <th key="tableheadType">Aktietyp</th>
            <th key="tableheadNrOfShare">Antal aktier</th>
            <th key="tableheadShareNr">Aktienummer</th>
            <th key="tableheadSharePct">Ägarandel</th>
            <th key="tableheadVotePwr">Röstvärde</th>
          </tr>
        </thead>
        <tbody>{content}</tbody>
      </table>
      <ButtonComponent isClicked={tableSize} btnText="Do something" />
      <select onChange={e => tableSize(e.target.value)}>
      <option value="1">1</option>
      <option value="50">50</option>
      <option value="100">100</option>
      </select>
    </div>
  );
};

export default Portfolio;
