import React, { Component } from "react";

export default class ErrorBoundary extends Component {
  constructor() {
    super();
    this.state = { hasError: false }; // starts as false
  }
  componentDidCatch(errorObj) {
    //% When/if an error's caught, change this state KVP to true
    this.setState({ hasError: true });
  }
  render() {
    const { hasError } = this.state;
    //% Render specific JSX if an error is caught
    if (hasError) {
      console.log("it's workingggg");
      return (
        <h1 style={{ color: "white" }}>
          Something went wrong, please try again!
        </h1>
      );
    }
    //% If no error is present, leave everything as is
    return this.props.children;
  }
}
