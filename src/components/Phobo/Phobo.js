import React from "react";
import classes from "./Phobo.css";
import PhoboIngredient from "./PhoboIngredients/PhoboIngredient";

const Phobo = (props) => {
  return (
    <div className={classes.Phobo}>
      <PhoboIngredient type="bread-top" />
      <PhoboIngredient type="cheese" />
      <PhoboIngredient type="meat" />
      <PhoboIngredient type="bread-bottom" />
    </div>
  );
};

export default Phobo;
