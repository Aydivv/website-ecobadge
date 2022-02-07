import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <img className="header__logo" src="./img/logonav.png" />
      <div className="header__nav">
        <div className="header__option">
          <span className="header__optionLineOne">Home</span>
        </div>
        <div className="header__option">
          <span className="header__optionLineOne">Directory</span>
        </div>
        <div className="header__option">
          <span className="header__optionLineOne">About Us</span>
        </div>
        <div className="header__option">
          <span className="header__optionLineOne">Contact Us</span>
        </div>
        <div className="header__option">
          <span className="header__optionLineOne">Sign Up</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
