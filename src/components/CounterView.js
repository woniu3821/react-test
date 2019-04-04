import React from "react";
import { connect } from "react-redux";
const mapStateToProps = state => {
  return {
    count: state.count
  };
};
const mapDispatchToProps = dispatch => ({
  onIncrement: () => dispatch({ type: "INCREMNET" })
});

const CounterView = ({ count, onIncrement }) => {
  return (
    <div>
      <div>{count}</div>
      <button onClick={onIncrement} />
    </div>
  );
};

const Counter = connect(
  mapStateToProps,
  mapDispatchToProps
)(CounterView);

export default Counter;
