import React from "react";
// 老式实现方法
/* class Subject extends React.Component {
  render() {
    const { mainColor } = this.context.theme;
    return <h1 style={{ color: mainColor }}>{this.props.children}</h1>;
  }
}

Subject.contextTypes = {
  theme: PropTypes.object
}; */

//新式实现方法
import ThemeContext from "./ThemeProvider";
const ThemeConsumer = ThemeContext.Consumer;
class Subject extends React.Component {
  render() {
    return (
      <ThemeConsumer>
        {theme => {
          return (
            <h1 style={{ color: theme.mainColor }}>{this.props.children}</h1>
          );
        }}
      </ThemeConsumer>
    );
  }
}

export default Subject;
