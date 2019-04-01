/*
 * @Author: taocui
 * @Date: 2019-03-18 13:33:58
 * @Last Modified by: taocui
 * @Last Modified time: 2019-03-21 14:19:28
 */

import React from "react";

import padStart from "lodash/padStart";
const ms2Time = milliseconds => {
  let time = milliseconds;
  const ms = milliseconds % 1000;
  time = (milliseconds - ms) / 1000;
  const seconds = time % 60;
  time = (time - seconds) / 60;
  const minutes = time % 60;
  const hours = (time - minutes) / 60;
  const result =
    padStart(hours, 2, "0") +
    ":" +
    padStart(minutes, 2, "0") +
    ":" +
    padStart(seconds, 2, "0") +
    "." +
    padStart(ms, 3, "0");
  return result;
};

const MajorClock = ({ milliseconds = 0, activated = false }) => {
  return (
    <React.Fragment>
      <style jsx>{`
        h1 {
          font-family: monospace;
          color: ${activated ? "red" : "black"};
        }
      `}</style>

      <h1>{ms2Time(milliseconds)}</h1>
    </React.Fragment>
  );
};

export default MajorClock;
