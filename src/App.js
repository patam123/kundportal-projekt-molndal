import React from "react";
import DashBoard from "./main/dashboard";
import Home from "./components/homecomponents/home"
import Login from "./components/login/login";
import Register from "./components/login/register";
import Reset from "./components/login/resetpassword";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Route exact={true} path="/">
          <Login />
        </Route>
        <Route exact={true} path="/register">
          <Register />
        </Route>
        <Route path="/resetpassword">
          <Reset />
        </Route>
        <Route path="/home">
        <DashBoard />
      </Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
