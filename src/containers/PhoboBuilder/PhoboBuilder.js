import React, { Component } from "react";
import Aux from "../../hoc/Aux";
import Phobo from "../../components/Phobo/Phobo";

class PhoboBuilder extends Component {
  state = {
    ingredients: {
      salad: 1,
      bacon: 2,
      cheese: 2,
      meat: 2,
    },
  };

  render() {
    return (
      <Aux>
        <Phobo ingredients={this.state.ingredients} />
        <div>Build Controls</div>
      </Aux>
    );
  }
}

export default PhoboBuilder;
