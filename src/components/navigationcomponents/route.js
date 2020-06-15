import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

const RouteNav = ({ page1, page2, page3 }) => {
  return (
    <div>
      <BrowserRouter>
        <Route exact path="/" component={page1} />
        <Route exact path="/portfolio" component={page2} />
        <Route exact path="/setting" component={page3} />
      </BrowserRouter>
    </div>
  );
};

export default RouteNav;
