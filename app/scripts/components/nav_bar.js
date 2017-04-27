import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Navbar, Icon, Button, Modal } from "react-materialize";

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
    let username = this.refs.newUser;
    let email = this.refs.newEmail;
    let password = this.refs.newPassword;
    this.props.dispatch(SignUp(username, email, password));
    this.setState({
      login: false
    });
  }

  SendLogIn(e) {
    let email = this.refs.email;
    let password = this.refs.password;
    this.props.dispatch(LogIn(email, password));
    e.preventDefault();
    this.setState({
      signup: false
    });
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
        <form className={`modal teal lighten-5 ${pClass}`}>
          <div className="container">
            <input ref="user" placeholder="username" />
            <input ref="password" placeholder="password" type="password" />
            <Button
              className="teal lighten-5 black-text"
              onSubmit={this.sendLogIn}
            >
              Sign In
            </Button>
          </div>
        </form>
        <form className={`modal teal lighten-5 ${qClass}`}>
          <div className="container">
            <input ref="newUser" placeholder="username" />
            <input ref="newEmail" placeholder="email" />
            <input ref="newPassword" placeholder="password" type="password" />
            <Button
              className="teal lighten-5 black-text"
              onSubmit={this.sendSignUp}
            >
              Sign Up
            </Button>
          </div>
        </form>
      </div>
    );
  }
}
export default NavBar;
