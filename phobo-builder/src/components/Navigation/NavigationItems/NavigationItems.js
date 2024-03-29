import React from "react";

import classes from "./NavigationItems.css"
import NavigationItem from "./NavigationItem/NavigationItem"

const NavigationItems = (props) => (
  <ul className={classes.NavigationItems}>
      <NavigationItem link="/" active>Pho bo Builder</NavigationItem>
      <NavigationItem link="/">Checkout</NavigationItem>
  </ul>
);

export default NavigationItems;