import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./Navbar.css";

function Navbar() {
  const [isActive, setIsActive] = useState(false);

  const handleIconClick = () => {
    setIsActive(!isActive);
  };

  return (
    <div>
      <nav className={isActive ? "active nav" : "nav"}>
        <ul>
          <li>
            <Link onClick={handleIconClick} className="nav" to="/">
              Acceuil
            </Link>
          </li>

          <li>
            <Link onClick={handleIconClick} className="nav" to="/video">
              Video
            </Link>
          </li>

          <li>
            <Link onClick={handleIconClick} className="nav" to="/contact">
              Contact
            </Link>
          </li>

          <li>
            <Link onClick={handleIconClick} className="nav" to="/connexion">
              Connexion
            </Link>
          </li>

          <li>
            <Link onClick={handleIconClick} className="nav" to="/inscription">
              Inscription
            </Link>
          </li>

          <li>
            <Link
              onClick={handleIconClick}
              className="nav"
              to="/Administration"
            >
              Administration
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
