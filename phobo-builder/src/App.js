import { render } from "@testing-library/react";
import React, { Component } from "react";
import "./App.css";
import Layout from "./hoc/Layout/Layout";
import PhoboBuilder from "./containers/PhoboBuilder/PhoboBuilder";

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <PhoboBuilder />
        </Layout>
      </div>
    );
  }
}

export default App;
