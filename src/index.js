import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import Streemz from "./components/Streemz";
import reducers from "./reducers";

const store = createStore(reducers);

render(
  <Provider store={store}>
    <Streemz />
  </Provider>,
  document.querySelector("#root")
);
