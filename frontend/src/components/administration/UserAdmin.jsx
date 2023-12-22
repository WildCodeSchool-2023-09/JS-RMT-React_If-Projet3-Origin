import React from "react";
import { Outlet } from "react-router-dom";

function UserAdmin() {
  return (
    <div>
      {/* <nav></nav>  */}
      UserAdmin
      <Outlet />
    </div>
  );
}

export default UserAdmin;
