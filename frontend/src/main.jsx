import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./store/store.js";
import { GoogleOAuthProvider } from "@react-oauth/google";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <GoogleOAuthProvider clientId="524036500099-095konp0pf9qbljgl0v3hcabsbbielr7.apps.googleusercontent.com">
      <App />
    </GoogleOAuthProvider>
  </Provider>
);
