import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ReceipesProvider } from "./contexts/receipes_context";
import "bootstrap/dist/css/bootstrap.css";
import "aos/dist/aos.css";
import "aos/dist/aos.js";

ReactDOM.render(
  <React.StrictMode>
    <ReceipesProvider>
      <App />
    </ReceipesProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
