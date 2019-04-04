import React from "react";

const TabItem = props => {
  const { active, onClick } = props;
  const tabStyle = {
    maxWidth: "150px",
    color: active ? "red" : "green",
    border: active ? "1px solid red" : "0px",
    margin: "0 auto",
    cursor: "pointer",
    userSelect: "none"
  };

  return (
    <h1 style={tabStyle} onClick={onClick}>
      {props.children}
    </h1>
  );
};

export default TabItem;
