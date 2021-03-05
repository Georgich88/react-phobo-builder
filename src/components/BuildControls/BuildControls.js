import React from "react";
import BuildControl from "./BuildControl/BuildControl";
import classes from "./BuildControls.css";

const constrols = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" },
];

const BuildControls = (props) => (
  <div className={classes.BuildControls}>
    {constrols.map((ctrl) => (
      <BuildControl 
      key={ctrl.label} 
      label={ctrl.label}
      added={()=>props.ingredientsAdded(ctrl.type)} />
    ))}
  </div>
);

export default BuildControls;
