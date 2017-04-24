import store from "./store.js";
import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { render } from "react-dom";
import { Provider } from "react-redux";
import AppRoot from "./components/app_root.js";
import Search from "./components/search.js";
import Results from "./components/results.js";
import { Navbar, Icon } from "react-materialize";

const Nav = () => (
  <nav className="nav row">
    <li className="col s9">Bring the Band</li>
    <div className="navlinks col s3">
      <li className="col s6"><Link to="/search">Search</Link></li>
      <li className="col s6"><Link to="/results">Results</Link></li>
    </div>
  </nav>
);

export default function app() {
  render(
    <Provider store={store}>
      <Router>
        <div>
          <Nav />
          <Route exact path="/" component={AppRoot} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/results" component={Results} />
        </div>
      </Router>
    </Provider>,
    document.getElementById("app")
  );
}
