import React, { Component } from "react";
import Aux from "../../hoc/Aux";
import Phobo from "../../components/Phobo/Phobo";
import BuildControls from "../../components/BuildControls/BuildControls";

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7,
};

class PhoboBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0,
    },
    totalPrice: 4,
  };

  addIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    const updateCount = oldCount + 1;
    const updatedIngredients = { ...this.state.ingredients };
    updatedIngredients[type] = updateCount;
    const oldPrice = this.state.totalPrice;
    const priceAddition = INGREDIENT_PRICES[type];
    const newPrice = oldPrice + priceAddition;
    this.setState({ ingredients: updatedIngredients, totalPrice: newPrice });
  };

  render() {
    return (
      <Aux>
        <Phobo ingredients={this.state.ingredients} />
        <BuildControls ingredientsAdded={this.addIngredientHandler} />
      </Aux>
    );
  }
}

export default PhoboBuilder;
