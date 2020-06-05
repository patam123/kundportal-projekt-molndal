import React, {useState, useEffect} from "react";
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


  //kan man lösa det genom att sätta sizes till fasta värden på 10/50/100, lägga dessa i en array som man sedan tar in i usestate istället för 0?
  const [content, setContent] = useState(portfolioContent);
  const [size, setTableSize] = useState(0);

  //nedan funkar som är tänkt
  const changeSize = (value) =>{
      setTableSize(parseInt(value));
      console.log(size);
      
  }
//   useEffect(() => {
      

//   })

  const tableSize = (value) =>{
    //0 ska ersättas med ett startvärde som också ska hämtas från ett state och slutvärdet i slicen ska vara startvärdet + newSize.
    // i if-satsen ska portfolioContent.length > startvärde + newSize
    const newSize = parseInt(value)

      if(portfolioContent.length > newSize ){
        setContent(portfolioContent.slice(0, newSize));
      } else{
          //else if(portfolioContent.length > newSize && portfolioContent.length < startvärde+size)
              //portfolioContent.slice((portfolioContent.length - 1) - newSize, portfolioContent.length - 1)
          setContent(portfolioContent);
      }
        // if(portfolioContent.length < newSize){
        //  setContent(portfolioContent)
        //}

  };


  //hur skriver jag metoden för att kunna sätta content utan att få "too many render"-felmeddelande?
  const show = (a, b) =>{
      if(a < b){

          setContent(portfolioContent.slice(a, b));
      }
  }
  //byt ut 10 mot ett dynamiskt värde(size), lägg till funktionalitet i knapparna. eventuellt använda states?
  //eventuell if-sats för det inte ska bli för många knappar med siffror. istället ... och generera sidor framöver.
  //för backToStart ska size in för 1, för forwardToEnd ska initial värde in för 1.
  const generateButtons = () => {
      const buttonArray = [];
      buttonArray.push(<ButtonComponent key="backToStart" btnText="<<" isClicked={() => show(0,1)} />);
      buttonArray.push(<ButtonComponent key="backOnePage" btnText="<" isClicked={() => show(/*sparat initialt värde - size-1, sparat initialt värde -1 */)} />)
      for(let i = 0; i < Math.ceil(portfolioContent.length / 10); i++){
          buttonArray.push(<ButtonComponent key={i+1} btnText={i+1} />)
      }
      buttonArray.push(<ButtonComponent key="forwardOnePage" btnText=">" isClicked={show(/*sparat initialt värde + size+1, sparat initialvärde + (size*2+1) */)} />)
      buttonArray.push(<ButtonComponent key="forwardToEnd" btnText=">>" isClicked={() => show(1,portfolioContent.length)} />)

      return buttonArray;
  }

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
      {generateButtons()}
      <select onChange={e => tableSize(e.target.value)}>
      <option value="1">1</option>
      <option value="50">50</option>
      <option value="100">100</option>
      </select>
    </div>
  );
};

export default Portfolio;
