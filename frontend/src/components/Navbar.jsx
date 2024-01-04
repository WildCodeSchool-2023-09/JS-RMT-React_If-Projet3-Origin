import React, { useState } from "react";

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
        <h3>origin</h3>
        <ul>
          <li>
            <a href="/" onClick={handleLinkClick}>
              Home
            </a>
          </li>
          <li>
            <a href="/" onClick={handleLinkClick}>
              Video Acceuil
            </a>
          </li>
          <li>
            <a href="/" onClick={handleLinkClick}>
              Contact
            </a>
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
