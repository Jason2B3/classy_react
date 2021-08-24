import React, { Component } from "react";
import User from "./User";

import classes from "./Users.module.css";

class Users extends Component {
  constructor() {
    super(); // need for "this" keyword usage
    this.state = { showUsers: true };
    this.DUMMY_USERS = [
      { id: "u1", name: "Max" },
      { id: "u2", name: "Manuel" },
      { id: "u3", name: "Julie" },
    ];
  }
  //~ ----------------------------------------------
  toggleUsersHandler() {
    // Toggle the value of showUsers
    // This is an event handler, so we'll need to rebind "this" later on
    this.setState(() => {
      return { showUsers: !this.state.showUsers };
    });
  }
  //~ ----------------------------------------------
  render() {
    const usersList = (
      <ul>
        {this.DUMMY_USERS.map((user) => (
          <User key={user.id} name={user.name} />
        ))}
      </ul> // will be used in the return JSX section
    );
    return (
      <div className={classes.users}>
        <button onClick={this.toggleUsersHandler.bind(this)}>
          {this.state.showUsers ? "Hide" : "Show"} Users
        </button>
        {this.state.showUsers && usersList}
      </div>
    );
  }
}
export default Users;

/*
const Users = () => {
  const [showUsers, setShowUsers] = useState(true);

  const toggleUsersHandler = () => {
    setShowUsers((curState) => !curState); // toggles T/F
  };

  const usersList = (
    <ul>
      {DUMMY_USERS.map((user) => (
        <User key={user.id} name={user.name} />
      ))}
    </ul> // will be used in the return JSX section
  );

  return (
    <div className={classes.users}>
      <button onClick={toggleUsersHandler}>
        {showUsers ? "Hide" : "Show"} Users
      </button>
      {showUsers && usersList}
    </div>
  );
};

export default Users;

*/
