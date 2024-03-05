import React from "react";
import { NavLink } from "react-router-dom";
import "./header.css";
const Header = () => {
  const getStyles = ({ isActive }) => ({
    color: isActive ? "green" : "red",
    textDecoration: isActive ? "underline" : "",
  });

  return (
    <header>
      <h1>Inventory Management</h1>
      <div className="header-container">
        <NavLink style={getStyles} to="/">
          Items
        </NavLink>
        <NavLink style={getStyles} to="/sales">
          Sales
        </NavLink>
        <NavLink style={getStyles} to="/dashboard">
          Dashboard
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
