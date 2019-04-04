/*
 * @Author: taocui
 * @Date: 2019-03-18 13:37:08
 * @Last Modified by: taocui
 * @Last Modified time: 2019-03-18 16:45:58
 */
import React from "react";

import MajorClock from "./MajorClock";

const SplitTimes = ({ value = [] }) => {
  return value.map((v, k) => <MajorClock key={k} milliseconds={v} />);
};
export default SplitTimes;
