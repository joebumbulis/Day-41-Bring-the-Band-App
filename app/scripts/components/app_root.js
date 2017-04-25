import React from "react";
import { connect } from "react-redux";
import { Route, Link, NavLink } from "react-router-dom";

class AppRoot extends React.Component {
  render() {
    return (
      <main>
        <h3>Welcome to Bring the Band</h3>
        <p>
          Vote for your favorite artists in order to bring them to our music venue!
        </p>
        <section />
      </main>
    );
  }
}

export default AppRoot;
