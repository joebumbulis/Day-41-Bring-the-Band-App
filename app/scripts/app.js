import store from "./store.js";
import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { render } from "react-dom";
import { Provider } from "react-redux";
import AppRoot from "./components/app_root.js";
import NavBar from "./components/nav_bar.js";
import Search from "./components/search.js";
import Results from "./components/results.js";

export default function app() {
  render(
    <Provider store={store}>
      <Router>
        <div>
          <NavBar />
          <Route exact path="/" component={AppRoot} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/results" component={Results} />
        </div>
      </Router>
    </Provider>,
    document.getElementById("app")
  );
}
