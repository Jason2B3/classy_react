import React, { Component } from "react";

const AuthContext = React.createContext(); // exported as default

export class AuthProvider extends Component {
  constructor() {
    super();
  }
  state = {
    isAuthenticated: false,
    users: [
      { id: "u1", name: "Max" },
      { id: "u2", name: "Manuel" },
      { id: "u3", name: "Julie" },
    ],
  };
  loginMethod = () => this.setState({ isAuthenticated: true });
  logoutMethod = () => this.setState({ isAuthenticated: false });
  //~ ----------------------------------
  render() {
    // Grab anything you want from the state object via destructuring
    const { isAuthenticated, users } = this.state;
    // Grab any method you want from the class via destructuring
    const { loginMethod, logoutMethod } = this;
    //% Group everything you plan on sharing into 1 object
    const distribution = { isAuthenticated, users, loginMethod, logoutMethod };
    return (
      <AuthContext.Provider value={distribution}>
        {this.props.children}
      </AuthContext.Provider>
    );
  }
}
export default AuthContext; // from line 3
