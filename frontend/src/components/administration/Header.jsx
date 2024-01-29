import React from "react";
import Origins from "../dossimg/Origins.png";
import "./Header.css";

function Header() {
  return (
    <div className="Origins">
      <img className="header_img" src={Origins} alt="" />
    </div>
  );
}

export default Header;
