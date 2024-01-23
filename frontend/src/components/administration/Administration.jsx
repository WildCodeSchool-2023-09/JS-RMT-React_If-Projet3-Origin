import React from "react";
import { Outlet, Link } from "react-router-dom";

import "./Administration.css";

function Administration() {
  return (
    <div>
      <nav className="menuadmin">
        <Link to="/">Home</Link>
        <Link to="/administration/">DashBoard</Link>
        <Link to="/administration/video">video</Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default Administration;
