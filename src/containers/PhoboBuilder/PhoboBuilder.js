import React, { Component } from "react";
import Aux from "../../hoc/Aux";
import Phobo from "../../components/Phobo/Phobo";

class PhoboBuilder extends Component {
  render() {
    return (
      <Aux>
        <Phobo />
        <div>Build Controls</div>
      </Aux>
    );
  }
}

export default PhoboBuilder;
