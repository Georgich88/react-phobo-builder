import React from "react";
import PhoboLogo from "../../assets/images/phobo-logo.png";
import classes from "./Logo.css";

const Logo = (props) => (
  <div className={classes.Logo}>
    <img src={PhoboLogo} alt="PhoboRadar"></img>
  </div>
);

export default Logo;
