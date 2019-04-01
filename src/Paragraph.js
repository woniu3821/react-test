import React from "react";
import ThemeContext from "./ThemeProvider";
/* const Paragraph = (props, context) => {
  const { textColor } = context.theme;
  return <p style={{ color: textColor }}>{props.children}</p>;
};

Paragraph.contextTypes = {
  theme: PropTypes.object
}; */
const ThemeConsumer = ThemeContext.Consumer;
const Paragraph = (props, context) => {
  return (
    <ThemeConsumer>
      {theme => {
        return <p style={{ color: theme.textColor }}>{props.children}</p>;
      }}
    </ThemeConsumer>
  );
};

export default Paragraph;
