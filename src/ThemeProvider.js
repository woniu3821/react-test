import React from "react";
//老式实现方法
/* class ThemeProvider extends React.Component {
  //   定义Context需要实现的方法;
  getChildContext() {
    return {
      theme: this.props.value
    };
  }
  render() {
    <React.Fragment>{this.props.children}</React.Fragment>;
  }
}
// 声明Context类型
ThemeProvider.childContextTypes = {
  theme: PropTypes.object
}; */

// 新式实现方法
const ThemeContext = React.createContext();

export default ThemeContext;
