// Modules
import React from "react";
import { createRoot } from "react-dom/client";

// Components
import App from "./App";

// Style
import "./index.css";

// Mount React To Dom
const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
