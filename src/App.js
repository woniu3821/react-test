import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
import StopWatch from "./StopWatch";
import RandomJoke from "./RandomJoke";
import Hello from "./Hello";
import LoginHome from "./LoginHome";
import PageTheme from "./PageTheme";
class App extends Component {
  render() {
    return (
      <div className="App">
        <StopWatch />
        <RandomJoke />
        <Hello />
        <LoginHome />
        <PageTheme />
      </div>
    );
  }
}
export default App;
