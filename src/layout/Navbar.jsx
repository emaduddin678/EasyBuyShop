import React from "react";

import { NavLink } from "react-router-dom";

const NavbarComponent = () => {
  return (
    <>
      <nav className="flex justify-center items-center gap-4">
        <NavLink className="nav_link text-lg font-semibold text-white" to={"/"}>
          Home
        </NavLink>
        <NavLink className="nav_link text-lg font-semibold text-white" to={"/register"}>
          Register
        </NavLink>{" "}
        <NavLink className="nav_link text-lg font-semibold text-white" to={"/login"}>
          Login
        </NavLink>{" "}
        <NavLink className="nav_link text-lg font-semibold text-white" to={"/cart"}>
          Cart
        </NavLink>
        <NavLink className="nav_link text-lg font-semibold text-white" to={"/logout"}>
          Logout
        </NavLink>
      </nav>
    </>
  );
};

export default NavbarComponent;
