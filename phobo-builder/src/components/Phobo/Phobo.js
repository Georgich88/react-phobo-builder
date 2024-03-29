import React from "react";
import classes from "./Phobo.css";
import PhoboIngredient from "./PhoboIngredients/PhoboIngredient";

const Phobo = (props) => {
  let transformedIngredients = Object.keys( props.ingredients )
  .map( igKey => {
      return [...Array( props.ingredients[igKey] )].map( ( _, i ) => {
          return <PhoboIngredient key={igKey + i} type={igKey} />;
      } );
  } )
  .reduce((arr, el) => {
      return arr.concat(el)
  }, []);
  if (transformedIngredients.length === 0) {
    transformedIngredients = <p>Please start adding ingredients!</p>
  }
  return (
    <div className={classes.Phobo}>
      <PhoboIngredient type="bread-top" />
      {transformedIngredients}
      <PhoboIngredient type="bread-bottom" />
    </div>
  );
};

export default Phobo;
