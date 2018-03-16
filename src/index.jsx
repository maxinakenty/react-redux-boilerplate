import React from "react";
import { render } from "react-dom";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import App from "./components/App";
import TodoApp from "./reducers/";
import "./index.scss";

/* eslint-disable no-underscore-dangle */
const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;
/* eslint-enable */

// composeEnhancers(applyMiddleware(...your middleware))
const enhancer = composeEnhancers(applyMiddleware());
const store = createStore(TodoApp, enhancer);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
