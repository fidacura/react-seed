// src/components/Navbar.tsx

import { NavLink } from "react-router-dom";
// import ThemeSwitcher from "./ThemeSwitcher";

const Navbar = () => {
  return (
    <nav>
      <NavLink
        to="/"
        style={({ isActive }) => ({
          color: isActive ? "gray" : "red",
          marginRight: "10px",
        })}
      >
        Homepage
      </NavLink>
      <NavLink
        to="/about"
        style={({ isActive }) => ({
          color: isActive ? "gray" : "red",
        })}
      >
        About
      </NavLink>
      {/* <ThemeSwitcher /> */}
    </nav>
  );
};

export default Navbar;
