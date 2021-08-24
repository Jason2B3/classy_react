import { Fragment, useState, useEffect, Component } from "react";
import styles from "./UserFinder.module.css";
import Users from "./Users";

class UserFinder extends Component {
  constructor() {
    super(); // need for "this" usage
    this.DUMMY_USERS = [
      { id: "u1", name: "Max" },
      { id: "u2", name: "Manuel" },
      { id: "u3", name: "Julie" },
    ];
    this.state = {
      // starting values will be updated
      filteredUsers: [],
      searchTerm: "",
    };
  }
  //% Run on startup only
  componentDidMount() {
    this.setState({ filteredUsers: this.DUMMY_USERS });
  }

  //% Run if the searchTerm changes
  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchTerm !== this.state.searchTerm) {
      this.setState({
        filteredUsers: this.DUMMY_USERS.filter((user) =>
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
      <div className={styles.finder}>
        <input type="search" onChange={this.searchChangeHandler.bind(this)} />
        <Users users={this.state.filteredUsers} />
      </div>
    );
  }
}

export default UserFinder;
