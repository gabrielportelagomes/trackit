import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AuthProvider } from "./providers/auth";
import { HabitsProvider } from "./providers/habits";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <HabitsProvider>
        <App />
      </HabitsProvider>
    </AuthProvider>
  </React.StrictMode>
);
