import React from "react";
import ReactDOM from "react-dom";
import PageRouter from "./routes";
import "./index.scss";
import { store } from "./components/Store";
import { Provider } from "react-redux";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PageRouter />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
