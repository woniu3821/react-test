import React, { Fragment } from "react";

const RenderAll = props => {
  return <Fragment>{props.children(props)}</Fragment>;
};

export default RenderAll;
