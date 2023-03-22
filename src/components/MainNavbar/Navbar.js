import React from "react";
import "./navbar.css";
import LeftNavbar from "./LeftNavbar";
import RightNavbar from "./RightNavbar";

function Navbar() {
  return (
    <div className="container">
      <div className="nav">
        <LeftNavbar />
        <RightNavbar />
      </div>
    </div>
  );
}

export default Navbar;
