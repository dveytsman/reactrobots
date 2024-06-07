import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Card } from "./Card";
import CardsList from "./CardsList";
import "tachyons";
import reportWebVitals from "./reportWebVitals";
import { robots } from "./robots";

const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CardsList robots={robots} />
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
