import React from "react";
import { render } from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension/logOnlyInProduction";
import App from "./components/App";
import TodoApp from "./reducers/";
import "./index.scss";

// React the documentation:
// https://github.com/zalmoxisus/redux-devtools-extension#14-using-in-production
const composeEnhancers = composeWithDevTools({
  // options like actionSanitizer, stateSanitizer
});

const store = createStore(
  TodoApp,
  /* preloadedState, */ composeEnhancers(
    // applyMiddleware(...your middleware)
    applyMiddleware()
    // other store enhancers if any
  )
);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
