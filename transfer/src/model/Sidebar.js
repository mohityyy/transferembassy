import React from "react";
import { NavLink } from "react-router-dom";
import TransferList from "./TransferList";

function Sidebar() {
  return (
    <>
      <div class="sidebar">
        
        <NavLink to="/data"><h3>TRANSFER</h3></NavLink>
        <NavLink to="/profile"><h3>Profile</h3></NavLink>
        <NavLink to="/order"><h3>Order</h3></NavLink>
        <NavLink to="/subscription"><h3>Subscription</h3></NavLink>
        <NavLink to="/transaction"><h3>Transaction</h3></NavLink>
        
      </div>
    </>
  );
}
export default Sidebar;
