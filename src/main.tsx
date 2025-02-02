import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";

import App from "@/App";

import "@plugins/i18n/config";

import "@assets/style.scss";

const root = document.getElementById("root");

ReactDOM.createRoot(root as HTMLElement).render(
  <StrictMode>
    <React.Suspense fallback={<div>Loading...</div>}>
      <App />
    </React.Suspense>
  </StrictMode>
);
