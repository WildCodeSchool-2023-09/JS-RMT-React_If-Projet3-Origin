import React from "react";
import { Outlet, Link } from "react-router-dom";

function Administration() {
  return (
    <div>
      <nav className="menu">
        <Link to="/">Home</Link>
        <Link to="/administration/">DashBoard</Link>
        <Link to="/administration/video">video</Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default Administration;
