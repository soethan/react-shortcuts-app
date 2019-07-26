import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./components/App";
import "./index.css";
import configureStore from "./store";
import { Provider as ReduxProvider } from "react-redux";
import { LocalizeProvider } from 'react-localize-redux';

const store = configureStore();

render(
  <ReduxProvider store={store}>
    <LocalizeProvider>
      <Router>
        <App />
      </Router>
    </LocalizeProvider>
  </ReduxProvider>,
  document.getElementById("app")
);
