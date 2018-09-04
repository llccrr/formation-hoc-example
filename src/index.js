import React from "react";
import ReactDOM from "react-dom";
import { Test } from "./Test";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <Test title="bonjour" />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
