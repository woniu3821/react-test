import React, { Fragment } from "react";

const Auth = React.memo(props => {
  let userName = "cuitao";
  const allProps = { userName, ...props };
  if (userName) {
    return <Fragment>{props.login(allProps)}</Fragment>;
  } else {
    return <Fragment>{props.nologin(allProps)}</Fragment>;
  }
});
/* const Auth = props => {
  let userName = "cuitao";
  const allProps = { userName, ...props };
  if (userName) {
    return <Fragment>{props.login(allProps)}</Fragment>;
  } else {
    return <Fragment>{props.nologin(allProps)}</Fragment>;
  }
}; */
export default Auth;
