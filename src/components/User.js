import React from "react";
import styles from "./User.module.css";

class User extends React.Component {
  //% Run if an instance of this component gets removed from the DOM
  componentWillUnmount() {
    console.log("removed a user!");
  }
  render() {
    return <li className={styles.user}>{this.props.name}</li>;
  }
}

export default User;
