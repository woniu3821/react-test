import React from "react";

import Tabs from "./Tabs";
import TabItem from "./TabItem";

class TabsExp extends React.Component {
  render() {
    return (
      <Tabs>
        <TabItem>One</TabItem>
        <TabItem>Two</TabItem>
        <TabItem>Three</TabItem>
      </Tabs>
    );
  }
}

export default TabsExp;
