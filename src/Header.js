import React from "react";
import "./Header.css";
import navLogo from "./img/logonav.png";

function Header() {
  return (
    <div className="header">
      <img className="header__logo" src={navLogo} alt="EcoBadge logo" />
      <div className="header__nav">
        <div className="header__option">
          <span className="header__optionText">Home</span>
        </div>
        <div className="header__option">
          <span className="header__optionText">Directory</span>
        </div>
        <div className="header__option">
          <span className="header__optionText">About Us</span>
        </div>
        <div className="header__option">
          <span className="header__optionText">Contact Us</span>
        </div>
        <div className="header__option">
          <span className="header__optionText">Sign Up</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
