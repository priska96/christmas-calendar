import React from "react";

import ReactDOM from "react-dom";

import App from "./App";

// REDUX

import { Provider } from "react-redux";

import store from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";

console.log(store);
ReactDOM.render(
  <Provider store={store.store}>
    <PersistGate loading={null} persistor={store.persistor}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </PersistGate>
  </Provider>,

  document.getElementById("root")
);
