import React, { Component } from "react";

export default class ErrorBoundary extends Component {
  constructor() {
    super();
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(errorObj){
    console.error(errorObj)
    //% Update the state as soon as an error registers
    return { hasError: true };
  }
  render() {
    //% Render specific JSX if an error is caught
    if (this.state.hasError) {
      return <p>That ain't no hero</p>;
    }
    //% If no error is present, let all components render normally
    return this.props.children;
  }
}