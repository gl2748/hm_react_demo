import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { devToolsEnhancer } from "redux-devtools-extension";
import App from "./containers/App";
import reducer from "./redux/rootReducer";
import "./index.css";

const store = createStore(reducer, devToolsEnhancer({}));

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
