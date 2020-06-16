import React from "react";
import Header from "./header";
import CardSection from "./cardsection";

const Card = ({ headText, linkText ,firstSection,keyId,path }) => {
  return (
    <div>
      <Header
        headText={headText}
        linkText={linkText}
        id={keyId}
        path={path}
      />
      <CardSection content={firstSection}  />
    </div>
  );
};

export default Card;
