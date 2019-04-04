/*
 * @Author: taocui
 * @Date: 2019-03-18 13:43:08
 * @Last Modified by: taocui
 * @Last Modified time: 2019-03-25 13:48:28
 */

import React, { Fragment } from "react";

import MajorClock from "./MajorClock";
import ControlButtons from "./ControlButtons";
import SplitTimes from "./SplitTimes";

class StopWatch extends React.Component {
  state = {
    isStarted: false,
    startTime: null,
    currentTime: null,
    splits: []
  };

  onStart = () => {
    this.setState({
      isStarted: true,
      startTime: new Date(),
      currentTime: new Date()
    });

    this.intervalHandle = setInterval(() => {
      this.setState({ currentTime: new Date() });
    }, 1000 / 60);
  };
  onSplit = () => {
    this.setState({
      splits: [
        ...this.state.splits,
        this.state.currentTime - this.state.startTime
      ]
    });
  };
  onPause = () => {
    clearInterval(this.intervalHandle);
    this.setState({
      isStarted: false
    });
  };

  onReset = () => {
    this.setState({
      startTime: null,
      currentTime: null,
      splits: []
    });
  };
  render() {
    return (
      <Fragment>
        <style jsx>{`
          h1 {
            color: green;
          }
        `}</style>
        <h1>秒表</h1>
        <MajorClock
          milliseconds={this.state.currentTime}
          activated={this.state.isStarted}
        />
        <ControlButtons
          onReset={this.onReset}
          onPause={this.onPause}
          onStart={this.onStart}
          onSplit={this.onSplit}
          activated={this.state.isStarted}
        />
        <SplitTimes value={this.state.splits} />
      </Fragment>
    );
  }
}
export default StopWatch;
