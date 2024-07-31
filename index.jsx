import { StrictMode } from "react";
import { App } from "./app";
import { createRoot } from "react-dom/client";
import "./index.module.scss";
import "./MyStyle.css"


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
