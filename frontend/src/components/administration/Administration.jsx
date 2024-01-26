import React from "react";
import { Outlet, Link } from "react-router-dom";

function Administration() {
  return (
    <div>
      <nav className="menu-link">
        <p className="p-link">
          <Link className="adm-link" to="/">
            Acceuil
          </Link>
        </p>
        <p className="p-link">
          <Link className="adm-link" to="/administration/video">
            video
          </Link>
        </p>
      </nav>
      <Outlet />
    </div>
  );
}

export default Administration;
