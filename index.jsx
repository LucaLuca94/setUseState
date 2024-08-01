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



// fetch('https://api.github.com/users/gianmarcotoso').then(response => {
//   console.log(`Response status: ${response.status}`)
//   return response.json()
// })
// .then(json => {
//   console.log(json);
// })