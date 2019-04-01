import React from "react";
import smileFace from "./yaoming.jpg";

/* export default class Joke extends React.PureComponent {
  render() {
    return (
      <div>
        <img src={smileFace} alt="姚明" />
        {this.props.value || "loading..."}
      </div>
    );
  }
} */

const Joke = React.memo(({ value }) => (
  <div>
    <img src={smileFace} alt="姚明" />
    {value || "loading..."}
  </div>
));

export default Joke;
