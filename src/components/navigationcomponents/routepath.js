import React from 'react';
import { BrowserRouter as Router,Switch,Route } from "react-router-dom";

function Routepath({pathOne,PathTwo,PathThree,componentOne,componentTwo,componentThree}) {
    return (
        <div>
        <Switch>
        <Route path={pathOne} exact>
          <componentOne />
        </Route>
        <Route path={PathTwo}>
          <componentTwo />
        </Route>
        <Route path={PathThree}>
          <componentThree />
        </Route>
      </Switch>
        </div>
    );
}

export default Routepath;