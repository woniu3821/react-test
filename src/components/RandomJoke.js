import React from "react";

import Joke from "./Joke";
export default class RandomJoke extends React.Component {
  state = {
    joke: null
  };
  render() {
    return <Joke value={this.state.joke} />;
  }
  componentDidMount() {
    fetch("//icanhazdadjoke.com/", {
      headers: { Accept: "application/json" }
    })
      .then(res => {
        return res.json();
      })
      .then(json => {
        this.setState({
          joke: json.joke
        });
      });
  }
}
