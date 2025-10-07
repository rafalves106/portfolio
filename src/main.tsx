import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import GlobalStyles from "./GlobalStyles.ts";
import { StrictMode } from "react";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <GlobalStyles />
    <App />
  </StrictMode>
);
