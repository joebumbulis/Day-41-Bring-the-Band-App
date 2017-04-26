import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Navbar, Icon, Button } from "react-materialize";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      login: false
    };
    this.clickLogIn = this.clickLogIn.bind(this);
  }

  clickLogIn(e) {
    e.preventDefault();
    this.setState({
      login: true
    });
  }

  SendLogIn(e) {
    e.preventDefault();
    this.setState({
      login: false
    });
  }

  render() {
    var pClass = "hide-modal";
    if (this.state.login) {
      pClass = "show-modal";
    }
    return (
      <div>
        <nav className="nav row teal lighten-5">
          <li className="col s6">Bring the Band</li>
          <div className="navlinks col s6">
            <li className="col s3">
              <Link to="/search">
                <Icon className="col s4">search</Icon>Search
              </Link>
            </li>
            <li className="col s3">
              <Link to="/results">
                <Icon className="col s4">assessment</Icon>Results
              </Link>
            </li>
            <li onClick={this.clickLogIn} className="col s3">
              <Icon className="col s4">perm_identity</Icon>LogIn
            </li>
            <li className="col s3">
              <Icon className="col s4">mode_edit</Icon>SignUp
            </li>
          </div>
        </nav>
        <form className={pClass}>
          <input placeholder="username" />
          <input placeholder="password" />
          <button onSubmit={this.sendLogIn}>Sign In</button>
        </form>
      </div>
    );
  }
}
export default NavBar;
