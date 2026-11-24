import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./components/App";
import "./styling/global.css"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);