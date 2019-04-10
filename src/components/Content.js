import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Hello";
import About from "./About";
import Product from "./Product";
const isLogin = true;
const Content = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Home} />
      {isLogin && <Route exact path="/product" component={Product} />}
      <Route path="/about" component={About} />
    </Switch>
  </main>
);

export default Content;
