import React from "react";
import { NavLink } from "react-router-dom";
export default function Header(props) {
  const handleActive = () => {
    return ({ isActive }) =>
      isActive
        ? "nav-link border-bottom border-secondary fw-bold text-success"
        : "nav-link";
  };

  // const HandleActive =
  //   () =>
  //   ({ isActive }) =>
  //     isActive
  //       ? "nav-link border-bottom  border-secondary fw-bold text-success"
  //       : "nav-link";

  const handleActiveStyle = () => {
    return ({ isActive }) => (isActive ? { border: "2px solid black" } : {});
  };
  return (
    <nav className="navbar navbar-expand-sm navbar-info bg-info">
      <NavLink className="navbar-brand" to="shoeshop">
        Shoe Shop
      </NavLink>
      <button
        className="navbar-toggler d-lg-none"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapsibleNavId"
        aria-controls="collapsibleNavId"
        aria-expanded="false"
        aria-label="Toggle navigation"
      />
      <div className="collapse navbar-collapse" id="collapsibleNavId">
        <ul className="navbar-nav me-auto mt-2 mt-lg-0">
          <li className="nav-item">
            <NavLink
              // className={({ isActive }) =>
              //   isActive
              //     ? "nav-link border-bottom  border-secondary fw-bold text-success"
              //     : "nav-link"
              // }
              className={handleActive()}
              style={handleActiveStyle()}
              to="/home"
            >
              Home
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink
              // className={({ isActive }) =>
              //   isActive
              //     ? "nav-link border-bottom  border-secondary fw-bold text-success"
              //     : "nav-link"
              // }
              className={handleActive()}
              style={handleActiveStyle()}
              to="reactform"
            >
              React Form
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink
              // className={({ isActive }) =>
              //   isActive
              //     ? "nav-link border-bottom  border-secondary fw-bold text-success"
              //     : "nav-link"
              // }
              className={handleActive()}
              style={handleActiveStyle()}
              to="shop"
            >
              Shop
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink
              // className={({ isActive }) =>
              //   isActive
              //     ? "nav-link border-bottom  border-secondary fw-bold text-success"
              //     : "nav-link"
              // }
              className={handleActive()}
              style={handleActiveStyle()}
              to="search"
            >
              Search
            </NavLink>
          </li>
        </ul>
        <form className="d-flex my-2 my-lg-0">
          <input
            className="form-control me-sm-2"
            type="text"
            placeholder="Search"
          />
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
          >
            Search
          </button>
        </form>
      </div>
    </nav>
  );
}
