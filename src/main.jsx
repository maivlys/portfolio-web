import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.module.css";
import App from "./App.jsx";
import "./global.css";
import { GlobalState } from "./context/GlobalContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GlobalState>
      <App />
    </GlobalState>
  </StrictMode>,
);
