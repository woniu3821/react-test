import React from "react";

import Navigation from "./Navigation";

import Content from "./Content";

class RouterContent extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Navigation />
        <Content />
      </React.Fragment>
    );
  }
}

export default RouterContent;
