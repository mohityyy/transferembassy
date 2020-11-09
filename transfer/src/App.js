import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import sidebar from "./model/Sidebar";
import ResponsiveDrawer from "./model/ResponsiveDrawer";
import login from "./model/login";
import TransferList from "./model/TransferList";
import Profile from "./model/Profile";
import Order from "./model/Order";
import Subscription from "./model/Subscription";
import Transaction from "./model/Transaction";
import Paypal from "./model/Paypal";


function App() {
  return (
    <>
      <Switch>
        <Route exact path="/home" component={ResponsiveDrawer} />
        <Route exact path="/" component={login} />
        <Route exact path="/sidebar" component={sidebar} />
        <Route exact path="/data" component={TransferList} />
        <Route exact path="/paypal" component={Paypal} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/order" component={Order} />
        <Route exact path="/subscription" component={Subscription} />
        <Route exact path="/transaction" component={Transaction} />

        <Redirect to="/" />
      </Switch>
    </>
  );
}

export default App;
