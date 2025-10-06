// index.js
import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";

// IMPORTANT: ensure exactly one #root exists in index.html
const container = document.getElementById("root");
if (!container) {
  throw new Error("Root container #root not found");
}

// Only one root and one render call
const root = createRoot(container);
root.render(<App />);

// Optional: comment out during diagnostics to rule out extra listeners.
// If kept, ensure it doesn't trigger any re-render paths itself.
// import reportWebVitals from "./reportWebVitals";
// reportWebVitals();
