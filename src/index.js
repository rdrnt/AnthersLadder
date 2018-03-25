/*
// Modules
import React from "react";
import { render } from "react-dom";

// Global CSS
import "./assets/test.scss";

// Since we are using HtmlWebpackPlugin WITHOUT a template, we should create our own root node in the body element before rendering into it
let root = document.createElement("div");
root.id = "root";
document.body.appendChild(root);

// Now we can render our application into it. Main entry point is always the 'Core' component
render(<components.Core />, document.getElementById("root"));

// Hot Module Replacement API
if (module.hot) {
  // If an update is in one of the React components we've included, we can attempt an HMR
  // Note: we are using the only-hot so the app will NOT forcefully reload if it fails
  module.hot.accept("./components/components.js", () => {
    render(<components.Core />, document.getElementById("root"));
  });
}
*/

import React from "react";
import { render } from "react-dom";

import App from "./App";

const renderApp = () => {
  let root = document.createElement("div");
  root.id = "root";
  document.body.appendChild(root);
  render(<App />, document.getElementById("root"));
};

// This is needed for Hot Module Replacement
// if (module.hot) {
//   module.hot.accept('./App', () => renderApp());
// }

renderApp();
