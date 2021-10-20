import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "./contexts/themeContext";
import { AuthProvider } from "./contexts/authContext";
import { App } from "./App";

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
