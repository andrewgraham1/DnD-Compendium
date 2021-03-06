import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./index.css";
import TestPage from "./screens/TestPage";
import LandingPage from "./screens/LandingPage";

ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/">
        <LandingPage />
      </Route>
      <Route path="/Whiteridge">
        <TestPage />
      </Route>
    </Switch>
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
