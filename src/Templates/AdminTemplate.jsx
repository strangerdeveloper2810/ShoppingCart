import React from "react";
import { Outlet, NavLink, Navigate } from "react-router-dom";
export default function AdminTemplate(props) {
    if(!localStorage.getItem("usLogin")) {
        return <Navigate to={"/"} replace={false}/>
    }
  return (
    <div className="d-flex">
      <div className="w-25 bg-dark text-white" style={{ minHeight: "100vh" }}>
        <nav>
          <ul className="mt-3 ms-3">
            <NavLink to="product" className="d-block mb-3">
              Product Management
            </NavLink>
            <NavLink to="user">User Management</NavLink>
          </ul>
        </nav>
      </div>

      <div className="w-75">
        <Outlet />
      </div>
    </div>
  );
}
