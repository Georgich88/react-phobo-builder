import React from "react";
import classes from "./Toolbar.css";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import DrawerToggle from "../SideDrawer/DrawerToggle/DrawerToggle";

const Toolbar = (props) => (
  <header className={classes.Toolbar}>
    <DrawerToggle clicked={props.drawerToggleClicked} />
    <Logo heigth="80%" />
    <nav className={classes.DesktopOnly}>
      <NavigationItems></NavigationItems>
    </nav>
  </header>
);

export default Toolbar;
