import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isActive, setIsActive] = useState(false);

  const handleIconClick = () => {
    setIsActive(!isActive);
  };

  return (
    <div>
      <nav className={isActive ? "active nav" : "nav"}>
        <h3 className="title">origins</h3>
        <ul>
          <li>
            <Link onClick={handleIconClick} className="nav" to="/">
              Home
            </Link>
          </li>

          <li>
            <Link onClick={handleIconClick} className="nav" to="/videos">
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
