import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import App from "./App";
import { GlobalStyle } from "./styles/global-style";
import { Provider } from 'react-redux';
import reducers from "./reducers";

const store = createStore(rootReducer)
// store.subscribe(() => console.log(store.getState()))

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
