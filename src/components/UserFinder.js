import { Fragment, useState, useEffect, Component } from "react";
import styles from "./UserFinder.module.css";
import Users from "./Users";
import AuthContext from "../store/AuthContext"; //$ bring in context variables PART 1
import ErrorBoundary from "./ErrorBoundary";

class UserFinder extends Component {
  static contextType = AuthContext; //$ bring in context variables PART 2
  constructor() {
    // The context API variables are not defined when the constructor is initially parsed
    super(); // need for "this" usage
    this.state = {
      // starting values will be updated
      filteredUsers: [],
      searchTerm: "",
    };
  }
  // Run on startup only
  componentDidMount() {
    // The context API variables are defined here though
    this.setState({ filteredUsers: this.context.users });
  }

  // Run if the searchTerm changes
  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchTerm !== this.state.searchTerm) {
      this.setState({
        filteredUsers: this.context.users.filter((user) =>
          user.name.includes(this.state.searchTerm)
        ),
      });
    }
  }
  searchChangeHandler(e) {
    // update the state.searchTerm value to what's typed in the field
    this.setState((curState) => {
      return { searchTerm: e.target.value };
    });
  }
  //# Methods go here
  render() {
    return (
      <ErrorBoundary>
        <div className={styles.finder}>
          <input type="search" onChange={this.searchChangeHandler.bind(this)} />
          <Users users={this.state.filteredUsers} />
        </div>
      </ErrorBoundary>
    );
  }
}
UserFinder.contextType = AuthContext;
export default UserFinder;
