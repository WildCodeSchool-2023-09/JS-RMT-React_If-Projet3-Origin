import React from "react";
import { Outlet } from "react-router-dom";

function UserAdmin() {
  return (
    <div>
      UserAdmin
      <Outlet />
    </div>
  );
}

export default UserAdmin;
