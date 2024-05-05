import React from "react";
import ReactDOM from "react-dom/client";

import Router from "./routes/router";
import GlobalStyles from "./styles/GlobalStyles";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router />
    <GlobalStyles />
  </React.StrictMode>
);
