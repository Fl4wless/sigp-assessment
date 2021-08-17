import React from "react";
import Navbar from "./Navbar";
import classes from "../styles/Layout.module.css";

const Layout = ({ children }) => {
  return (
    <div className={classes.layout}>
      <Navbar />
      <div className={classes.container}>{children}</div>
    </div>
  );
};

export default Layout;
