import React, { Fragment } from "react";

const Login = props => {
  const userName = "cuitao";

  if (userName) {
    const allProps = { userName, ...props };
    return <Fragment>{props.children(allProps)}</Fragment>;
  } else {
    return null;
  }
};

export default Login;
