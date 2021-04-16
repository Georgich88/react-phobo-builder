import React from "react";
import classes from "./Toolbar.css";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";

const Toolbar = (props) => (
  <header className={classes.Toolbar}>
    <div>MENU</div>
    <Logo heigth="80%" />
    <nav className={classes.DesctopOnly}>
      <NavigationItems></NavigationItems>
    </nav>
  </header>
);

export default Toolbar;
