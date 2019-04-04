import React from "react";

import ThemeContext from "./ThemeProvider";
import Page from "./Page";
const ThemeProvider = ThemeContext.Provider;
export default class PageTheme extends React.Component {
  render() {
    return (
      <ThemeProvider value={{ mainColor: "green", textColor: "red" }}>
        <Page />
      </ThemeProvider>
    );
  }
}
