import React from "react";
import Header from "./header";
import CardSection from "./cardsection";

const Card = ({ headText, btnText, handleBtnClick, firstSection,keyId,path }) => {
  return (
    <div>
      <Header
        headText={headText}
        btnText={btnText}
        handleBtnClick={handleBtnClick}
        id={keyId}
        path={path}
      />

      <CardSection content={firstSection}  />
    </div>
  );
};

export default Card;
