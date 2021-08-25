import React, { Component } from "react";
import User from "./User";

import classes from "./Users.module.css";

class Users extends Component {
  constructor() {
    super(); // need for "this" keyword usage
    this.state = { showUsers: true, hasError: false };
    //! ERROR 1: We create an error as soon as this component runs
    //! IRL, an error would occur due to a botched API call or something, but the outcome's the same regardless
    throw new Error("I crashed!");
  }
  //~ ----------------------------------------------
  toggleUsersHandler() {
    //! ERROR 2:
    //! We rig the toggle button handler to throw an error on purpose
    try {
      throw new Error("Shouldn't have pressed that, bucko");
    } catch (error) {
      this.setState({ hasError: true });
    }
  }
  //~ ----------------------------------------------
  render() {
    const usersList = (
      <ul>
        {this.props.users.map((user) => (
          <User key={user.id} name={user.name} />
        ))}
      </ul> // will be used in the return JSX section
    );
    if (this.state.hasError) {
      return <h2>A wild error has appeared inside an event handler!</h2>;
    }
    return (
      <div className={classes.users}>
        <button onClick={this.toggleUsersHandler.bind(this)}>
          #2: Throw a deliberate error 
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
