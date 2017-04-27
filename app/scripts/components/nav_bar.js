import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Navbar, Icon, Button, Modal } from "react-materialize";
import { connect } from "react-redux";
import logIn from "../actions/log_in.js";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      login: false,
      signup: false
    };
    this.clickLogIn = this.clickLogIn.bind(this);
    this.clickSignUp = this.clickSignUp.bind(this);
    this.sendSignUp = this.sendSignUp.bind(this);
    this.sendLogIn = this.sendLogIn.bind(this);
  }

  clickLogIn(e) {
    e.preventDefault();
    this.setState({
      login: true
    });
  }

  clickSignUp(e) {
    e.preventDefault();
    this.setState({
      signup: true
    });
  }

  sendSignUp(e) {
    e.preventDefault();
    // let username = this.refs.newUser.value;
    // let email = this.refs.newEmail.value;
    // let password = this.refs.newPassword.value;
    // this.props.dispatch(signUp(username, email, password));
    this.setState({
      signup: false
    });
  }

  sendLogIn(e) {
    e.preventDefault();
    this.setState({
      login: false
    });
    let username = this.refs.user.value;
    let password = this.refs.password.value;
    this.props.dispatch(logIn(username, password));
  }

  render() {
    var pClass = "hide-modal";
    if (this.state.login) {
      pClass = "show-modal";
    }
    var qClass = "hide-modal";
    if (this.state.signup) {
      qClass = "show-modal";
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
            <li onClick={this.clickSignUp} className="col s3">
              <Icon className="col s4">mode_edit</Icon>SignUp
            </li>
          </div>
        </nav>
        <form
          onSubmit={this.sendLogIn}
          className={`modal teal lighten-5 ${pClass}`}
        >
          <div className="container">
            <input ref="user" placeholder="username" type="text" aria-label />
            <input ref="password" placeholder="password" type="password" />
            <Button className="teal lighten-5 black-text">
              Sign In
            </Button>
          </div>
        </form>
        <form
          onSubmit={this.sendSignUp}
          className={`modal teal lighten-5 ${qClass}`}
        >
          <div className="container">
            <input ref="newUser" placeholder="username" type="text" />
            <input ref="newEmail" placeholder="email" type="text" />
            <input ref="newPassword" placeholder="password" type="password" />
            <Button className="teal lighten-5 black-text">
              Sign Up
            </Button>
          </div>
        </form>
      </div>
    );
  }
}
export default connect()(NavBar);
