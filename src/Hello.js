import React from "react";
import RenderAll from "./RenderAll";

export default class Hello extends React.Component {
  render() {
    return <RenderAll>{() => <h1>hello world!</h1>}</RenderAll>;
  }
}
