import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import stores from './stores'
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={stores}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
