import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isActive, setIsActive] = useState(false);

  const handleIconClick = () => {
    setIsActive(!isActive);
  };

  const handleLinkClick = () => {
    setIsActive(false);
  };

  return (
    <div>
      <nav className={isActive ? "active nav" : "nav"}>
        <h3 className="title">origins</h3>
        <ul>
          <li>
            <Link className="nav" to="/" onClick={handleLinkClick}>
              Home
            </Link>
          </li>

          <li>
            <Link className="nav" to="/" onClick={handleLinkClick}>
              Video
            </Link>
          </li>

          <li>
            <Link className="nav" to="/" onClick={handleLinkClick}>
              Contact
            </Link>
          </li>

          <li>
            <Link className="nav" to="/" onClick={handleLinkClick}>
              Se connecter
            </Link>
          </li>
        </ul>
        <button
          type="button"
          aria-label="menu"
          className="icons"
          onClick={handleIconClick}
        />
      </nav>
    </div>
  );
}

export default Navbar;
