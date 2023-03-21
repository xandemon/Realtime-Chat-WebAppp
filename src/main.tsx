import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ChatContextProvider } from "./context/ChatContext";
import "./index.css";
import { AuthProvider } from "./provider/AuthProvider";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <AuthProvider>
      <ChatContextProvider>
        <App />
      </ChatContextProvider>
    </AuthProvider>
  </React.StrictMode>
);
