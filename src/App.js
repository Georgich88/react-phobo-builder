import React from "react";
import "./App.css";
import Layout from "./components/Layout/Layout";
import PhoboBuilder from "./containers/PhoboBuilder/PhoboBuilder";

function App() {
  return (
    <div>
      <Layout>
        <PhoboBuilder/>
      </Layout>
    </div>
  );
}

export default App;
