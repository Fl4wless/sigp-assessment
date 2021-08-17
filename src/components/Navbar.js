import React from "react";
import { NavLink } from "react-router-dom";
import classes from "../styles/Navbar.module.css";

const Navbar = () => {
  return (
    <div className={classes.navbar}>
      <nav>
        <ul aria-label="ul">
          <NavLink exact to="/" className={classes.navlink}>
            Home
          </NavLink>
          <NavLink to="/favorites" className={classes.navlink}>
            Favorites
          </NavLink>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
