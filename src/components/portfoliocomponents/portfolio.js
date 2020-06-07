import React, {useState, useEffect, useRef} from "react";
import Portfoliorow from "./portfolio-row";
import HeadTitle from "../reusedcomponents/headtitle";
import ButtonComponent from "../reusedcomponents/button";

const Portfolio = ({ user }) => {

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
  //använda localStorage för att spara undan size.
  const [content, setContent] = useState(portfolioContent);
  const [size, setTableSize] = useState(1);
  const [pageIndex, setIndex] = useState(0);
  const latestIndex = useRef(pageIndex);

  useEffect(() => {
      latestIndex.current = pageIndex;

  })

  const tableSize = (value) =>{
    //0 ska ersättas med ett startvärde som också ska hämtas från ett state och slutvärdet i slicen ska vara startvärdet + newSize.
    // i if-satsen ska portfolioContent.length > startvärde + newSize
    const newSize = parseInt(value)
    setTableSize(newSize);

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
  const show = (e, a, b) =>{
    const currentIndex = e.target.id;
    if(currentIndex === "backToStart"){
      setIndex(0);
      latestIndex.current = 0;
    } else if(currentIndex === "backOnePage" && pageIndex > 0){
      setIndex(pageIndex - 1);
      latestIndex.current = pageIndex -1;
    } else if (currentIndex === "forwardOnePage" && ((pageIndex* size) <= portfolioContent.length)){ //annan lösning på längd
      setIndex(pageIndex + 1);
      latestIndex.current = pageIndex +1;
    } else if(currentIndex === "forwardToEnd"){
      setIndex(Math.ceil(portfolioContent.length / size))
      latestIndex.current = Math.ceil(portfolioContent.length / size);
    } else{
      setIndex(currentIndex -1);
      latestIndex.current = currentIndex -1;
    }
    console.log(latestIndex.current)

      if(a < b){

          setContent(portfolioContent.slice(a, b));
      }
  }
  //byt ut 10 mot ett dynamiskt värde(size), lägg till funktionalitet i knapparna. eventuellt använda states?
  //eventuell if-sats för det inte ska bli för många knappar med siffror. istället ... och generera sidor framöver.
  //för backToStart ska size in för 1, för forwardToEnd ska initial värde in för 1.
  const generateButtons = () => {
      const buttonArray = [];
      buttonArray.push(<ButtonComponent cssValue="backToStart" key="backToStart" btnText="<<" isClicked={(e) => show(e, 0,size)} />);
      buttonArray.push(<ButtonComponent cssValue="backOnePage" key="backOnePage" btnText="<" isClicked={(e) => show(e, latestIndex.current * size, latestIndex.current * size + size)} />)
      for(let i = 0; i < Math.ceil(portfolioContent.length / size); i++){
          buttonArray.push(<ButtonComponent cssValue={i+1} key={i+1} btnText={i+1} isClicked={(e) => show(e, size * i, size * (i+1))} />)
      }
      buttonArray.push(<ButtonComponent cssValue="forwardOnePage" key="forwardOnePage" btnText=">" isClicked={(e) => show(e, latestIndex.current * size, latestIndex.current * size + size)} />) //behövs annan lösning
      buttonArray.push(<ButtonComponent cssValue="forwardToEnd" key="forwardToEnd" btnText=">>" isClicked={(e) => show(e,1,portfolioContent.length)} />)

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
